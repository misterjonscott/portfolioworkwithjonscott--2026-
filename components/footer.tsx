const Footer = () => {
  return (
    <footer role="contentinfo" style={{ backgroundColor: '#319795', color: 'white', padding: '16px 0', marginTop: 'auto', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} WorkWithJonScott.com - All rights reserved.</p>
    </footer>
  );
};

export default Footer;