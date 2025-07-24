import { Link } from 'react-router-dom'

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Webshop Løsning",
      category: "E-commerce",
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
    {
      id: 2,
      name: "CRM System",
      category: "Business Solutions",
      price: "Fra 25.000 kr",
      description: "Skræddersyet Customer Relationship Management system til styring af kunder, salg og markedsføring. Perfekt til små og mellemstore virksomheder.",
      features: [
        "Kundestyring og kontaktdatabase",
        "Salgspipeline og forecasting",
        "Email marketing integration",
        "Rapporter og analytics",
        "Opgavestyring og kalender",
        "Multi-user support med roller"
      ],
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      deliveryTime: "6-8 uger",
      image: "crm"
    },
    {
      id: 3,
      name: "Portfolio Website",
      category: "Web Development",
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
      id: 4,
      name: "Data Dashboard",
      category: "Analytics",
      price: "Fra 20.000 kr",
      description: "Interaktivt dashboard til visualisering af forretningsdata med real-time opdateringer og avancerede analyseværktøjer.",
      features: [
        "Real-time data visualization",
        "Customizable charts og graphs",
        "Data export funktionalitet",
        "Brugerrettigheder og adgangskontrol",
        "Mobile-responsive interface",
        "Integration med eksisterende systemer"
      ],
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      deliveryTime: "5-7 uger",
      image: "dashboard"
    },
    {
      id: 5,
      name: "API Integration",
      category: "Backend Services",
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
    },
    {
      id: 6,
      name: "Mobile App",
      category: "Mobile Development",
      price: "Fra 30.000 kr",
      description: "Cross-platform mobilapplikation til iOS og Android. Fra idé til færdig app i App Store og Google Play.",
      features: [
        "Cross-platform udvikling",
        "Native performance og feel",
        "Push notifications",
        "Offline funktionalitet",
        "App Store deployment",
        "Brugeranalytics og crash reporting"
      ],
      technologies: ["React Native", "Expo", "Firebase"],
      deliveryTime: "8-12 uger",
      image: "mobile"
    }
  ]

  const categories = ["Alle", "E-commerce", "Business Solutions", "Web Development", "Analytics", "Backend Services", "Mobile Development"]

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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vælg din løsning
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fra simple websites til komplekse business systemer - jeg har løsningen til dig
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <article 
                key={product.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200"
              >
                {/* Product Image Placeholder */}
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 h-48 flex items-center justify-center">
                  <div className="text-center text-blue-700">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm font-medium">{product.name}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {product.name}
                      </h3>
                      <span className="text-sm text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded">
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
                        <li className="text-blue-600 text-xs">+ {product.features.length - 3} mere...</li>
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
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label={`Få tilbud på ${product.name}`}
                  >
                    Få tilbud
                  </button>
                </div>
              </article>
            ))}
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
