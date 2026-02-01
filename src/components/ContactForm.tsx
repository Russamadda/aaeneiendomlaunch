"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  address?: string;
  projectType: string;
  start?: string;
  budget?: string;
  message: string;
  wantsVisit: boolean;
  companyWebsite?: string;
};

const projectTypes = [
  "Rehabilitering",
  "Modernisering",
  "Vaktmester",
  "Oppussing",
  "Tilbygg",
  "Annet",
];

const startTimes = ["ASAP", "1–3 mnd", "3–6 mnd", "6+ mnd", "Usikker"];
const budgets = ["<50k", "50–150k", "150–500k", "500k+", "Usikker"];

export const ContactForm = ({ compact = false }: { compact?: boolean }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      wantsVisit: true,
      companyWebsite: "",
    },
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (data: FormValues) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset({ wantsVisit: true, companyWebsite: "" });
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`card p-6 sm:p-8 space-y-4 ${compact ? "shadow" : "shadow-md"}`}
    >
      <div className="space-y-1">
        <h3 className="text-xl font-semibold text-gray-900">Fortell oss om prosjektet</h3>
        <p className="text-sm text-gray-600">
          Vi svarer normalt samme dag. Felter merket * er obligatoriske.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Fullt navn *" error={errors.name?.message}>
          <input
            type="text"
            {...register("name", { required: "Fullt navn er påkrevd" })}
            className="input"
            placeholder="Ditt navn"
          />
        </Field>
        <Field label="Telefon *" error={errors.phone?.message}>
          <input
            type="tel"
            {...register("phone", { required: "Telefon er påkrevd" })}
            className="input"
            placeholder="414 32 375"
          />
        </Field>
        <Field label="E-post *" error={errors.email?.message}>
          <input
            type="email"
            {...register("email", { required: "E-post er påkrevd" })}
            className="input"
            placeholder="din@email.no"
          />
        </Field>
        <Field label="Adresse / område">
          <input
            type="text"
            {...register("address")}
            className="input"
            placeholder="Eks: Landås, Bergen"
          />
        </Field>
        <Field label="Type prosjekt *" error={errors.projectType?.message}>
          <select
            {...register("projectType", { required: "Velg type prosjekt" })}
            className="input"
            defaultValue=""
          >
            <option value="" disabled>
              Velg
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Estimert oppstart">
          <select
            {...register("start")}
            className="input"
            defaultValue=""
          >
            <option value="" disabled>
              Velg
            </option>
            {startTimes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Budsjettintervall">
          <select
            {...register("budget")}
            className="input"
            defaultValue=""
          >
            <option value="" disabled>
              Velg
            </option>
            {budgets.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Beskrivelse av jobben *" error={errors.message?.message}>
        <textarea
          {...register("message", { required: "Beskrivelse er påkrevd" })}
          className="input min-h-[120px]"
          placeholder="Kort om omfang, materialer, tidspunkter og andre behov"
        />
      </Field>

      <label className="flex items-start gap-3 text-sm text-gray-700">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-gray-300 text-brand focus:ring-brand"
          {...register("wantsVisit")}
        />
        <span>Ønsker gratis og uforpliktende befaring</span>
      </label>

      {/* Honeypot field for spam bots */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        {...register("companyWebsite")}
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex justify-center items-center gap-2 rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-semibold hover:bg-gray-800 disabled:opacity-50"
        >
          {isSubmitting ? "Sender..." : "Send forespørsel"}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
        {status === "success" && (
          <p className="text-sm text-emerald-700">Takk! Vi tar kontakt så snart som mulig.</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-600">
            Noe gikk galt. Ring oss på 414 32 375.
          </p>
        )}
      </div>
    </form>
  );
};

const Field = ({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) => (
  <label className="flex flex-col gap-2 text-sm font-medium text-gray-800">
    <span>{label}</span>
    {children}
    {error && <span className="text-xs text-red-600">{error}</span>}
  </label>
);
