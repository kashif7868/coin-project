import {
  Clock3,
  Gavel,
  History,
  UserRound,
} from "lucide-react";

import styles from "@/components/animations/css/auctionDetails/AuctionTimeline.module.css";

interface AuctionTimelineProps {
  auctionId: string;
}

const timeline = [
  {
    label: "Current Bid",
    value: "$118",
    detail: "Leading bid placed by collector #1842",
    icon: Gavel,
  },
  {
    label: "Previous Bid",
    value: "$113",
    detail: "Bid placed 12 minutes ago",
    icon: History,
  },
  {
    label: "Bidder Activity",
    value: "14 bids",
    detail: "9 unique bidders participating",
    icon: UserRound,
  },
  {
    label: "Auction Ends",
    value: "01h 42m",
    detail: "Timed auction closes automatically",
    icon: Clock3,
  },
];

const AuctionTimeline = ({
  auctionId,
}: AuctionTimelineProps) => {
  return (
    <section className={styles.auctionTimeline}>
      <div className={styles.auctionTimelineHeader}>
        <div>
          <p
            className={
              styles.auctionTimelineEyebrow
            }
          >
            Auction Activity
          </p>

          <h2
            className={
              styles.auctionTimelineTitle
            }
          >
            Bid Timeline
          </h2>
        </div>

        <div
          className={
            styles.auctionTimelineHeaderIcon
          }
        >
          <History
            size={18}
            strokeWidth={1.7}
          />
        </div>
      </div>

      <div
        className={
          styles.auctionTimelineList
        }
      >
        {timeline.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className={
                styles.auctionTimelineItem
              }
            >
              <div
                className={
                  styles.auctionTimelineMarkerColumn
                }
              >
                <div
                  className={
                    styles.auctionTimelineIcon
                  }
                >
                  <Icon
                    size={16}
                    strokeWidth={1.7}
                  />
                </div>

                {index <
                  timeline.length - 1 && (
                  <div
                    className={
                      styles.auctionTimelineLine
                    }
                  />
                )}
              </div>

              <div
                className={
                  styles.auctionTimelineContent
                }
              >
                <span>
                  {item.label}
                </span>

                <strong>
                  {item.value}
                </strong>

                <p>
                  {item.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className={
          styles.auctionTimelineReference
        }
      >
        Auction activity reference: {auctionId}
      </div>
    </section>
  );
};

export default AuctionTimeline;