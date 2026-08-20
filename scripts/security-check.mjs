import { readFile, readdir } from 'node:fs/promises'
import { extname, join, relative } from 'node:path'

const exportDirectory = new URL('../out/', import.meta.url)
const textExtensions = new Set(['.css', '.html', '.js', '.json', '.svg', '.txt', '.xml'])
const forbiddenFiles = new Set([
  'docs/gps-spoofing-tool/documentation.pdf',
  'docs/gps-spoofing-tool/qr-code-station.png',
])
const forbiddenPatterns = [
  { label: 'local home directory', pattern: /\/home\/[a-z0-9._-]+\//i },
  { label: 'private key', pattern: /-----BEGIN [A-Z ]*PRIVATE KEY-----/ },
  { label: 'AWS access key', pattern: /AKIA[0-9A-Z]{16}/ },
  { label: 'GitHub token', pattern: /(?:gh[pousr]_|github_pat_)[A-Za-z0-9_]{20,}/ },
  { label: 'certificate profile', pattern: /TestProfile\.p12/i },
  { label: 'student identifier', pattern: /592190/ },
]

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const path = new URL(entry.name, directory)
    if (entry.isDirectory()) {
      files.push(...await collectFiles(new URL(`${entry.name}/`, directory)))
    } else {
      files.push(path)
    }
  }

  return files
}

const findings = []
const files = await collectFiles(exportDirectory)

for (const file of files) {
  const relativePath = relative(exportDirectory.pathname, file.pathname)

  if (forbiddenFiles.has(relativePath)) {
    findings.push(`${relativePath}: file must not be published`)
  }
  if (extname(relativePath) === '.map') {
    findings.push(`${relativePath}: source map must not be published`)
  }
  if (!textExtensions.has(extname(relativePath))) {
    continue
  }

  const content = await readFile(file, 'utf8')
  for (const { label, pattern } of forbiddenPatterns) {
    if (pattern.test(content)) {
      findings.push(`${relativePath}: contains ${label}`)
    }
  }
}

const indexHtml = await readFile(join(exportDirectory.pathname, 'index.html'), 'utf8')
if (!indexHtml.includes('Content-Security-Policy')) {
  findings.push('index.html: Content Security Policy is missing')
}
if (!indexHtml.includes('strict-origin-when-cross-origin')) {
  findings.push('index.html: referrer policy is missing')
}

if (findings.length > 0) {
  console.error('Security check failed:')
  for (const finding of findings) {
    console.error(`- ${finding}`)
  }
  process.exit(1)
}

console.log(`Security check passed: ${files.length} exported files inspected.`)
