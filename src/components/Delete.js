import axios from "axios";
const BASE_URL = "https://id607001-mintep1-project.onrender.com/"

const deleteRow = async (id, type) => {
    try {
      if (window.confirm(`Do you truly wish to delete ${type} number ${id}?`)) {
        await axios.delete(`${BASE_URL}api/${type}/${id}`);
        console.log(`Deleted ${type} with id ${id} successfully`)
      }
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

export {deleteRow}