import { useEffect, useState } from "react";
import axios from "axios";
import { Table, Collapse, Button, CardBody, Card } from "reactstrap";

const EventsTable = () => {
  const BASE_URL = "https://id607001-mintep1-project.onrender.com/";
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [dataFetched, setDataFetched] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const getEventsData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}api/events?pageSize=100`);
      setData(res.data.data);
      setDataFetched(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!dataFetched) {
      getEventsData();
    }
  }, [dataFetched]);

  const displayEventsData = data.map((d) => {
    return (
      <>
        {dataFetched && (
          <tr key={d.id}>
            <td>{d.eventTitle}</td>
            <td>{d.venue}</td>
            <td>{d.date}</td>
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
                  <th>Event</th>
                  <th>Venue</th>
                  <th>Date & Time</th>
                </tr>
              </thead>
              <tbody>{displayEventsData}</tbody>
            </Table>
          </CardBody>
        </Card>
      </Collapse>
    </>
  );
};

export default EventsTable;
