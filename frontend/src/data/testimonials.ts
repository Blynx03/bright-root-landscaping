export type TestimonialType = {
  id: number;
  quote: string;
  customer: string;
  location: string;
  service: string;
};

export const testimonials: TestimonialType[] = [
  {
    id: 1,
    quote:
      'BrightRoot completely transformed our backyard. The team listened to what we wanted, communicated clearly and created a space that feels both beautiful and practical.',
    customer: 'Sarah M.',
    location: 'Whitby, Ontario',
    service: 'Landscape Design',
  },
  {
    id: 2,
    quote:
      'Our lawn and gardens have never looked healthier. The team is dependable, professional and always leaves the property looking immaculate.',
    customer: 'Michael R.',
    location: 'Ajax, Ontario',
    service: 'Lawn & Garden Care',
  },
  {
    id: 3,
    quote:
      'BrightRoot made our seasonal cleanup completely stress-free. They worked efficiently, paid attention to every detail and had our property ready for winter.',
    customer: 'Jennifer L.',
    location: 'Pickering, Ontario',
    service: 'Seasonal Maintenance',
  },
  {
  id: 4,
  quote:
    'The new front garden has completely changed the look of our home. BrightRoot helped us choose the right plants and delivered exactly what we envisioned.',
  customer: 'David T.',
  location: 'Oshawa, Ontario',
  service: 'Garden Renovation',
},
{
  id: 5,
  quote:
    'From the first consultation to the final cleanup, everything was handled professionally. Our outdoor space now feels welcoming, polished and easy to maintain.',
  customer: 'Amanda K.',
  location: 'Clarington, Ontario',
  service: 'Landscape Installation',
},
];