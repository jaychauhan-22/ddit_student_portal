import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './static_components/Navbar';

const Fees = () => {
    const [studenttoken, setStudentToken] = useState("");
    const [studentfees, setStudentFeesDetails] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        const temp = localStorage.getItem('studentid');
        setStudentToken(temp);
        if (!temp) {
            navigate("/");
        }
        else {
            loadData();

        }
    }, []);
    const loadData = () => {
        const temp = localStorage.getItem('studenttoken');
        fetch(`https://localhost:44339/api/Fees/${temp}`, {
            method: "GET",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setStudentFeesDetails(data);
                // console.log(studentfees);
                if (data.status == 400) {
                    navigate("/");
                }
                // setStatusError("Invalid Username or Password");
            });
    }
    return (
        <div>
            <Navbar />
            <div className='table-responsive'>
                <label className='my-3 mx-5 px-5 h4'>
                    <strong>FEES INFORMATION</strong>
                </label>
                <table className="table table-striped table-hover container table-responsive">
                    <thead>
                        <tr className='table-primary'>
                            <th scope="col">Txn Date</th>
                            <th scope="col">Voucher No</th>
                            <th scope="col">Batch Year</th>
                            <th scope="col">Session No</th>
                            <th scope="col">Admission Type</th>
                            <th scope="col">Fees Amount</th>
                            <th scope="col">Txn Status</th>
                            <th scope="col">Pay Mode</th>
                            <th scope="col">Cheque Date</th>
                            <th scope="col">Bank Branch</th>
                            <th scope="col">Paid Date</th>
                            <th scope="col">Reconsile Date</th>
                            <th scope="col">Reconsile No</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* {console.log(studentfees)} */}
                        {studentfees && studentfees.length > 0 && Array.isArray(studentfees) ? (
                            
                            studentfees.reverse().map((item) => {
                                return (
                                    <tr>
                                        <td>{item.txndate}</td>
                                        <td>{item.vouchernumber}</td>
                                        <td>{item.batchyear}</td>
                                        <td>{item.sessionnumber}</td>
                                        <td>{item.admissiontype}</td>
                                        <td>{item.feesamount}</td>
                                        <td>{item.txnstatus}</td>
                                        <td>{item.paymode}</td>
                                        <td>{item.chequedate}</td>
                                        <td>{item.bankbranch}</td>
                                        <td>{item.paiddate}</td>
                                        <td>{item.reconsiledate}</td>
                                        <td>{item.reconsiledate2}</td>
                                    </tr>
                                );
                            })
                        ) : (
                            <p className="text-muted">No Details Found..</p>
                        )}
                        {studentfees.map(function (i, item) {
                            <tr>
                                <th scope="row">{i}</th>
                                <td>{item}</td>
                            </tr>

                        })}


                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Fees;
