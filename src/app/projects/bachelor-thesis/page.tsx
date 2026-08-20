'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/components/LanguageToggle'

const TECH_STACK = ['MicroPython', 'ESP32', 'EAP-TLS', 'ESP-IDF 5.4.2', 'easyroam'] as const

const CONTENT = {
  en: {
    back: 'Back to Work',
    title: 'Bachelor Thesis',
    subtitle: 'Extending MicroPython firmware to connect ESP32 devices to eduroam using certificate-based EAP-TLS authentication.',
    status: 'In Progress',
    overview: 'Overview',
    overviewText1: 'The project closes a practical gap between an existing MicroPython application and the enterprise Wi-Fi authentication required by eduroam. Instead of moving the complete application to C, the familiar Python environment remains available on the ESP32.',
    overviewText2: 'I added a native enterprise module to the ESP32 port of MicroPython. It connects Python code to the WPA2-Enterprise and EAP-TLS functions provided by ESP-IDF, loads the required certificates from the device filesystem and reports the connection result back to the application.',
    details: 'Technical Details',
    detailItems: [
      ['Firmware extension', 'Native MicroPython C module with connect, disconnect and connection-status functions.'],
      ['Authentication', 'WPA2-Enterprise with EAP-TLS and an easyroam client certificate.'],
      ['Build environment', 'MicroPython for ESP32_GENERIC, compiled against ESP-IDF 5.4.2.'],
      ['Connection validation', 'Association, DHCP address, DNS resolution and an HTTP 200 response were checked.'],
    ],
    workflow: 'Technical Implementation',
    workflowIntro: 'The implementation is divided into three clearly separated layers:',
    workflowItems: [
      ['Certificate preparation', 'The easyroam PKCS#12 profile is converted locally with OpenSSL into a CA certificate, client certificate and private key. Only the required files are transferred to the ESP32.'],
      ['Firmware layer', 'The native enterprise module reads the certificate files and configures the ESP-IDF EAP client. It starts the station interface and waits for a valid DHCP address.'],
      ['Application layer', 'MicroPython supplies the SSID, identity and file paths through a small API. The existing Python application does not need to be rewritten as an ESP-IDF application.'],
    ],
    api: 'Python API',
    apiIntro: 'The native implementation is exposed as a compact MicroPython interface:',
    evaluation: 'Evaluation on Campus',
    evaluationText1: 'I first verified the certificate and EAP-TLS configuration in a minimal ESP-IDF reference application. The test log documented a successful eduroam association, DHCP configuration and HTTP status 200 at HTW Berlin.',
    evaluationText2: 'After transferring the working configuration into MicroPython, the complete workflow was tested on the ESP32 with the certificate files and Python script stored directly on the device. The final full test was successfully repeated during the campus tests on 21 July 2026.',
    outcomes: 'Key Outcomes',
    outcomeItems: [
      ['Python retained', 'The existing application remains in MicroPython.'],
      ['Certificate based', 'Authentication uses EAP-TLS without a Wi-Fi password.'],
      ['Practically verified', 'The implementation was validated in the real campus network.'],
    ],
    progressTitle: 'Current thesis status',
    progressText: 'The firmware integration and practical campus validation are complete. The written thesis, evaluation and final documentation are currently being completed.',
    heroAlt: 'ESP32 development board used for the firmware implementation',
  },
  de: {
    back: 'Zurück zur Arbeit',
    title: 'Bachelorarbeit',
    subtitle: 'Erweiterung der MicroPython-Firmware, um ESP32-Geräte per zertifikatsbasierter EAP-TLS-Authentifizierung mit eduroam zu verbinden.',
    status: 'In Arbeit',
    overview: 'Überblick',
    overviewText1: 'Das Projekt schließt eine praktische Lücke zwischen einer bestehenden MicroPython-Anwendung und der für eduroam erforderlichen Enterprise-WLAN-Authentifizierung. Statt die gesamte Anwendung nach C zu portieren, bleibt die vertraute Python-Umgebung auf dem ESP32 erhalten.',
    overviewText2: 'Dafür habe ich den ESP32-Port von MicroPython um ein natives enterprise-Modul erweitert. Es verbindet Python-Code mit den WPA2-Enterprise- und EAP-TLS-Funktionen des ESP-IDF, liest die benötigten Zertifikate aus dem Dateisystem des Geräts und gibt das Verbindungsergebnis an die Anwendung zurück.',
    details: 'Technische Details',
    detailItems: [
      ['Firmware-Erweiterung', 'Natives MicroPython-C-Modul mit Funktionen für Verbindungsaufbau, Trennung und Statusabfrage.'],
      ['Authentifizierung', 'WPA2-Enterprise mit EAP-TLS und einem easyroam-Clientzertifikat.'],
      ['Build-Umgebung', 'MicroPython für ESP32_GENERIC, kompiliert gegen ESP-IDF 5.4.2.'],
      ['Verbindungsprüfung', 'Assoziierung, DHCP-Adresse, DNS-Auflösung und eine HTTP-200-Antwort wurden geprüft.'],
    ],
    workflow: 'Technische Umsetzung',
    workflowIntro: 'Die Implementierung ist in drei klar getrennte Ebenen gegliedert:',
    workflowItems: [
      ['Zertifikatsvorbereitung', 'Das easyroam-PKCS#12-Profil wird lokal mit OpenSSL in CA-Zertifikat, Clientzertifikat und privaten Schlüssel zerlegt. Nur die benötigten Dateien werden auf den ESP32 übertragen.'],
      ['Firmware-Ebene', 'Das native enterprise-Modul liest die Zertifikatsdateien und konfiguriert den EAP-Client des ESP-IDF. Es startet das Station-Interface und wartet auf eine gültige DHCP-Adresse.'],
      ['Anwendungsebene', 'MicroPython übergibt SSID, Identität und Dateipfade über eine kleine API. Die bestehende Python-Anwendung muss nicht als ESP-IDF-Anwendung neu geschrieben werden.'],
    ],
    api: 'Python-API',
    apiIntro: 'Die native Implementierung steht in MicroPython über eine kompakte Schnittstelle bereit:',
    evaluation: 'Evaluation im Campusnetz',
    evaluationText1: 'Zunächst habe ich Zertifikate und EAP-TLS-Konfiguration in einer minimalen ESP-IDF-Referenzanwendung verifiziert. Das Testprotokoll dokumentiert eine erfolgreiche eduroam-Verbindung, DHCP-Konfiguration und den HTTP-Status 200 an der HTW Berlin.',
    evaluationText2: 'Danach wurde die funktionierende Konfiguration in MicroPython übertragen und der komplette Ablauf mit Zertifikatsdateien und Python-Skript direkt auf dem ESP32 getestet. Der finale Gesamttest wurde während der Campus-Tests am 21. Juli 2026 erfolgreich wiederholt.',
    outcomes: 'Zentrale Ergebnisse',
    outcomeItems: [
      ['Python bleibt erhalten', 'Die bestehende Anwendung verbleibt in MicroPython.'],
      ['Zertifikatsbasiert', 'Die Authentifizierung erfolgt per EAP-TLS ohne WLAN-Passwort.'],
      ['Praktisch verifiziert', 'Die Implementierung wurde im realen Campusnetz validiert.'],
    ],
    progressTitle: 'Aktueller Stand der Bachelorarbeit',
    progressText: 'Firmware-Integration und praktische Campus-Validierung sind abgeschlossen. Die schriftliche Ausarbeitung, Evaluation und finale Dokumentation werden derzeit fertiggestellt.',
    heroAlt: 'ESP32-Entwicklungsboard für die Firmware-Implementierung',
  },
} as const

export default function BachelorThesis() {
  const { language } = useLanguage()
  const text = CONTENT[language]
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : ''

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 dark:from-forest-800 dark:to-forest-950">
      <div className="container mx-auto px-6">
        <main className="mx-auto max-w-4xl">
          <Link href="/work" className="mb-8 inline-flex items-center text-brown-600 transition-colors hover:text-brown-500 dark:text-brown-400 dark:hover:text-brown-300">
            <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {text.back}
          </Link>

          <header className="mb-12">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-6xl dark:text-white">{text.title}</h1>
            <p className="mb-8 max-w-3xl text-xl leading-relaxed text-gray-700 dark:text-gray-200">{text.subtitle}</p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-orange-700 px-3 py-1 text-sm font-medium text-orange-100">{text.status}</span>
              {TECH_STACK.map((tech) => (
                <span key={tech} className="rounded-full border border-brown-400 bg-brown-100 px-3 py-1 text-sm text-brown-800 dark:border-brown-600 dark:bg-brown-900 dark:text-brown-200">{tech}</span>
              ))}
            </div>
          </header>

          <figure className="mb-14">
            <Image src={`${basePath}/images/bachelor-thesis/esp32-hardware.jpg`} alt={text.heroAlt} width={640} height={480} priority className="h-auto w-full rounded-lg border-2 border-brown-500 object-cover" />
          </figure>

          <section className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">{text.overview}</h2>
              <div className="space-y-4 leading-relaxed text-gray-700 dark:text-gray-200">
                <p>{text.overviewText1}</p>
                <p>{text.overviewText2}</p>
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">{text.details}</h2>
              <div className="space-y-4">
                {text.detailItems.map(([title, description]) => (
                  <article key={title} className="rounded-lg border border-gray-300 bg-gray-100 p-4 dark:border-brown-700 dark:bg-forest-900">
                    <h3 className="mb-2 font-semibold text-brown-700 dark:text-brown-400">{title}</h3>
                    <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-200">{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-16 border-y border-gray-300 py-12 dark:border-brown-800">
            <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">{text.workflow}</h2>
            <p className="mb-8 text-gray-700 dark:text-gray-200">{text.workflowIntro}</p>
            <dl className="divide-y divide-gray-300 border-y border-gray-300 dark:divide-brown-800 dark:border-brown-800">
              {text.workflowItems.map(([title, description]) => (
                <div key={title} className="grid gap-2 py-5 md:grid-cols-[11rem_1fr] md:gap-6">
                  <dt className="font-semibold text-brown-700 dark:text-brown-400">{title}</dt>
                  <dd className="leading-relaxed text-gray-700 dark:text-gray-300">{description}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-14">
            <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">{text.api}</h2>
            <p className="mb-5 text-gray-700 dark:text-gray-200">{text.apiIntro}</p>
            <pre className="overflow-x-auto rounded-lg border border-brown-700 bg-forest-950 p-5 text-sm leading-6 text-gray-100"><code>{`import enterprise

enterprise.connect(
    ssid="eduroam",
    identity="<easyroam-identity>",
    ca="/certs/ca.pem",
    cert="/certs/client.crt",
    key="/certs/client.key",
    timeout_ms=30000,
)

print(enterprise.isconnected())`}</code></pre>
          </section>

          <section className="mt-16">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">{text.evaluation}</h2>
            <div className="space-y-4 leading-relaxed text-gray-700 dark:text-gray-200">
              <p>{text.evaluationText1}</p>
              <p>{text.evaluationText2}</p>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">{text.outcomes}</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {text.outcomeItems.map(([title, description]) => (
                <article key={title} className="rounded-lg border border-gray-300 bg-gray-100 p-5 dark:border-brown-700 dark:bg-forest-900">
                  <h3 className="mb-2 font-semibold text-brown-700 dark:text-brown-400">{title}</h3>
                  <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-200">{description}</p>
                </article>
              ))}
            </div>
          </section>

          <aside className="mt-12 rounded-lg border border-blue-300 bg-blue-100 p-6 dark:border-blue-700/50 dark:bg-blue-900/20">
            <h2 className="mb-2 text-lg font-semibold text-blue-900 dark:text-blue-200">{text.progressTitle}</h2>
            <p className="leading-relaxed text-blue-800 dark:text-blue-300">{text.progressText}</p>
          </aside>
        </main>
      </div>
    </div>
  )
}
