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

import ColosseumsTable from "./tables/ColosseumsTable";
import EventsTable from "./tables/EventsTable";
import ParticipantsTable from "./tables/ParticipantsTable";
import AnimalsTable from "./tables/AnimalsTable";
import CreateColosseumForm from "./forms/CreateColosseumForm";
import CreateEventForm from "./forms/CreateEventForm";
import CreateAnimalForm from "./forms/CreateAnimalForm";
import CreateParticipantForm from "./forms/CreateParticipantForm";

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
          <NavLink href="/colosseums">Colosseums</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/events">Events</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/participants">Participants</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/animals">Animals</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    <Routes>
      <Route path="/colosseums" element={<>
        <CreateColosseumForm />
        <ColosseumsTable />
      </>} />
      <Route path="/events" element={<>
        <CreateEventForm />
        <EventsTable />
      </>} />
      <Route path="/participants" element={<>
        <CreateParticipantForm />
        <ParticipantsTable />
      </>} />
      <Route path="/animals" element={<>
        <CreateAnimalForm />
        <AnimalsTable />
      </>} />
    </Routes>
  </Router>
  );
};

export default Navigation;