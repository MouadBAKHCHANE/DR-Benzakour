"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const specialitesItems = [
  { label: "Chirurgie Viscérale & Digestive", href: "/specialites/chirurgie-viscerale" },
  { label: "Chirurgie Robotique", href: "/specialites/chirurgie-robotique" },
  { label: "Chirurgie Mini-Invasive", href: "/specialites/chirurgie-mini-invasive" },
  { label: "Cancérologie Digestive", href: "/specialites/cancerologie-digestive" },
  { label: "RAAC — Récupération Améliorée", href: "/specialites/raac" },
  { label: "Consultation Spécialisée", href: "/specialites/consultation-specialisee" },
];

const actualitesItems = [
  { label: "Chirurgie Digestive", href: "/actualites?cat=Chirurgie+Digestive" },
  { label: "Innovation", href: "/actualites?cat=Innovation" },
  { label: "Cancérologie", href: "/actualites?cat=Cancérologie" },
  { label: "Récupération", href: "/actualites?cat=Récupération" },
  { label: "Laparoscopie", href: "/actualites?cat=Laparoscopie" },
  { label: "Prévention", href: "/actualites?cat=Prévention" },
];

interface NavbarProps {
  hasHero?: boolean;
}

export function Navbar({ hasHero = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(!hasHero);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!hasHero) return;

    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      const scrollY = window.scrollY || window.pageYOffset;
      setIsScrolled(scrollY > heroBottom - 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasHero]);

  const toggleMenu = useCallback(() => setMenuOpen((v) => !v), []);

  const handleDropdownEnter = (key: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(key);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <>
      <section
        className={`header ${isScrolled ? "scrolled" : ""}`}
        id="header"
      >
        <nav
          className={`navbar ${isScrolled ? "scrolled" : ""}`}
          id="navbar"
        >
          <div className="container">
            <div
              className={`nav-inner ${!isScrolled && !menuOpen ? "inverted" : ""}`}
              id="navInner"
            >
              <Link href="/" className="brand">
                <img
                  src="/images/Logo_Dr._Benzakour_Mohammed_Amal_horz-removebg.webp"
                  alt="Oncodigest - Dr. Benzakour Mohammed Amal"
                  className="brand-logo"
                />
              </Link>
              <div className="nav-menu">
                {/* Accueil */}
                <Link href="/" className="nav-link">
                  <div className="nav-top-line"></div>
                  <span className="nav-text">Accueil</span>
                  <div className="nav-bottom-line"></div>
                </Link>

                {/* À propos */}
                <Link href="/a-propos" className="nav-link">
                  <div className="nav-top-line"></div>
                  <span className="nav-text">À propos</span>
                  <div className="nav-bottom-line"></div>
                </Link>

                {/* Spécialités with dropdown */}
                <div
                  className="nav-dropdown-wrapper"
                  onMouseEnter={() => handleDropdownEnter("specialites")}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link href="/specialites" className="nav-link">
                    <div className="nav-top-line"></div>
                    <span className="nav-text">
                      Spécialités
                      <svg className="dropdown-chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </span>
                    <div className="nav-bottom-line"></div>
                  </Link>
                  <div className={`nav-dropdown ${openDropdown === "specialites" ? "open" : ""}`}>
                    {specialitesItems.map((item) => (
                      <Link key={item.href} href={item.href} className="nav-dropdown-item">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Actualités with dropdown */}
                <div
                  className="nav-dropdown-wrapper"
                  onMouseEnter={() => handleDropdownEnter("actualites")}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link href="/actualites" className="nav-link">
                    <div className="nav-top-line"></div>
                    <span className="nav-text">
                      Actualités
                      <svg className="dropdown-chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </span>
                    <div className="nav-bottom-line"></div>
                  </Link>
                  <div className={`nav-dropdown ${openDropdown === "actualites" ? "open" : ""}`}>
                    {actualitesItems.map((item) => (
                      <Link key={item.label} href={item.href} className="nav-dropdown-item">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <Link href="/contact" className="nav-link">
                  <div className="nav-top-line"></div>
                  <span className="nav-text">Contact</span>
                  <div className="nav-bottom-line"></div>
                </Link>
              </div>
              <button
                className={`menu-button ${menuOpen ? "open" : ""}`}
                onClick={toggleMenu}
                aria-label="Menu"
                aria-expanded={menuOpen}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              <button type="button" data-appointment className="primary-button nav-cta desktop">
                <div className="arrow-wrap _01">
                  <img src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691c5c75318d0e32ae92d71a_ic-arrow-dot.svg" alt="Arrow" />
                </div>
                <div className="primary-text">
                  <div>Prendre Rendez-vous</div>
                </div>
                <div className="arrow-wrap _02">
                  <img src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691c5c75318d0e32ae92d71a_ic-arrow-dot.svg" alt="Arrow" />
                </div>
              </button>
            </div>
          </div>
        </nav>
      </section>

      {/* Mobile overlay */}
      <div className={`mobile-overlay ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu">
          <Link href="/" className={`mobile-link ${pathname === "/" ? "active" : ""}`} onClick={() => setMenuOpen(false)}>
            Accueil
          </Link>
          <Link href="/a-propos" className={`mobile-link ${pathname === "/a-propos" ? "active" : ""}`} onClick={() => setMenuOpen(false)}>
            À propos
          </Link>
          <Link href="/specialites" className={`mobile-link ${pathname === "/specialites" ? "active" : ""}`} onClick={() => setMenuOpen(false)}>
            Spécialités
          </Link>
          <Link href="/actualites" className={`mobile-link ${pathname === "/actualites" ? "active" : ""}`} onClick={() => setMenuOpen(false)}>
            Actualités
          </Link>
          <Link href="/contact" className={`mobile-link ${pathname === "/contact" ? "active" : ""}`} onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <button
            type="button"
            data-appointment
            className="primary-button mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            <div className="arrow-wrap _01">
              <img src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691c5c75318d0e32ae92d71a_ic-arrow-dot.svg" alt="Arrow" />
            </div>
            <div className="primary-text">
              <div>Prendre Rendez-vous</div>
            </div>
            <div className="arrow-wrap _02">
              <img src="https://cdn.prod.website-files.com/6879d758d1319ce9a5b7b343/691c5c75318d0e32ae92d71a_ic-arrow-dot.svg" alt="Arrow" />
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
