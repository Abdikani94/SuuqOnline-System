import Link from "next/link";
import { ArrowRight, Mail, Newspaper, ShieldCheck, ShoppingBag } from "lucide-react";

export default function PressPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-primary-600 font-semibold mb-3">Press</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Suuq.com news and media information
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-8">
            Suuq.com is an online marketplace helping shoppers discover products
            from trusted sellers with secure payments, support, and delivery across Somalia.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: ShoppingBag, title: "Marketplace", text: "Products across electronics, fashion, groceries, toys, home goods, and more." },
              { icon: ShieldCheck, title: "Trust", text: "A customer-focused shopping experience with clear support channels." },
              { icon: Newspaper, title: "Local Commerce", text: "Built to support buyers and sellers in Somalia's digital economy." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl shadow-sm p-6">
                <item.icon className="w-8 h-8 text-primary-600 mb-4" />
                <h2 className="font-semibold text-gray-900 mb-2">{item.title}</h2>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Media Contact</h2>
            <p className="text-gray-600 mb-5">
              For press questions, company information, or interview requests,
              contact the Suuq.com team.
            </p>
            <Link href="mailto:info@suuq.com" className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700">
              <Mail className="w-5 h-5" />
              info@suuq.com
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
