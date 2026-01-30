type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) => {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col gap-2 ${alignment}`}>
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-gray-600 max-w-2xl">{description}</p>
      )}
    </div>
  );
};
