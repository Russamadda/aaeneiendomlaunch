import Link from "next/link";

export const CTASection = () => (
  <div className="rounded-2xl border border-amber-200/70 bg-amber-50/60 shadow-sm p-6 sm:p-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <h3 className="text-2xl font-semibold text-gray-900">
        Ønsker du gratis og uforpliktende befaring?
      </h3>
      <p className="text-gray-700">
        Ring oss på 414 32 375 eller send en forespørsel – vi svarer raskt.
      </p>
    </div>
    <div className="flex gap-3 flex-wrap">
      <a
        href="tel:41432375"
        className="rounded-full border border-gray-900 px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition"
      >
        Ring 414 32 375
      </a>
      <Link
        href="/kontakt"
        className="rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-gray-800"
      >
        Kontakt oss
      </Link>
    </div>
  </div>
);
