"use client";

import { useState } from "react";
import { BUSINESS } from "@/lib/constants";

export default function LeadForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [detail, setDetail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const subject = encodeURIComponent(`ขอใบเสนอราคาโซล่าเซลล์ จากคุณ ${name || "-"}`);
    const body = encodeURIComponent(
      `ชื่อ: ${name}\nเบอร์โทร: ${phone}\nรายละเอียด: ${detail}`
    );
    window.location.href = `mailto:${BUSINESS.email.split(" ")[0]}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-slate-200 p-6 sm:p-8">
      <h3 className="font-heading text-xl font-bold text-navy-950">ส่งข้อมูลขอใบเสนอราคา</h3>
      <p className="text-sm text-slate-500">
        กดส่งแล้วระบบจะเปิดอีเมลของคุณพร้อมข้อมูลกรอกไว้ให้ กด &quot;ส่ง&quot; อีกครั้งในแอปอีเมลเพื่อให้ข้อมูลถึงเรา
      </p>

      <label className="block">
        <span className="text-sm font-medium text-navy-900">ชื่อ-นามสกุล</span>
        <input
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-amber-500 focus:outline-none"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-navy-900">เบอร์โทรติดต่อกลับ</span>
        <input
          required
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-amber-500 focus:outline-none"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-navy-900">รายละเอียดที่ต้องการสอบถาม</span>
        <textarea
          rows={4}
          value={detail}
          onChange={(event) => setDetail(event.target.value)}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-amber-500 focus:outline-none"
        />
      </label>

      <button
        type="submit"
        className="w-full rounded-md bg-amber-500 px-6 py-3 font-heading font-semibold text-navy-950 hover:bg-amber-600"
      >
        ส่งข้อมูล
      </button>

      {sent && <p className="text-sm text-green-600">เปิดแอปอีเมลให้แล้ว กรุณากดส่งอีกครั้งในแอปอีเมลของคุณ</p>}
    </form>
  );
}
