import { reviews } from "@/data/reviews";

const Stars = () => (
  <span className="text-amber-500">★★★★★</span>
);

export const ReviewsSection = () => {
  return (
    <section className="section-shell space-y-6" id="anmeldelser">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Hva kundene sier</h2>
        <p className="text-gray-600">Utvalgte anmeldelser fra kunder i Bergen.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {reviews.map((rev) => (
          <article key={rev.title} className="card p-6 space-y-3 shadow-sm">
            <div className="flex items-center gap-2 text-amber-500">
              <Stars />
              <span className="text-sm font-semibold text-gray-900">{rev.rating.toFixed(1)}</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{rev.title}</h3>
            <p className="text-gray-700 leading-relaxed">{rev.text}</p>
            <div className="text-sm text-gray-600">
              <span className="font-semibold text-gray-900">{rev.name}</span>
              {rev.date ? ` • ${rev.date}` : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
