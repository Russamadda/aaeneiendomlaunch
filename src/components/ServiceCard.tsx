type ServiceCardProps = {
  title: string;
  blurb: string;
  bullets: string[];
};

export const ServiceCard = ({ title, blurb, bullets }: ServiceCardProps) => (
  <div className="card p-6 flex flex-col gap-4 h-full">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    </div>
    <p className="text-sm text-gray-600">{blurb}</p>
    <ul className="space-y-2 text-sm text-gray-700">
      {bullets.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-[0.45rem] h-2 w-2 shrink-0 rounded-full bg-orange-500" />
          <span className="text-slate-700">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);
