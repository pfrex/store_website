import "../../styles/footer.css";

const Footer = props => {
  let content = (
    <footer>
      <div className="last-message">
        <h4>Store Name</h4>
        <p>The last message, company motto, or call to action could go here.</p>
      </div>

      <div className="act-footer">
        <div className="main-footer">
          <div className="f-links">
            <div className="f-sub">
              <a href="#">Careers</a>
              <a href="#">History</a>
              <a href="#">Locations</a>
            </div>
            <div className="f-sub">
              <a href="#">Hours</a>
              <a href="#">Employees</a>
              <a href="#">Something</a>
            </div>
            <div className="f-sub">
              <a href="#">Other</a>
              <a href="#">Cool</a>
              <a href="#">Stuff</a>
            </div>
          </div>

          <div className="social">
            <div className="icons">
              <img
                id="facebook"
                src="/images/f_logo_RGB-Blue_512.png"
                alt="Facebook icon."
              ></img>
              <img
                id="instagram"
                src="/images/glyph-logo_May2016.png"
                alt="Instagram icon."
              ></img>
              <img
                id="twitter"
                src="/images/Twitter_Social_Icon_Square_Color.png"
                alt="Twitter icon."
              ></img>
            </div>

            <div className="apps">
              <img
                id="apple"
                src="/images/applblack.svg"
                alt="Apple app store icon."
              ></img>
              <img
                id="google"
                src="/images/google-play-badge.png"
                alt="Google play store icon."
              ></img>
            </div>
          </div>
        </div>

        <div className="f-bottom">
          <span>
            <span id="copy">&copy; some store 2019</span>
            <span className="three">
              <a href="#">Privacy</a>
              <span className="vl"></span>
              <a href="#">Agreement</a>
              <span className="vl"></span>
              <a href="#">Legal</a>
            </span>
          </span>
        </div>
      </div>
    </footer>
  );

  return content;
};
export default Footer;
