const testimonials = [
  {
    name: "Marius, Fana",
    text: "«Ryddig prosess fra start til slutt. AAEN kom på befaring raskt og leverte en solid terrasse som vi bruker hver dag.»",
  },
  {
    name: "Ingrid, Sandviken",
    text: "«God kommunikasjon, presise på tid og hyggelige folk på plass. Anbefaler spesielt for modernisering av eldre bygg.»",
  },
  {
    name: "Eirik, Årstad",
    text: "«Walk-in closet ble akkurat slik vi så for oss. Flinke til å foreslå løsninger som utnytter plassen.»",
  },
];

export const TestimonialsBlock = () => (
  <div className="grid gap-4 md:grid-cols-3">
    {testimonials.map((item) => (
      <div key={item.name} className="card p-6 flex flex-col gap-3">
        <p className="text-gray-800 leading-relaxed">{item.text}</p>
        <span className="text-sm font-semibold text-gray-900">{item.name}</span>
      </div>
    ))}
  </div>
);
