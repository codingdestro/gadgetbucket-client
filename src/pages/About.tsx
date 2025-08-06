import { ShoppingBag, Users, Truck, Shield, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-primary/10 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-primary">ShopEase</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner for quality products, exceptional service,
              and seamless shopping experiences since 2020.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded with a simple mission: to make quality products
                accessible to everyone. We believe shopping should be easy,
                enjoyable, and trustworthy.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                From our humble beginnings to serving thousands of customers
                worldwide, we've remained committed to exceptional service and
                carefully curated products that enhance your lifestyle.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">50K+</div>
                  <div className="text-sm text-gray-500">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">1000+</div>
                  <div className="text-sm text-gray-500">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">4.8★</div>
                  <div className="text-sm text-gray-500">Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-teal-100 to-primary/20 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <ShoppingBag className="h-24 w-24 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Quality First
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Every product is carefully selected and tested
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing you with the best shopping experience
              through our core values.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Quick and reliable shipping to your doorstep within 2-3 business
                days.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Secure Shopping
              </h3>
              <p className="text-gray-600">
                Your data is protected with industry-leading security measures.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Customer First
              </h3>
              <p className="text-gray-600">
                24/7 support and hassle-free returns for your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate people behind ShopEase, working hard to bring you
              the best shopping experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                bg: "bg-blue-100",
              },
              {
                name: "Michael Chen",
                role: "Head of Operations",
                bg: "bg-green-100",
              },
              {
                name: "Emily Davis",
                role: "Customer Experience",
                bg: "bg-purple-100",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div
                  className={`w-24 h-24 ${member.bg} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <Users className="h-10 w-10 text-gray-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Shopping?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Discover thousands of quality products at unbeatable prices.
          </p>
          <button className="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Browse Products
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
