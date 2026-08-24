import {
  Globe2,
  Landmark,
  Search,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

import styles from "@/components/animations/css/staticPages/AboutUsPage.module.css";

const values = [
  {
    title: "History First",
    description:
      "We present coins as pieces of history, not just marketplace inventory.",
    icon: Landmark,
  },
  {
    title: "Better Discovery",
    description:
      "Collectors should be able to explore coins through country, era, ruler, metal and historical context.",
    icon: Search,
  },
  {
    title: "Collector Trust",
    description:
      "Clear information, secure account activity and transparent marketplace experiences matter.",
    icon: ShieldCheck,
  },
  {
    title: "Global Collecting",
    description:
      "CoinHeritage is designed for collectors exploring numismatic history across regions and cultures.",
    icon: Globe2,
  },
];

const AboutUsPage = () => {
  return (
    <main className={styles.aboutPage}>
      <section className={styles.aboutHero}>
        <div className={styles.aboutHeroGlowLeft} />
        <div className={styles.aboutHeroGlowRight} />

        <div className={styles.aboutContainer}>
          <div className={styles.aboutHeroBadge}>
            <Sparkles
              size={13}
              strokeWidth={1.8}
            />

            <span>About CoinHeritage</span>
          </div>

          <h1 className={styles.aboutHeroTitle}>
            Bringing Coins,
            <span> History &amp; Collectors Together.</span>
          </h1>

          <p className={styles.aboutHeroDescription}>
            CoinHeritage is being built as a modern numismatic marketplace
            where collectors can discover historical coins, understand their
            context, build collections and participate in a trusted trading
            ecosystem.
          </p>
        </div>
      </section>

      <section className={styles.aboutContent}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutIntroGrid}>
            <article className={styles.aboutStoryCard}>
              <p className={styles.aboutEyebrow}>
                Our Purpose
              </p>

              <h2>
                Make numismatics easier to explore.
              </h2>

              <p>
                Coin collecting can involve history, geography, metallurgy,
                rulers, minting systems, rarity, condition and market value.
                CoinHeritage brings these elements into one streamlined
                experience so collectors can move from discovery to ownership
                without jumping between disconnected tools.
              </p>

              <p>
                The platform is designed around both new collectors and
                experienced numismatists, with a marketplace experience that
                remains simple while still supporting deeper historical and
                collectible information.
              </p>
            </article>

            <aside className={styles.aboutMissionCard}>
              <div className={styles.aboutMissionIcon}>
                <UsersRound
                  size={24}
                  strokeWidth={1.7}
                />
              </div>

              <span>Our Mission</span>

              <h2>
                Help more people discover the stories behind coins.
              </h2>

              <p>
                Every coin represents a place, period, economy and human story.
                CoinHeritage aims to make those stories easier to discover and
                preserve.
              </p>
            </aside>
          </div>

          <div className={styles.aboutSectionHeading}>
            <p className={styles.aboutEyebrow}>
              What We Believe
            </p>

            <h2>
              A marketplace should add context, not just listings.
            </h2>
          </div>

          <div className={styles.aboutValuesGrid}>
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className={styles.aboutValueCard}
                >
                  <div className={styles.aboutValueIcon}>
                    <Icon
                      size={20}
                      strokeWidth={1.7}
                    />
                  </div>

                  <h3>{value.title}</h3>

                  <p>{value.description}</p>
                </article>
              );
            })}
          </div>

          <div className={styles.aboutClosingCard}>
            <div>
              <p className={styles.aboutEyebrow}>
                CoinHeritage
              </p>

              <h2>
                Discover. Collect. Own History.
              </h2>

              <p>
                From identifying an unfamiliar coin to finding the next piece
                for a collection, CoinHeritage is designed to make the journey
                clearer, more useful and more engaging.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUsPage;