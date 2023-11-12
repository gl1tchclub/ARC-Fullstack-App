import { useState } from "react";

const DeleteAnimal = (props) => {
    const BASE_URL = "https://id607001-mintep1-project.onrender.com/";
    const [id, setId] = useState("");
    const [isError, setIsError] = useState(false);

    const deleteFunction = async () => {
        try {
            const res = await axios.post(`${BASE_URL}api/animals/${id}`);
            

        } catch (error) {
            console.log(error.response.data.msg)
        }
    } 
}

return (
    <>
<Button color="danger">
danger
</Button>
      
    </>
);