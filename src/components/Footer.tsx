const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">AS</span>
          <span className="text-muted-foreground">|</span>
          <span className="text-sm text-muted-foreground">Abhishek Sehrawat</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
