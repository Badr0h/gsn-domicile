"use client";

import { FormEvent, useState } from "react";
import { WHATSAPP } from "@/lib/contact";
import { prestations } from "@/lib/prestations";

const champ =
  "h-12 w-full rounded-lg border border-sauge bg-creme-vert px-3.5 text-base text-encre focus:border-vert focus:bg-papier";

export function DevisForm() {
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nom = String(data.get("nom") ?? "").trim();
    const telephone = String(data.get("telephone") ?? "").trim();
    const prestation = String(data.get("prestation") ?? "").trim();

    if (!nom || !telephone || !prestation) {
      setError("Indiquez votre nom, votre téléphone et la prestation.");
      return;
    }

    setError("");
    const message = [
      "Bonjour, je souhaite un devis.",
      "",
      `Nom : ${nom}`,
      `Téléphone : ${telephone}`,
      `Prestation : ${prestation}`,
    ].join("\n");

    window.location.assign(`${WHATSAPP}?text=${encodeURIComponent(message)}`);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4">
      <label className="grid gap-1.5 text-sm font-medium text-mute">
        Votre nom
        <input name="nom" type="text" autoComplete="name" className={champ} />
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-mute">
        Votre téléphone
        <input
          name="telephone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          className={champ}
        />
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-mute">
        Prestation souhaitée
        <select
          name="prestation"
          defaultValue={prestations[0]}
          className={champ}
        >
          {prestations.map((prestation) => (
            <option key={prestation} value={prestation}>
              {prestation}
            </option>
          ))}
        </select>
      </label>
      {error ? (
        <p role="alert" className="text-sm font-semibold text-vert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center rounded-lg bg-vert px-4 text-base font-semibold text-papier hover:bg-vert-fonce"
      >
        Demander un devis
      </button>
      <p className="text-sm text-mute">
        La demande s’ouvre dans WhatsApp. Rien n’est enregistré sur ce site.
      </p>
    </form>
  );
}
