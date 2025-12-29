import Image from "next/image";
import Link from "next/link";
import SocialIcons from "../footer/SocialIcons";
import FooterLinks from "../footer/FooterLinks";
import NewsletterForm from "../footer/NewsletterForm";
// import NewsletterForm from "../footer/NewsletterForm";

// Constants for maintainability
const COMPANY_INFO = {
  name: "DoUndo",
  description: "A Universe of Games for Curious Minds.",
  logo: "/footerlogo.svg",
  logoAlt: "DoUndo Logo",
};

const PRODUCTS_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Games", href: "/game" },
  { label: "Merchandise", href: "/merchandise" },
  { label: "Fortune Telling", href: "/fortune-telling" },
  { label: "Contact", href: "/contact" },
];

const RESOURCES_LINKS = [
  { label: "Cart", href: "/cart" },
  { label: "Blog", href: "/blogs" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/term-condition" },
  { label: "Shipping policy", href: "/shipping-policy" },
];

const LEGAL_LINKS = [
  { label: "Terms", href: "/term-condition" },
  { label: "Privacy", href: "/privacy-policy" },
  // { label: "Cookies", href: "/cookies" },
  // { label: "Sitemap", href: "/sitemap.xml" },
];

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY_INFO.name,
  url: "https://yourdomain.com",
  logo: "https://yourdomain.com/logo.svg",
  sameAs: [
    "https://twitter.com/yourcompany",
    "https://facebook.com/yourcompany",
    "https://instagram.com/yourcompany",
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="text-white"
      role="contentinfo"
      aria-label="Website footer"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Main Footer Content */}
      <div className="bg-[#3D8D9A] text-white py-10 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-1 ">
            {/* Company Info - Column 1 */}
            <div className="space-y-4 lg:col-span-2">
              <div className="flex items-center space-x-2">
                <Image
                  src={COMPANY_INFO.logo}
                  alt={COMPANY_INFO.logoAlt}
                  width={320}
                  height={47}
                  className=" w-full object-cover max-w-81"
                  priority={false}
                  loading="lazy"
                  // sizes="(max-width: 328px) 100px, 120px"
                />
              </div>

              <p className="text-sm text-[#FFFFFF] lg:text-[19px] leading-relaxed max-w-xs">
                {COMPANY_INFO.description}
              </p>

              <div className="">
                <SocialIcons />
              </div>
            </div>

            {/* Products Links - Column 2 */}
            <FooterLinks title="Products" links={PRODUCTS_LINKS} />

            {/* Resources Links - Column 3 */}
            <FooterLinks title="Resources" links={RESOURCES_LINKS} />

            {/* Newsletter - Column 4 */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
              {/* <p className="text-white/80 text-sm mb-4">
                Subscribe to our newsletter for the latest updates and offers.
              </p>
               */}
              <NewsletterForm />

              {/* <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-xs text-white/60">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="bg-white py-4 md:py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            {/* Copyright */}
            <p className="text-xs md:text-sm text-[#717680] order-2 md:order-1">
              &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </p>

            {/* Legal Links */}
            <nav
              className="order-1 md:order-2"
              aria-label="Legal links"
              itemScope
              itemType="https://schema.org/SiteNavigationElement"
            >
              <ul className="flex flex-wrap justify-center gap-3 md:gap-6">
                {LEGAL_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[#717680] hover:text-gray-400 transition-colors duration-300 text-xs md:text-sm font-medium"
                      prefetch={false}
                      itemProp="url"
                    >
                      <span itemProp="name">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Additional Info */}
          {/* <div className="mt-4 pt-4 border-t border-white/10 text-center">
            <p className="text-xs text-white/60">
              Made with ❤️ for amazing digital experiences
            </p>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
