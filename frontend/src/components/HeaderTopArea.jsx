export default function HeaderTopArea() {
  return (
    <div className="header-top-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <a href="#">
              <i className="fa fa-envelope"></i> Mail at:{" "}
              <span className="__cf_email__" data-cfemail="deadabaeaeb1acaa9eb3b7b2b5a9bfadb6f0bdb1b3">
                [email&nbsp;protected]
              </span>
            </a>
            <span className="seprator">|</span>
            <a href="tel:+12345678945">
              <i className="fa fa-phone"></i> Call Us: +12345678945
            </a>
          </div>
          <div className="col-lg-3 text-right">
            <div className="social-icon">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-google-plus"></i></a>
              <a href="#"><i className="fa fa-pinterest"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
