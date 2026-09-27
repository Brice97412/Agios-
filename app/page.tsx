export default function Home() {
  return (
    <main className="mx-auto flex max-w-md flex-col px-6 pb-16 pt-14 sm:max-w-lg">
      <section className="text-center">
        <h1 className="font-display text-4xl font-semibold leading-tight text-marine sm:text-5xl">
          Ta banque te doit peut-être de l'argent.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-marine-light">
          Commissions d'intervention, frais de rejet, options facturées sans usage :
          la plupart sont plafonnés par la loi, souvent négociables, et presque
          jamais contestés.
        </p>

        <a
          href="mailto:contact@agios.fr?subject=Je veux v%C3%A9rifier mes frais bancaires"
          className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-corail px-8 py-4 text-base font-semibold text-white shadow-sm active:bg-corail-dark sm:w-auto"
        >
          Vérifier mes frais
        </a>
        <p className="mt-3 text-xs text-marine-light">
          5 €/mois, ou 20 % des frais récupérés — au choix.
        </p>
      </section>

      <section className="mt-12 rounded-2xl bg-marine px-6 py-7 text-center text-creme">
        <p className="font-display text-3xl font-semibold sm:text-4xl">
          6,5 milliards d'€
        </p>
        <p className="mt-2 text-sm leading-relaxed text-creme/80">
          C'est ce que les frais d'incident bancaire rapportent chaque année
          aux banques françaises. Les clients les plus touchés paient jusqu'à
          300 € par an, contre 34 € en moyenne — souvent au-delà des plafonds légaux.
        </p>
      </section>

      <section className="mt-12 space-y-8">
        <div>
          <h2 className="font-display text-xl font-semibold text-marine">
            On repère chaque ligne de frais
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-marine-light">
            Dépose ton relevé des douze derniers mois, on identifie toutes
            les commissions et frais facturés — même ceux noyés dans le détail.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-marine">
            On compare aux plafonds légaux
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-marine-light">
            La loi limite la plupart de ces frais. On calcule précisément
            ce que ta banque aurait dû te facturer, et ce qu'elle te doit.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl font-semibold text-marine">
            Le courrier est déjà rédigé
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-marine-light">
            Une réclamation prête à envoyer, adressée à la bonne agence.
            Tu n'as rien à écrire.
          </p>
        </div>
      </section>

      <section className="mt-12 text-center">
        <a
          href="mailto:contact@agios.fr?subject=Je veux v%C3%A9rifier mes frais bancaires"
          className="inline-flex w-full items-center justify-center rounded-full bg-corail px-8 py-4 text-base font-semibold text-white shadow-sm active:bg-corail-dark sm:w-auto"
        >
          Vérifier mes frais
        </a>
      </section>
    </main>
  );
}
