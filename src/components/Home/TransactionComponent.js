import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 22px;
  font-size: 18px;
  width: 100%;
  gap: 10px;
  font-weight: bold;
  font-familt: Montserrat;
  & input {
    padding: 10px 12px;
    border-radius: 12px;
    background: #e6e8e9;
    outline: none;
    width: 100%;
    border: none;
  }
`;
const Cell = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 15px;
  font-size: 14px;
  width: 100%;
  border-radius: 2px;
  align-items: center;
  font-weight: normal;
  justify-content: space-between;
  border: 1px solid #e6e8e9;
  border-right: 4px solid ${(props) => (props.isExpense ? "red" : "green")};
`;
const TransactionCell = (props) => {
  return (
    <Cell isExpense={props.payload?.type == "EXPENSE"}>
      <span>{props.payload.description}</span>
      <span>${props.payload.amount}</span>
    </Cell>
  );
};
const TransactionComponent = (props) => {
  const [searchText, updateSearchText] = useState("");
  const [filteredTransaction, updateTxn] = useState(props.transaction);

  const filterData = () => {
    if (!searchText || !searchText.trim().length) {
      updateTxn(props.transaction);
      return;
    }
    let txn = [...props.transaction];
    txn = txn.filter((payload) =>
      payload.description
        .toLowerCase()
        .includes(searchText.toLowerCase().trim())
    );
    updateTxn(txn);
  };
  useEffect(() => filterData(searchText), [props.transaction]);
  return (
    <Container>
      Transaction
      <input
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          updateSearchText(e.target.value);
          filterData(e.target.value);
        }}
      />
      {filteredTransaction.length
        ? filteredTransaction.map((payload) => (
            <TransactionCell payload={payload} />
          ))
        : ""}
    </Container>
  );
};
export default TransactionComponent;
