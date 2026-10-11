import {
  ClipboardList,
  HardHat,
  Landmark,
  Ruler,
} from 'lucide-react'

export const company = {
  name: 'Mason Edge Projects Pty Ltd',
  address: '136 Eaststone Ave, Wollert VIC 3750',
  email: 'masonedgeprojects@gmail.com',
  phone: '0450147335',
  phoneDisplay: '0450 147 335',
}

export const services = [
  {
    slug: 'property-developer',
    title: 'Property Development',
    navTitle: 'Property Developer',
    description:
      'Thoughtful development from the first feasibility study to the finished place people are proud to call their own.',
    detail:
      'We bring a considered, end-to-end view to property development. By aligning site potential, design intent, delivery planning and commercial realities early, we help turn opportunities into well-resolved places.',
    icon: Landmark,
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
    highlights: [
      'Site review and development feasibility',
      'Design coordination and consultant engagement',
      'Planning, approvals and delivery strategy',
      'Project oversight through to handover',
    ],
  },
  {
    slug: 'commercial-builder',
    title: 'Commercial Building',
    navTitle: 'Commercial Builder',
    description:
      'Commercial spaces delivered with practical thinking, careful coordination and a focus on lasting quality.',
    detail:
      'From early planning through construction and handover, we coordinate the people, programme and details that keep a commercial build moving. Our approach is collaborative, transparent and tailored to each project.',
    icon: HardHat,
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85',
    highlights: [
      'Constructability input and delivery planning',
      'Trade and consultant coordination',
      'Quality, safety and programme oversight',
      'Clear communication from start to finish',
    ],
  },
  {
    slug: 'construction-management',
    title: 'Construction Management',
    navTitle: 'Construction Management',
    description:
      'Experienced project leadership that brings teams together and keeps decisions moving in the right direction.',
    detail:
      'Good outcomes depend on good coordination. We provide hands-on construction management to help clients navigate scope, programme, procurement and quality with clear advice at every stage.',
    icon: ClipboardList,
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85',
    highlights: [
      'Programme and procurement management',
      'Project team and stakeholder coordination',
      'On-site progress and quality monitoring',
      'Reporting, risk management and handover',
    ],
  },
  {
    slug: 'quantity-surveying-and-estimating',
    title: 'Quantity Surveying & Estimating',
    navTitle: 'Quantity Surveying & Estimating',
    description:
      'Reliable cost insight and considered estimating to support confident decisions at every project stage.',
    detail:
      'We help establish a clear financial picture before and during delivery. Practical cost planning and estimating make it easier to understand trade-offs, manage change and protect the project brief.',
    icon: Ruler,
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85',
    highlights: [
      'Preliminary estimates and cost planning',
      'Quantity take-offs and tender reviews',
      'Budget monitoring and variation assessment',
      'Practical reporting to support decisions',
    ],
  },
]
