
import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import btnApprove from "../assets/aprove.svg";
import btnCancel from "../assets/cancel.svg";

function Transactions() {
  const router=useHistory();
  const transactions = JSON.parse(localStorage.getItem('dataTransaction'))
  console.log(transactions);

    const handleApprove = (ids) => {
      const newProjects = transactions.map(p =>
        p.id === (ids+1)
          ? { ...p, status: 'Approved' }
          : p
      );
      console.log(newProjects);
      localStorage.setItem("dataTransaction", JSON.stringify(newProjects)); 
      router.push('/transaction');
      }

      const handleCancel = (ids) => {
        const newProjects = transactions.map(p =>
          p.id === (ids+1)
            ? { ...p, status: 'Canceled' }
            : p
        );
        console.log(newProjects);
        localStorage.setItem("dataTransaction", JSON.stringify(newProjects)); 
        router.push('/transaction');
      }
  
  return (
    <div className="container">
      <h3 className="header3">Income Transaction</h3>
      <table className="table table-bordered my-4">
        <thead className="bg-danger text-light">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Post Code</th>
            <th scope="col">Income</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, i) => (
            <tr key={transaction.id}>
              <td>{i + 1}</td>
              <td>{transaction.name}</td>
              <td>{transaction.address}</td>
              <td>{transaction.postCode}</td>
              <td>Rp. {transaction.income}</td>
              <td className="text-center">
                <label>{transaction.status}</label>
              </td>
              <td className="text-center">
                {transaction.status === "Waiting Approve" ? (
                  <div>
                    <Button variant="danger" size="sm" style={{margin :"2px"}} onClick={() => handleCancel(i)}>
                      Cancel
                    </Button> 
                    <Button variant="success" size="sm" style={{margin :"2px"}} onClick={() => handleApprove(i)}>
                      Approve
                    </Button>
                  </div>
                ) : transaction.status === "Completed" ? (
                  <img src={btnApprove} alt="success" />
                ) : transaction.status === "Canceled" ? (
                  <img src={btnCancel} alt="cancel" />
                ) : (
                  <img src={btnApprove} alt="cancel" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
