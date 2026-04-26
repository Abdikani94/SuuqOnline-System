import Link from "next/link";
import { ArrowRight, CheckCircle, Shield, ShoppingBag, Truck } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: ShoppingBag,
      title: "Wide Product Choice",
      description: "Suuq.com brings electronics, fashion, home goods, groceries, toys, beauty, sports, and books into one simple marketplace.",
    },
    {
      icon: Shield,
      title: "Trusted Shopping",
      description: "We focus on reliable sellers, clear product information, and secure checkout options for every customer.",
    },
    {
      icon: Truck,
      title: "Local Delivery",
      description: "Our goal is to make online shopping practical with fast delivery and support across Somalia.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <p className="text-primary-600 font-semibold mb-3">About Suuq.com</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Somalia&apos;s trusted online marketplace
            </h1>
            <p className="text-lg text-gray-600 leading-8">
              Suuq.com helps customers shop from the comfort of home with access to
              everyday essentials, modern electronics, clothing, home products, and
              more. We connect shoppers with trusted sellers and make the buying
              experience simple, secure, and convenient.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-xl shadow-sm p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h2>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-7 mb-4">
                We are building a marketplace that makes commerce easier for
                families, small businesses, and sellers across Somalia. Suuq.com
                is designed to be easy to browse, simple to order from, and useful
                for both customers and local entrepreneurs.
              </p>
              <p className="text-gray-600 leading-7">
                Whether you are buying a phone, ordering groceries, choosing a
                gift, or starting to sell online, Suuq.com is here to make the
                process smoother.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What We Offer</h3>
              <div className="space-y-3">
                {[
                  "Secure online shopping experience",
                  "Fast delivery across Somalia",
                  "Multiple product categories in one place",
                  "Helpful support for customers and sellers",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to shop?</h2>
          <p className="text-gray-600 mb-6">
            Explore products from trusted sellers on Suuq.com.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Browse Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
