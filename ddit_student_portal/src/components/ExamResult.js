import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './static_components/Navbar';

const ExamResult = () => {
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
        fetch(`https://localhost:44339/api/Sessions`, {
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
                console.log(data);
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
                    <strong>STUDENT ACADEMIC HISTORY</strong>
                </label>
                <table className="table table-striped table-hover container table-responsive">
                    <thead>
                        <tr className='table-primary'>
                            <th scope="col">External Result</th>
                            <th scope="col">Internal Result</th>
                            <th scope="col">Batch Year</th>
                            <th scope="col">Session No</th>
                            <th scope="col">Reg Exam No</th>
                            <th scope="col">Rem1 Exam No</th>
                            <th scope="col">Rem2 Exam No</th>
                            <th scope="col">Provisional Marksheet</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* {console.log(studentfees)} */}
                        {studentfees && studentfees.length > 0 && Array.isArray(studentfees) ? (

                            studentfees.map((item) => {
                                return (
                                    <tr>
                                        <td>
                                            <Link to="/examresults/external-result" sessioninfo={item.batchYear} className="link-primary">External Result</Link>
                                        </td>
                                        <td>
                                            <Link to="/examresults/internal-result" state={item} className="link-primary">Internal Result</Link>
                                        </td>
                                        <td>{item.batchYear}</td>
                                        <td>{item.sessionNo}</td>
                                        <td>{item.regExamNo}</td>
                                        <td>{item.rem1ExamNo}</td>
                                        <td>{item.rem2ExamNo}</td>
                                        <td>{item.provisionalMarksheet}</td>

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

export default ExamResult;
