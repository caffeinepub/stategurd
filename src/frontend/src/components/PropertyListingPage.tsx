import { Link, useParams } from '@tanstack/react-router';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Square, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const allProperties = [
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
  {
    id: 4,
    image: '/assets/generated/property-1.dim_800x600.png',
    title: 'Elegant Beverly Hills Estate',
    description: 'Luxurious estate with private pool, landscaped gardens, and state-of-the-art amenities.',
    price: '$3,200,000',
    location: 'Beverly Hills, CA',
    area: 'Beverly Hills',
    bedrooms: 6,
    bathrooms: 5,
    sqft: '5,800 sq ft',
    featured: false,
  },
  {
    id: 5,
    image: '/assets/generated/property-2.dim_800x600.png',
    title: 'Manhattan Luxury Condo',
    description: 'High-rise luxury condominium with breathtaking skyline views and premium amenities.',
    price: '$2,100,000',
    location: 'Manhattan, NY',
    area: 'Manhattan',
    bedrooms: 4,
    bathrooms: 3,
    sqft: '3,200 sq ft',
    featured: false,
  },
];

export default function PropertyListingPage() {
  const { area } = useParams({ from: '/properties/$area' });
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [area]);

  const normalizedArea = area.replace(/-/g, ' ');
  const filteredProperties = allProperties.filter(
    (property) => property.area.toLowerCase() === normalizedArea.toLowerCase()
  );

  const displayAreaName = normalizedArea
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="min-h-screen bg-white page-transition">
      {/* Header Section */}
      <section className="bg-navy-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button
              variant="ghost"
              className="mb-6 text-white hover:text-gold-500 hover:bg-navy-800 transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Properties in <span className="text-gold-500">{displayAreaName}</span>
          </h1>
          <p className="text-lg md:text-xl text-navy-100 max-w-3xl">
            Explore our exclusive collection of premium properties available in {displayAreaName}.
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          {filteredProperties.length > 0 ? (
            <>
              <div className="mb-8">
                <p className="text-navy-700 text-lg">
                  Showing <span className="font-bold text-navy-900">{filteredProperties.length}</span>{' '}
                  {filteredProperties.length === 1 ? 'property' : 'properties'} in {displayAreaName}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProperties.map((property) => (
                  <Card
                    key={property.id}
                    className="overflow-hidden border-2 border-navy-100 hover:shadow-2xl transition-all duration-300 group"
                  >
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
                        <span className="text-sm font-semibold text-navy-900">{property.location}</span>
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
            </>
          ) : (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <MapPin className="w-16 h-16 mx-auto mb-6 text-gold-500" />
                <h2 className="text-3xl font-bold text-navy-900 mb-4">No Properties Found</h2>
                <p className="text-lg text-navy-700 mb-8">
                  We currently don't have any properties listed in {displayAreaName}. Please check back soon or
                  explore other areas.
                </p>
                <Link to="/">
                  <Button className="bg-navy-900 hover:bg-navy-800 text-white">
                    View All Properties
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
