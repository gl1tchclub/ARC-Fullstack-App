import axios from "axios";
import { useState } from "react";
import { Alert, Button, Form, FormGroup, Input, UncontrolledAlert } from "reactstrap";
import { Navigate } from "react-router-dom";

const CreateAnimalForm = (props) => {
    const BASE_URL = "https://id607001-mintep1-project.onrender.com/"

    const [name, setName] = useState("");
    const [taxonomy, setTaxonomy] = useState("");
    const [species, setSpecies] = useState("");
    const [rank, setRank] = useState("");
    const [ownerName, setOwnerName] = useState("");
    const [isError, setIsError] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [showBanner, setShowBanner] = useState(true);
    
    const createAnimal = async () => {
        setShowBanner(true)
        setIsError(false)
        try {
            const res = await axios.post(`${BASE_URL}api/animals`, {
                name: name,
                taxonomy: taxonomy,
                species: species,
                rank: rank,
                ownerName: ownerName,
            })

            setIsFilled(true)
            
            if (res.status === 201) {
                console.log('Animal successfully created')
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
            }, 3000);
          setShowBanner(false)
          setIsError(false)
        }
     }

    const handleSubmit = (e) => {
        e.preventDefault();
        createAnimal();
    }

    return (
        <>
          <h1 style={{ marginTop: "10px" }}>Create Animal</h1>
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
                  name="taxonomy"
                  placeholder="Taxonomy"
                  value={taxonomy}
                  onChange={(e) => setTaxonomy(e.target.value)} 
                  required
                />
            </FormGroup>
            <FormGroup>
                <Input
                  type="text"
                  name="species"
                  placeholder="Species"
                  value={species}
                  onChange={(e) => setSpecies(e.target.value)} 
                  required
                />
            </FormGroup>
            <FormGroup>
                <Input
                  type="text"
                  name="rank"
                  placeholder="Rank"
                  value={rank}
                  onChange={(e) => setRank(e.target.value)}
                  required
                />
            </FormGroup>
            <FormGroup>
                <Input
                  type="text"
                  name="ownerName"
                  placeholder="ownerName"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
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

export default CreateAnimalForm;
