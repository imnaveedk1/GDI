import { Logo } from "@/components/ui/logo";

export default function Header() {
  return (
    <header className="shadow-md bg-gradient-to-r from-[#169b62] via-white to-[#ff883e]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Logo />
          <div>
            <h1 className="text-xl font-bold text-gray-900">Data Governance Framework</h1>
            <p className="text-sm text-gray-700">Interactive User Guide</p>
          </div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-[#169b62] hover:text-[#0d7c4d] font-medium">Home</a>
          <a href="#" className="text-gray-700 hover:text-[#169b62] font-medium">Documentation</a>
          <a href="#" className="text-gray-700 hover:text-[#169b62] font-medium">Support</a>
          <a href="#" className="text-gray-700 hover:text-[#ff883e] hover:underline font-medium">Contact</a>
        </nav>
        <button className="md:hidden text-gray-900 hover:text-[#169b62]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
