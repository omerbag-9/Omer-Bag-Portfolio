import { LogoLoop, type LogoItem } from '../bits/LogoLoop';
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiPostman,
  SiFigma,
  SiGithub,
  SiGithubactions,
  SiClickup,
  SiMongodb,
  SiMysql,
  SiSelenium,
  SiClaude,
  SiHtml5,
  SiCss3,
  SiGit
} from 'react-icons/si';
import { LuDrama } from 'react-icons/lu';

const tools: LogoItem[] = [
  { node: <SiReact />, title: 'React' },
  { node: <SiNodedotjs />, title: 'Node.js' },
  { node: <SiTypescript />, title: 'TypeScript' },
  { node: <SiJavascript />, title: 'JavaScript' },
  { node: <LuDrama />, title: 'Playwright' },
  { node: <SiSelenium />, title: 'Selenium' },
  { node: <SiPostman />, title: 'Postman' },
  { node: <SiClaude />, title: 'Claude' },
  { node: <SiFigma />, title: 'Figma' },
  { node: <SiClickup />, title: 'ClickUp' },
  { node: <SiGithub />, title: 'GitHub' },
  { node: <SiGithubactions />, title: 'GitHub Actions' },
  { node: <SiGit />, title: 'Git' },
  { node: <SiMongodb />, title: 'MongoDB' },
  { node: <SiMysql />, title: 'MySQL' },
  { node: <SiHtml5 />, title: 'HTML' },
  { node: <SiCss3 />, title: 'CSS' }
];

export default function Stack() {
  return (
    <section className="stack" aria-labelledby="stack-title">
      <h2 className="section-title wrap" id="stack-title">
        Tools I use every day
      </h2>
      <div className="stack__loop">
        <LogoLoop
          logos={tools}
          speed={70}
          logoHeight={34}
          gap={56}
          labels="inline"
          fadeOut
          fadeOutColor="#0a0a0a"
          scaleOnHover
          pauseOnHover
          ariaLabel="Tools and technologies"
        />
      </div>
      <div className="stack__loop">
        <LogoLoop
          logos={[...tools].reverse()}
          direction="right"
          speed={50}
          logoHeight={34}
          gap={56}
          labels="inline"
          fadeOut
          fadeOutColor="#0a0a0a"
          scaleOnHover
          pauseOnHover
          ariaLabel="Tools and technologies, second row"
        />
      </div>
    </section>
  );
}
