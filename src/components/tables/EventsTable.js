import { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "reactstrap";

const EventsTable = () => {
  const BASE_URL = "https://id607001-mintep1-project.onrender.com/";
  const [data, setData] = useState([]);

  useEffect(() => {
    const getEventsData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}api/events`);
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getEventsData();
  }, []);

  const displayEventsData = data.map((d) => {
    return (
      <tr key={d.id}>
        <td>{d.eventTitle}</td>
        <td>{d.venue}</td>
        <td>{d.date}</td>
      </tr>
    );
  });

  return (
    <Table>
      <thead>
        <tr>
          <th>Event</th>
          <th>Venue</th>
          <th>Date & Time</th>
        </tr>
      </thead>
      <tbody>{displayEventsData}</tbody>
    </Table>
  );
};

export default EventsTable;
