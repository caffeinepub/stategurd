export default function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="/assets/generated/about-team.dim_600x600.png"
                alt="STATEGURD team"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-500/20 rounded-lg -z-10"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-block mb-4">
              <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">About Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-6 leading-tight">
              Your Trusted Partner in Real Estate Excellence
            </h2>
            <div className="space-y-4 text-navy-700 text-lg leading-relaxed">
              <p>
                At STATEGURD, we bring decades of combined expertise in the real estate market, delivering
                exceptional service that puts your property goals first. Our commitment to professionalism
                ensures every transaction is handled with the utmost care and attention to detail.
              </p>
              <p>
                We believe in complete transparency throughout the buying, selling, and investment process.
                Our team provides honest market insights, clear communication, and expert guidance to help
                you make informed decisions with confidence.
              </p>
              <p>
                With deep market expertise and a client-centered approach, STATEGURD has established itself
                as a leader in real estate solutions. We don't just facilitate transactions—we build lasting
                relationships based on trust, integrity, and proven results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
