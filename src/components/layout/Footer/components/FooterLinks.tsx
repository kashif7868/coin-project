import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterLinksProps {
  title: string;
  links: FooterLink[];
}

const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
        {title}
      </h3>

      <div className="mt-5 flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="w-fit text-sm text-white/55 transition-colors duration-200 hover:text-amber-400"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;