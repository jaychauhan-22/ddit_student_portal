import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './static_components/Navbar';

const ExternalResult = () => {
    const location = useLocation();
    const sessioninfo = location.state;
    //console.log(sessioninfo);
    const [studenttoken, setStudentToken] = useState("");
    const [statusError, setStatusError] = useState("");
    const [studentfees, setStudentFeesDetails] = useState([]);
    const [mysubjects, setMySubjects] = useState([]);
    const [finalMarks, setFinalMarks] = useState();
    let totalmarkforspi = 0, result = "PASS", spicredit = 0;
    let navigate = useNavigate();

    useEffect(() => {
        const temp = localStorage.getItem('student');
        const temp2 = JSON.parse(temp);
        //console.log(temp2);
        setStudentToken(temp2);
        if (!temp2) {
            navigate("/");
        }
        else {
            loadSubjectDetails();
            // loadData(); 

        }
    }, []);
    const calculatecredit = (credit) => {
        spicredit += credit
        return credit;
    }
    const calculateGrade = (totalMarks, sess1marks, sess2marks, sess3marks) => {
        //console.log(totalMarks, sess1marks, sess2marks, sess3marks);
        let totalsessionalmarks = sess1marks + sess2marks + sess3marks;
        //console.log(totalsessionalmarks);
        totalsessionalmarks = totalsessionalmarks / 3;
        let finalMarks = totalMarks + totalsessionalmarks;
        //console.log(finalMarks);
        totalmarkforspi += finalMarks;
        //console.log(totalMarks);
        let grade;
        if (finalMarks > 85) {
            grade = "AA"
        }
        else if (finalMarks > 75) {
            grade = "AB"
        }
        else if (finalMarks > 65) {
            grade = "BB"
        }
        else if (finalMarks > 55) {
            grade = "BC"
        }
        else if (finalMarks > 45) {
            grade = "CC"
        }
        else if (finalMarks > 40) {
            grade = "CD"
        }
        else {
            grade = "FF"
            result = "FAIL"
        }
        return grade

    }
    const loadSubjectDetails = () => {
        // const temp = localStorage.getItem('studenttoken');
        const temp2 = localStorage.getItem('student');
        let datanotavaiable = false;
        const temp3 = JSON.parse(temp2);
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
                data.map(item=>{
                    if(item.externalAtt=="N")
                        datanotavaiable=true;
                })
                console.log(datanotavaiable);
                if (datanotavaiable==false && data.length>0) {

                    setMySubjects(data);
                }
                // //console.log(studentfees);
                else if (data.status == 400) {
                    navigate("/");
                }
                else{
                    setStatusError(`Result is not Available/Generated for ${studenttoken.studentCode}  Batch: ${sessioninfo.batchYear} and Session: ${sessioninfo.sessionNo}.`);
                }
            });
    }
    const loadData = () => {
        const temp = localStorage.getItem('studenttoken');
        //console.log(sessioninfo.sessionNo);
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
                //console.log(data);
                if (data[0].externalAtt != "N") {
                    setStudentFeesDetails(data);
                    // //console.log(studentfees);
                    if (data.status == 400) {
                        navigate("/");
                    }
                }
                else { }
                // setStatusError("Invalid Username or Password");
            });
    }
    return (
        <div>
            <Navbar />
            {statusError != "" && (<div class="alert alert-warning px-5 m-4" role="alert">
                {statusError}
            </div>)}
            {statusError == "" && (<><p className='text-center h6 my-4'>
                <strong className='mx-2'>Degree: {studenttoken.degree}</strong>
                <strong className='mx-2'>ID No: {String(studenttoken.studentCode).toUpperCase()}</strong>
                <strong className='mx-2'>Name: {String(studenttoken.fullName).toUpperCase()}</strong><br />
                <strong className='mx-2'>Batch Year: {sessioninfo.batchYear}</strong>
                <strong className='mx-2'>Session No: {sessioninfo.sessionNo}</strong><br />
                <strong className='mx-2'>Attempt Type: Regular</strong>
                <strong className='mx-2'>Exam No: {sessioninfo.regExamNo}</strong><br />
            </p>
                <div className='table-responsive'>

                    <table className="table table-striped table-hover container table-responsive">
                        <thead>
                            <tr className='table-primary'>
                                <th scope="col">Subject Code</th>
                                <th scope="col">Subject Name</th>
                                <th scope="col">External Status</th>
                                <th scope="col">Sessional Status</th>
                                <th scope="col">Practical Status</th>
                                <th scope="col">Termwork Status</th>
                                <th scope="col">Subject Grade</th>

                                <th scope="col">Subject Credit</th>
                                <th scope="col">Subject Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* {console.log(mysubjects)} */}

                            {mysubjects && mysubjects.length > 0 && Array.isArray(mysubjects) ?
                                (

                                    mysubjects.map((item) => {
                                        return (
                                            <tr>
                                                <td>{item.subjectcode}</td>
                                                <td>{item.subjectname}</td>
                                                {/* {item.finalAtt="F"} */}
                                                <td>{item.finalAtt == "P" && "PASS"} {item.finalAtt == "F" && "FAIL"}</td>
                                                <td>{item.sess1Att == "P" && item.sess2Att == "P" && item.sess3Att == "P" && ("PASS")} {(item.sess1Att == "F" || item.sess2Att == "F" || item.sess3Att == "F") && ("FAIL")}</td>
                                                <td>{item.practicalAtt == "P" && "PASS"} {item.practicalAtt == "F" && "FAIL"}</td>
                                                <td>{item.termworkAtt == "P" && "PASS"} {item.termworkAtt == "F" && "FAIL"}</td>
                                                <td>
                                                    {item.finalAtt == "P" && item.sess1Att == "P" && item.practicalAtt == "P" && item.sess1Att == "P" && item.sess2Att == "P" && item.sess3Att == "P" && (calculateGrade(item.finalmarks, item.sess1marks, item.sess2marks, item.sess3marks))} {(item.finalAtt == "F" || item.sess1Att == "F" || item.practicalAtt == "F" || item.sess1Att == "F" || item.sess2Att == "F" || item.sess3Att == "F") && ("FF")}</td>

                                                <td>{item.credit && calculatecredit(item.credit)}</td>
                                                <td>{item.finalAtt == "P" && item.sess1Att == "P" && item.practicalAtt == "P" && item.sess1Att == "P" && item.sess2Att == "P" && item.sess3Att == "P" && ("PASS")} {(item.finalAtt == "F" || item.sess1Att == "F" || item.practicalAtt == "F" || item.sess1Att == "F" || item.sess2Att == "F" || item.sess3Att == "F") && ("FAIL") && (result = "FAIL")}</td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <p className="text-muted">No Details Found..</p>
                                )}



                        </tbody>
                    </table>
                    <div className='text-center'>
                        <strong>RESULT : {result}</strong><br />
                        <strong>SPI CREDIT : {spicredit}</strong>
                        <strong className='mx-3'>SPI : {(result == "PASS" && (((totalmarkforspi / mysubjects.length) / 10).toPrecision(3)))}</strong>
                    </div>
                </div>
            </>)}
            
        </div>
    );
}

export default ExternalResult;
