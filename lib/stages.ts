import type { StageId } from "./store";

export interface StageMeta {
  id: StageId;
  numeral: string;
  index: number;
  slug: string;
  path: string;
  kicker: string; // short label
  title: string; // dutch title
  accent: string; // css color
  accentName: string;
}

export const STAGES: StageMeta[] = [
  {
    id: "start",
    numeral: "I",
    index: 1,
    slug: "",
    path: "/",
    kicker: "Het begin",
    title: "Het begin",
    accent: "var(--color-bordeaux)",
    accentName: "bordeaux",
  },
  {
    id: "manifest",
    numeral: "II",
    index: 2,
    slug: "manifest",
    path: "/manifest",
    kicker: "Het manifest",
    title: "Het manifest",
    accent: "var(--color-gold)",
    accentName: "gold",
  },
  {
    id: "stijl",
    numeral: "III",
    index: 3,
    slug: "stijl",
    path: "/stijl",
    kicker: "De stijl",
    title: "De stijl",
    accent: "var(--color-cobalt)",
    accentName: "cobalt",
  },
  {
    id: "studio",
    numeral: "IV",
    index: 4,
    slug: "studio",
    path: "/studio",
    kicker: "De studio & AI",
    title: "De studio & AI",
    accent: "var(--color-seventies)",
    accentName: "seventies",
  },
  {
    id: "website",
    numeral: "V",
    index: 5,
    slug: "website",
    path: "/website",
    kicker: "De website",
    title: "De website",
    accent: "var(--color-bordeaux)",
    accentName: "bordeaux",
  },
];

export const stageById = (id: StageId) => STAGES.find((s) => s.id === id)!;
export const nextStage = (id: StageId) => {
  const i = STAGES.findIndex((s) => s.id === id);
  return STAGES[i + 1];
};
