import Link from "next/link";
import { ArrowRight, Clock, MapPin, Package, Truck } from "lucide-react";

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-primary-600 font-semibold mb-3">Shipping Info</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Delivery information for Suuq.com orders
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-8">
            We work to make delivery clear, reliable, and convenient for customers
            across Somalia.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: MapPin, title: "Delivery Areas", text: "Delivery is available in major cities, with coverage expanding over time." },
              { icon: Clock, title: "Delivery Time", text: "Most orders are prepared quickly. Timing depends on seller location and destination." },
              { icon: Package, title: "Order Updates", text: "Customers receive support for order status and delivery questions." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl shadow-sm p-6">
                <item.icon className="w-8 h-8 text-primary-600 mb-4" />
                <h2 className="font-semibold text-gray-900 mb-2">{item.title}</h2>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
            <div className="flex items-start gap-4">
              <Truck className="w-8 h-8 text-primary-600 flex-shrink-0" />
              <div>
                <h2 className="font-semibold text-gray-900 mb-2">Need help with a delivery?</h2>
                <p className="text-gray-600 mb-4">Contact support with your order details and delivery address.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700">
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
