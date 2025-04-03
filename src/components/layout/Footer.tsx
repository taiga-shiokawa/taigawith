const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary/50">
      <div className="container mx-auto px-4 py-8">
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60">
          <p>&copy; {currentYear} Taiga With... All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 