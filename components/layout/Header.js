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
// Get to customizing this with my own CSS!
// Use some fancy styling like the stuff used on CSS tricks and with Font awesome!
// Get to it
//<FontAwesomeIcon className={props.folder} icon={faFolder} />;
// wrap in a div nd make them box elements? Or make them inline with some margin right
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

/*
const Header = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">Grocery Store</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#features">About</Nav.Link>
        <Nav.Link href="#pricing">Shop</Nav.Link>
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Deals</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Co</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Dank memes
        </Nav.Link>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
*/
