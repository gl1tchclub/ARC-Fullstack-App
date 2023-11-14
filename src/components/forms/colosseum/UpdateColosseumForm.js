import axios from "axios";
import { useState } from "react";
import { Button, Form, FormGroup, Input, Alert } from "reactstrap";

const UpdateColosseumForm = (props) => {
  const BASE_URL = "https://id607001-mintep1-project.onrender.com/";
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [terrainType, setTerrainType] = useState("");
  const [isError, setIsError] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [bannerMessage, setMessage] = useState("");

  const updateColosseum = async () => {
    try {
      const res = await axios.put(`${BASE_URL}api/colosseums/${id}`, {
        name: name,
        country: country,
        city: city,
        terrainType: terrainType,
      });

      setIsFilled(true);

      if (res.status === 200) {
        setMessage("Colosseum successfully updated");
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
    updateColosseum();
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
          <h1 style={{ margin: "20px 0" }}>Update Colosseum</h1>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Input
                type="text"
                name="id"
                placeholder="Colosseum ID (required)"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="country"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="city"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="terrainType"
                placeholder="Terrain Type"
                value={terrainType}
                onChange={(e) => setTerrainType(e.target.value)}
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

export default UpdateColosseumForm;
