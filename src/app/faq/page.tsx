import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";

export default function FAQPage() {
  const faqs = [
    {
      question: "What is Suuq.com?",
      answer: "Suuq.com is an online marketplace where customers can browse and buy products from trusted sellers across categories like electronics, fashion, groceries, toys, home goods, beauty, sports, and books.",
    },
    {
      question: "How do I place an order?",
      answer: "Browse products, add items to your cart, go to checkout, enter your delivery details, and choose your payment method.",
    },
    {
      question: "Where does Suuq.com deliver?",
      answer: "Suuq.com supports delivery across Somalia, with availability depending on seller location and customer address.",
    },
    {
      question: "How can I contact support?",
      answer: "You can reach us by phone at +252 61 1234567, email info@suuq.com, or through the Contact page.",
    },
    {
      question: "Can I sell on Suuq.com?",
      answer: "Yes. Create an account and contact our seller support team to learn how to list your products.",
    },
    {
      question: "What if my item has a problem?",
      answer: "Contact support with your order details. Our team will review the issue and help with return, replacement, or refund options when eligible.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-primary-600 font-semibold mb-3">FAQ</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently asked questions
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-8">
            Quick answers about shopping, delivery, returns, support, and selling
            on Suuq.com.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="font-semibold text-gray-900 mb-2">{faq.question}</h2>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Still Need Help?
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
