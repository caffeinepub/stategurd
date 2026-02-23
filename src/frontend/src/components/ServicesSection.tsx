import { Home, TrendingUp, Key, LineChart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: Home,
    title: 'Property Buying Assistance',
    description:
      'Expert guidance through every step of the property acquisition process. We help you find the perfect property that matches your needs and budget, ensuring a smooth and secure transaction.',
  },
  {
    icon: TrendingUp,
    title: 'Property Selling Services',
    description:
      'Maximize your property value with our strategic marketing and negotiation expertise. We handle everything from valuation to closing, ensuring you get the best possible return on your investment.',
  },
  {
    icon: Key,
    title: 'Rental Management',
    description:
      'Comprehensive rental property management services that take the hassle out of being a landlord. From tenant screening to maintenance coordination, we handle it all professionally.',
  },
  {
    icon: LineChart,
    title: 'Investment Consultancy',
    description:
      'Strategic real estate investment advice backed by market analysis and industry insights. We help you identify lucrative opportunities and build a profitable property portfolio.',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Comprehensive Real Estate Solutions
          </h2>
          <p className="text-lg text-navy-700 max-w-2xl mx-auto">
            From buying and selling to investment strategy, we provide end-to-end real estate services tailored to your unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-2 border-navy-100 hover:border-gold-500 transition-all duration-300 hover:shadow-xl group"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-navy-900 group-hover:bg-gold-500 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-navy-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-navy-700 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
