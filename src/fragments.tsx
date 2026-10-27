import type { ReactNode } from 'react';
import CountUp from './bits/CountUp';

// Cropped interface fragments: the working artefacts of each kind of job, built in HTML.

// Drawn marks instead of the ✓ and ✕ glyphs, which render as emoji on some systems.
export function Check() {
  return (
    <svg className="mark ok" viewBox="0 0 12 12" width="0.9em" height="0.9em" aria-label="pass" role="img">
      <path d="M1.5 6.5 4.5 9.5 10.5 2.5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function Cross() {
  return (
    <svg className="mark bad" viewBox="0 0 12 12" width="0.9em" height="0.9em" aria-label="fail" role="img">
      <path d="M2 2 10 10M10 2 2 10" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function Window({ title, meta, dark, children }: { title: string; meta?: string; dark?: boolean; children: ReactNode }) {
  return (
    <div className={`ui${dark ? ' ui--dark' : ''}`} data-ui>
      <div className="ui__bar">
        <span>{title}</span>
        {meta && <span>{meta}</span>}
      </div>
      <div className="ui__body">{children}</div>
    </div>
  );
}

/* ---------- Hero panels ---------- */

export function CodeShot() {
  return (
    <Window title="src/router.ts" meta="TypeScript" dark>
      <pre>
        <code>
          <span className="dim">{'// read the brief, pick the skills that fit'}</span>
          {'\nexport function route(brief: string) {\n'}
          {'  const text = normalise(brief);\n'}
          {'  return skills\n'}
          {'    .map((s) => ({ s, hits: count(s, text) }))\n'}
          {'    .filter((x) => x.hits > 0)\n'}
          {'    .sort((a, b) => b.hits - a.hits)\n'}
          {'    .map((x) => x.s);\n'}
          {'}\n\n'}
          <span className="dim">{'// draft the email, keep the brief intact'}</span>
          {'\nexport function mailto(brief, picked) {\n'}
          {'  const plan = picked.map(toStep);\n'}
          {'  return draft(brief, plan);\n'}
          {'}'}
        </code>
      </pre>
    </Window>
  );
}

export const siteTests = [
  'first screen says who and what',
  'start a project reaches the router',
  'every project opens its case notes',
  'a brief routes to matching skills',
  'email draft carries the brief',
  'no horizontal scroll on a phone',
  'reduced motion keeps all content',
  'CV, LinkedIn and GitHub links resolve'
];

export function TestShot({ big }: { big?: boolean }) {
  return (
    <Window title="npx playwright test" meta="this site's own suite" dark>
      <pre>
        <code>
          {`Running ${siteTests.length} tests using 3 workers\n\n`}
          {siteTests.map((t) => (
            <span key={t}>
              {'  '}
              <Check />
              {' ' + t + '\n'}
            </span>
          ))}
          {'\n'}
          <span className="ok">{`  ${siteTests.length} passed`}</span>
          {big ? '\n\n  Runs on every push with GitHub Actions.' : ''}
        </code>
      </pre>
    </Window>
  );
}

export function UpdateShot() {
  return (
    <Window title="Weekly delivery update" meta="sample format">
      <div className="row">
        <b>Done</b>
        <span>Checkout regression passed on staging. Role permissions verified for all four roles.</span>
      </div>
      <div className="row">
        <b>Open</b>
        <span>
          <span className="tag tag--red">High</span> Refund email not sent when the order is edited.
        </span>
      </div>
      <div className="row">
        <b>Blockers</b>
        <span>Payment sandbox keys pending from the client.</span>
      </div>
      <div className="row">
        <b>Next</b>
        <span>Retest the refund fix, then release sign-off on Thursday.</span>
      </div>
    </Window>
  );
}

export function SkillShot() {
  return (
    <Window title="skill-router/SKILL.md" meta="published">
      <pre>
        <code>
          {'---\nname: skill-router\ndescription: ALWAYS load this on the\n  FIRST task of every session. It routes\n  tasks to the installed skills so the\n  user never has to name one.\n---\n\n'}
          <b>{'# Skill Router\n\n'}</b>
          {'1. Read the task.\n2. Scan the available skills.\n3. Pick every skill that fits.\n4. Invoke them before the work.\n5. Say it in one line.\n6. Do the task.'}
        </code>
      </pre>
    </Window>
  );
}

/* ---------- Intro: business artefacts ---------- */

export function CriteriaShot() {
  return (
    <Window title="Acceptance criteria" meta="before build starts">
      <div className="row">
        <b>Given</b>
        <span>a counsellor is signed in</span>
      </div>
      <div className="row">
        <b>When</b>
        <span>they open a client they are not assigned to</span>
      </div>
      <div className="row">
        <b>Then</b>
        <span>the session notes stay hidden and the attempt is logged</span>
      </div>
    </Window>
  );
}

export function FiguresShot() {
  return (
    <Window title="Since July 2025" meta="Manage Wise">
      <div className="figures">
        <div>
          <strong>
            <CountUp to={6} duration={1.4} />
          </strong>
          client projects at once
        </div>
        <div>
          <strong>
            <CountUp to={5} duration={1.4} />
          </strong>
          industries
        </div>
        <div>
          <strong>
            <CountUp to={2} duration={1.4} />
          </strong>
          published AI skills
        </div>
        <div>
          <strong>
            <CountUp to={1} duration={1.4} />
          </strong>
          platform led to launch
        </div>
      </div>
    </Window>
  );
}

export function RiskShot() {
  return (
    <Window title="Risk log" meta="named up front">
      <table>
        <thead>
          <tr>
            <th>Risk</th>
            <th>Impact</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ERP sandbox late</td>
            <td>
              <span className="tag tag--red">High</span>
            </td>
            <td>Client IT</td>
          </tr>
          <tr>
            <td>Scope of v1 unclear</td>
            <td>
              <span className="tag">Med</span>
            </td>
            <td>Omer</td>
          </tr>
          <tr>
            <td>No test data for roles</td>
            <td>
              <span className="tag">Med</span>
            </td>
            <td>Omer</td>
          </tr>
        </tbody>
      </table>
    </Window>
  );
}

/* ---------- Work: one artefact per project ---------- */

function PermissionShot() {
  const rows: [string, string, string, string][] = [
    ['Client', 'own', '—', '—'],
    ['Counsellor', 'assigned', 'assigned', '—'],
    ['Intake staff', 'intake', 'none', '—'],
    ['Admin', 'all', 'none', 'all']
  ];
  return (
    <Window title="Role permission matrix" meta="tested per role">
      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Profile</th>
            <th>Notes</th>
            <th>Reports</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]}>
              {r.map((c, i) => (
                <td key={i}>{c === 'none' ? <Cross /> : c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ marginTop: 10 }}>
        <span className="tag tag--green">Verified</span> Intake staff can no longer open session notes.
      </p>
    </Window>
  );
}

function A11yShot() {
  return (
    <Window title="Defect · accessibility" meta="severity high">
      <h4>“Transfer” button has no accessible name</h4>
      <div className="row">
        <b>Steps</b>
        <span>Screen reader on. Tab to the transfer form. Focus the main button.</span>
      </div>
      <div className="row">
        <b>Actual</b>
        <span>Announced as “button”.</span>
      </div>
      <div className="row">
        <b>Expected</b>
        <span>Announced as “Transfer funds, button”.</span>
      </div>
      <p style={{ marginTop: 10 }}>
        <span className="tag tag--green">Fixed and verified</span>
      </p>
    </Window>
  );
}

function EdiShot() {
  return (
    <Window title="850 purchase order" meta="EDI → ERP">
      <pre>
        <code>
          {'ST*850*0001~\nBEG*00*SA*PO-1042**20250918~\nPO1*1*24*EA*12.50**VC*AMX-250~\nPO1*2*10*EA*31.00**VC*VAC-100~\nCTT*2~\nSE*6*0001~\n\n'}
          <Check />
          {' segment count matches SE01\n'}
          <Check />
          {' line totals match the ERP order\n'}
          <Cross />
          {' unit of measure EA → BX, sent back'}
        </code>
      </pre>
    </Window>
  );
}

function LaunchShot() {
  const items = [
    'Requirements signed off',
    'Regression suite passed',
    'Critical defects open: 0',
    'Stakeholder guide delivered',
    'Go-live approved'
  ];
  return (
    <Window title="Release readiness" meta="production launch">
      <ul className="check">
        {items.map((i) => (
          <li key={i}>
            <span>{i}</span>
            <Check />
          </li>
        ))}
      </ul>
    </Window>
  );
}

function RegressionShot() {
  const items: [string, boolean][] = [
    ['One-off donation', true],
    ['Monthly gift', true],
    ['Edit a recurring gift', false],
    ['Donation receipt email', true],
    ['Charity dashboard totals', true]
  ];
  return (
    <Window title="Regression run · donor journeys" meta="before release">
      <ul className="check">
        {items.map(([name, ok]) => (
          <li key={name}>
            <span>{name}</span>
            <span>
              {ok ? <Check /> : <Cross />} {ok ? 'pass' : 'failed, fixed'}
            </span>
          </li>
        ))}
      </ul>
    </Window>
  );
}

function TimezoneShot() {
  return (
    <Window title="Test cases · time zones" meta="ordering">
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Kitchen</th>
            <th>Slot shown</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>UTC−5</td>
            <td>UTC−5</td>
            <td>12:30</td>
            <td className="ok">pass</td>
          </tr>
          <tr>
            <td>UTC−8</td>
            <td>UTC−5</td>
            <td>09:30</td>
            <td className="ok">pass</td>
          </tr>
          <tr>
            <td>UTC+2</td>
            <td>UTC−5</td>
            <td>19:30</td>
            <td className="bad">fail</td>
          </tr>
        </tbody>
      </table>
      <p style={{ marginTop: 10 }}>Slot shown in the kitchen’s zone, not the customer’s.</p>
    </Window>
  );
}

export const workShots: Record<string, () => JSX.Element> = {
  health: PermissionShot,
  banking: A11yShot,
  pharma: EdiShot,
  vet: LaunchShot,
  charity: RegressionShot,
  catering: TimezoneShot
};

/* ---------- AI skills ---------- */

export function GuideShot() {
  return (
    <Window title="User guide · Approve an order" meta="generated">
      <h4>Step 3 of 5: Approve the order</h4>
      <p className="dim" style={{ marginBottom: 10 }}>
        Open Orders, select the order, then choose Approve.
      </p>
      <div style={{ background: '#dad9d5', padding: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <b>Order 1042</b>
          <span>Pending</span>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <span className="tag tag--red">Approve</span>
          <span className="tag" style={{ background: '#fff' }}>
            Reject
          </span>
        </div>
      </div>
    </Window>
  );
}

export function CasesShot() {
  return (
    <Window title="Criteria → test cases" meta="drafted with Claude, reviewed by me">
      <ul className="check">
        <li>
          <span>Assigned counsellor sees notes</span>
          <span className="dim">positive</span>
        </li>
        <li>
          <span>Unassigned counsellor is blocked</span>
          <span className="dim">negative</span>
        </li>
        <li>
          <span>Blocked attempt is logged</span>
          <span className="dim">audit</span>
        </li>
        <li>
          <span>Access removed on reassignment</span>
          <span className="dim">edge</span>
        </li>
      </ul>
    </Window>
  );
}

export function TeamSkillShot() {
  return (
    <Window title="your-team/SKILL.md" meta="next">
      <pre>
        <code>
          {'---\nname: release-notes\ndescription: Turn merged pull requests\n  into release notes your clients\n  can read.\n---\n\n'}
          <span className="dim">{'# What your team repeats most,\n# written once.'}</span>
        </code>
      </pre>
    </Window>
  );
}
