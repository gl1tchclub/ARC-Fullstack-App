import { useEffect, useState } from "react";
import axios from "axios";
import { Table, Collapse, Button, CardBody, Card } from "reactstrap";
import { deleteRow } from "../Delete";

const AnimalsTable = () => {
  const BASE_URL = "https://id607001-mintep1-project.onrender.com/";
  const [data, setData] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const getAnimalsData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}api/animals?pageSize=100`);
      setData(res.data.data);
      setDataFetched(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (e, id, type) => {
    e.preventDefault()
    await deleteRow(id, type)
    setDataFetched(false);
  }

  useEffect(() => {
    if (!dataFetched) {
      getAnimalsData();
    }
  }, [dataFetched]);
  
  const displayAnimalsData = data.map((d) => {
    return (
      <>
        {dataFetched && (
          <tr key={d.id}>
            <td>{d.id}</td>
            <td>{d.name}</td>
            <td>{d.taxonomy}</td>
            <td>{d.species}</td>
            <td>{d.rank}</td>
            <td>{d.ownerName}</td>
            <Button 
            color="danger"
            type="delete" 
            onClick={(e) => handleDelete(e, d.id, "animals")}>
              Delete
            </Button>
          </tr>
        )}
      </>
    );
  });

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button color="warning" onClick={toggle} style={{ margin: "1rem" }}>
          Toggle Table
        </Button>
      </div>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Taxonomy</th>
                  <th>Species</th>
                  <th>Rank</th>
                  <th>Owner Name</th>
                </tr>
              </thead>
              <tbody>{displayAnimalsData}</tbody>
            </Table>
          </CardBody>
        </Card>
      </Collapse>
    </>
  );
};

export default AnimalsTable
