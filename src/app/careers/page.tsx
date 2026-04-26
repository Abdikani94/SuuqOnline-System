import Link from "next/link";
import { ArrowRight, Briefcase, HeartHandshake, MapPin, Users } from "lucide-react";

export default function CareersPage() {
  const roles = [
    "Customer Support Specialist",
    "Delivery Operations Coordinator",
    "Seller Success Associate",
    "Frontend Developer",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-primary-600 font-semibold mb-3">Careers</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Build the future of online shopping in Somalia
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-8">
            Suuq.com is growing a team focused on customer trust, reliable delivery,
            seller success, and simple shopping experiences for families and
            businesses across Somalia.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Collaborative Team", text: "Work with people who care about practical local commerce." },
              { icon: MapPin, title: "Local Impact", text: "Help customers and sellers across Somalia connect online." },
              { icon: HeartHandshake, title: "Customer First", text: "Build services that make shopping easier and more trusted." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl shadow-sm p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="font-semibold text-gray-900 mb-2">{item.title}</h2>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Open Roles</h2>
          <div className="space-y-4">
            {roles.map((role) => (
              <div key={role} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-gray-50 rounded-xl p-5">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-primary-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{role}</h3>
                    <p className="text-sm text-gray-600">Mogadishu, Somalia</p>
                  </div>
                </div>
                <Link href="/contact" className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700">
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
