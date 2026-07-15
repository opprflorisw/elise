"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export type StageId = "start" | "manifest" | "stijl" | "studio" | "website";
export type FeedbackType = "choice" | "reaction" | "comment" | "text";

export interface FeedbackItem {
  stageId: StageId;
  sectionId: string;
  itemId?: string;
  type: FeedbackType;
  value: string | string[];
  label: string;
  ts: number;
}

export interface JourneyState {
  items: Record<string, FeedbackItem>;
  visited: StageId[];
  startedAt: number;
}

const STORAGE_KEY = "elise-journey-v1";

const empty: JourneyState = { items: {}, visited: [], startedAt: 0 };

function keyOf(stageId: string, sectionId: string, itemId?: string) {
  return itemId ? `${stageId}.${sectionId}.${itemId}` : `${stageId}.${sectionId}`;
}

interface Ctx {
  state: JourneyState;
  ready: boolean;
  set: (i: Omit<FeedbackItem, "ts">) => void;
  clearItem: (stageId: string, sectionId: string, itemId?: string) => void;
  get: (stageId: string, sectionId: string, itemId?: string) => FeedbackItem | undefined;
  visit: (s: StageId) => void;
  reset: () => void;
  count: number;
}

const JourneyCtx = createContext<Ctx | null>(null);

export function JourneyProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<JourneyState>(empty);
  const [ready, setReady] = useState(false);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // hydrate
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as JourneyState;
        setState({ ...empty, ...parsed, startedAt: parsed.startedAt || Date.now() });
      } else {
        setState({ ...empty, startedAt: Date.now() });
      }
    } catch {
      setState({ ...empty, startedAt: Date.now() });
    }
    setReady(true);
  }, []);

  // persist (debounced)
  useEffect(() => {
    if (!ready) return;
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch {
        /* quota / private mode — silently ignore */
      }
    }, 250);
  }, [state, ready]);

  const set = useCallback((i: Omit<FeedbackItem, "ts">) => {
    setState((prev) => ({
      ...prev,
      items: {
        ...prev.items,
        [keyOf(i.stageId, i.sectionId, i.itemId)]: { ...i, ts: Date.now() },
      },
    }));
  }, []);

  const clearItem = useCallback((stageId: string, sectionId: string, itemId?: string) => {
    setState((prev) => {
      const next = { ...prev.items };
      delete next[keyOf(stageId, sectionId, itemId)];
      return { ...prev, items: next };
    });
  }, []);

  const get = useCallback(
    (stageId: string, sectionId: string, itemId?: string) =>
      state.items[keyOf(stageId, sectionId, itemId)],
    [state.items]
  );

  const visit = useCallback((s: StageId) => {
    setState((prev) =>
      prev.visited.includes(s) ? prev : { ...prev, visited: [...prev.visited, s] }
    );
  }, []);

  const reset = useCallback(() => {
    setState({ ...empty, startedAt: Date.now() });
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      state,
      ready,
      set,
      clearItem,
      get,
      visit,
      reset,
      count: Object.keys(state.items).length,
    }),
    [state, ready, set, clearItem, get, visit, reset]
  );

  return <JourneyCtx.Provider value={value}>{children}</JourneyCtx.Provider>;
}

export function useJourney() {
  const ctx = useContext(JourneyCtx);
  if (!ctx) throw new Error("useJourney must be used within JourneyProvider");
  return ctx;
}
