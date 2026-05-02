import React from "react";
import { Linkedin, Facebook, Youtube, Instagram, Music2 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "About Us", href: "#about" },
    { name: "Upcoming Events", href: "#events" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
  ];

  const socials = [
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/awsi2it/" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/awsclub.i2it/" },
  ];

  return (
    <footer className="w-full py-12 bg-background border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center space-y-8">
        
        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Socials */}
        <div className="flex items-center gap-6">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.name}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <div className="text-muted-foreground text-xs sm:text-sm">
          &copy; {currentYear} AWS Cloud Club I²IT, All rights reserved
        </div>
        
      </div>
    </footer>
  );
}
