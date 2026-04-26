import Link from "next/link";
import { ArrowRight, CreditCard, Headphones, PackageSearch, UserRound } from "lucide-react";

export default function HelpPage() {
  const topics = [
    { icon: PackageSearch, title: "Orders", text: "Track orders, check product details, and get help with order issues." },
    { icon: CreditCard, title: "Payments", text: "Learn about checkout, payment options, and secure transactions." },
    { icon: UserRound, title: "Accounts", text: "Manage login details, customer profiles, and seller accounts." },
    { icon: Headphones, title: "Support", text: "Reach our team for shopping, delivery, or seller questions." },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-primary-600 font-semibold mb-3">Help Center</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How can we help?
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-8">
            Find quick answers about orders, payments, delivery, returns, accounts,
            and selling on Suuq.com.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topics.map((topic) => (
              <div key={topic.title} className="bg-white rounded-xl shadow-sm p-6">
                <topic.icon className="w-8 h-8 text-primary-600 mb-4" />
                <h2 className="font-semibold text-gray-900 mb-2">{topic.title}</h2>
                <p className="text-gray-600">{topic.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Contact Support
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
