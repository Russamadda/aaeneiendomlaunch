import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      <div className="section-shell py-12 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5 lg:col-span-4 space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/aaen-logo.png"
              alt="AAEN Eiendom"
              width={140}
              height={52}
              className="h-14 w-auto object-contain"
            />
            <div className="leading-tight">
              <p className="font-semibold text-gray-900">AAEN Eiendom</p>
              <p className="text-sm text-gray-500">Totalentreprenør i Bergen</p>
            </div>
          </div>
          <p className="text-gray-600 max-w-md">
            Rehabilitering, modernisering og vaktmestertjenester levert med presisjon,
            pålitelighet og et hyggelig lag i Bergen og omegn.
          </p>
        </div>

        <div className="md:col-span-3 lg:col-span-3 space-y-3">
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
            Snarveier
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li><Link href="/prosjekter" className="hover:text-gray-900">Prosjekter</Link></li>
            <li><Link href="/om-oss" className="hover:text-gray-900">Om oss</Link></li>
            <li><Link href="/kontakt" className="hover:text-gray-900">Kontakt</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4 lg:col-span-5 space-y-3">
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
            Kontakt
          </h3>
          <div className="text-gray-700 space-y-2">
            <p>Bergen, Norge</p>
            <a className="block hover:text-gray-900" href="tel:41432375">Telefon: 414 32 375</a>
            <a className="block hover:text-gray-900" href="mailto:aaen.eiendom@hotmail.com">
              E-post: aaen.eiendom@hotmail.com
            </a>
          </div>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-brand text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-brand-dark"
          >
            Gratis befaring
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="section-shell py-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-sm text-gray-600">
          <p>© {new Date().getFullYear()} AAEN Eiendom. Alle rettigheter reservert.</p>
          <p className="text-gray-500">Org.nr og HMS-info tilgjengelig på forespørsel.</p>
        </div>
      </div>
    </footer>
  );
}
