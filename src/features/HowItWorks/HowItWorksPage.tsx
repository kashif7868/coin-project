import {
  Camera,
  CheckCircle2,
  Coins,
  Search,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

import styles from "@/components/animations/css/staticPages/HowItWorksPage.module.css";

const steps = [
  {
    number: "01",
    title: "Discover a Coin",
    description:
      "Browse the marketplace or use CoinHeritage identification tools to explore collectible coins.",
    icon: Search,
  },
  {
    number: "02",
    title: "Scan or Upload",
    description:
      "Capture clear front and back images of a coin or upload existing photographs.",
    icon: Camera,
  },
  {
    number: "03",
    title: "Review the Details",
    description:
      "Explore available information such as country, year, denomination, metal, history and collectible attributes.",
    icon: Coins,
  },
  {
    number: "04",
    title: "Collect or Trade",
    description:
      "Save interesting pieces, buy marketplace listings, participate in auctions or list coins for sale.",
    icon: ShoppingBag,
  },
];

const HowItWorksPage = () => {
  return (
    <main className={styles.howPage}>
      <section className={styles.howHero}>
        <div className={styles.howHeroGlowLeft} />
        <div className={styles.howHeroGlowRight} />

        <div className={styles.howContainer}>
          <div className={styles.howHeroBadge}>
            <Sparkles
              size={13}
              strokeWidth={1.8}
            />

            <span>Simple. Clear. Collector Focused.</span>
          </div>

          <h1 className={styles.howHeroTitle}>
            How CoinHeritage
            <span> Works.</span>
          </h1>

          <p className={styles.howHeroDescription}>
            Discover, understand, collect and trade historical coins through a
            streamlined marketplace experience.
          </p>
        </div>
      </section>

      <section className={styles.howContent}>
        <div className={styles.howContainer}>
          <div className={styles.howStepsGrid}>
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className={styles.howStepCard}
                >
                  <div className={styles.howStepTop}>
                    <div className={styles.howStepIcon}>
                      <Icon
                        size={21}
                        strokeWidth={1.7}
                      />
                    </div>

                    <span className={styles.howStepNumber}>
                      {step.number}
                    </span>
                  </div>

                  <h2>{step.title}</h2>

                  <p>{step.description}</p>
                </article>
              );
            })}
          </div>

          <div className={styles.howTrustCard}>
            <div className={styles.howTrustIcon}>
              <CheckCircle2
                size={22}
                strokeWidth={1.8}
              />
            </div>

            <div>
              <h2>One account. One collecting journey.</h2>

              <p>
                Your wishlist, marketplace activity, auction participation and
                future seller activity can remain connected to your
                CoinHeritage account.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowItWorksPage;