import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'STATEGURD made our home buying experience seamless and stress-free. Their market knowledge and attention to detail helped us find our dream property at an excellent price. Highly recommended!',
    author: 'Michael & Sarah Thompson',
    location: 'Los Angeles, CA',
  },
  {
    quote:
      'The investment consultancy service exceeded our expectations. Their strategic insights helped us build a profitable real estate portfolio. Professional, transparent, and results-driven.',
    author: 'David Chen',
    location: 'San Francisco, CA',
  },
  {
    quote:
      'Selling our property with STATEGURD was the best decision we made. They handled everything professionally, kept us informed throughout, and achieved a sale price above our expectations.',
    author: 'Jennifer Martinez',
    location: 'Miami, FL',
  },
  {
    quote:
      'Their rental management service has been outstanding. From tenant screening to maintenance, everything is handled efficiently. I can finally enjoy passive income without the headaches.',
    author: 'Robert Williams',
    location: 'Austin, TX',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-navy-700 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from clients who have experienced the STATEGURD difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 border-navy-100 bg-white hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-8">
                <Quote className="w-12 h-12 text-gold-500 mb-4" />
                <p className="text-navy-700 text-lg leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-navy-100 pt-4">
                  <p className="font-bold text-navy-900">{testimonial.author}</p>
                  <p className="text-sm text-navy-600">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
