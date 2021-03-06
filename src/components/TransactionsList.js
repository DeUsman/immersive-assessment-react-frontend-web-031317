import React from 'react'
import Transaction from "./Transaction"
import CustomTransactionList from "./CustomTransactionList"

const TransactionsList = (props) => {

if(!props.searchResults) {

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>

        {props.transactions.map(function(trans) { return <Transaction transDetail={trans} />})}

      </tbody>

    </table>
  )
} else {
  console.log("XXXXXXX")
    return (
      <CustomTransactionList searchResults={props.searchResults} />
    )

  }
};

export default TransactionsList
