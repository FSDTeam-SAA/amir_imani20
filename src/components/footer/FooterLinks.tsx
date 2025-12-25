import Link from "next/link";

interface FooterLinksProps {
  title: string;
  links: Array<{ label: string; href: string; }>;
}

export default function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((item) => (
          <li key={item.label}>
            <Link 
              href={item.href} 
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm inline-block py-1 hover:translate-x-1 transform"
              prefetch={false}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}