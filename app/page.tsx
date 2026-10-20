import { DevisForm } from "@/app/devis-form";
import { MAPS, PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";
import { prestations } from "@/lib/prestations";

function Wordmark() {
  return (
    <a href="#top" className="grid leading-none text-encre">
      <span className="font-display text-3xl font-extrabold tracking-tight">
        GSN
      </span>
      <span className="font-sans text-[0.8rem] font-medium text-mute">
        Ménage à Lyon
      </span>
    </a>
  );
}

export default function Page() {
  return (
    <div id="top" className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
      <header className="flex items-center justify-between gap-4">
        <Wordmark />
        <a
          href={`tel:${PHONE_TEL}`}
          className="font-display text-base font-bold text-encre sm:text-lg"
        >
          {PHONE_DISPLAY}
        </a>
      </header>

      {/* Hero */}
      <section className="mt-4 grid gap-3 sm:mt-6 lg:grid-cols-2 lg:gap-5">
        <div className="order-1 overflow-hidden rounded-2xl lg:order-2">
          <img
            src="/interieur-lyon.jpg"
            alt="Intérieur lumineux et rangé après le passage d’une équipe de ménage"
            width={1024}
            height={683}
            className="h-52 w-full object-cover sm:h-72 lg:h-full"
          />
        </div>

        <div className="order-2 flex flex-col gap-5 rounded-2xl bg-vert-fonce p-6 text-papier sm:p-8 lg:order-1 lg:justify-center lg:gap-6">
          <h1 className="font-display text-[2.1rem] font-extrabold leading-[1.05] sm:text-5xl lg:text-[3.4rem]">
            Ménage et nettoyage à Lyon
          </h1>
          <p className="max-w-[46ch] text-base leading-relaxed text-sauge sm:text-lg">
            Nettoyage de locaux, de sols et entretien, par une équipe
            lyonnaise. Dites-nous ce dont vous avez besoin, on vous répond
            sur WhatsApp.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <span className="inline-flex items-center gap-1.5 font-semibold">
              <span aria-hidden="true" className="text-lg leading-none">
                ★
              </span>
              4,9 sur 5
            </span>
            <a href={MAPS} className="text-sauge underline underline-offset-4">
              89 avis sur Google
            </a>
          </div>
          <a
            href="#devis"
            className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-papier px-5 text-base font-semibold text-vert-fonce hover:bg-papier sm:w-fit"
          >
            Demander un devis
          </a>
        </div>
      </section>

      <main className="mt-10 grid gap-10 sm:mt-14 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <section aria-labelledby="prestations">
          <h2
            id="prestations"
            className="font-display text-2xl font-bold sm:text-3xl"
          >
            Ce que nous nettoyons
          </h2>
          <ul className="mt-5 border-t border-sauge sm:columns-2 sm:gap-10">
            {prestations.map((prestation) => (
              <li
                key={prestation}
                className="break-inside-avoid border-b border-sauge py-3.5 font-display text-xl font-medium leading-snug sm:text-[1.6rem]"
              >
                {prestation}
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-4 rounded-2xl bg-papier p-6 sm:grid-cols-2">
            <div className="grid content-start gap-1">
              <h3 className="font-display text-lg font-bold">Où nous sommes</h3>
              <a href={MAPS} className="text-mute underline underline-offset-4">
                254 rue Vendôme, 69003 Lyon
              </a>
            </div>
            <div className="grid content-start gap-1">
              <h3 className="font-display text-lg font-bold">Horaires</h3>
              <p className="text-mute">
                Lundi au vendredi, 9h00–18h00
                <br />
                Samedi, 9h00–13h00
                <br />
                Dimanche, fermé
              </p>
            </div>
          </div>
        </section>

        <section
          id="devis"
          aria-labelledby="devis-titre"
          className="h-fit rounded-2xl bg-papier p-6 sm:p-8 lg:sticky lg:top-6"
        >
          <h2
            id="devis-titre"
            className="font-display text-2xl font-bold sm:text-3xl"
          >
            Demander un devis
          </h2>
          <p className="mt-2 mb-6 text-mute">
            Trois champs, et votre demande part sur notre WhatsApp.
          </p>
          <DevisForm />
        </section>
      </main>

      <footer className="mt-14 border-t border-sauge py-8">
        <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
          <div className="grid gap-1.5">
            <Wordmark />
            <p className="mt-2 text-mute">GSN, Génie du Service et du Nettoyage</p>
            <a href={MAPS} className="text-mute underline underline-offset-4">
              254 rue Vendôme, 69003 Lyon
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="font-display font-bold text-encre"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
          <a href={MAPS} className="text-mute underline underline-offset-4">
            Voir sur Google Maps
          </a>
        </div>
      </footer>
    </div>
  );
}
