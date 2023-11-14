import axios from "axios";
import { useState } from "react";
import { Button, Form, FormGroup, Input, Alert } from "reactstrap";

const UpdateParticipantForm = (props) => {
  const BASE_URL = "https://id607001-mintep1-project.onrender.com/";
  const [id, setId] = useState("");
  const [alias, setAlias] = useState("");
  const [age, setAge] = useState("");
  const [memberOf, setMemberOf] = useState("");
  const [bannerMessage, setMessage] = useState("");
  const [showBanner, setShowBanner] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const updateParticipant = async () => {
    try {
      const res = await axios.put(`${BASE_URL}api/participants/${id}`, {
        alias: alias,
        age: age,
        memberOf: memberOf,
      });

      setIsFilled(true);

      if (res.status === 200) {
        setMessage("Participant successfully updated");
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
    updateParticipant();
    setAge("");
    setAlias("");
    setMemberOf("");
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
          <h1 style={{ margin: "20px 0" }}>Update Participant</h1>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Input
                type="text"
                name="id"
                placeholder="Participant ID (required)"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="alias"
                placeholder="Alias"
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="age"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="memberOf"
                placeholder="Member Of"
                value={memberOf}
                onChange={(e) => setMemberOf(e.target.value)}
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

export default UpdateParticipantForm;
