const navItems = [
  { href: "/opere", label: "Opere" },
  { href: "/frammenti", label: "Frammenti" },
  { href: "/giuspe", label: "Giuspe" },
  { href: "/#continua", label: "Continua" },
];

export function SiteNav() {
  return (
    <header className="site-header" aria-label="Navigazione principale">
      <a className="brand" href="/" aria-label="Giuspe">
        <span className="brand-mark">G</span>
        <span>Giuspe</span>
      </a>
      <nav className="nav-links" aria-label="Sezioni del sito">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
