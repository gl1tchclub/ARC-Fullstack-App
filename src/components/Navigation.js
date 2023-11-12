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
import CreateColosseumForm from "./forms/colosseum/CreateColosseumForm";
import CreateEventForm from "./forms/event/CreateEventForm";
import CreateAnimalForm from "./forms/animal/CreateAnimalForm";
import CreateParticipantForm from "./forms/participant/CreateParticipantForm";
import UpdateAnimalForm from "./forms/animal/UpdateAnimalForm";
import UpdateColosseumForm from "./forms/colosseum/UpdateColosseumForm";
import UpdateEventForm from "./forms/event/UpdateEventForm";
import UpdateParticipantForm from "./forms/participant/UpdateParticipantForm";

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
        <Route
          path="/colosseums"
          element={
            <>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <CreateColosseumForm />
                <UpdateColosseumForm />
              </div>
              <ColosseumsTable />
            </>
          }
        />
        <Route
          path="/events"
          element={
            <>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <CreateEventForm />
                <UpdateEventForm />
              </div>
              <EventsTable />
            </>
          }
        />
        <Route
          path="/participants"
          element={
            <>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <CreateParticipantForm />
                <UpdateParticipantForm />
              </div>
              <ParticipantsTable />
            </>
          }
        />
        <Route
          path="/animals"
          element={
            <>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <CreateAnimalForm />
                <UpdateAnimalForm />
              </div>
              <AnimalsTable />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default Navigation;
