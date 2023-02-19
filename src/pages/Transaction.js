import React from "react";
import { Container, Table } from "react-bootstrap";
import { useQuery } from "react-query";
import { API } from "../config/api";

function Pay() {
  const { data: transactions } = useQuery("transactionsCache", async () => {
    const response = await API.get("/transactions");
    console.log(response);
    return response.data.data;
  });
  console.log(transactions);
  return (
    <div className="py-5">
      <Container className="pt-5">
        <h2 className="text-white mb-4">Incoming Transaction</h2>
        <Table striped hover className="mb-5">
          <thead>
            <tr className="text-white">
              <th>No</th>
              <th>Users</th>
              <th>Start Date</th>
              <th>Due Date</th>
              <th>Remaining Active</th>
              <th>Status User</th>
              <th>Status Payment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-white">1</td>
              <td className="text-white">Farid Nugroho</td>
              <td className="text-white">23 Februari 2023</td>
              <td className="text-white">29 Maret 2023</td>
              <td className="text-white">28 / Hari</td>
              <td className="text-white">Active</td>
              <td className="text-white">Approve</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Pay;
