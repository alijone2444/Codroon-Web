const apiCategories = [
  {
    title: "Payment APIs",
    apis: [
      { name: "Stripe", subtitle: "Payment APIs", icon: "💳" },
      { name: "PayPal", subtitle: "Payment APIs", icon: "💰" },
    ],
  },
  {
    title: "Communication APIs",
    apis: [
      { name: "Twilio", subtitle: "Communication APIs", icon: "📞" },
      { name: "SendGrid", subtitle: "Email APIs", icon: "✉️" },
      { name: "WhatsApp Business", subtitle: "Message APIs", icon: "💬" },
    ],
  },
  {
    title: "Maps & Geo APIs",
    apis: [
      { name: "Google Maps", subtitle: "Map APIs", icon: "🗺️" },
      { name: "Mapbox", subtitle: "Geo APIs", icon: "📍" },
    ],
  },
  {
    title: "CRM APIs",
    apis: [
      { name: "HubSpot", subtitle: "CRM APIs", icon: "🎯" },
      { name: "Zoho", subtitle: "CRM APIs", icon: "📊" },
    ],
  },
  {
    title: "E-commerce APIs",
    apis: [
      { name: "Shopify", subtitle: "E-commerce APIs", icon: "🛍️" },
      { name: "WooCommerce", subtitle: "E-commerce APIs", icon: "🛒" },
    ],
  },
  {
    title: "Additional APIs",
    apis: [
      { name: "Automation", subtitle: "Payment APIs", icon: "🤖" },
      { name: "Banking", subtitle: "Payment APIs", icon: "🏦" },
      { name: "SMS", subtitle: "Messaging Service", icon: "📱" },
    ],
  },
]

export default function WeConnectSection() {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-semibold mb-4">We connect your world</h2>
        </div>

        <div className="space-y-12">
          {apiCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-white text-2xl font-semibold mb-6">{category.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.apis.map((api) => (
                  <div
                    key={api.name}
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-emerald-500/50 transition-all cursor-pointer group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform">{api.icon}</div>
                      <div>
                        <h4 className="text-white text-lg font-medium mb-1">{api.name}</h4>
                        <p className="text-gray-400 text-sm">{api.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-emerald-500/30 mt-8"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
