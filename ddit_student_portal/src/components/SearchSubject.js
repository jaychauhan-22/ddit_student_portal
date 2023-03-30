import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './static_components/Navbar';

const SearchSubject = () => {
    const [studenttoken, setStudentToken] = useState("");
    const [statusError, setStatusError] = useState("");
    const [searchsubject, setSearchSubject] = useState("");
    const [mysubjects, setMySubjects] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        const temp = localStorage.getItem('studentid');
        setStudentToken(temp);
        if (!temp) {
            navigate("/");
        }
        else {
            // loadData();

        }
    }, []);
    const performSubjectSearch = (e) => {
        e.preventDefault();

        fetch(`https://localhost:44339/api/Subjects/${searchsubject}`, {
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
                if (data.length == 0) {
                    // navigate("/");
                    setStatusError("No Result Found..");
                }
                else{
                    setStatusError("");
                }
                
            });
    }
    return (
        <div>
            <Navbar />
            
            <p className='text-center my-3 h3'>
                    <strong>VIEW SUBJECTS</strong>
                </p>
            <div className="input-group my-4 w-50 container">
                <input
                    type="text"
                    className="form-control mx-2"
                    placeholder="Search For Subject"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  onChange={(e) => setSearchSubject(e.target.value.toUpperCase())}
                />
                <div className="input-group-append">
                    <button
                        className="btn btn-primary"
                        onClick={performSubjectSearch}
                        type="button"
                    >
                        Search
                    </button>
                </div>
                

            </div>
            <div className="my-4">
                                    {statusError !== "" && (
                                        <div>
                                            <p className="text-danger fs-5 text-center">{statusError}</p>
                                        </div>
                                    )}
                                </div>
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
                            <th scope="col">Syllabus</th>


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
                            <p className="text-muted"></p>
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

export default SearchSubject;
