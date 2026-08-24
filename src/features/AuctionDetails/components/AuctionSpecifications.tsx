import {
  CircleDot,
  Diameter,
  Disc3,
  Gauge,
  Landmark,
  Medal,
  Scale,
  ShieldCheck,
} from "lucide-react";

import styles from "@/components/animations/css/auctionDetails/AuctionSpecifications.module.css";

interface AuctionSpecificationsProps {
  auctionId: string;
}

const specifications = [
  {
    label: "Denomination",
    value: "1 Dollar",
    icon: Medal,
  },
  {
    label: "Year",
    value: "1921",
    icon: Landmark,
  },
  {
    label: "Country",
    value: "United States",
    icon: Landmark,
  },
  {
    label: "Mint",
    value: "Philadelphia",
    icon: Landmark,
  },
  {
    label: "Metal",
    value: "Silver",
    icon: Disc3,
  },
  {
    label: "Weight",
    value: "26.73 g",
    icon: Scale,
  },
  {
    label: "Diameter",
    value: "38.1 mm",
    icon: Diameter,
  },
  {
    label: "Thickness",
    value: "Approx. 2.4 mm",
    icon: Gauge,
  },
  {
    label: "Edge",
    value: "Reeded",
    icon: CircleDot,
  },
  {
    label: "Condition",
    value: "Extremely Fine",
    icon: ShieldCheck,
  },
];

const AuctionSpecifications = ({
  auctionId,
}: AuctionSpecificationsProps) => {
  return (
    <section
      className={
        styles.auctionSpecifications
      }
    >
      <div
        className={
          styles.auctionSpecificationsHeader
        }
      >
        <div>
          <p
            className={
              styles.auctionSpecificationsEyebrow
            }
          >
            Lot Details
          </p>

          <h2
            className={
              styles.auctionSpecificationsTitle
            }
          >
            Coin Specifications
          </h2>
        </div>

        <span
          className={
            styles.auctionSpecificationsReference
          }
        >
          {auctionId}
        </span>
      </div>

      <div
        className={
          styles.auctionSpecificationsGrid
        }
      >
        {specifications.map(
          (specification) => {
            const Icon =
              specification.icon;

            return (
              <div
                key={
                  specification.label
                }
                className={
                  styles.auctionSpecificationItem
                }
              >
                <div
                  className={
                    styles.auctionSpecificationIcon
                  }
                >
                  <Icon
                    size={16}
                    strokeWidth={1.7}
                  />
                </div>

                <div
                  className={
                    styles.auctionSpecificationText
                  }
                >
                  <span>
                    {
                      specification.label
                    }
                  </span>

                  <strong>
                    {
                      specification.value
                    }
                  </strong>
                </div>
              </div>
            );
          }
        )}
      </div>

      <p
        className={
          styles.auctionSpecificationsNote
        }
      >
        Auction specifications are shown for
        collector reference and will later be
        populated from verified lot data.
      </p>
    </section>
  );
};

export default AuctionSpecifications;