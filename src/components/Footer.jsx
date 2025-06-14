const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kontaktinformation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontaktinformation</h3>
            <div className="space-y-2">
              <p>
                <span className="font-medium">Navn:</span> Arne Djurhuus
              </p>
              <p>
                <span className="font-medium">Email:</span>{' '}
                <a
                  href="mailto:arne@djurhuusdata.dk"
                  className="hover:text-blue-300 transition-colors duration-200"
                  aria-label="Send email til Arne Djurhuus"
                >
                  arne@djurhuusdata.dk
                </a>
              </p>
              <p>
                <span className="font-medium">Telefon:</span>{' '}
                <a
                  href="tel:+4512345678"
                  className="hover:text-blue-300 transition-colors duration-200"
                  aria-label="Ring til Arne Djurhuus"
                >
                  +45 12 34 56 78
                </a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>Webudvikling</li>
              <li>Softwareudvikling</li>
              <li>Database design</li>
              <li>IT konsulentservice</li>
              <li>Systemintegration</li>
            </ul>
          </div>

          {/* Om virksomheden */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Djurhuus Data</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professionelle IT-løsninger med fokus på kvalitet og kundetilfredshed. 
              Vi leverer skræddersyede løsninger, der passer til dine behov.
            </p>
            <div className="mt-4">
              <p className="text-sm text-gray-400">CVR: 12345678</p>
              <p className="text-sm text-gray-400">Aalborg, Danmark</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Djurhuus Data. Alle rettigheder forbeholdes.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a
              href="#privatlivspolitik"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              aria-label="Læs vores privatlivspolitik"
            >
              Privatlivspolitik
            </a>
            <a
              href="#handelsbetingelser"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              aria-label="Læs vores handelsbetingelser"
            >
              Handelsbetingelser
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
