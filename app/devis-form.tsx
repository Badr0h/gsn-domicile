"use client";

import { FormEvent, useState } from "react";
import { WHATSAPP } from "@/lib/contact";
import { prestations } from "@/lib/prestations";

const champ =
  "h-12 w-full rounded-md border border-filet bg-papier px-3 text-base text-encre focus:border-tablier";

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
    <form id="devis" onSubmit={onSubmit} noValidate className="grid gap-4">
      <h2 className="font-serif text-3xl leading-tight">Demander un devis</h2>
      <p className="text-mute">
        La demande s’ouvre dans WhatsApp. Rien n’est enregistré sur ce site.
      </p>
      <label className="grid gap-1.5">
        Nom
        <input name="nom" type="text" autoComplete="name" className={champ} />
      </label>
      <label className="grid gap-1.5">
        Téléphone
        <input
          name="telephone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          className={champ}
        />
      </label>
      <label className="grid gap-1.5">
        Prestation
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
        <p role="alert" className="font-semibold text-tablier">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center rounded-md bg-tablier px-4 font-semibold text-papier"
      >
        Demander un devis
      </button>
    </form>
  );
}
