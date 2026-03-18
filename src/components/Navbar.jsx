export default function Navbar() {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Resume', href: '#resume' },
    { name: 'Projects', href: '#project' },
    { name: 'ContactMe', href: '#contactMe' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-6 bg-gradient-to-b from-black/80 to-transparent">
      <div className="flex gap-8">
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="text-gray-400 hover:text-white text-xs uppercase tracking-widest transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
     
    </nav>
  );
}