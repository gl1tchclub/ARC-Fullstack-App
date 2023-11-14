import { useState } from "react";
import axios from "axios";
import { Button } from "reactstrap";

const DeleteRow = (props) => {
  const BASE_URL = "https://id607001-mintep1-project.onrender.com/";
  const [isError, setIsError] = useState(false);

  const rowRemove = async () => {
    try {
      await axios.delete(`${BASE_URL}/api/${props.model}/${props.id}`);
    } catch (error) {
      setIsError(error.response.data.msg);
      console.log(isError);
    }
  };
  rowRemove();
  return (
    <>
      <Button color="danger">Delete</Button>
    </>
  );
};


export default { DeleteRow }