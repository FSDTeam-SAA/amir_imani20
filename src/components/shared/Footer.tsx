"use client"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#2A9BA0] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">DoUndo</h3>
            <p className="text-sm text-white/80 mb-4">Connecting people through games that live beyond the table.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="1" />
                  <path d="M19.5 1h-15A4.5 4.5 0 000 5.5v13A4.5 4.5 0 004.5 23h15a4.5 4.5 0 004.5-4.5v-13A4.5 4.5 0 0019.5 1zm-7.5 13.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="#" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  License
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>support@doundo.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>123 Gaming Street, CA 94000</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
            <p>&copy; 2025 DoUndo. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition">
                Terms
              </Link>
              <Link href="#" className="hover:text-white transition">
                Privacy
              </Link>
              <Link href="#" className="hover:text-white transition">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
