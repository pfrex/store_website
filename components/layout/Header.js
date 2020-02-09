import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faStoreAlt,
  faCashRegister,
  faFileInvoiceDollar,
  faFilePrescription,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/header.css";

const Header = () => (
  <Navbar
    collapseOnSelect
    expand="lg"
    bg="c-header"
    variant="dark"
    className="c-header"
  >
    <Navbar.Brand href="#home" id="title">
      Grocery Store
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#features">
          <div id="about" className="bDiv">
            <FontAwesomeIcon className="mr-1 mFa" icon={faStoreAlt} />
            About
          </div>
        </Nav.Link>
        <Nav.Link href="#pricing">
          <div id="shop" className="bDiv">
            <FontAwesomeIcon className="mr-1 mFa" icon={faCashRegister} />
            Shop
          </div>
        </Nav.Link>
        <Nav.Link href="#features">
          <div id="pharmacy" className="bDiv">
            <FontAwesomeIcon className="mr-1 mFa" icon={faFilePrescription} />
            Pharmacy
          </div>
        </Nav.Link>
        <Nav.Link href="#pricing">
          <div id="orders" className="bDiv">
            <FontAwesomeIcon className="mr-1 mFa" icon={faFileInvoiceDollar} />
            Orders
          </div>
        </Nav.Link>
        <Nav.Link href="#pricing">
          <div id="recipes" className="bDiv">
            <FontAwesomeIcon className="mr-1 mFa" icon={faFolderOpen} />
            Recipes
          </div>
        </Nav.Link>
      </Nav>
      <Nav>
        <Form className="search">
          <FormControl type="text" placeholder="Search" />
          <Button>
            <FontAwesomeIcon
              className="mr-1 mFa"
              icon={faSearch}
            ></FontAwesomeIcon>
          </Button>
        </Form>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
