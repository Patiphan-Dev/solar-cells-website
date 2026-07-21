import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

export default function Logo({ dark = false }: { dark?: boolean }) {
  const textColor = dark ? "text-white" : "text-navy-950";

  return (
    <Link href="/" className="flex items-center gap-2 shrink-0">
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="34" height="34" rx="8" fill="#0B2545" />
        <path d="M17 6L20.5 14H27L21.5 19L23.5 27L17 22.5L10.5 27L12.5 19L7 14H13.5L17 6Z" fill="#F2A71B" />
      </svg>
      <span className={`font-heading font-bold text-lg leading-tight ${textColor}`}>
        {BUSINESS.shortName}
      </span>
    </Link>
  );
}
