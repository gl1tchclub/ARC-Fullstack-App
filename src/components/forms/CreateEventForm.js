import axios from "axios";
import { useState } from "react";
import { Button, Form, FormGroup, Input, UncontrolledAlert } from "reactstrap";
// import { Navigate } from "react-router-dom";

const CreateEventForm = (props) => {
  const BASE_URL = "https://id607001-mintep1-project.onrender.com/";

  const [eventTitle, setEventTitle] = useState("");
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState("");
  const [isError, setIsError] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  const createEvent = async () => {
    setShowBanner(true);
    setIsError(false);
    try {
      const res = await axios.post(`${BASE_URL}api/events`, {
        eventTitle: eventTitle,
        venue: venue,
        date: date,
      });

      setIsFilled(true);

      if (res.status === 201) {
        console.log("Event successfully created");
      }

      if (res.status === 400) {
        console.log("Error creating object - 400");
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 3000);
    }

    if (isError === false) {
      setTimeout(() => {
        setIsError(true);
      }, 3000);
      setShowBanner(false);
      setIsError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createEvent();
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", width: "fit-content", textAlign: "center" }}>
          <h1 style={{ marginTop: "10px" }}>Create Event</h1>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Input
                type="text"
                name="eventTitle"
                placeholder="Event Title"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="venue"
                placeholder="Venue"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="date"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </FormGroup>
            {isError && showBanner ? (
              <UncontrolledAlert color="danger" fade={true}>
                Something went wrong. Please try again.
              </UncontrolledAlert>
            ) : null}
            {isFilled && isError === false ? (
              <UncontrolledAlert color="success">Success!</UncontrolledAlert>
            ) : null}
            <Button type="submit" style={{ margin: '1rem' }}>Create</Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CreateEventForm;
