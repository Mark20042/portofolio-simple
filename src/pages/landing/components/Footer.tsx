const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-10 md:mt-20 dark:border-gray-800 bg-white dark:bg-transparent py-6 md:py-12 px-4 md:px-6">
      {/* Bottom Bar */}
      <div className="pt-4 md:pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col items-center gap-4 text-[10px] sm:text-xs text-gray-800 dark:text-gray-400 uppercase tracking-widest font-bold text-center">
        <p>© {currentYear} Mark Joseph Potot — All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
