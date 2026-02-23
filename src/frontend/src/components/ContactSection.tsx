import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyInterest: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s\-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.propertyInterest) {
      newErrors.propertyInterest = 'Please select your property interest';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Form submitted:', formData);

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '', propertyInterest: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Start Your Real Estate Journey Today
          </h2>
          <p className="text-lg text-navy-700 max-w-2xl mx-auto">
            Get in touch with our expert team. We're here to answer your questions and help you achieve your property goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card className="border-2 border-navy-100">
              <CardHeader>
                <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mb-2">
                  <Phone className="w-6 h-6 text-navy-900" />
                </div>
                <CardTitle className="text-navy-900">Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-navy-700">+1 (555) 123-4567</p>
                <p className="text-sm text-navy-600 mt-1">Mon-Fri 9am-6pm</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-navy-100">
              <CardHeader>
                <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mb-2">
                  <Mail className="w-6 h-6 text-navy-900" />
                </div>
                <CardTitle className="text-navy-900">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-navy-700">info@stategurd.com</p>
                <p className="text-sm text-navy-600 mt-1">24/7 support</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-navy-100">
              <CardHeader>
                <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mb-2">
                  <MapPin className="w-6 h-6 text-navy-900" />
                </div>
                <CardTitle className="text-navy-900">Office</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-navy-700">123 Real Estate Blvd</p>
                <p className="text-sm text-navy-600 mt-1">New York, NY 10001</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-navy-100">
              <CardHeader>
                <CardTitle className="text-2xl text-navy-900">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12">
                    <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                    <h3 className="text-2xl font-bold text-navy-900 mb-2">Thank You!</h3>
                    <p className="text-navy-700 text-center">
                      Your inquiry has been received. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-navy-900">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className={`mt-2 border-2 ${
                          errors.name ? 'border-red-500' : 'border-navy-200'
                        } focus:border-gold-500`}
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-navy-900">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className={`mt-2 border-2 ${
                          errors.phone ? 'border-red-500' : 'border-navy-200'
                        } focus:border-gold-500`}
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-navy-900">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className={`mt-2 border-2 ${
                          errors.email ? 'border-red-500' : 'border-navy-200'
                        } focus:border-gold-500`}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <Label htmlFor="propertyInterest" className="text-navy-900">
                        Property Interest *
                      </Label>
                      <Select value={formData.propertyInterest} onValueChange={(value) => handleChange('propertyInterest', value)}>
                        <SelectTrigger
                          className={`mt-2 border-2 ${
                            errors.propertyInterest ? 'border-red-500' : 'border-navy-200'
                          } focus:border-gold-500`}
                        >
                          <SelectValue placeholder="Select your interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="buying">Property Buying</SelectItem>
                          <SelectItem value="selling">Property Selling</SelectItem>
                          <SelectItem value="renting">Rental Management</SelectItem>
                          <SelectItem value="investment">Investment Consultancy</SelectItem>
                          <SelectItem value="other">Other Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.propertyInterest && (
                        <p className="text-red-500 text-sm mt-1">{errors.propertyInterest}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold text-lg py-6 h-auto"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
