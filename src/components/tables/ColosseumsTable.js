import { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "reactstrap";

const ColosseumsTable = () => {
  const BASE_URL = "https://id607001-mintep1-project.onrender.com/"
  const headers = {
    "Content-Type": "application/json",
  }
  const [data, setData] = useState([])
  console.log(data)

  useEffect(() => {
    const getColosseumsData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}api/colosseums`, {headers})
        setData(res.data.data)
      } catch (error) {
        console.log(error)
      }   
    }
    getColosseumsData()
  }, [data])

  const displayColosseumsData = (
    data.map((d) => {
      return (
        <tr key={d._id}>
          <td>{d.name}</td>
          <td>{d.country}</td>
          <td>{d.city}</td>
          <td>{d.terrainType}</td>
        </tr>
      )
    })
  )

  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Country</th>
          <th>City</th>
          <th>Terrain Type</th>
        </tr>
      </thead>
      <tbody>
        {displayColosseumsData}
      </tbody>
    </Table>
  );
};

export default ColosseumsTable;