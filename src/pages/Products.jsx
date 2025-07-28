import { Link } from 'react-router-dom'

const Products = () => {
  const physicalProducts = [
     {
      id: 1,
      name: "DD-PrivacyPEN",
      category: "Hardware",
      type: "physical",
      price: "Fra 149,45 kr",
      description: "USB med integreret TailsOS, din linux-baseret PC i baglommen.",
      features: [
        "Forhåndsinstalleret med TailsOS – The Amnesic Incognito Live System",
        "Efterlader ingen spor på værtsmaskinen",
        "Privacy first: Designet til anonymitet og sikkerhed",
        "Kør sikkert internet uden at efterlade spor",
        "Live-operativsystem – start direkte fra USB",
        "Beskyt dig mod overvågning og censur"
      ],
      technologies: ["Tails", "Encryption", "Debian Linux", "Tor-netværket"],
      deliveryTime: "2-3 hverdage",
      image: "server"
    }
//    {
//      id: 2,
//      name: "Hjemmeside Hosting Server",
//      category: "Hardware",
//      type: "physical",
//      price: "Fra 3.500 kr",
//      description: "Dedikeret server til hosting af hjemmesider med fuld administration og support. Perfekt til små og mellemstore virksomheder.",
//      features: [
//        "24/7 overvågning og support",
//        "Automatisk backup dagligt",
//        "SSL-certifikater inkluderet",
//        "99.9% uptime garanti",
//        "Fuld root adgang",
//        "Månedlig rapportering"
//      ],
//      technologies: ["Linux", "Apache/Nginx", "MySQL", "PHP"],
//      deliveryTime: "1-2 uger",
//      image: "server"
//    },
//    {
//      id: 3,
//      name: "Netværk Setup Pakke",
//      category: "Networking",
//      type: "physical",
//      price: "Fra 8.000 kr",
//      description: "Komplet netværksopsætning for små virksomheder inklusiv router, switch, firewall og WiFi access points.",
//      features: [
//        "Professionel router og firewall",
//        "Managed switch med VLAN support",
//        "Enterprise WiFi access points",
//        "Kabelføring og installation",
//        "Netværk dokumentation",
//        "3 måneders support inkluderet"
//      ],
//      technologies: ["Cisco", "Ubiquiti", "Cat6 Kabler", "PoE"],
//      deliveryTime: "2-3 uger",
//      image: "network"
//    }
  ]

  const softwareProducts = [
    {
      id: 1,
      name: "Webshop Løsning",
      category: "E-commerce",
      type: "software",
      price: "Fra 15.000 kr",
      description: "Komplet e-commerce platform med produktstyring, betalingsintegration og kundeservice. Inkluderer responsive design, SEO-optimering og analytics.",
      features: [
        "Responsive design til alle enheder",
        "Integreret betalingsløsning (Quickpay/Stripe)",
        "Produktkatalog med kategorier",
        "Ordrestyring og kundeservice",
        "SEO-optimering og analytics",
        "Admin panel til produktstyring"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      deliveryTime: "4-6 uger",
      image: "webshop"
    },
//    {
//      id: 2,
//      name: "CRM System",
//      category: "Business Solutions",
//      price: "Fra 25.000 kr",
//      description: "Skræddersyet Customer Relationship Management system til styring af kunder, salg og markedsføring. Perfekt til små og mellemstore virksomheder.",
//      features: [
//        "Kundestyring og kontaktdatabase",
//        "Salgspipeline og forecasting",
//        "Email marketing integration",
//        "Rapporter og analytics",
//        "Opgavestyring og kalender",
//        "Multi-user support med roller"
//      ],
//      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
//      deliveryTime: "6-8 uger",
//      image: "crm"
//    },
    {
      id: 3,
      name: "Portfolio Website",
      category: "Web Development",
      type: "software",
      price: "Fra 8.000 kr",
      description: "Professionel portfolio eller virksomhedshjemmeside med moderne design, optimeret for søgemaskiner og alle enheder.",
      features: [
        "Responsive og mobilvenligt design",
        "SEO-optimering for Google",
        "Kontaktformular med integration",
        "CMS til indholdstyring",
        "Performance optimering",
        "SSL-certifikat og sikkerhed"
      ],
      technologies: ["React", "Tailwind CSS", "Headless CMS"],
      deliveryTime: "2-3 uger",
      image: "portfolio"
    },
    {
      id: 5,
      name: "API Integration",
      category: "Backend Services",
      type: "software",
      price: "Fra 10.000 kr",
      description: "Professionel API udvikling og integration til forbindelse af forskellige systemer og services. Sikker og skalerbar løsning.",
      features: [
        "RESTful API udvikling",
        "Database design og optimering",
        "Sikkerhed og authentication",
        "Dokumentation og testing",
        "Rate limiting og caching",
        "Monitoring og logging"
      ],
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      deliveryTime: "3-5 uger",
      image: "api"
    }
  ]

  // Helper function to render product cards
  const renderProductCard = (product) => (
    <article 
      key={product.id} 
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200"
    >
      {/* Product Image Placeholder */}
      <div className={`h-48 flex items-center justify-center ${
        product.type === 'physical' 
          ? 'bg-gradient-to-br from-green-100 to-green-200' 
          : 'bg-gradient-to-br from-blue-100 to-blue-200'
      }`}>
        {product.name === "DD-PrivacyPEN" ? (
          <img 
            src="/tailsOS-usb.jpg" 
            alt="DD-PrivacyPEN USB med TailsOS"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className={`text-center ${
            product.type === 'physical' ? 'text-green-700' : 'text-blue-700'
          }`}>
            <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              {product.type === 'physical' ? (
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
              )}
            </svg>
            <p className="text-sm font-medium">{product.name}</p>
          </div>
        )}
      </div>
      
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              {product.name}
            </h3>
            <span className={`text-sm font-medium px-2 py-1 rounded ${
              product.type === 'physical' 
                ? 'text-green-600 bg-green-50' 
                : 'text-blue-600 bg-blue-50'
            }`}>
              {product.category}
            </span>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-green-600">{product.price}</p>
            <p className="text-xs text-gray-500">{product.deliveryTime}</p>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 mb-4 leading-relaxed text-sm">
          {product.description}
        </p>
        
        {/* Features */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Inkluderet:</h4>
          <ul className="text-xs text-gray-600 space-y-1">
            {product.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
            {product.features.length > 3 && (
              <li className={`text-xs ${
                product.type === 'physical' ? 'text-green-600' : 'text-blue-600'
              }`}>
                + {product.features.length - 3} mere...
              </li>
            )}
          </ul>
        </div>
        
        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {product.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* CTA Button */}
        <button 
          className={`w-full font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 ${
            product.type === 'physical'
              ? 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500'
              : 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500'
          }`}
          aria-label={`Få tilbud på ${product.name}`}
        >
          Få tilbud
        </button>
      </div>
    </article>
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Mine <span className="text-blue-300">Produkter</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Professionelle IT-løsninger skræddersyet til dit behov og budget
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Physical Products Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Fysiske Produkter
                </h2>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Hardware løsninger og fysisk udstyr til din virksomhed
              </p>
            </div>

            {/* Physical Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {physicalProducts.map((product) => renderProductCard(product))}
            </div>
          </div>

          {/* Separation Line */}
          <div className="relative mb-20">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-6 py-2 text-gray-500 text-sm font-medium rounded-full border border-gray-300">
                Software Løsninger
              </span>
            </div>
          </div>

          {/* Software Products Section */}
          <div className="mb-16">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                </svg>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Software Produkter
                </h2>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Skræddersyede software løsninger til digitalisering af din forretning
              </p>
            </div>

            {/* Software Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {softwareProducts.map((product) => renderProductCard(product))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center mt-16 bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ikke sikker på hvilken løsning du har brug for?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Jeg hjælper gerne med at finde den perfekte løsning til dit projekt. 
              Kontakt mig for en uforpligtende snak om dine behov.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/kontakt"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Kontakt mig
              </Link>
              <a
                href="tel:+4521360035"
                className="bg-transparent border-2 border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 font-bold py-3 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Ring nu: +45 21 36 00 35
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
