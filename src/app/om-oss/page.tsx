import { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Om oss – AAEN Eiendom",
  description:
    "AAEN Eiendom er en lokal totalentreprenør i Bergen. Vi er presise, pålitelige og hyggelige – med kunden og kvalitet i fokus.",
};

const values = [
  {
    title: "Presise",
    text: "Vi holder avtaler, følger opp og leverer på tid. Fremdriften er tydelig for deg gjennom hele prosjektet.",
  },
  {
    title: "Pålitelige",
    text: "Et fast team som tar ansvar. Ryddige kontrakter, godt HMS-arbeid og kvalitetssikring før overlevering.",
  },
  {
    title: "Profesjonelle",
    text: "Vi jobber hjemme hos folk – derfor møter vi opp forberedt, leverer ryddig arbeid og holder en klar dialog.",
  },
];

export default function AboutPage() {
  return (
    <div className="section-shell py-12 lg:py-16 space-y-12">
      <SectionHeader
        eyebrow="Om oss"
        title="Lokal totalentreprenør i Bergen"
        description="AAEN Eiendom er et lite, dedikert team som leverer rehabilitering, modernisering og vaktmestertjenester. Vi kombinerer håndverkstradisjon med moderne metoder."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {values.map((value) => (
          <div key={value.title} className="card p-6 space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">{value.title}</h3>
            <p className="text-gray-700">{value.text}</p>
          </div>
        ))}
      </div>

      <div className="card p-6 md:p-8 space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">Hvor jobber vi?</h3>
        <p className="text-gray-700">
          Vi holder til i Bergen og tar oppdrag i hele regionen. Som lokal aktør kjenner vi klima,
          materialvalg og krav som gjelder her – det gir oss et fortrinn når vi planlegger og utfører arbeidene.
        </p>
      </div>

      <CTASection />
    </div>
  );
}
