interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className="font-heading text-sm font-semibold uppercase tracking-wide text-amber-600">{eyebrow}</p>
      )}
      <h2 className="mt-2 text-3xl font-heading font-bold text-navy-950 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base text-slate-600">{description}</p>}
    </div>
  );
}
