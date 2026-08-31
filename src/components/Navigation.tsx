import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HashLink } from "@/components/ui/HashLink";
import { Menu, X } from "lucide-react";
import backeroLogo from "@/assets/backero-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "/products" },
    { label: "Brands", href: "#brands" },
    { label: "Our Journey", href: "#story" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container-custom flex items-center justify-between h-20">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <HashLink href="/" className="flex items-center">
            <img src={backeroLogo} alt="Backero" className="h-10 md:h-12 w-auto" />
          </HashLink>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <HashLink
                href={link.href}
                className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-foreground hover:text-accent transition-colors link-underline py-1"
              >
                {link.label}
              </HashLink>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.95 }}>
            <Button variant="default" size="sm" asChild>
              <HashLink href="#contact">Partner With Us</HashLink>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle mobile menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="h-6 w-6 text-foreground" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Menu className="h-6 w-6 text-foreground" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden bg-card/98 backdrop-blur-md border-t border-border overflow-hidden"
          >
            <ul className="container-custom py-6 space-y-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                >
                  <HashLink
                    href={link.href}
                    className="block py-3 px-2 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </HashLink>
                </motion.li>
              ))}
              <motion.li
                className="pt-3"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.2 }}
              >
                <Button variant="default" className="w-full" asChild>
                  <HashLink href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Partner With Us
                  </HashLink>
                </Button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
