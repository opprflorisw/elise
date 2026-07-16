import { Coach, VerderLezen, Achtergrond } from "@/components/research/Coach";
import { COACH } from "@/lib/coach";

/**
 * The whole coach layer for one chapter, in one line at the page foot.
 * Content lives in lib/coach.ts so the twelve chapters stay comparable —
 * a coach who says something different in each room is not a coach.
 */
export function ChapterCoach({ slug }: { slug: string }) {
  const c = COACH[slug];
  if (!c) return null;
  return (
    <>
      <Coach doen={c.doen} denken={c.denken} />
      <VerderLezen items={c.lezen} />
      <Achtergrond notes={c.notes} />
    </>
  );
}
