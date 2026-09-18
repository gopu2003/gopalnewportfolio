import { email, phone, instagram, location, resumeLink } from "../data/profile.json";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path d="M6 18 18 6M9 6h9v9" />
    </svg>
  );
}

const links = [
  { href: "#about", label: "About" },
  { href: "#craft", label: "Craft" },
  { href: "#experience", label: "Experience" },
  { href: resumeLink, label: "Portfolio", external: true },
];

export default function Footer() {
  const digits = phone.replace(/[^\d+]/g, "");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-20 md:px-16">
        <div className="mb-14 flex flex-col gap-6 border-b border-white/10 pb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">
              Get in touch
            </p>
            <h2 className="font-serif text-4xl leading-tight md:text-6xl">
              Let's cut something
              <br />
              worth watching.
            </h2>
          </div>
          <a
            href={`mailto:${email}`}
            className="group inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90"
          >
            {email}
            <ArrowIcon />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div>
            <p className="font-serif text-2xl">Gopal</p>
            <p className="mt-2 text-sm text-white/50">{location}</p>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">
              Navigate
            </p>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                    className="text-sm text-white/60 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">
              Contact
            </p>
            <ul className="space-y-2">
              <li>
                <a href={`tel:${digits}`} className="text-sm text-white/60 hover:text-white">
                  {phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${email}`} className="text-sm text-white/60 hover:text-white">
                  {email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">
              Social
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href={`https://instagram.com/${instagram}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/60 hover:text-white"
                >
                  @{instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center gap-4 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:justify-between">
          <p>© {year} Gopal Rawat. All rights reserved.</p>
          <p>Edited with intention, cut with purpose.</p>
        </div>
      </div>
    </footer>
  );
}
