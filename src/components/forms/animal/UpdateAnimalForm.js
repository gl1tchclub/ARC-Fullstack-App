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
            const res = await axios.update(`${BASE_URL}api/animals`, {
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
                setShowBanner(false);
                setIsError(false);
            }, 3000);
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateAnimal();
    };

    return (
        <>
          
        </>
    )
}