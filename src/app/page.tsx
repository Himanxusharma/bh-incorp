const features = [
  {
    title: "Company Incorporation",
    description:
      "Effortlessly register Private Limited Companies, LLPs, and more.",
    icon: "/icons/incorporation.svg",
  },
  {
    title: "Tax & Compliance",
    description:
      "Seamless GST filings, tax registrations, and ongoing statutory compliance.",
    icon: "/icons/tax.svg",
  },
  {
    title: "Bookkeeping & Payroll",
    description:
      "Reliable bookkeeping and payroll management for your business.",
    icon: "/icons/bookkeeping.svg",
  },
  {
    title: "Legal & Advisory",
    description:
      "Consult with independent professionals for legal, financial, and compliance advice.",
    icon: "/icons/legal.svg",
  },
  {
    title: "Dedicated Support",
    description:
      "Get a dedicated team with 24-hour response time for all your queries.",
    icon: "/icons/support.svg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gradient-to-br from-gray-50 via-white to-gray-100 animate-gradient-move">
      {/* Navbar */}
      <nav className="w-full px-6 py-4 flex items-center justify-between bg-white/80 shadow-sm fixed top-0 left-0 z-20 backdrop-blur-md">
        <span className="text-2xl font-bold text-black tracking-tight">BH-Incorp</span>
        <a href="#features" className="text-black font-medium hover:underline transition">Services</a>
      </nav>
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center py-32 px-4 text-center relative mt-20">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-4 drop-shadow-lg">BH-Incorp</h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mb-8">Your trusted partner for company incorporation, compliance, and business growth.</p>
        <a
          href="https://wa.me/916367433341"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-full shadow-lg font-semibold text-lg hover:bg-green-700 transition"
        >
          {/* WhatsApp SVG icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.1 3.2 5.077 4.363.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.455 4.436-9.89 9.893-9.89 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.896 6.994c-.003 5.455-4.438 9.89-9.893 9.89m8.413-18.304A11.815 11.815 0 0 0 12.05 0C5.495 0 .06 5.435.058 12.086c0 2.13.557 4.21 1.615 6.033L.057 24l6.063-1.616a11.88 11.88 0 0 0 5.929 1.515h.005c6.554 0 11.989-5.435 11.991-12.086a11.86 11.86 0 0 0-3.488-8.484"/>
          </svg>
          Chat on WhatsApp
        </a>
        {/* Animated gradient background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-gray-200 via-white to-gray-300 opacity-60 blur-2xl animate-gradient-move" />
      </header>

      {/* Features Section */}
      <section id="features" className="flex-1 flex flex-col items-center py-16 px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-8">Key Features & Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl w-full">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shadow">
                  <span className="text-2xl text-black">★</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">{feature.title}</h3>
              <p className="text-gray-700 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-600 py-6 text-sm bg-white/70 mt-auto">
        &copy; {new Date().getFullYear()} BH-Incorp. All rights reserved.
      </footer>
    </div>
  );
}
