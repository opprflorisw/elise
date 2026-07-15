export function Wordmark({
  className = "",
  size = "md",
  color,
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: string;
}) {
  const scale =
    size === "lg"
      ? "text-[clamp(2.2rem,6vw,4rem)]"
      : size === "sm"
        ? "text-[1.35rem]"
        : "text-[clamp(1.6rem,4vw,2.4rem)]";
  const topSize = size === "lg" ? "text-[0.7rem]" : size === "sm" ? "text-[0.5rem]" : "text-[0.55rem]";
  return (
    <span className={`wordmark inline-block ${scale} ${className}`} style={{ color }}>
      <span className={`top ${topSize} opacity-80`}>Studio</span>
      Verstelle
    </span>
  );
}
