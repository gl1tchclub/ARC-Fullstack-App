import axios from "axios";
import { useState } from "react";
import { Alert, Button, Form, FormGroup, Input } from "reactstrap";
import { Navigate } from "react-router-dom";

const CreateForm = (props) => {
    const BASE_URL = ""

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
                  value={field.name}
                  onChange={(e) => setField(e.target.value)} //detects element value change
                  required
                />
            </FormGroup>
          </Form>
        </>
    )
}