import axios from "axios";
import { useState } from "react";
import { Alert, Button, Form, FormGroup, Input } from "reactstrap";
import { Navigate } from "react-router-dom";
const BASE_URL = ""

const CreateForm = () => {
    try {
        const [fields, setFields] = useState({
            name: '',
            country: '',
            city: '',
            terrainType: ''
        })
    
    const [isError, setIsError] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFields((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const createColosseum = async () => {
        try {
            const res = await axios.post(`${BASE_URL}/api/colosseums`, fields)

            if (res.status === 201) {
                console.log('Colosseum successfully created')
            }

            if (res.status === 400) {
                console.log('Error creating object - 400')
            }

        } catch (error) {
            console.log(error)
            setIsError(true)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createColosseum();
    }

    return (
        <>
          <h1 style={{ marginTop: "10px" }}>Create Colosseum</h1>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={fields.name}
                  onChange={(e) => handleChange} 
                  required
                />
            </FormGroup>
            <FormGroup>
                <Input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={fields.country}
                  onChange={(e) => handleChange} 
                  required
                />
            </FormGroup>
            <FormGroup>
                <Input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={fields.city}
                  onChange={(e) => handleChange} 
                  required
                />
            </FormGroup>
            <FormGroup>
                <Input
                  type="text"
                  name="terrainType"
                  placeholder="Terrain Type"
                  value={fields.terrainType}
                  onChange={(e) => handleChange}
                  required
                />
            </FormGroup>
            {isError ? (
              <Alert color="danger">
                Something went wrong. Please try again.
              </Alert>
            ) : null}
            <Button type="submit">Create</Button>
          </Form>
        </>
    )
    } catch (e) {
        console.log(error)
        setIsError(true)
    }
}

export default CreateForm;
