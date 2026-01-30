import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="section-shell pt-10 pb-12 lg:pt-16 lg:pb-16 grid gap-10 lg:grid-cols-2 items-center">
      <div className="space-y-6">
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Totalentreprenør i Bergen
          </h1>
          <p className="text-lg text-gray-700">
            Rehabilitering, modernisering og vaktmestertjenester
          </p>
          <p className="text-gray-600">
            Vi er en lokal totalentreprenør med base i Bergen, og tilbyr alt innen
            rehabilitering, modernisering og vaktmestertjenester. Hos oss står
            kunden og kvalitet i sentrum.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/prosjekter"
            className="rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-gray-800"
          >
            Se prosjekter
          </Link>
          <Link
            href="/kontakt"
            className="rounded-full border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition"
          >
            Kontakt oss
          </Link>
        </div>

        <div className="flex flex-wrap gap-2"></div>
      </div>

      <div className="relative">
        <div className="card overflow-hidden shadow-xl">
          <div className="relative aspect-[4/3]">
            <Image
              src="/projects/nyterasse.jpg"
              alt="Nylig prosjekt"
              fill
              className="object-cover"
              priority
            />
            <span className="absolute bottom-4 left-4 rounded-full bg-white/90 text-gray-900 px-3 py-1 text-sm font-semibold shadow">
              Nylig prosjekt
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
