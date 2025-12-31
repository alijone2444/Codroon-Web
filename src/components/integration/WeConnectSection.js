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
    <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4 leading-[110%] sm:leading-[100%]">We connect your world</h2>
          {/* Green divider under heading */}
          <div className="w-full h-px bg-emerald-500/50 mt-4 sm:mt-5 md:mt-6"></div>
        </div>

        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {apiCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-5 md:mb-6 leading-[110%] sm:leading-[100%]">{category.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                {category.apis.map((api) => (
                  <div
                    key={api.name}
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 sm:p-5 md:p-6 hover:border-emerald-500/50 transition-all cursor-pointer group"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Image
                          src={api.image}
                          alt={api.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="text-white text-base sm:text-lg font-medium mb-1 leading-[110%] sm:leading-[100%]">{api.name}</h4>
                        <p className="text-gray-400 text-xs sm:text-sm leading-[140%] sm:leading-[150%]">{api.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-emerald-500/30 mt-6 sm:mt-7 md:mt-8"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
