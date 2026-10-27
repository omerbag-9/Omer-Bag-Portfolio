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

export type Project = {
  id: string;
  name: string;
  domain: string;
  region: string;
  role: string;
  context: string;
  risk: string;
  did: string[];
  changed: string;
};

export const projects: Project[] = [
  {
    id: 'health',
    name: 'Mental health',
    domain: 'Healthcare',
    region: 'Canada',
    role: 'QA and delivery reporting',
    context:
      'A community mental health platform with several user roles, each seeing different records and workflows.',
    risk: 'In healthcare, a permission bug is a privacy incident. The wrong role seeing the wrong file is the failure that matters.',
    did: [
      'Designed role-based test scenarios that check what every role can see and do, and what it must not.',
      'Tested the complex business workflows end to end, across roles.',
      'Wrote structured updates for the project manager: completed work, open issues, next delivery steps.'
    ],
    changed: 'The project manager planned each cycle from one clear picture of done, open and next.'
  },
  {
    id: 'banking',
    name: 'Banking UI',
    domain: 'Finance',
    region: 'Canada and the US',
    role: 'UI and accessibility QA',
    context: 'The web interface of a major financial institution serving customers in Canada and the United States.',
    risk: 'A bank is judged on trust. A screen that drifts from the design, or locks out a blind customer, is a trust problem, not a cosmetic one.',
    did: [
      'Checked every screen against the Figma designs and reported visual drift as actionable defects.',
      'Tested with blind and visually impaired users in mind, documenting each usability barrier.',
      'Verified the fixes against the project’s accessibility requirements.'
    ],
    changed: 'Design fidelity and accessibility were checked and verified, not assumed.'
  },
  {
    id: 'pharma',
    name: 'Pharma EDI',
    domain: 'Pharmaceuticals',
    region: 'EDI and ERP',
    role: 'Integration testing',
    context: 'A pharmaceutical platform exchanging EDI files with an enterprise resource planning (ERP) system.',
    risk: 'When an EDI file is malformed, an order or an invoice stops silently between two systems.',
    did: [
      'Tested the EDI files and the data exchange between the platform and the ERP.',
      'Validated integration behaviour against the business workflows it serves.',
      'Reported defects and retested the fixes on both sides of the integration.'
    ],
    changed: 'Data moved between the two systems the way the business expected it to.'
  },
  {
    id: 'vet',
    name: 'Vet pharma',
    domain: 'Veterinary pharmaceuticals',
    region: 'Kickoff to launch',
    role: 'Delivery lead, QA and development',
    context: 'A veterinary pharmaceutical platform I led from project inception to production launch.',
    risk: 'A launch slips when requirements, testing and fixes are owned by nobody in particular.',
    did: [
      'Owned delivery: requirements, testing, defect resolution and release readiness.',
      'Ran hands-on QA and contributed development fixes alongside the team.',
      'Wrote the stakeholder documentation that carried launch and handover.'
    ],
    changed: 'The platform went from first requirement to production with one owner for delivery.'
  },
  {
    id: 'charity',
    name: 'Charity SaaS',
    domain: 'Non-profit SaaS',
    region: 'Charities and donors',
    role: 'Testing owner',
    context: 'A SaaS platform serving charities and the donors who fund them.',
    risk: 'Donors leave when giving is awkward or broken. Every release can quietly break a flow that used to work.',
    did: [
      'Owned testing for the platform’s user workflows.',
      'Checked every change for regressions before it reached users.',
      'Investigated defects with the developers, contributed fixes and verified the behaviour.'
    ],
    changed: 'Releases shipped with the existing donor journeys checked, not just the new feature.'
  },
  {
    id: 'catering',
    name: 'Catering',
    domain: 'E-commerce',
    region: 'Orders and payments',
    role: 'QA and development fixes',
    context: 'A catering e-commerce system: ordering, payments and delivery times across time zones.',
    risk: 'A catering order is a promise for a date and an hour. A time-zone bug delivers lunch at the wrong time.',
    did: [
      'Tested the ordering workflows, payment behaviour and time-zone handling.',
      'Investigated defects and supported the development fixes.',
      'Ran regression testing over every affected workflow.'
    ],
    changed: 'Orders, payments and times behaved the same for every customer, wherever they ordered from.'
  }
];

export type Service = { name: string; get: string; how: string; tools: string };
export type ServiceGroup = { group: string; rows: Service[] };

export const services: ServiceGroup[] = [
  {
    group: 'Build',
    rows: [
      { name: 'Web features', get: 'Working, tested feature', how: 'React and Node.js', tools: 'TypeScript, MongoDB' },
      { name: 'Fixes on a live product', get: 'Root cause, fix, retest', how: 'Alongside your team', tools: 'Git, GitHub' },
      { name: 'Landing and portfolio sites', get: 'Designed, animated, fast', how: 'Fixed scope', tools: 'React, Vite, GSAP' }
    ]
  },
  {
    group: 'Test',
    rows: [
      { name: 'Functional and regression', get: 'Test plan, cases, defect log', how: 'Per release', tools: 'ClickUp, test design' },
      { name: 'End-to-end automation', get: 'A suite in your repo', how: 'Runs on every push', tools: 'Playwright, GitHub Actions' },
      { name: 'API testing', get: 'Collections and reports', how: 'Per endpoint', tools: 'Postman' },
      { name: 'Accessibility', get: 'Barriers found and verified', how: 'Screen-reader checks', tools: 'WCAG, Figma' },
      { name: 'EDI and ERP integrations', get: 'Data exchange validated', how: 'Both sides tested', tools: 'SQL, EDI files' }
    ]
  },
  {
    group: 'Deliver',
    rows: [
      { name: 'Technical delivery', get: 'Weekly delivery updates', how: 'Done, open, blockers, next', tools: 'ClickUp, Agile, Scrum' },
      { name: 'Requirements to criteria', get: 'Acceptance criteria', how: 'Before build starts', tools: 'Backlog, SDLC' },
      { name: 'Launch readiness', get: 'Release sign-off', how: 'Through handover', tools: 'Risk log, STLC' }
    ]
  },
  {
    group: 'Automate with AI',
    rows: [
      { name: 'Custom Claude skills', get: 'A skill your team reuses', how: 'Written and tested', tools: 'Claude, SKILL.md' },
      { name: 'User guides on demand', get: 'Guides with screenshots', how: 'Generated per release', tools: 'Claude skills' },
      { name: 'AI in your workflow', get: 'Fewer manual steps', how: 'Set up with your team', tools: 'Claude Code' }
    ]
  }
];

export const credentials = [
  'ISTQB Certified Tester',
  'BSc Computer Science',
  'PMP exam preparation',
  'Full stack web development',
  'Playwright',
  'Postman',
  'React',
  'Node.js',
  'Claude skills'
];
