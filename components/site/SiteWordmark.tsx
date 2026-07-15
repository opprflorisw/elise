// Elise's note: "Studio graag in kleinere letterformaat en Verstelle zelfde formaat"
export function SiteWordmark({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "xl";
  className?: string;
}) {
  const scale =
    size === "xl"
      ? "text-[clamp(2.4rem,7vw,5.2rem)]"
      : size === "sm"
        ? "text-[1.05rem]"
        : "text-[clamp(1.4rem,3vw,1.9rem)]";
  return (
    <span className={`s-wordmark ${scale} ${className}`}>
      <span className="s-top">Studio</span>
      <span>Verstelle</span>
    </span>
  );
}
