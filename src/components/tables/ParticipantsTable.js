import { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  Collapse,
  Button,
  CardBody,
  Card,
} from "reactstrap";

const ParticipantsTable = () => {
  const BASE_URL = "https://id607001-mintep1-project.onrender.com/";
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const getParticipantsData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}api/participants?pageSize=40`);
        console.log(res);
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getParticipantsData();
  }, []);

  const displayParticipantsData = data.map((d) => {
    return (
      <tr key={d.id}>
        <td>{d.alias}</td>
        <td>{d.age}</td>
        <td>{d.memberOf}</td>
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
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            <Table>
              <thead>
                <tr>
                  <th>Alias</th>
                  <th>Age</th>
                  <th>Member Of</th>
                </tr>
              </thead>
              <tbody>{displayParticipantsData}</tbody>
            </Table>
          </CardBody>
        </Card>
      </Collapse>
    </>
  );
};

export default ParticipantsTable;
