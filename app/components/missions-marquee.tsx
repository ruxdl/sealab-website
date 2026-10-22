"use client";

import { useState } from "react";
import { Pause, Play } from "lucide-react";
import { exemplesMissions } from "../data/site";
import { Tag } from "./ui";

const rows = [exemplesMissions.slice(0, 7), exemplesMissions.slice(7)];

// Bandeau défilant d'exemples de missions, avec bouton pause (critère RGAA 13.8 / WCAG 2.2.2).
export function MissionsMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="overflow-hidden border-y border-line bg-ice py-14" aria-labelledby="exemples">
      <div className="wrap mb-8 flex flex-wrap items-center justify-between gap-4">
        <h2 id="exemples" className="font-display text-2xl font-semibold text-navy">
          Quelques exemples de missions
        </h2>
        <button
          type="button"
          aria-pressed={paused}
          onClick={() => setPaused((p) => !p)}
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-navy ring-1 ring-line transition hover:ring-navy/40 motion-reduce:hidden"
        >
          {paused ? <Play className="size-4" aria-hidden /> : <Pause className="size-4" aria-hidden />}
          {paused ? "Reprendre le défilement" : "Mettre en pause le défilement"}
        </button>
      </div>
      <div className="space-y-4">
        {rows.map((row, r) => (
          <div
            key={r}
            className={`group no-scrollbar flex motion-reduce:overflow-x-auto ${paused ? "overflow-x-auto" : ""}`}
          >
            <ul
              className="swell flex w-max shrink-0 gap-4 pr-4 group-focus-within:[animation-play-state:paused] group-hover:[animation-play-state:paused]"
              style={{
                animationDuration: `${60 + r * 12}s`,
                animationDirection: r ? "reverse" : "normal",
                animationPlayState: paused ? "paused" : undefined,
              }}
            >
              {[...row, ...row].map((m, i) => (
                <li
                  key={i}
                  aria-hidden={i >= row.length || undefined}
                  className="flex w-[19rem] shrink-0 flex-col items-start gap-3 rounded-2xl border border-line bg-white p-5 sm:w-[22rem]"
                >
                  <Tag>{m.pole}</Tag>
                  <span className="font-medium text-navy">{m.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
