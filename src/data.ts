// Every fact on the site comes from Omer's CV. Client names are withheld under NDA.

export const contact = {
  email: 'omerbagprog@gmail.com',
  phone: '+20 120 045 4444',
  phoneHref: '+201200454444',
  city: 'Cairo, Egypt',
  linkedin: 'https://www.linkedin.com/in/omer-bag-a20562287',
  github: 'https://github.com/omerbag-9',
  cv: './Omer_Mustafa_CV.pdf'
};

export const stats = [
  { value: 6, label: 'client projects run side by side' },
  { value: 5, label: 'industries: health, banking, pharma, SaaS, e-commerce' },
  { value: 2, label: 'Claude AI skills published' },
  { value: 1, label: 'platform led from kickoff to launch' }
];

export type Project = {
  id: string;
  name: string;
  domain: string;
  region: string;
  role: string;
  problem: string;
  did: string[];
  outcome: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    id: 'health',
    name: 'Community mental health platform',
    domain: 'Healthcare',
    region: 'Canada',
    role: 'QA and delivery reporting',
    problem:
      'Several user roles, each allowed to see different records. In healthcare a permission bug is a privacy incident.',
    did: [
      'Designed role-based scenarios for what every role can and cannot see',
      'Tested complex business workflows end to end',
      'Sent the PM structured updates: done, open, next'
    ],
    outcome: 'Each delivery cycle was planned from one clear picture of the work.',
    tags: ['Role-based testing', 'Workflows', 'Delivery reports']
  },
  {
    id: 'banking',
    name: 'Banking web interface',
    domain: 'Finance',
    region: 'Canada and the US',
    role: 'UI and accessibility QA',
    problem:
      'A major bank’s web interface. Screens had to match the design exactly and work for blind and visually impaired customers.',
    did: [
      'Checked every screen against the Figma designs',
      'Tested accessibility for screen-reader users',
      'Verified each fix against the accessibility requirements'
    ],
    outcome: 'Design fidelity and accessibility were checked and verified, not assumed.',
    tags: ['Accessibility', 'Figma fidelity', 'UI testing']
  },
  {
    id: 'pharma',
    name: 'Pharmaceutical EDI and ERP integration',
    domain: 'Pharmaceuticals',
    region: 'Integration',
    role: 'Integration testing',
    problem: 'Orders and invoices move between a platform and an ERP as EDI files. A bad file stops an order silently.',
    did: [
      'Tested EDI files and the data exchange between both systems',
      'Validated integration behaviour against business workflows',
      'Retested fixes on both sides of the integration'
    ],
    outcome: 'Data moved between the two systems the way the business expected.',
    tags: ['EDI', 'ERP', 'Integration testing']
  },
  {
    id: 'vet',
    name: 'Veterinary pharmaceutical platform',
    domain: 'Veterinary pharma',
    region: 'Kickoff to launch',
    role: 'Delivery lead, QA and development',
    problem: 'A new platform that needed one owner for requirements, testing, fixes and the launch itself.',
    did: [
      'Owned requirements, defect resolution and release readiness',
      'Ran hands-on QA and shipped development fixes',
      'Wrote the stakeholder documentation for launch and handover'
    ],
    outcome: 'Taken from the first requirement to production launch.',
    tags: ['Delivery', 'QA', 'Development', 'Launch']
  },
  {
    id: 'charity',
    name: 'Charity and donor SaaS',
    domain: 'Non-profit SaaS',
    region: 'Charities and donors',
    role: 'Testing owner',
    problem: 'Donors leave when giving breaks. Every release could quietly break a journey that used to work.',
    did: [
      'Owned testing for the platform’s user workflows',
      'Checked every change for regressions',
      'Investigated defects with developers and contributed fixes'
    ],
    outcome: 'Releases shipped with existing donor journeys checked, not only the new feature.',
    tags: ['Regression', 'SaaS', 'Bug fixing']
  },
  {
    id: 'catering',
    name: 'Catering e-commerce',
    domain: 'E-commerce',
    region: 'Orders and payments',
    role: 'QA and development fixes',
    problem: 'A catering order is a promise for a date and an hour. A time-zone bug delivers lunch at the wrong time.',
    did: [
      'Tested ordering, payments and time-zone handling',
      'Investigated defects and supported the fixes',
      'Ran regression over every affected workflow'
    ],
    outcome: 'Orders, payments and times behaved the same for every customer.',
    tags: ['Payments', 'Time zones', 'Regression']
  }
];

export const experience = [
  {
    when: 'Jul 2025 — now',
    what: 'Technical Delivery Manager & Software Tester',
    where: 'Manage Wise (Orthoplex Solutions)',
    note: 'Six concurrent client projects for teams in Canada and North America.'
  },
  {
    when: 'Jun 2025',
    what: 'Bachelor of Computer Science',
    where: 'CHI University, Egypt',
    note: 'Software engineering, databases and the systems behind the products I test.'
  },
  {
    when: 'Certified',
    what: 'ISTQB Certified Tester, Foundation Level',
    where: 'ISTQB',
    note: 'Test design, boundary values, equivalence partitioning, defect lifecycle.'
  },
  {
    when: 'Completed',
    what: 'Full Stack Web Development',
    where: 'Route Academy',
    note: 'React, Node.js, MongoDB and the rest of the JavaScript stack.'
  },
  {
    when: 'In progress',
    what: 'PMP exam preparation',
    where: 'Project Management Professional',
    note: 'Scope, risk and stakeholder management, formalised.'
  }
];
