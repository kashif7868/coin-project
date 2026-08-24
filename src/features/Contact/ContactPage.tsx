"use client";

import {
  Clock3,
  Mail,
  MapPin,
  MessageSquareText,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  useState,
  type FormEvent,
} from "react";
import { toast } from "sonner";

import styles from "@/components/animations/css/staticPages/ContactPage.module.css";

const ContactPage = () => {
  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [subject, setSubject] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanSubject = subject.trim();
    const cleanMessage = message.trim();

    if (
      !cleanName ||
      !cleanEmail ||
      !cleanSubject ||
      !cleanMessage
    ) {
      toast.error(
        "Please complete all required fields."
      );

      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) =>
        setTimeout(resolve, 650)
      );

      toast.success(
        "Message form is ready",
        {
          description:
            "The contact API will be connected later.",
        }
      );

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={styles.contactPage}>
      <section className={styles.contactHero}>
        <div
          className={
            styles.contactHeroGlowLeft
          }
        />

        <div
          className={
            styles.contactHeroGlowRight
          }
        />

        <div className={styles.contactContainer}>
          <div
            className={
              styles.contactHeroBadge
            }
          >
            <Sparkles
              size={13}
              strokeWidth={1.8}
            />

            <span>
              Contact CoinHeritage
            </span>
          </div>

          <h1
            className={
              styles.contactHeroTitle
            }
          >
            Have a Question?
            <span> Talk to Us.</span>
          </h1>

          <p
            className={
              styles.contactHeroDescription
            }
          >
            Get in touch about marketplace listings,
            auctions, coin identification, collections,
            seller support or general CoinHeritage
            questions.
          </p>
        </div>
      </section>

      <section className={styles.contactContent}>
        <div className={styles.contactContainer}>
          <div
            className={
              styles.contactLayout
            }
          >
            <div
              className={
                styles.contactInfoColumn
              }
            >
              <div
                className={
                  styles.contactIntro
                }
              >
                <p
                  className={
                    styles.contactEyebrow
                  }
                >
                  Get in Touch
                </p>

                <h2>
                  We&apos;re here to help.
                </h2>

                <p>
                  Whether you have a question about a
                  listing, auction, account or coin
                  identification flow, send us a message
                  and the appropriate support channel can
                  follow up.
                </p>
              </div>

              <div
                className={
                  styles.contactInfoGrid
                }
              >
                <ContactInfoCard
                  icon={Mail}
                  title="Email Support"
                  value="support@coinheritage.com"
                  description="For general account and marketplace questions."
                />

                <ContactInfoCard
                  icon={MessageSquareText}
                  title="Marketplace Support"
                  value="Seller & Buyer Help"
                  description="Questions about listings, transactions and auctions."
                />

                <ContactInfoCard
                  icon={Clock3}
                  title="Support Hours"
                  value="Mon – Sat"
                  description="Messages can be submitted at any time."
                />

                <ContactInfoCard
                  icon={MapPin}
                  title="Marketplace"
                  value="Worldwide"
                  description="Built for collectors across countries and regions."
                />
              </div>

              <div
                className={
                  styles.contactTrust
                }
              >
                <div
                  className={
                    styles.contactTrustIcon
                  }
                >
                  <ShieldCheck
                    size={20}
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <strong>
                    Account &amp; Transaction Safety
                  </strong>

                  <p>
                    Do not send passwords, payment
                    credentials or other sensitive account
                    information through the contact form.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={
                styles.contactFormCard
              }
            >
              <div
                className={
                  styles.contactFormHeader
                }
              >
                <p
                  className={
                    styles.contactEyebrow
                  }
                >
                  Send a Message
                </p>

                <h2>
                  How can we help?
                </h2>

                <p>
                  Complete the form below and include
                  enough detail for us to understand your
                  request.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className={
                  styles.contactForm
                }
                noValidate
              >
                <div
                  className={
                    styles.contactFieldGrid
                  }
                >
                  <div
                    className={
                      styles.contactField
                    }
                  >
                    <label htmlFor="contact-name">
                      Full Name
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(event) =>
                        setName(
                          event.target.value
                        )
                      }
                      placeholder="Your full name"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div
                    className={
                      styles.contactField
                    }
                  >
                    <label htmlFor="contact-email">
                      Email Address
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(event) =>
                        setEmail(
                          event.target.value
                        )
                      }
                      placeholder="you@example.com"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div
                  className={
                    styles.contactField
                  }
                >
                  <label htmlFor="contact-subject">
                    Subject
                  </label>

                  <input
                    id="contact-subject"
                    type="text"
                    value={subject}
                    onChange={(event) =>
                      setSubject(
                        event.target.value
                      )
                    }
                    placeholder="What is your question about?"
                    disabled={isSubmitting}
                  />
                </div>

                <div
                  className={
                    styles.contactField
                  }
                >
                  <label htmlFor="contact-message">
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(event) =>
                      setMessage(
                        event.target.value
                      )
                    }
                    placeholder="Tell us how we can help..."
                    disabled={isSubmitting}
                    rows={6}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={
                    styles.contactSubmit
                  }
                >
                  <Send
                    size={16}
                    strokeWidth={1.8}
                  />

                  <span>
                    {isSubmitting
                      ? "Sending..."
                      : "Send Message"}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

interface ContactInfoCardProps {
  icon: typeof Mail;
  title: string;
  value: string;
  description: string;
}

const ContactInfoCard = ({
  icon: Icon,
  title,
  value,
  description,
}: ContactInfoCardProps) => {
  return (
    <article className={styles.contactInfoCard}>
      <div
        className={
          styles.contactInfoIcon
        }
      >
        <Icon
          size={18}
          strokeWidth={1.7}
        />
      </div>

      <div
        className={
          styles.contactInfoText
        }
      >
        <span>{title}</span>

        <strong>{value}</strong>

        <p>{description}</p>
      </div>
    </article>
  );
};

export default ContactPage;