import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ColosseumsTable from "../tables/ColosseumsTable.js";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
    <Navbar color="warning" light expand="md">
      <NavbarBrand href="/">ARC Global Championship</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
          <NavLink href="/colosseums">Join</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    <Routes>
      <Route path="/colosseums" element={<ColosseumsTable />} />
    </Routes>
  </Router>
  );
};

export default Navigation;