import { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  Collapse,
  Button,
  CardBody,
  Card,
} from "reactstrap";

const ColosseumsTable = () => {
  const BASE_URL = "https://id607001-mintep1-project.onrender.com/";
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const getColosseumsData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}api/colosseums?pageSize=100`);
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getColosseumsData();
  }, []);

  const displayColosseumsData = data.map((d) => {
    return (
      <tr key={d.id}>
        <td>{d.name}</td>
        <td>{d.country}</td>
        <td>{d.city}</td>
        <td>{d.terrainType}</td>
      </tr>
    );
  });

  return (
    <>
    <div style={{display: "flex", justifyContent: "center"}}>
      <Button color="warning" onClick={toggle} style={{ margin: '1rem' }}>
        Toggle Table
      </Button>
    </div>
      <Collapse isOpen={isOpen} table>
        <Card>
          <CardBody>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Country</th>
                  <th>City</th>
                  <th>Terrain Type</th>
                </tr>
              </thead>
              <tbody>{displayColosseumsData}</tbody>
            </Table>
          </CardBody>
        </Card>
      </Collapse>
    </>
  );
};

export default ColosseumsTable;
