import React from 'react';
import { useSelector } from "react-redux";
import { Table } from 'react-bootstrap'
import test from './Images/test.jpg';

export default function MyGrid() {

    const dsSelection = useSelector(state => state.SelectionReducer);    

    let SelectionList = [];    

    const renderTableHeader = () => {

        let header = (<tr style={{ textAlign: "center" }}><th scope="col">#</th>
            <th scope="col">Employee Name</th>
            <th scope="col">Employee Age</th>
            <th scope="col">Employee Salary</th></tr>)
        return header;
    }

    const renderTableData = () => {
        debugger;
        return dsSelection.items.map(item => {
            return (
                <tr style={{ textAlign: "center" }}>
                    <td>
                        <img src={test} alt="Sheep" style={{ width: "120px", height: "120px" }} ></img>
                    </td>
                    <td>{item.employee_name}</td>
                    <td>{item.employee_age}</td>
                    <td>{item.employee_salary}$</td>
                </tr>
            )
        })
    }

    SelectionList =
        <div>
            <div>
                <h6 id='title' style={{ textAlign: "center" }} >Your Selection Details</h6>
            </div>
            <Table striped bordered hover variant="dark">
                <tbody>
                    {renderTableHeader()}
                    {renderTableData()}
                </tbody>
            </Table>
        </div >
        ;

    return (
        <div style={{ textAlign: "center", border: "solid", borderColor: "#dd00dd", backgroundColor: "antiquewhite" }}>
            {SelectionList}
        </div>
    );
}






