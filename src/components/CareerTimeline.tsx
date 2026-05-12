import { Timeline } from "@/components/ui/timeline";

export default function CareerTimeline() {
  const data = [
    {
      id: "career-2025-now",
      title: "2025 - Now",
      content: (
        <div className="rounded-[28px] border border-white/40 bg-white/75 p-6 shadow-[0_20px_60px_rgba(154,90,28,0.12)] backdrop-blur-md dark:border-white/10 dark:bg-white/5">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#B9681D] dark:text-[#FEB05D]">
            PT. BMT Media Malang
          </p>
          <h3 className="mt-3 font-comic-neue text-2xl font-bold text-[#1F2937] dark:text-white">
            Full Stack Web Developer
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
            <li className="flex gap-3">
              <span className="mt-1.5 block size-2 shrink-0 rounded-full bg-[#DE802B]" />
              Bertanggung jawab dalam pengembangan, pemeliharaan, dan
              peningkatan performa aplikasi web menggunakan Laravel, WordPress,
              dan React dengan framework Next.js.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 block size-2 shrink-0 rounded-full bg-[#DE802B]" />
              Mendesain, mengoptimalkan, dan mengelola database MySQL, termasuk
              tuning query dan perbaikan struktur data untuk skalabilitas.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 block size-2 shrink-0 rounded-full bg-[#DE802B]" />
              Membangun dan mengelola RESTful API yang aman, terstruktur, dan
              scalable untuk frontend serta integrasi pihak ketiga.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 block size-2 shrink-0 rounded-full bg-[#DE802B]" />
              Berperan aktif dalam perancangan arsitektur fitur, code review,
              pengujian, dan deployment ke environment production.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 block size-2 shrink-0 rounded-full bg-[#DE802B]" />
              Berkolaborasi lintas tim untuk menerjemahkan kebutuhan bisnis
              menjadi solusi teknis yang efektif dan maintainable.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "career-2024",
      title: "2024",
      content: (
        <div className="rounded-[28px] border border-white/40 bg-white/75 p-6 shadow-[0_20px_60px_rgba(154,90,28,0.12)] backdrop-blur-md dark:border-white/10 dark:bg-white/5">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#B9681D] dark:text-[#FEB05D]">
            PT. BMT Media Malang
          </p>
          <h3 className="mt-3 font-comic-neue text-2xl font-bold text-[#1F2937] dark:text-white">
            Full Stack Web Developer Intern
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
            <li className="flex gap-3">
              <span className="mt-1.5 block size-2 shrink-0 rounded-full bg-[#DE802B]" />
              Mengembangkan dan memelihara fitur aplikasi web menggunakan
              Laravel, WordPress, dan React dengan framework Next.js di bawah
              arahan tim.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 block size-2 shrink-0 rounded-full bg-[#DE802B]" />
              Membantu perancangan serta pengelolaan database MySQL, termasuk
              optimasi query dasar dan struktur tabel.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 block size-2 shrink-0 rounded-full bg-[#DE802B]" />
              Membangun RESTful API yang efisien dan aman untuk kebutuhan
              frontend serta integrasi pihak ketiga.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 block size-2 shrink-0 rounded-full bg-[#DE802B]" />
              Terlibat dalam proses development lifecycle: diskusi fitur,
              testing, debugging, dan support deployment ke server.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 block size-2 shrink-0 rounded-full bg-[#DE802B]" />
              Berkolaborasi dengan tim untuk memastikan fungsionalitas aplikasi
              berjalan sesuai kebutuhan bisnis.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "career-2022",
      title: "2022",
      content: (
        <div className="rounded-[28px] border border-white/40 bg-white/75 p-6 shadow-[0_20px_60px_rgba(154,90,28,0.12)] backdrop-blur-md dark:border-white/10 dark:bg-white/5">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#B9681D] dark:text-[#FEB05D]">
            Dinas Komunikasi dan Informatika Kota Malang
          </p>
          <h3 className="mt-3 font-comic-neue text-2xl font-bold text-[#1F2937] dark:text-white">
            Full Stack Web Developer Intern
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
            <li className="flex gap-3">
              <span className="mt-1.5 block size-2 shrink-0 rounded-full bg-[#DE802B]" />
              Membantu tim dalam perbaikan jaringan pada Puskesmas di kota
              Malang dan maintenance cctv kota Malang.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 block size-2 shrink-0 rounded-full bg-[#DE802B]" />
              Melakukan modifikasi tampilan dan bug pada website IP Address
              Management (IPAM) Kota Malang.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 block size-2 shrink-0 rounded-full bg-[#DE802B]" />
              Mendapatkan project pembuatan sistem monitoring IP Address Kota
              Malang berbasis website yang digunakan untuk mengelola IP Address
              yang terhubung dengan server.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 block size-2 shrink-0 rounded-full bg-[#DE802B]" />
              Melakukan testing untuk menemukan error atau bug pada aplikasi
              yang hendak di publikasi.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 block size-2 shrink-0 rounded-full bg-[#DE802B]" />
              Melakukan pembuatan manual book dari sistem yang telah diuji.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "career-2017",
      title: "2017",
      content: (
        <div className="rounded-[28px] border border-white/40 bg-white/75 p-6 shadow-[0_20px_60px_rgba(154,90,28,0.12)] backdrop-blur-md dark:border-white/10 dark:bg-white/5">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#B9681D] dark:text-[#FEB05D]">
            PT. Temprina Media Grafika Malang
          </p>
          <h3 className="mt-3 font-comic-neue text-2xl font-bold text-[#1F2937] dark:text-white">
            IT Support Intern
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
            <li className="flex gap-3">
              <span className="mt-1.5 block size-2 shrink-0 rounded-full bg-[#DE802B]" />
              Membantu tim dalam pemasangan dan pemeliharaan jaringan internet
              dan cctv kantor.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 block size-2 shrink-0 rounded-full bg-[#DE802B]" />
              Melakukan pemeliharaan rutin komputer, termasuk pembaruan
              perangkat lunak, peningkatan keamanan komputer dan jaringan, serta
              menangani perbaikan komputer yang mengalami error.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section
      id="career"
      className="relative overflow-hidden bg-[#FFF8ED] px-4 py-20 text-[#1F2937] dark:bg-[#102437] dark:text-[#F8FAFC]"
    >
      <div className="absolute left-0 top-12 h-72 w-72 rounded-full bg-[#FEB05D]/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#DE802B]/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl overflow-clip rounded-[36px] border border-white/40 bg-white/35 backdrop-blur-sm dark:border-white/10 dark:bg-[#0C1B2A]/40">
        <Timeline
          data={data}
          heading="Career Timeline"
          description="Dummy dulu, tapi section ini udah nunjukin flow perjalanan karier dari awal magang sampai makin fokus ke web development."
        />
      </div>
    </section>
  );
}
