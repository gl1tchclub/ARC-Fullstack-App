import { useEffect, useState } from "react";
import axios from "axios";
import { Table, Collapse, Button, CardBody, Card } from "reactstrap";

const ColosseumsTable = () => {
  const BASE_URL = "https://id607001-mintep1-project.onrender.com/";
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [dataFetched, setDataFetched] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const getColosseumsData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}api/colosseums?pageSize=100`);
      setData(res.data.data);
      setDataFetched(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!dataFetched) {
      getColosseumsData();
    }
  }, [dataFetched]);

  const displayColosseumsData = data.map((d) => {
    return (
      <>
        {dataFetched && (
          <tr key={d.id}>
            <td>{d.name}</td>
            <td>{d.country}</td>
            <td>{d.city}</td>
            <td>{d.terrainType}</td>
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
