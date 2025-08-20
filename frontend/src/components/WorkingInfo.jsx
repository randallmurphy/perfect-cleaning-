export function WorkingInfo() {
  return (
    <div className="working-info" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="single-working-info wow fadeInUp">
              <i className="fa fa-clock-o"></i>
              <h3>Opening Hours</h3>
              <p>
                Monday - Friday <br />
                <span>08.00 am - 10.00 pm</span>
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="single-working-info wow fadeInUp" data-wow-delay="0.4s">
              <i className="fa fa-phone"></i>
              <h3>Any Questions?</h3>
              <p>
                Call Us Now <br />
                <span>+12345678945</span>
              </p>
            </div>
          </div>

          <div className="col-md-12 col-lg-4">
            <div className="single-working-info wow fadeInUp" data-wow-delay="0.8s">
              <i className="fa fa-home"></i>
              <h3>Visit Us</h3>
              <p>
                Need Cleaning <br />
                <span>75 Hockanum Blvd Unit 1523, Vernon Rockville, CT, 06066</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
