import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/styles.css";
import ScrollTop from "react-scrolltop-button";

const Layout = props => (
  <div>
    <Header />
    <ScrollTop
      text="Top"
      distance={100}
      breakpoint={768}
      style={{ backgroundColor: "red" }}
      id="scroll-your-role"
      speed={250}
      target={0}
      icon={null}
    />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
// Is the above props.children a good way to do things?
// Or would it be better to use higher order functions?
