import { useState } from 'react'

const PRIVACY_TEXT = `Privatlivspolitik for DjurhuusData\n\nVirksomhed\nDjurhuusData v/ Arne Djurhuus\nEnkeltmandsvirksomhed, \nCVR: 45545075\nAdresse: Frederiksberggade 22, st. sal., 6640 Lunderskov\nTelefon: 21 36 00 35\nE-mail: arne@djurhuusdata.dk \nWebsite:  www.djurhuusdata.dk\n\n1. Dataansvarlig\nArne Djurhuus er ansvarlig for behandlingen af person- og kundedata via www.djurhuusdata.dk.\n\n2. Indsamlede oplysninger\nVi indsamler:\nNavn og e-mail gennem kontaktformular.\nTekniske data (fx IP-adresse, browser, tidspunkter) via cookies og serverlogfiler.\nKontaktoplysninger fra e-mailkorrespondance og telefonhenvendelser.\nFrivilligt oplyste data, fx ved brug af nyhedsbrev eller projektspecifik information.\n\n3. Formål\nData bruges til:\nAt besvare henvendelser og fortsætte professionel dialog.\nAt analysere og forbedre brugeroplevelsen på hjemmesiden.\nAt sende nyhedsbreve eller tilbud, forudsat at du har givet samtykke.\n\n4. Retsgrundlag\nBehandling baseres på:\nSamtykke (GDPR art. 6, stk. 1, litra a)\nLegitim interesse i webanalyse (GDPR art. 6, stk. 1, litra f)\nKontraktlige forpligtelser for kunder (GDPR art. 6, stk. 1, litra b)\n\n5. Opbevaring og sletning\nOplysninger opbevares kun så længe, det er nødvendigt. Du kan til enhver tid anmode om sletning — medmindre anden lovgivning forhindrer det.\n\n6. Videregivelse\nOplysninger deles kun, når det er nødvendigt for driften:\nHosting hos Vercel\nE-mail hos Simply.com\nBackend/services evt. via Supabase\nVi garanterer, at tredjepartsleverandører overholder gældende databeskyttelseslovgivning.\n\n7. Cookies\nVi bruger cookies til at forbedre brugeroplevelsen, markedsføring og analyse:\nTekniske cookies (nødvendige for drift)\nAnalytiske cookies (trafik, adfærd)\nMarketingcookies (hvis relevant med samtykke)\nDu kan til enhver tid ændre cookie-indstillinger via banneret eller browserens privatindstillinger.\n\n8. Dine rettigheder\nDu har altid ret til at:\nFå indsigt i hvilke data vi har om dig\nFå korrigeret fejlagtige oplysninger\nFå slettet dine data (med forbehold for lovpligtig opbevaring)\nTrække samtykke tilbage\nGøre indsigelse mod behandling\nKontakt os på: arne@djurhuusdata.dk\n\n9. Klageadgang\nHvis du mener, at din behandling er i strid med GDPR, kan du klage til:\nDatatilsynet Carl Jacobsens Vej 35\n2500 Valby\nHjemmeside: www.datatilsynet.dk\n\n10. Ændringer i politikken\nPrivatlivspolitikken kan opdateres. Ændringer vil blive offentliggjort her med dato.\n\nIkrafttrædelse: 22/07/2025`

const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false)
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Kontaktinformation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontaktinformation</h3>
            <div className="space-y-3">
              <p className="text-sm sm:text-base">
                <span className="font-medium">Navn:</span> Arne Djurhuus
              </p>
              <p className="text-sm sm:text-base">
                <span className="font-medium">Email:</span>{' '}
                <a
                  href="mailto:arne@djurhuusdata.dk"
                  className="hover:text-blue-300 transition-colors duration-200 break-all"
                  aria-label="Send email til Arne Djurhuus"
                >
                  arne@djurhuusdata.dk
                </a>
              </p>
              <p className="text-sm sm:text-base">
                <span className="font-medium">Telefon:</span>{' '}
                <a
                  href="tel:+4521360035"
                  className="hover:text-blue-300 transition-colors duration-200"
                  aria-label="Ring til Arne Djurhuus"
                >
                  +45 21 36 00 35
                </a>
              </p>
            </div>
          </div>          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li>Webudvikling</li>
              <li>Softwareudvikling</li>
              <li>Database design</li>
              <li>IT konsulentservice</li>
              <li>Systemintegration</li>
            </ul>
          </div>

          {/* Om virksomheden */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">DjurhuusData</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Datamatiker studerende under udvikling.
            </p>
            <div className="mt-4 space-y-1">
              <p className="text-xs sm:text-sm text-gray-400">CVR: 45545075</p>
              <p className="text-xs sm:text-sm text-gray-400">København, Danmark</p>
            </div>
          </div>
        </div>        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            &copy; {currentYear} DjurhuusData. Alle rettigheder forbeholdes.
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
            <button
              type="button"
              onClick={() => setShowPrivacy(true)}
              className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200 text-center sm:text-left focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              aria-label="Læs vores privatlivspolitik"
            >
              Privatlivspolitik
            </button>
            <a
              href="#handelsbetingelser"
              className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200 text-center sm:text-left"
              aria-label="Læs vores handelsbetingelser"
            >              Handelsbetingelser
            </a>
          </div>
        </div>
      </div>
      {showPrivacy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
          onClick={() => setShowPrivacy(false)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="bg-white rounded-lg shadow-2xl max-w-2xl w-full mx-4 p-6 overflow-y-auto max-h-[90vh] relative"
            onClick={e => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-900 text-center">Privatlivspolitik for DjurhuusData</h2>
            <div className="text-gray-800 text-sm md:text-base whitespace-pre-line leading-relaxed font-sans">
              {PRIVACY_TEXT}
            </div>
            <button
              type="button"
              onClick={() => setShowPrivacy(false)}
              className="absolute top-4 right-4 text-blue-900 hover:text-blue-700 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              aria-label="Luk privatlivspolitik"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </footer>
  )
}

export default Footer
