import { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "reactstrap";

const InstitutionsTable = () => {
  const BASE_URL = "https://id607001-mintep1-project.onrender.com/"

  const [data, setData] = useState([])

  useEffect(() => {
    const getColosseumsData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/colosseums`)
        setData(res.data.data)
      } catch (error) {
        console.log(error)
      }   
    }
    getColosseumsData()
  }, [])

  const displayColosseumsData = (
    data.map((d) => {
      return (
        <tr key={d._id}>
          <td>{d.name}</td>
          <td>{d.region}</td>
          <td>{d.country}</td>
        </tr>
      )
    })
  )

  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Region</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {displayInstitutionsData}
      </tbody>
    </Table>
  );
};

export default InstitutionsTable;