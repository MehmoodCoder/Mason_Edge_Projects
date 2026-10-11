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
      'Thoughtful development for residential, commercial and multi-occupancy projects—from early opportunity through delivery.',
    detail:
      'We bring a considered, end-to-end view to property development. Starting with the opportunity and the needs of the brief, we coordinate design and engineering input, assess delivery considerations and keep commercial realities in view. This connected approach helps clients make informed decisions as a project moves from concept toward completion.',
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
      'Commercial spaces built to suit the brief, with design, engineering and construction coordinated from the outset.',
    detail:
      'From early planning through construction and handover, we coordinate the people, programme and details that keep a commercial build moving. Steel, timber, cladding, tilt-up and precast construction each bring different considerations; we work with the project team to align the selected approach with the design and delivery requirements.',
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
      'Practical project leadership that brings design, engineering and construction teams together.',
    detail:
      'Good outcomes depend on good coordination. We provide hands-on construction management to help clients navigate scope, programme, procurement and quality with clear advice at every stage. By maintaining communication between the client, consultants and delivery team, we help keep priorities visible and decisions moving.',
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
      'Clear cost planning and estimating to help shape scope and support decisions throughout delivery.',
    detail:
      'We help establish a clear financial picture before and during delivery. Preliminary estimating and quantity take-offs support early planning, while ongoing cost review helps clients understand trade-offs, assess changes and keep decisions connected to the project brief.',
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
