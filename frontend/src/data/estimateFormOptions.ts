export type SelectOption = {
  value: string;
  label: string;
};

export const projectTypeOptions: SelectOption[] = [
  {
    value: 'full-transformation',
    label: 'Full landscape transformation',
  },
  {
    value: 'front-yard',
    label: 'Front yard',
  },
  {
    value: 'backyard-outdoor-living',
    label: 'Backyard and outdoor living',
  },
  {
    value: 'garden-planting',
    label: 'Garden and planting',
  },
  {
    value: 'hardscaping',
    label: 'Hardscaping',
  },
  {
    value: 'property-refresh',
    label: 'Property refresh',
  },
  {
    value: 'other',
    label: 'Other',
  },
];

export const serviceOptions: SelectOption[] = [
  {
    value: 'landscape-design',
    label: 'Landscape design',
  },
  {
    value: 'garden-design-planting',
    label: 'Garden design and planting',
  },
  {
    value: 'patios-walkways',
    label: 'Patios and walkways',
  },
  {
    value: 'retaining-walls',
    label: 'Retaining walls',
  },
  {
    value: 'lawn-installation',
    label: 'Lawn installation',
  },
  {
    value: 'landscape-lighting',
    label: 'Landscape lighting',
  },
  {
    value: 'other',
    label: 'Other',
  },
];

export const budgetOptions: SelectOption[] = [
  {
    value: 'not-sure',
    label: 'Not sure yet',
  },
  {
    value: 'under-10000',
    label: 'Under $10,000',
  },
  {
    value: '10000-25000',
    label: '$10,000–$25,000',
  },
  {
    value: '25000-50000',
    label: '$25,000–$50,000',
  },
  {
    value: '50000-plus',
    label: '$50,000+',
  },
];

export const timelineOptions: SelectOption[] = [
  {
    value: 'as-soon-as-possible',
    label: 'As soon as possible',
  },
  {
    value: '1-3-months',
    label: 'Within 1–3 months',
  },
  {
    value: '3-6-months',
    label: 'Within 3–6 months',
  },
  {
    value: '6-12-months',
    label: 'Within 6–12 months',
  },
  {
    value: 'still-exploring',
    label: 'Still exploring',
  },
];