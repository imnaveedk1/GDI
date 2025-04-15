export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#169b62] via-white to-[#ff883e] text-gray-900 py-8 shadow-inner">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/90 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-4 text-[#169b62]">Data Governance Framework</h3>
            <p className="text-gray-700 text-sm">
              A comprehensive system designed to manage data access, privacy, and compliance with regulatory requirements.
            </p>
          </div>
          <div className="bg-white/90 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#" className="hover:text-[#169b62] transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-[#169b62] transition-colors">Support Center</a></li>
              <li><a href="#" className="hover:text-[#169b62] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#169b62] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div className="bg-white/90 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-4 text-[#ff883e]">Contact</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#169b62]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:support@example.com" className="hover:text-[#ff883e] transition-colors">support@example.com</a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#169b62]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+123 456 7890</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 text-center text-gray-900 text-sm font-medium bg-white/80 p-2 rounded-md shadow-sm">
          <p>© {new Date().getFullYear()} Data Governance Framework. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
