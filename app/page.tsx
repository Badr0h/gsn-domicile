import { DevisForm } from "@/app/devis-form";
import { MAPS, PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";
import { prestations } from "@/lib/prestations";

const bouton =
  "inline-flex h-12 items-center justify-center rounded-md bg-tablier px-4 text-center font-semibold text-papier";

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-4 sm:px-8 sm:py-8">
      <header className="flex flex-wrap items-center gap-x-4 gap-y-3">
        <a href="#contenu" className="mr-auto text-encre">
          <svg
            viewBox="0 0 172 72"
            role="img"
            aria-label="GSN, ménage à Lyon"
            className="h-16 w-auto max-w-full"
          >
            <text
              x="0"
              y="40"
              fill="currentColor"
              fontFamily="var(--font-sora), sans-serif"
              fontSize="46"
              fontWeight="700"
            >
              GSN
            </text>
            <text
              x="0"
              y="64"
              fill="currentColor"
              fontFamily="var(--font-sora), sans-serif"
              fontSize="16"
              fontWeight="500"
            >
              Ménage à Lyon
            </text>
          </svg>
        </a>
        <a
          href={`tel:${PHONE_TEL}`}
          className="whitespace-nowrap text-base font-semibold sm:text-lg"
        >
          {PHONE_DISPLAY}
        </a>
        <a href="#devis" className={`${bouton} basis-full sm:basis-auto`}>
          Demander un devis
        </a>
      </header>

      <main id="contenu" className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.8fr)] lg:items-start lg:gap-x-14">
        <h1 className="max-w-[12ch] font-serif text-[2rem] leading-[1.12] sm:text-5xl lg:col-span-2">
          Service de ménage à Lyon
        </h1>

        <section aria-labelledby="prestations" className="lg:row-span-3">
          <h2 id="prestations" className="font-serif text-2xl leading-tight">
            Prestations
          </h2>
          <ul className="mt-2 border-t border-filet">
            {prestations.map((prestation) => (
              <li
                key={prestation}
                className="border-b border-filet py-2.5 font-serif text-[1.35rem] leading-snug sm:text-3xl"
              >
                {prestation}
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-3 text-lg leading-snug">
          <p>
            <a href={MAPS} className="underline decoration-filet underline-offset-4">
              254 rue Vendôme, 69003 Lyon
            </a>
          </p>
          <p>
            Lundi au vendredi, 9h00–18h00
            <br />
            Samedi, 9h00–13h00
            <br />
            Dimanche, fermé
          </p>
          <p>
            <a href={MAPS} className="underline decoration-filet underline-offset-4">
              4,9 sur 5, 89 avis sur Google
            </a>
          </p>
          <a href="#devis" className={bouton}>
            Demander un devis
          </a>
        </section>

        <section className="grid gap-2">
          <h2 className="font-serif text-3xl leading-tight">Lyon et alentours</h2>
          <p className="text-lg leading-snug text-mute">
            Limonest, Saint-Didier-au-Mont-d’Or, Chaponost, Millery, Oullins.
          </p>
        </section>

        <DevisForm />
      </main>

      <footer className="mt-12 grid gap-1 border-t border-filet pt-6 text-base">
        <p className="font-semibold">GSN, Génie du Service et du Nettoyage</p>
        <p>
          <a href={MAPS} className="underline decoration-filet underline-offset-4">
            254 rue Vendôme, 69003 Lyon
          </a>
        </p>
        <p>
          <a href={`tel:${PHONE_TEL}`} className="font-semibold">
            {PHONE_DISPLAY}
          </a>
        </p>
        <p>
          <a href={MAPS} className="underline decoration-filet underline-offset-4">
            Voir sur Google Maps
          </a>
        </p>
      </footer>
    </div>
  );
}
