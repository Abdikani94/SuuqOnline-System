import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      value: "+252 61 2432994",
      detail: "Call us for orders, delivery questions, or account help.",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@suuq.com",
      detail: "Send us a message and our support team will reply as soon as possible.",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "Mogadishu, Somalia",
      detail: "Suuq.com supports customers and sellers across Somalia.",
    },
    {
      icon: Clock,
      title: "Support Hours",
      value: "Every day, 8:00 AM - 10:00 PM",
      detail: "Our team is available daily for shopping and seller support.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <p className="text-primary-600 font-semibold mb-3">Contact Us</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We&apos;re here to help
            </h1>
            <p className="text-lg text-gray-600 leading-8">
              Have a question about an order, delivery, payment, returns, or selling
              on Suuq.com? Reach out to our team and we&apos;ll help you get the right
              answer.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactMethods.map((method) => (
              <div key={method.title} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <method.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-900 mb-1">{method.title}</h2>
                    <p className="text-primary-600 font-medium mb-2">{method.value}</p>
                    <p className="text-gray-600">{method.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Send a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Questions</h2>
              <div className="space-y-5">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Where do you deliver?</h3>
                  <p className="text-gray-600">
                    Suuq.com is focused on serving customers across Somalia, starting
                    with major cities and expanding delivery coverage.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">How do I sell on Suuq.com?</h3>
                  <p className="text-gray-600">
                    Create an account, add your seller details, and list your products
                    for customers to discover.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Need order help?</h3>
                  <p className="text-gray-600">
                    Contact us with your order details and our support team will help
                    track or resolve your request.
                  </p>
                </div>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors mt-6"
              >
                Continue Shopping
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
