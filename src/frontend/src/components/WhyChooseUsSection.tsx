const features = [
  {
    icon: '/assets/generated/icon-expertise.dim_128x128.png',
    title: 'Market Expertise',
    description:
      'Decades of combined experience and deep knowledge of local and national real estate markets. Our team stays ahead of trends to provide you with strategic advantages.',
  },
  {
    icon: '/assets/generated/icon-transparent.dim_128x128.png',
    title: 'Transparent Process',
    description:
      'Complete transparency at every stage. We provide clear communication, honest assessments, and detailed documentation so you always know exactly where you stand.',
  },
  {
    icon: '/assets/generated/icon-client.dim_128x128.png',
    title: 'Client-Centered Approach',
    description:
      'Your goals are our priority. We take time to understand your unique needs and tailor our services to deliver personalized solutions that exceed expectations.',
  },
  {
    icon: '/assets/generated/icon-secure.dim_128x128.png',
    title: 'Secure Transactions',
    description:
      'Industry-leading security protocols and rigorous verification processes ensure every transaction is protected. Your peace of mind is our guarantee.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 md:py-28 bg-navy-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            The STATEGURD Advantage
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            We combine expertise, integrity, and innovation to deliver exceptional real estate experiences that build lasting trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-navy-800 p-8 rounded-lg border-2 border-navy-700 hover:border-gold-500 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 mb-6 flex items-center justify-center">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white/80 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
