function MainMenuArea() {
  return (
    <div className="mainmenu-area" style={{ backgroundColor: "#606264" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="logo">
              <a href="index.html">
                <img src="/assets/img/logo.png" alt="Logo" className="w-75" />
              </a>
            </div>
            <div className="responsive-menu-wrap"></div>
          </div>
          <div className="col-lg-10">
            <div className="mainmenu">
              <ul id="navigation">
                <li className="active"><a href="index.html">Home</a></li>
                <li><a href="#about-us">About</a></li>
                <li><a href="#our-service">Services</a></li>
                <li><a href="#our-project">Projects</a></li>
                <li><a href="#pricing">PRICING</a></li>
                <li><a href="#contact-us">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainMenuArea