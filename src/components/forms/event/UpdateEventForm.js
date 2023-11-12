import axios from "axios";
import { useState } from "react";
import { Button, Form, FormGroup, Input, Alert } from "reactstrap";

const UpdateEventForm = (props) => {
  const BASE_URL = "https://id607001-mintep1-project.onrender.com/";
  const [id, setId] = useState("");
  const [eventTitle, setEventTitle] = useState("");
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState("");
  const [showBanner, setShowBanner] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [bannerMessage, setMessage] = useState("");

  const updateEvent = async () => {
    try {
      const res = await axios.put(`${BASE_URL}api/events/${id}`, {
        eventTitle: eventTitle,
        venue: venue,
        date: date,
      });

      setIsFilled(true);

      if (res.status === 200) {
        setMessage("Event successfully updated - Refresh the page to see!");
        console.log(bannerMessage);
      }

      if (res.status === 400) {
        setMessage(res.response.data.msg);
      }
    } catch (error) {
      console.log(bannerMessage);
      setMessage(error.response.data.msg);
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
    updateEvent();
  };

  return (
    <>
      <div style={{ display: "block", margin: "40px 70px", width: "30%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
            textAlign: "center",
          }}
        >
          <h1 style={{ margin: "20px 0" }}>Update Event</h1>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Input
                type="text"
                name="id"
                placeholder="Event ID (required)"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="eventTitle"
                placeholder="Event Title"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="venue"
                placeholder="Venue"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="date"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </FormGroup>
            {isError && showBanner ? (
              <Alert color="danger" fade={true}>
                {bannerMessage}
              </Alert>
            ) : null}
            {isFilled && isError === false ? (
              <Alert color="success">{bannerMessage}</Alert>
            ) : null}
            <Button
              type="submit"
              style={{ marginBottom: "1rem", width: "100%" }}
            >
              Update
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default UpdateEventForm;
