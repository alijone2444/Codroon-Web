import Image from "next/image"

const apiCategories = [
  {
    title: "Payment APIs",
    apis: [
      { name: "Stripe", subtitle: "Payment APIs", image: "/Images/integrations/stripe-1.png" },
      { name: "PayPal", subtitle: "Payment APIs", image: "/Images/integrations/payment-2.png" },
    ],
  },
  {
    title: "Communication APIs",
    apis: [
      { name: "Twilio", subtitle: "Communication APIs", image: "/Images/integrations/communicate-1.png" },
      { name: "SendGrid", subtitle: "Email APIs", image: "/Images/integrations/communicate-2.png" },
      { name: "WhatsApp Business", subtitle: "Message APIs", image: "/Images/integrations/communicate-3.png" },
    ],
  },
  {
    title: "Maps & Geo APIs",
    apis: [
      { name: "Google Maps", subtitle: "Map APIs", image: "/Images/integrations/map-1.png" },
      { name: "Mapbox", subtitle: "Geo APIs", image: "/Images/integrations/map-2.png" },
    ],
  },
  {
    title: "CRM APIs",
    apis: [
      { name: "HubSpot", subtitle: "CRM APIs", image: "/Images/integrations/crm-1.png" },
      { name: "Zoho", subtitle: "CRM APIs", image: "/Images/integrations/crm-2.png" },
    ],
  },
  {
    title: "E-commerce APIs",
    apis: [
      { name: "Shopify", subtitle: "E-commerce APIs", image: "/Images/integrations/ecommerce-1.png" },
      { name: "WooCommerce", subtitle: "E-commerce APIs", image: "/Images/integrations/ecommerce-2.png" },
    ],
  },
  {
    title: "Additional APIs",
    apis: [
      { name: "Automation", subtitle: "Payment APIs", image: "/Images/integrations/additional-1.png" },
      { name: "Banking", subtitle: "Payment APIs", image: "/Images/integrations/additional-2.png" },
      { name: "SMS", subtitle: "Messaging Service", image: "/Images/integrations/additional-3.png" },
    ],
  },
]

export default function WeConnectSection() {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-semibold mb-4">We connect your world</h2>
          {/* Green divider under heading */}
          <div className="w-full h-px bg-emerald-500/50 mt-6"></div>
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
                      <div className="relative w-12 h-12 flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Image
                          src={api.image}
                          alt={api.name}
                          fill
                          className="object-contain"
                        />
                      </div>
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
