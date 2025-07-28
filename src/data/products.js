export const physicalProducts = [
  {
    id: 1,
    slug: "dd-privacypen",
    name: "DD-PrivacyPEN",
    category: "Hardware",
    type: "physical",
    price: "Fra 179,45 kr",
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
    image: "server",
    images: [
      {
        src: "/products/tailsOS-usb/tailsOS-usb.jpg",
        alt: "DD-PrivacyPEN USB med TailsOS - Hovedbillede",
        isPrimary: true
      },
      {
        src: "/products/tailsOS-usb/tailsOS-usb-packaging.jpg",
        alt: "DD-PrivacyPEN emballage og indhold",
        isPrimary: false
      },
      {
        src: "/products/tailsOS-usb/tailsOS-usb-details.jpg",
        alt: "DD-PrivacyPEN detaljer og specifikationer",
        isPrimary: false
      },
      {
        src: "/products/tailsOS-usb/tailsOS-interface.jpg",
        alt: "TailsOS interface og desktop",
        isPrimary: false
      }
    ]
  }
]

export const softwareProducts = [
  {
    id: 1,
    slug: "webshop-solution",
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
//  {
//    id: 2,
//    slug: "crm-system",
//    name: "CRM System",
//    category: "Business Solutions",
//    type: "software",
//    price: "Fra 25.000 kr",
//    description: "Skræddersyet Customer Relationship Management system til styring af kunder, salg og markedsføring. Perfekt til små og mellemstore virksomheder.",
//    features: [
//      "Kundestyring og kontaktdatabase",
//      "Salgspipeline og forecasting",
//      "Email marketing integration",
//      "Rapporter og analytics",
//      "Opgavestyring og kalender",
//      "Multi-user support med roller"
//    ],
//    technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
//    deliveryTime: "6-8 uger",
//    image: "crm"
//  },
  {
    id: 3,
    slug: "portfolio-website",
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
//  {
//    id: 4,
//    slug: "data-dashboard",
//    name: "Data Analytics Dashboard",
//    category: "Analytics",
//    type: "software",
//    price: "Fra 20.000 kr",
//    description: "Interaktivt dashboard til visualisering af forretningsdata med real-time opdateringer og avancerede analyseværktøjer.",
//    features: [
//      "Real-time data visualization",
//      "Customizable charts og graphs",
//      "Data export funktionalitet",
//      "Brugerrettigheder og adgangskontrol",
//      "Mobile-responsive interface",
//      "Integration med eksisterende systemer"
//    ],
//    technologies: ["React", "D3.js", "Python", "FastAPI"],
//    deliveryTime: "5-7 uger",
//    image: "dashboard"
//  },
  {
    id: 5,
    slug: "api-integration",
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
  },
//  {
//    id: 6,
//    slug: "mobile-app",
//    name: "Mobile App",
//    category: "Mobile Development",
//    type: "software",
//    price: "Fra 30.000 kr",
//    description: "Cross-platform mobilapplikation til iOS og Android. Fra idé til færdig app i App Store og Google Play.",
//    features: [
//      "Cross-platform udvikling",
//      "Native performance og feel",
//      "Push notifications",
//      "Offline funktionalitet",
//      "App Store deployment",
//      "Brugeranalytics og crash reporting"
//    ],
//    technologies: ["React Native", "Expo", "Firebase"],
//    deliveryTime: "8-12 uger",
//    image: "mobile"
//  }
]

export const getAllProducts = () => {
  return [...physicalProducts, ...softwareProducts]
}

export const getProductBySlug = (slug) => {
  const allProducts = getAllProducts()
  return allProducts.find(product => product.slug === slug)
}
