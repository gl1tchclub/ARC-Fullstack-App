import { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "reactstrap";

const ParticipantsTable = () => {
  const BASE_URL = "https://id607001-mintep1-project.onrender.com/"
  const [data, setData] = useState([])

  useEffect(() => {
    const getParticipantsData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}api/participants`)
        setData(res.data.data)
      } catch (error) {
        console.log(error)
      }   
    }
    getParticipantsData()
  }, [])

  const displayParticipantsData = (
    data.map((d) => {
      return (
        <tr key={d.id}>
          <td>{d.alias}</td>
          <td>{d.age}</td>
          <td>{d.memberOf}</td>
        </tr>
      )
    })
  )

  return (
    <Table>
      <thead>
        <tr>
          <th>Alias</th>
          <th>Age</th>
          <th>Member Of</th>
        </tr>
      </thead>
      <tbody>
        {displayParticipantsData}
      </tbody>
    </Table>
  );
};

export default ParticipantsTable;