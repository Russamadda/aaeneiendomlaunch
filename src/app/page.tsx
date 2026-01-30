import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { CTASection } from "@/components/CTASection";
import { projects } from "@/data/projects";
import { ReviewsSection } from "@/components/ReviewsSection";

const services = [
  {
    title: "Rehabilitering",
    blurb: "Oppgradering av eksisterende bygg med fokus på varighet og trygghet.",
    bullets: ["Fasaderehab og tetting", "Tak og vindu", "Drenering og grunnmur"],
  },
  {
    title: "Modernisering",
    blurb: "Gir hjemmet et nytt uttrykk med moderne materialer og løsninger.",
    bullets: ["Terrasser og uteområder", "Kjøkken- og stueløsninger", "Smarthus-tilpasning"],
  },
  {
    title: "Vaktmestertjenester",
    blurb: "Drifts- og vedlikeholdsoppgaver for borettslag og næring.",
    bullets: ["Periodisk tilsyn", "Småreparasjoner", "Snørydding og uteareal"],
  },
  {
    title: "Oppussing / Tilpasninger",
    blurb: "Praktiske, skreddersydde grep som gir bedre plass og bruk.",
    bullets: ["Walk-in og garderobe", "Bad og våtrom (enkle oppgraderinger)", "Innvendige overflater"],
  },
];

const homepageProjects = projects.slice(0, 3);

export default function HomePage() {
  return (
    <div className="space-y-16 lg:space-y-20">
      <Hero />

      <section className="section-shell space-y-8" id="tjenester">
        <SectionHeader
          eyebrow="Tjenester"
          title="Rehabilitering, modernisering og løpende drift"
          description="Vi strekker oss langt for å levere solide resultater og sikre høy kundetilfredshet. Ta kontakt for gratis og uforpliktende befaring."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="section-shell space-y-8" id="prosjekter">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <SectionHeader
            eyebrow="Nylige prosjekter"
            title="Godt håndverk, robuste materialer"
            description="Se noen av jobbene våre i Bergen – vi viser både før- og etterbilder der det er relevant."
          />
          <a
            href="/prosjekter"
            className="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100"
          >
            Se alle prosjekter
          </a>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {homepageProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <ReviewsSection />

      <section className="section-shell space-y-6">
        <CTASection />
      </section>
    </div>
  );
}
