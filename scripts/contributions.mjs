// Writes dist/contributions.json from GitHub's own contribution calendar.
// Run with GH_CONTRIB_TOKEN set to a personal access token of the profile owner: queried by its owner, the
// calendar includes private contributions, so the total matches what the owner sees on github.com.
// Without the token it exits quietly and the site falls back to the public calendar.
import { writeFileSync } from 'node:fs';

const token = process.env.GH_CONTRIB_TOKEN;
if (!token) {
  console.log('GH_CONTRIB_TOKEN not set: skipping contributions.json');
  process.exit(0);
}

const query = `query { viewer { login contributionsCollection { contributionCalendar {
  totalContributions weeks { contributionDays { date contributionCount contributionLevel } } } } } }`;

const res = await fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: { Authorization: `bearer ${token}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({ query })
});
const json = await res.json();
const cal = json?.data?.viewer?.contributionsCollection?.contributionCalendar;
if (!res.ok || !cal) {
  console.error('GitHub API error:', JSON.stringify(json.errors ?? json).slice(0, 300));
  process.exit(1);
}

const levels = { NONE: 0, FIRST_QUARTILE: 1, SECOND_QUARTILE: 2, THIRD_QUARTILE: 3, FOURTH_QUARTILE: 4 };
const contributions = cal.weeks.flatMap((w) =>
  w.contributionDays.map((d) => ({ date: d.date, count: d.contributionCount, level: levels[d.contributionLevel] ?? 0 }))
);

writeFileSync(
  'dist/contributions.json',
  JSON.stringify({ total: cal.totalContributions, contributions, updated: new Date().toISOString() })
);
console.log(`contributions.json: ${cal.totalContributions} contributions for ${json.data.viewer.login}`);
