import axios from "axios";
import { useState } from "react";
import { Button, Form, FormGroup, Input, UncontrolledAlert } from "reactstrap";

const UpdateAnimalForm = (props) => {
    const BASE_URL = "https://id607001-mintep1-project.onrender.com/";
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [taxonomy, setTaxonomy] = useState("");
    const [species, setSpecies] = useState("");
    const [rank, setRank] = useState("");
    const [ownerName, setOwnerName] = useState("");
    const [bannerMessage, setMessage] = useState("");
    const [showBanner, setShowBanner] = useState(true);
    const [isError, setIsError] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const updateAnimal = async () => {
        try {
            const res = await axios.update(`${BASE_URL}api/animals/${id}`, {
                id: id,
                name: name,
                taxonomy: taxonomy,
                species: species,
                rank: rank,
                ownerName: ownerName,
            });

            setIsFilled(true);

            if (res.status === 201) {
                setMessage("Animal successfully created")
                console.log(bannerMessage);
            }

            if (res.status === 400) {
                setMessage("Error creating object - 400")
                console.log(bannerMessage);
            }

        } catch (error) {
            console.log(error)
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

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateAnimal();
    };

    return (
        <>
            <div style={{ display: "block", margin: "40px 70px", width: "30%" }}>
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", width: "100%", textAlign: "center" }}>
                    <h1 style={{ margin: "20px 0" }}>Update Animal</h1>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Input
                                type="int"
                                name="id"
                                placeholder="Animal ID (required)"
                                value={name}
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
                                name="taxonomy"
                                placeholder="Taxonomy"
                                value={taxonomy}
                                onChange={(e) => setTaxonomy(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="species"
                                placeholder="Species"
                                value={species}
                                onChange={(e) => setSpecies(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="rank"
                                placeholder="Rank"
                                value={rank}
                                onChange={(e) => setRank(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="text"
                                name="ownerName"
                                placeholder="Owner Name"
                                value={ownerName}
                                onChange={(e) => setOwnerName(e.target.value)}
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
                        <Button type="submit" style={{ marginBottom: "1rem", width: "100%" }}>Update</Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default UpdateAnimalForm;