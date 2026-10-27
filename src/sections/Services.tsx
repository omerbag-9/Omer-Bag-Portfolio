import { useRef } from 'react';
import { services } from '../data';
import { useReveal } from '../hooks';

export default function Services() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section className="services" ref={root} id="services" aria-labelledby="services-title">
      <div className="services__head">
        <h2 className="head rv" id="services-title">
          What you can hire me for
        </h2>
        <p className="rv" style={{ ['--i' as string]: 1 }}>
          One person who can build the feature, test it, and own the release. Hire me for one part, or for the whole
          path from requirement to launch.
        </p>
      </div>

      {services.map((g) => (
        <table key={g.group} className="rv">
          <caption>{g.group}</caption>
          <thead className="sr-only">
            <tr>
              <th scope="col">Service</th>
              <th scope="col">What you get</th>
              <th scope="col">How it runs</th>
              <th scope="col">Tools</th>
            </tr>
          </thead>
          <tbody>
            {g.rows.map((r) => (
              <tr key={r.name}>
                <th scope="row" className="c1">
                  {r.name}
                </th>
                <td className="c2">{r.get}</td>
                <td className="c3">{r.how}</td>
                <td className="c4">{r.tools}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </section>
  );
}
