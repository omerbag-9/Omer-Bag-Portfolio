// A small, honest version of the Skill Router idea: read the brief, pick the skills that fit.

export type SkillId = 'build' | 'test' | 'automation' | 'access' | 'integration' | 'deliver' | 'ai';

export type Skill = { id: SkillId; name: string; words: string[]; step: string };

export const skills: Skill[] = [
  {
    id: 'build',
    name: 'Build',
    words: ['build', 'develop', 'feature', 'website', 'web app', 'app', 'react', 'node', 'frontend', 'backend', 'landing', 'mvp', 'dashboard', 'page', 'fix', 'code', 'portfolio', 'redesign'],
    step: 'Agree the first feature, build it in a branch you can review, ship it behind a test.'
  },
  {
    id: 'test',
    name: 'Test',
    words: ['bug', 'bugs', 'broken', 'break', 'crash', 'quality', 'qa', 'test', 'testing', 'regression', 'release', 'error', 'issue', 'issues', 'unstable', 'customers complain'],
    step: 'Write a test plan from your requirements, run it, and log every defect with steps to reproduce.'
  },
  {
    id: 'automation',
    name: 'Automation',
    words: ['automate', 'automation', 'playwright', 'selenium', 'e2e', 'end to end', 'end-to-end', 'ci', 'pipeline', 'every release', 'manual testing', 'repetitive'],
    step: 'Cover the critical journeys with Playwright and run them on every push with GitHub Actions.'
  },
  {
    id: 'access',
    name: 'Accessibility',
    words: ['accessibility', 'accessible', 'a11y', 'wcag', 'blind', 'screen reader', 'visually', 'contrast', 'figma', 'design', 'ui', 'ux'],
    step: 'Audit the key screens with a screen reader and against the designs; verify each fix.'
  },
  {
    id: 'integration',
    name: 'Integrations',
    words: ['api', 'apis', 'integration', 'integrations', 'erp', 'edi', 'payment', 'payments', 'stripe', 'sync', 'data', 'import', 'export', 'webhook', 'time zone', 'timezone'],
    step: 'Map the data between the systems, test the exchange both ways, and retest each fix on both sides.'
  },
  {
    id: 'deliver',
    name: 'Delivery',
    words: ['deadline', 'launch', 'late', 'delay', 'delays', 'manage', 'project', 'requirements', 'scope', 'stakeholder', 'stakeholders', 'team', 'deliver', 'delivery', 'plan', 'handover', 'client', 'clients', 'pm', 'priorities'],
    step: 'Turn the requirements into acceptance criteria, name the risks, and send a delivery update every week.'
  },
  {
    id: 'ai',
    name: 'AI skills',
    words: ['ai', 'claude', 'llm', 'gpt', 'agent', 'skill', 'skills', 'prompt', 'documentation', 'docs', 'guide', 'guides', 'workflow', 'automate docs'],
    step: 'Find the step your team repeats most and turn it into a Claude skill they can reuse.'
  }
];

export const example =
  'We launch our booking app in six weeks. Releases keep breaking payments and nobody owns the testing.';

export function route(brief: string): Skill[] {
  const text = ` ${brief.toLowerCase().replace(/[^a-z0-9\s-]/g, ' ')} `;
  if (text.trim().length < 3) return [];
  const scored = skills
    .map((s) => ({ s, hits: s.words.filter((w) => text.includes(` ${w} `) || text.includes(` ${w}s `)).length }))
    .filter((x) => x.hits > 0)
    .sort((a, b) => b.hits - a.hits);
  return scored.map((x) => x.s);
}

export function mailto(brief: string, picked: Skill[]): string {
  const subject = 'Project brief from your portfolio';
  const plan = picked.map((s) => `- ${s.name}: ${s.step}`).join('\n');
  const body = `Hi Omer,\n\n${brief.trim()}\n\nRouted to: ${picked.map((s) => s.name).join(', ') || 'not sure yet'}\n${plan}\n\nThanks,\n`;
  return `mailto:omerbagprog@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
