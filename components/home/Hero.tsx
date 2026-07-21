import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { BUSINESS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-amber-500), transparent 70%)" }}
        aria-hidden="true"
      />

      <Container className="relative grid gap-10 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-amber-500">
            รับติดตั้ง + จำหน่ายอุปกรณ์โซล่าเซลล์
          </p>
          <h1 className="mt-4 text-4xl font-heading font-bold leading-tight sm:text-5xl">
            ลดค่าไฟสูงสุด 70% ด้วยระบบโซล่าเซลล์ครบวงจร
          </h1>
          <p className="mt-6 max-w-lg text-slate-300">
            {BUSINESS.tagline} ทีมช่างมาตรฐาน ดำเนินการขออนุญาตการไฟฟ้าให้ฟรี พร้อมรับประกันงานติดตั้งนาน 25 ปี
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" variant="primary">ประเมินราคาฟรี</Button>
            <Button href="/portfolio" variant="ghost" className="!border-white/30 !text-white hover:!bg-white/10">
              ดูผลงานติดตั้ง
            </Button>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10">
          <svg viewBox="0 0 400 300" className="h-full w-full" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ภาพประกอบหลังคาติดตั้งแผงโซล่าเซลล์">
            <rect width="400" height="300" fill="#0b2545" />
            <polygon points="0,220 200,110 400,220 400,300 0,300" fill="#123a66" />
            {Array.from({ length: 4 }).map((_, row) =>
              Array.from({ length: 5 }).map((_, col) => (
                <rect
                  key={`${row}-${col}`}
                  x={70 + col * 55}
                  y={140 + row * 22}
                  width={48}
                  height={18}
                  fill="#1b4d80"
                  stroke="#f2a71b"
                  strokeWidth="1"
                  opacity={0.9}
                />
              ))
            )}
            <circle cx="330" cy="70" r="34" fill="#f2a71b" />
          </svg>
          <span className="absolute bottom-3 left-3 rounded bg-black/50 px-2 py-1 text-xs text-white">
            ภาพประกอบตัวอย่าง (แก้เป็นภาพผลงานจริงทีหลัง)
          </span>
        </div>
      </Container>
    </section>
  );
}
