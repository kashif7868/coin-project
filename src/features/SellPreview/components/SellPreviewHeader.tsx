import {
  Eye,
  Sparkles,
} from "lucide-react";

import styles from "@/components/animations/css/sellPreview/SellPreviewHeader.module.css";

const SellPreviewHeader = () => {
  return (
    <section className={styles.sellPreviewHeader}>
      <div
        className={
          styles.sellPreviewHeaderGlowLeft
        }
      />

      <div
        className={
          styles.sellPreviewHeaderGlowRight
        }
      />

      <div
        className={
          styles.sellPreviewHeaderContainer
        }
      >
        <div
          className={
            styles.sellPreviewHeaderBadge
          }
        >
          <Sparkles
            size={13}
            strokeWidth={1.8}
          />

          <span>Listing Preview</span>
        </div>

        <div
          className={
            styles.sellPreviewHeaderContent
          }
        >
          <div>
            <h1>
              Review Your
              <span> Final Listing.</span>
            </h1>

            <p>
              Check the coin images, details, price,
              quantity and seller notes exactly as they
              will appear before publication.
            </p>
          </div>

          <div
            className={
              styles.sellPreviewHeaderIcon
            }
          >
            <Eye
              size={28}
              strokeWidth={1.6}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellPreviewHeader;