import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Square } from 'lucide-react';
import { Link } from '@tanstack/react-router';

const properties = [
  {
    id: 1,
    image: '/assets/generated/property-1.dim_800x600.png',
    title: 'Modern Luxury Villa',
    description: 'Stunning contemporary villa with panoramic city views and premium finishes throughout.',
    price: '$2,450,000',
    location: 'Beverly Hills, CA',
    area: 'Beverly Hills',
    bedrooms: 5,
    bathrooms: 4,
    sqft: '4,200 sq ft',
    featured: true,
  },
  {
    id: 2,
    image: '/assets/generated/property-2.dim_800x600.png',
    title: 'Executive Penthouse Suite',
    description: 'Sophisticated penthouse with floor-to-ceiling windows and designer interiors.',
    price: '$1,850,000',
    location: 'Manhattan, NY',
    area: 'Manhattan',
    bedrooms: 3,
    bathrooms: 3,
    sqft: '2,800 sq ft',
    featured: true,
  },
  {
    id: 3,
    image: '/assets/generated/property-3.dim_800x600.png',
    title: 'Prime Commercial Building',
    description: 'Strategic commercial property in high-traffic business district with excellent ROI.',
    price: '$5,200,000',
    location: 'Downtown Chicago, IL',
    area: 'Downtown Chicago',
    bedrooms: null,
    bathrooms: null,
    sqft: '12,500 sq ft',
    featured: false,
  },
];

export default function FeaturedPropertiesSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">Featured Properties</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Exclusive Property Listings
          </h2>
          <p className="text-lg text-navy-700 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties, each offering exceptional value and quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden border-2 border-navy-100 hover:shadow-2xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {property.featured && (
                  <Badge className="absolute top-4 right-4 bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold">
                    Featured
                  </Badge>
                )}
              </div>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-bold text-navy-900">{property.title}</h3>
                </div>
                <p className="text-navy-700 leading-relaxed">{property.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-navy-600 mb-4">
                  <MapPin className="w-4 h-4 mr-2 text-gold-500 flex-shrink-0" />
                  <span className="text-sm">
                    <Link
                      to="/properties/$area"
                      params={{ area: property.area.toLowerCase().replace(/\s+/g, '-') }}
                      className="text-navy-900 font-semibold hover:text-gold-500 hover:underline transition-all duration-200 cursor-pointer"
                    >
                      {property.area}
                    </Link>
                    {property.location !== property.area && `, ${property.location.replace(property.area + ', ', '')}`}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-navy-600">
                  {property.bedrooms && (
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      <span>{property.bedrooms} Beds</span>
                    </div>
                  )}
                  {property.bathrooms && (
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      <span>{property.bathrooms} Baths</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <Square className="w-4 h-4 mr-1" />
                    <span>{property.sqft}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-navy-100 pt-4">
                <div className="w-full flex items-center justify-between">
                  <span className="text-3xl font-bold text-gold-500">{property.price}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
