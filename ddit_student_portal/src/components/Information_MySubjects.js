import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './static_components/Navbar';

const InformationMySubjects = () => {
    const [studenttoken, setStudentToken] = useState("");
    const [mysubjects, setMySubjects] = useState([]);
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
        const temp2 = localStorage.getItem('student');
        const temp3 = JSON.parse(temp2);
        console.log(temp3.sessionNumber);
        fetch(`https://localhost:44339/api/Subjects/sorted/${temp3.sessionNumber}`, {
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
                setMySubjects(data);
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
            <label className='my-3 mx-5 px-5 h4'>
                    <strong>MY SUBJECTS</strong>
                </label>
            <div className='table-responsive mx-4'>
                
                <table className="table table-striped table-hover container table-responsive">
                    <thead>
                        <tr className='table-primary'>
                            <th scope="col">Subject Code</th>
                            <th scope="col">Name</th>
                            <th scope="col">Alias</th>
                            <th scope="col">Program</th>
                            <th scope="col">Rec Status</th>
                            <th scope="col">Session</th>
                            <th scope="col">Elective</th>
                            <th scope="col">Credit</th>
                            <th scope="col">Th Min Pass1</th>
                            <th scope="col">Th Min Pass2</th>
                            <th scope="col">Th Total</th>
                            <th scope="col">Sess Min Pass1</th>
                            <th scope="col">Sess Min Pass2</th>
                            <th scope="col">Sess Total</th>
                            <th scope="col">Pr Min Pass1</th>
                            <th scope="col">Pr Min Pass2</th>
                            <th scope="col">Pr Total</th>
                            <th scope="col">Tw Min Pass1</th>
                            <th scope="col">Tw Min Pass2</th>
                            <th scope="col">Tw Total</th>
                            <th scope="col">Total Min Marks</th>
                            <th scope="col">Total Marks</th>
                            <th scope="col">Sylllabus</th>
                            

                        </tr>
                    </thead>
                    <tbody>
                        {/* {console.log(studentfees)} */}
                        {mysubjects && mysubjects.length > 0 && Array.isArray(mysubjects) ? (
                            
                            mysubjects.reverse().map((item) => {
                                return (
                                    <tr>
                                        <td>{item.subjectCode}</td>
                                        <td>{item.name}</td>
                                        <td>{item.alias}</td>
                                        <td>{item.program}</td>
                                        <td>{item.recStatus}</td>
                                        <td>{item.session}</td>
                                        <td>{String(item.elective)}</td>
                                        <td>{item.credit}</td>
                                        <td>{item.thMinPass1}</td>
                                        <td>{item.thMinPass2}</td>
                                        <td>{item.thMinPotal}</td>
                                        <td>{item.sessMinPass1}</td>
                                        <td>{item.sessMinPass2}</td>
                                        <td>{item.sessTotal}</td>
                                        <td>{item.prMinPass1}</td>
                                        <td>{item.prMinPass2}</td>
                                        <td>{item.prTotal}</td>
                                        <td>{item.twMinPass1}</td>
                                        <td>{item.twMinPass2}</td>
                                        <td>{item.twTotal}</td>
                                        <td>{item.totalMinPass}</td>
                                        <td>{item.totalMarks}</td>
                                        <td>{item.syllabus}</td>
                                    </tr>
                                );
                            })
                        ) : (
                            <p className="text-muted">No Details Found..</p>
                        )}
                        {/* {studentfees.map(function (i, item) {
                            <tr>
                                <th scope="row">{i}</th>
                                <td>{item}</td>
                            </tr>

                        })} */}


                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default InformationMySubjects;
