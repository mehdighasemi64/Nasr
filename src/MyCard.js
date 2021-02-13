import React, { useEffect } from 'react';
import './App.css';
import { Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { initEmployeeList, addToSelectionList, removeFromSelectionList } from './Actions'
import test from './Images/test.jpg';

export default function MyCard() {

  const dispatch = useDispatch();
  const ds = useSelector(state => state.EmployeeReducer);
  let employeeList = [];

  // useEffect(() => {
  //   BindEmployees();
  // }, [ds.items]);

  useEffect(() => {
    BindEmployees();
  },[]);


  const BindEmployees = () => {
    var ProxyServer = "https://thingproxy.freeboard.io/fetch/"
    fetch(ProxyServer + 'http://dummy.restapiexample.com/api/v1/employees', {
      //fetch('http://dummy.restapiexample.com/api/v1/employees', {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json; charset=utf-8"
      },
    })
      .then(response => response.json())
      .then(response => dispatch(initEmployeeList(response)))
      .catch(e => alert(e));
    debugger;
  }

  const Compare = (item) => {
    debugger;
    let Item = {
      id: item.id,
      employee_name: item.employee_name,
      employee_age: item.employee_age,
      employee_salary: item.employee_salary,
    }
    dispatch(addToSelectionList(Item));

  }

  const Remove = (item) => {
    // let Item = {
    //   id: item.id
    // }
    dispatch(removeFromSelectionList(item));
  }

  employeeList =
    ds.items.map(item => {
      return (
        <Card className="text-center " style={{ width: '18rem' }}>
          <Card.Header style={{ fontSize: "12", fontWeight: "bold" }}>Employee Profile</Card.Header>

          <Card.Img variant="top" className="img-fluid" src={test}
            style={{ height: "100px", width: "100px", objectFit: "contain", marginTop: "20px" }} >
          </Card.Img>

          <Card.Body>
            <Card.Title>{item.employee_name}</Card.Title>
            <Card.Text>
              Age :{item.employee_age}
              <br></br>
              Salary :{item.employee_salary}$
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-white">
            <Button className="customButton" className="customButton" variant="primary" onClick={() => { Compare(item) }}>Compare</Button>
            <Button className="customButton" className="customButton" variant="danger" onClick={() => { Remove(item) }}>Remove</Button>
          </Card.Footer>
        </Card>
      )
    });

  return (
    <div className="App">
      <div className="card-columns" style={{ border: "solid", borderColor: "#dd00dd", textAlign: "center", padding: "15px", backgroundColor: "antiquewhite" }}>
        {employeeList}
      </div>
    </div>
  );
}

