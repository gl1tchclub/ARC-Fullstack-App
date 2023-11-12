import axios from "axios";
import { useState } from "react";
import { Button, Form, FormGroup, Input, UncontrolledAlert } from "reactstrap";
// import { Navigate } from "react-router-dom";

const CreateParticipantForm = (props) => {
    const BASE_URL = "https://id607001-mintep1-project.onrender.com/"

    const [alias, setAlias] = useState("");
    const [age, setAge] = useState("");
    const [memberOf, setMemberOf] = useState("");
    const [isError, setIsError] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [showBanner, setShowBanner] = useState(true);
    
    const createParticipant = async () => {
        setShowBanner(true)
        setIsError(false)
        try {
            const res = await axios.post(`${BASE_URL}api/participants`, {
              alias: alias,
              age: age,
              memberOf: memberOf,
            })

            setIsFilled(true)
            
            if (res.status === 201) {
                console.log('Participant successfully created')
            }
            
            if (res.status === 400) {
                console.log('Error creating object - 400')
            }
            
        } catch (error) {
            console.log(error)
            setIsError(true)
            setTimeout(() => {
                setIsError(false)
              }, 3000);
        }

        if (isError === false) {
          setTimeout(() => {
              setIsError(true)
              setShowBanner(false)
            }, 3000);
          setIsError(false)
        }
     }

    const handleSubmit = (e) => {
        e.preventDefault();
        createParticipant();
    }

    return (
        <>
          <h1 style={{ marginTop: "10px" }}>Create Participant</h1>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Input
                  type="text"
                  name="alias"
                  placeholder="Alias"
                  value={alias}
                  onChange={(e) => setAlias(e.target.value)}
                  required
                />
            </FormGroup>
            <FormGroup>
                <Input
                  type="text"
                  name="age"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)} 
                  required
                />
            </FormGroup>
            <FormGroup>
                <Input
                  type="text"
                  name="memberOf"
                  placeholder="Member Of"
                  value={memberOf}
                  onChange={(e) => setMemberOf(e.target.value)} 
                  required
                />
            </FormGroup>
            {isError && showBanner ? (
              <UncontrolledAlert color="danger" fade={true}>
                Something went wrong. Please try again.
              </UncontrolledAlert>
            ) : null}
            {isFilled && isError === false ? (
              <UncontrolledAlert color="success">
                Success!
              </UncontrolledAlert>
              
            ) : null}
            <Button type="submit">Create</Button>
          </Form>
        </>
    )
}

export default CreateParticipantForm;
