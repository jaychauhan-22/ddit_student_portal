import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './static_components/Navbar';

const InternalResult = (props) => {
    const location = useLocation();
    const sessioninfo = location.state;
    console.log(sessioninfo);
    const [studenttoken, setStudentToken] = useState("");
    const [studentfees, setStudentFeesDetails] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        const temp = localStorage.getItem('student');
        const temp2 = JSON.parse(temp);
        // console.log(temp2);
        setStudentToken(temp2);
        if (!temp2) {
            navigate("/");
        }
        else {
            loadData();

        }
    }, []);
    const loadData = () => {
        const temp = localStorage.getItem('studenttoken');
        console.log(sessioninfo.sessionNo);
        fetch(`https://localhost:44339/api/Results/${sessioninfo.sessionNo}`, {
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
            <p className='text-center h6 my-4'>
                    <strong className='mx-2'>Degree: {studenttoken.degree}</strong>
                    <strong className='mx-2'>ID No: {String(studenttoken.studentCode).toUpperCase()}</strong>
                    <strong className='mx-2'>ID No: {String(studenttoken.fullName).toUpperCase()}</strong><br/>
                    <strong className='mx-2'>Batch No: {sessioninfo.batchYear}</strong>
                    <strong className='mx-2'>Session No: {sessioninfo.sessionNo}</strong><br/>
                    <strong className='mx-2'>Attempt Type: Internal</strong>
                    <strong className='mx-2'>Exam No: {sessioninfo.regExamNo}</strong><br/>
                </p>
            <div className='table-responsive'>
                
                <table className="table table-striped table-hover container table-responsive">
                    <thead>
                        <tr className='table-primary'>
                            <th scope="col">Subject Code</th>
                            <th scope="col">Subject Name</th>
                            <th scope="col">Sess1 Att</th>
                            <th scope="col">Sess1 Marks</th>
                            <th scope="col">Lecture Att1</th>
                            <th scope="col">Lecture Att1 Out Of</th>
                            <th scope="col">Pr Att1</th>
                            <th scope="col">Pr Att1 Out Of</th>

                            <th scope="col">Sess2 Att</th>
                            <th scope="col">Sess2 Marks</th>
                            <th scope="col">Lecture Att2</th>
                            <th scope="col">Lecture Att2 Out Of</th>
                            <th scope="col">Pr Att2</th>
                            <th scope="col">Pr Att2 Out Of</th>
                            <th scope="col">Sess3 Att</th>
                            <th scope="col">Sess3 Marks</th>
                            <th scope="col">Lecture Att3</th>
                            <th scope="col">Lecture Att3 Out Of</th>
                            <th scope="col">Pr Att3</th>
                            <th scope="col">Pr Att3 Out Of</th>
                            <th scope="col">Block Att</th>
                            <th scope="col">Block Marks</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* {console.log(studentfees)} */}
                        {studentfees && studentfees.length > 0 && Array.isArray(studentfees) ? (

                            studentfees.map((item) => {
                                return (
                                    <tr>
                                        
                                        <td>{item.subjectcode}</td>
                                        <td>{item.subjectname}</td>
                                        <td>{item.sess1Att}</td>
                                        <td>{item.sess1marks}</td>
                                        <td>{item.lectureAtt1}</td>
                                        <td>{item.lectureAtt1OutOf}</td>
                                        <td>{item.prAtt1}</td>
                                        <td>{item.prAtt1OutOf}</td>

                                        <td>{item.sess2marks}</td>
                                        <td>{item.sess2Att}</td>
                                        <td>{item.lectureAtt1}</td>
                                        <td>{item.lectureAtt2OutOf}</td>
                                        <td>{item.prAtt2}</td>
                                        <td>{item.prAtt2OutOf}</td>

                                        <td>{item.sess3marks}</td>
                                        <td>{item.sess3Att}</td>
                                        <td>{item.lectureAtt1}</td>
                                        <td>{item.lectureAtt3OutOf}</td>
                                        <td>{item.prAtt3}</td>
                                        <td>{item.prAtt3OutOf}</td>
                                        <td>{item.blockAtt!=false && "--"}</td>
                                        <td>{
                                        item.blockMarks==0 && "--"
                                        }</td>

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

export default InternalResult;
