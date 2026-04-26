import Link from "next/link";
import { ArrowRight, CheckCircle, PackageOpen, ReceiptText, RotateCcw } from "lucide-react";

export default function ReturnsPage() {
  const steps = [
    "Contact Suuq.com support with your order details.",
    "Explain the product issue and include photos if needed.",
    "Our team reviews the request and confirms the next step.",
    "Return, replacement, or refund options are handled based on the order case.",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-primary-600 font-semibold mb-3">Returns</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Return and refund support
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-8">
            If something is wrong with your order, Suuq.com support is here to help
            review the issue and guide you through the return process.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {[
              { icon: RotateCcw, title: "Easy Requests", text: "Start by contacting support with your order number." },
              { icon: ReceiptText, title: "Clear Review", text: "We review product condition, seller policy, and order details." },
              { icon: PackageOpen, title: "Resolution", text: "Eligible orders may receive return, replacement, or refund support." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl shadow-sm p-6">
                <item.icon className="w-8 h-8 text-primary-600 mb-4" />
                <h2 className="font-semibold text-gray-900 mb-2">{item.title}</h2>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">How Returns Work</h2>
            <div className="space-y-3">
              {steps.map((step) => (
                <div key={step} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors mt-6">
              Start Return Request
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
