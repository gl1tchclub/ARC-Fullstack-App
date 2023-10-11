import { Table } from "reactstrap";

const ColosseumsTable = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Country</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Stanford University</td>
          <td>California</td>
          <td>United States of America</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ColosseumsTable;