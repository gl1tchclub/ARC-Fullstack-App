import axios from "axios";
import { useState } from "react";
import { Button, Form, FormGroup, Input, UncontrolledAlert } from "reactstrap";
// import { Navigate } from "react-router-dom";

const CreateColosseumForm = (props) => {
  const BASE_URL = "https://id607001-mintep1-project.onrender.com/";

  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [terrainType, setTerrainType] = useState("");
  const [isError, setIsError] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  const createColosseum = async () => {
    setShowBanner(true);
    setIsError(false);
    try {
      const res = await axios.post(`${BASE_URL}api/colosseums`, {
        name: name,
        country: country,
        city: city,
        terrainType: terrainType,
      });

      setIsFilled(true);

      if (res.status === 201) {
        console.log("Colosseum successfully created");
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
    createColosseum();
  };

  return (
    <>
      <h1 style={{ marginTop: "10px" }}>Create Colosseum</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="country"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="city"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="terrainType"
            placeholder="Terrain Type"
            value={terrainType}
            onChange={(e) => setTerrainType(e.target.value)}
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
        <Button type="submit">Create</Button>
      </Form>
    </>
  );
};

export default CreateColosseumForm;
