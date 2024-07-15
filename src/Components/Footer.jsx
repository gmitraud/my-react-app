function Footer() {
  const getCurrentYear = new Date().getFullYear();

  return (
    <div className="ggm-footer">
      <footer>
        <p>Gabriel G. Mitraud &copy; {getCurrentYear}</p>
      </footer>
    </div>
  );
}

export default Footer;
