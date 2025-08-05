import {
  Smartphone,
  Laptop,
  Headphones,
  Watch,
  Camera,
  Gamepad2,
  Truck,
  Shield,
  RotateCcw,
  ShieldCheck,
  Phone,
  Zap,
} from "lucide-react";

const home = () => {
  const categories = [
    {
      id: 1,
      name: "Smartphones",
      icon: Smartphone,
      description: "Latest smartphones with cutting-edge technology",
      count: "500+ Products",
    },
    {
      id: 2,
      name: "Laptops",
      icon: Laptop,
      description: "High-performance laptops for work and gaming",
      count: "300+ Products",
    },
    {
      id: 3,
      name: "Headphones",
      icon: Headphones,
      description: "Premium audio experience with wireless freedom",
      count: "200+ Products",
    },
    {
      id: 4,
      name: "Smartwatches",
      icon: Watch,
      description: "Stay connected with smart wearable technology",
      count: "150+ Products",
    },
    {
      id: 5,
      name: "Cameras",
      icon: Camera,
      description: "Capture life's moments with professional cameras",
      count: "100+ Products",
    },
    {
      id: 6,
      name: "Gaming",
      icon: Gamepad2,
      description: "Gaming gear for the ultimate gaming experience",
      count: "250+ Products",
    },
  ];

  const trustFeatures = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Free delivery on orders over $50 worldwide",
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "100% secure payment with SSL encryption",
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "30-day hassle-free return policy",
    },
    {
      icon: ShieldCheck,
      title: "Warranty",
      description: "1-year warranty on all electronic products",
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Round-the-clock customer support",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Express delivery in 2-3 business days",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-24 overflow-hidden">
        {/* Background decoration */}

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent-green/20 backdrop-blur-sm border border-accent-green/30 rounded-full px-6 py-2 mb-8">
              <Zap className="w-5 h-5 text-accent-green" />
              <span className="text-accent-green font-medium">
                Trusted by 10,000+ customers
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Your Ultimate
              <br />
              <span className="bg-gradient-to-r from-green-300 to-green-400 bg-clip-text text-transparent">
                Tech Destination
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
              Discover cutting-edge gadgets, premium electronics, and innovative
              tech solutions at prices that don't break the bank. Quality
              guaranteed.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button className="group bg-accent-green text-text-on-primary px-10 py-5 rounded-xl text-lg font-bold hover:bg-accent-green/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3">
                <span>Start Shopping</span>
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </button>
              <button className="border-2 border-white/30 backdrop-blur-sm text-white px-10 py-5 rounded-xl text-lg font-bold hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                Browse Categories
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl font-black text-accent-green mb-2">
                10K+
              </div>
              <div className="text-white/80 font-medium">Happy Customers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl font-black text-accent-green mb-2">
                1.5K+
              </div>
              <div className="text-white/80 font-medium">Premium Products</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl font-black text-accent-green mb-2">
                50+
              </div>
              <div className="text-white/80 font-medium">Top Brands</div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <Smartphone className="w-8 h-8 text-accent-green/40" />
        </div>
        <div className="absolute top-32 right-16 animate-pulse">
          <Laptop className="w-10 h-10 text-accent-green/30" />
        </div>
        <div className="absolute bottom-20 left-20 animate-bounce delay-1000">
          <Headphones className="w-6 h-6 text-accent-green/50" />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 bg-bg-default">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-heading mb-4">
              Shop by Categories
            </h2>
            <p className="text-xl text-text-body max-w-2xl mx-auto">
              Explore our wide range of electronic products and gadgets across
              different categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.id}
                  className="bg-bg-secondary rounded-xl p-8 bg-white hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer click border border-border-light"
                >
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-16 h-16 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-heading mb-3 text-center">
                    {category.name}
                  </h3>
                  <p className="text-text-body mb-4 text-center">
                    {category.description}
                  </p>
                  <div className="text-center">
                    <span className="text-primary font-semibold">
                      {category.count}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="py-20 px-4 bg-bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-heading mb-4">
              Why Trust Us?
            </h2>
            <p className="text-xl text-text-body max-w-2xl mx-auto">
              We're committed to providing you with the best shopping experience
              and quality products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-bg-default rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 border bg-white"
                >
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-text-heading mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-text-body">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary via-primary/95 to-primary text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 animate-float">
        <Smartphone className="w-12 h-12" />
          </div>
          <div className="absolute top-20 right-20 animate-float delay-1000">
        <Laptop className="w-16 h-16" />
          </div>
          <div className="absolute bottom-16 left-1/4 animate-float delay-2000">
        <Headphones className="w-10 h-10" />
          </div>
          <div className="absolute bottom-10 right-16 animate-float delay-500">
        <Watch className="w-8 h-8" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 bg-accent-green/20 backdrop-blur-sm border border-accent-green/30 rounded-full px-6 py-2 mb-8">
        <ShieldCheck className="w-5 h-5 text-accent-green" />
        <span className="text-accent-green font-medium">Premium Quality Guaranteed</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
        Ready to Upgrade Your
        <br />
        <span className="bg-gradient-to-r from-green-500 to-green-300 bg-clip-text text-transparent">
          Tech Life?
        </span>
          </h2>

          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
        Join over 10,000 satisfied customers who've discovered amazing deals on premium gadgets. 
        Start your journey to the latest technology today.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
        <button className="group bg-accent-green text-text-on-primary px-10 py-5 rounded-xl text-lg font-bold hover:bg-accent-green/90 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-3 min-w-[200px]">
          <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span>Shop Now</span>
        </button>
        <button className="group border-2 border-white/30 backdrop-blur-sm text-white px-10 py-5 rounded-xl text-lg font-bold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 min-w-[200px]">
          <span>View Deals</span>
          <div className="bg-accent-green text-text-on-primary rounded-full px-2 py-1 text-sm font-bold group-hover:scale-110 transition-transform">
            50% OFF
          </div>
        </button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Truck className="w-6 h-6 text-accent-green" />
            <span className="font-bold text-lg">Free Shipping</span>
          </div>
          <p className="text-white/80 text-sm">On orders over $50</p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Shield className="w-6 h-6 text-accent-green" />
            <span className="font-bold text-lg">Secure Payment</span>
          </div>
          <p className="text-white/80 text-sm">SSL encrypted checkout</p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
          <div className="flex items-center justify-center gap-3 mb-2">
            <RotateCcw className="w-6 h-6 text-accent-green" />
            <span className="font-bold text-lg">Easy Returns</span>
          </div>
          <p className="text-white/80 text-sm">30-day return policy</p>
        </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default home;
