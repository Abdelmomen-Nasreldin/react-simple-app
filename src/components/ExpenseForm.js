import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [show, setShow] = useState(true);

  const addNewExpense = (e) => {
    e.preventDefault();
    const newExpense = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    console.log(newExpense);
    props.newExpense(newExpense);
  };
  const showingForm = () => {
    setShow((pre) => !pre);
  };
  return (
    <div className="d-flex justify-content-center">
      <div style={{ display: show ? "flex" : "none" }} className="text-center">
        <Button variant="primary" onClick={showingForm}>
          ADD Expense
        </Button>{" "}
      </div>
      <Form
        onSubmit={addNewExpense}
        style={{ display: !show ? "flex" : "none" }}
      >
        <fieldset className="row">
          <Form.Group className="mb-3 col-4">
            <Form.Control
              id="title"
              placeholder="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 col-4">
            <Form.Control
              id="amount"
              placeholder="amount"
              onChange={(e) => setAmount(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 col-4">
            <Form.Control
              id="date"
              placeholder="date"
              type="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
          <div className="d-flex  justify-content-center">
            <Button className="mx-3" variant="primary" onClick={showingForm}>
              cancel
            </Button>
            <Button type="submit" onClick={showingForm}>
              Submit
            </Button>
          </div>
        </fieldset>
      </Form>
    </div>
  );
};

export default ExpenseForm;
