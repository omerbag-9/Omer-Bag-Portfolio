import { useEffect, useRef, useState } from 'react';
import { projects, type Project } from '../data';
import { workShots } from '../fragments';
import { useReveal } from '../hooks';

export default function Work() {
  const root = useRef<HTMLElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState<Project | null>(null);
  useReveal(root);

  // The name crossing the middle of the screen sets the picture in the held square.
  useEffect(() => {
    const names = root.current?.querySelectorAll<HTMLElement>('.work__name');
    if (!names?.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setCurrent(Number((e.target as HTMLElement).dataset.index));
        });
      },
      { rootMargin: '-49% 0px -49% 0px' }
    );
    names.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (open) dialog.current?.showModal();
  }, [open]);

  const p = projects[current];
  const OpenShot = open ? workShots[open.id] : null;

  return (
    <section className="work" ref={root} id="work" aria-labelledby="work-title">
      <div className="work__run">
      <div className="work__frame-wrap" aria-hidden="true">
        <p className="work__fact">
          <b>{p.role}</b>
          {p.domain}
        </p>
        <div className="work__frame">
          {projects.map((proj, i) => {
            const Shot = workShots[proj.id];
            return (
              <div className="work__shot" data-on={i === current} key={proj.id}>
                <Shot />
              </div>
            );
          })}
        </div>
        <p className="work__fact work__fact--right">
          <b>{p.region}</b>
          2025 to now
        </p>
      </div>

      <div className="work__list">
        <h2 className="display" id="work-title">
          Client work
        </h2>
        <ul>
          {projects.map((proj, i) => (
            <li key={proj.id}>
              <button
                type="button"
                className="work__name display"
                data-index={i}
                data-on={i === current}
                onClick={() => setOpen(proj)}
                aria-label={`${proj.name}: ${proj.domain}, open case notes`}
              >
                {proj.name}
              </button>
            </li>
          ))}
        </ul>
        <p className="work__mobile-facts" aria-live="polite">
          <b>{p.role}</b> · {p.domain} · {p.region}
        </p>
      </div>
      </div>
      <p className="work__note rv">
          Six projects for a Canadian software house, run side by side. Clients are under NDA, so their names and
          screens stay private: the fragments show the kind of check I ran, not their product. Select a name to read
          the case.
        </p>

      <dialog
        className="case"
        ref={dialog}
        onClose={() => setOpen(null)}
        onClick={(e) => {
          if (e.target === dialog.current) dialog.current?.close();
        }}
        aria-labelledby="case-title"
      >
        {open && OpenShot && (
          <>
            <button type="button" className="btn btn--ghost case__close" onClick={() => dialog.current?.close()}>
              Close
            </button>
            <div className="case__inner">
              <div>
                <h2 className="display" id="case-title">
                  {open.name}
                </h2>
                <p className="case__meta">
                  {open.domain} · {open.region} · {open.role}
                </p>
                <p>{open.context}</p>
                <h3>What was at stake</h3>
                <p>{open.risk}</p>
                <h3>What I did</h3>
                <ul>
                  {open.did.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <p className="case__changed">{open.changed}</p>
              </div>
              <figure className="case__shot">
                <OpenShot />
                <figcaption>The kind of artefact this project ran on. Client details withheld.</figcaption>
              </figure>
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}
