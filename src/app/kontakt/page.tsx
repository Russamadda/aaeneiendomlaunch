import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Kontakt – AAEN Eiendom",
  description:
    "Kontakt AAEN Eiendom for rehabilitering, modernisering eller vaktmestertjenester i Bergen. Gratis befaring.",
};

export default function ContactPage() {
  return (
    <div className="section-shell py-12 lg:py-16 space-y-10">
      <SectionHeader
        title="La oss se på prosjektet ditt"
        description="Ring, send e-post eller bruk skjemaet – vi svarer raskt og avtaler en gratis befaring."
      />

      <div className="grid gap-6 lg:grid-cols-[360px_1fr] items-start">
        <div className="space-y-4">
          <div className="card p-6 space-y-4">
            <div>
              <p className="text-sm text-gray-600">Telefon</p>
              <a href="tel:41432375" className="text-lg font-semibold text-gray-900">
                414 32 375
              </a>
            </div>
            <div>
              <p className="text-sm text-gray-600">E-post</p>
              <a href="mailto:aaen.eiendom@hotmail.com" className="text-lg font-semibold text-gray-900">
                aaen.eiendom@hotmail.com
              </a>
            </div>
            <div>
              <p className="text-sm text-gray-600">Lokasjon</p>
              <p className="text-lg font-semibold text-gray-900">Bergen</p>
            </div>
          </div>
          <div className="card p-6 text-sm text-gray-800">
            Gratis og uforpliktende befaring. Vi tar med oss forslag til materialer og fremdrift.
          </div>
        </div>
        <div className="lg:col-span-1">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
