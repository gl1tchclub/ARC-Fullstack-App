import { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  Collapse,
  Button,
  CardBody,
  Card,
} from "reactstrap";

const AnimalsTable = () => {
  const BASE_URL = "https://id607001-mintep1-project.onrender.com/";
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const getAnimalsData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}api/animals?pageSize=100`);
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAnimalsData();
  }, []);

  const displayAnimalsData = data.map((d) => {
    return (
      <tr key={d.id}>
        <td>{d.name}</td>
        <td>{d.taxonomy}</td>
        <td>{d.species}</td>
        <td>{d.rank}</td>
        <td>{d.ownerName}</td>
      </tr>
    );
  });

  return (
    <>
      <Button color="primary" onClick={toggle} style={{ margin: '1rem' }}>
        Toggle Table
      </Button>
      <Collapse isOpen={isOpen} table>
        <Card>
          <CardBody>
            <Table>
              <thead>
                <tr>
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

export default AnimalsTable;
