import { useState } from "react";

const DeleteRow = (props) => {
  const BASE_URL = "https://id607001-mintep1-project.onrender.com/";
  const [isError, setIsError] = useState(false);

  const rowRemove = async () => {
    try {
      await axios.delete(`${BASE_URL}/api/${props.model}/${props.id}`);
    } catch (error) {
      setIsError(error.response.data.msg);
      console.log(error.response.data.msg);
    }
  };
  rowRemove();
};

return (
  <>
    <Button color="danger">danger</Button>
  </>
);

export default { DeleteRow }