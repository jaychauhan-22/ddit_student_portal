import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './static_components/Navbar';
const Home = () => {
    const [studentid, setStudenId] = useState("");
    const [studentdata, setStudenData] = useState({});
    let navigate = useNavigate();

    useEffect(() => {
        const temp = localStorage.getItem('studentid');
        setStudenId(temp);
        if (!temp) {
            navigate("/");
        }
        else {
            loadData();
        }
    }, []);
    const loadData = () => {
        
        const temp = localStorage.getItem('studentid');
        console.log(temp);
        setStudenId(temp);
        fetch(`https://localhost:44339/api/Students/${temp}`, {
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
                setStudenData(data);
                studentdata.isD2d = studentdata.isD2d + "";
                console.log(data);
                if (data.status !== 400) {
                    navigate("/home");
                }
                // setStatusError("Invalid Username or Password");
            });
    }
    return (
        <div>
            <Navbar />
            <div className=''>
                <label className='my-3 mx-5 px-5 h4'>
                    <strong>STUDENT PROFILE</strong>
                </label>
                <table className="table table-striped table-hover container table-responsive">
                    <tbody>
                        <tr>
                            <th scope="row  ">DDU REPORTING DATE</th>
                            <td>{studentdata.dduReportingDate}</td>
                        </tr>
                        <tr>
                            <th scope="row">ADDMISSION TYPE</th>
                            <td>{studentdata.admissionType}</td>
                        </tr>
                        <tr>
                            <th scope="row">FIRST NAME</th>
                            <td>{studentdata.firstName}</td>
                        </tr>

                        <tr>
                            <th scope="row">MIDDLE NAME</th>
                            <td>{studentdata.middleName}</td>
                        </tr>
                        <tr>
                            <th scope="row">LAST NAME</th>
                            <td>{studentdata.lastName}</td>
                        </tr>
                        <tr>
                            <th scope="row">NAME FORMAT</th>
                            <td>{studentdata.nameFormat}</td>
                        </tr>
                        <tr>
                            <th scope="row">FULL NAME</th>
                            <td>{studentdata.fullName}</td>
                        </tr>
                        <tr>
                            <th scope="row">GENDER</th>
                            <td>{studentdata.gender}</td>
                        </tr>
                        <tr>
                            <th scope="row">BIRTH DATE</th>
                            <td>{studentdata.birthDate}</td>
                        </tr>
                        <tr>
                            <th scope="row">BIRTHPLACE</th>
                            <td>{studentdata.birthPlace}</td>
                        </tr>
                        <tr>
                            <th scope="row">ACPC SEAT ALLOTMENT DATE</th>
                            <td>{studentdata.acpcSeatAllotmentDate}</td>
                        </tr>
                        <tr>
                            <th scope="row">IS D2D</th>
                            <td>{String(studentdata.isD2D)}</td>
                        </tr>
                        <tr>
                            <th scope="row">ENROLLMENT YEAR</th>
                            <td>{studentdata.enrollmentYear}</td>
                        </tr>
                        <tr>
                            <th scope="row">DEGREE</th>
                            <td>{studentdata.degree}</td>
                        </tr>
                        <tr>
                            <th scope="row">QUALIFYING EXAM ROLLNO</th>
                            <td>{studentdata.qualifyingExamRollno}</td>
                        </tr>
                        <tr>
                            <th scope="row">SESSION TYPE</th>
                            <td>{studentdata.sessionType}</td>
                        </tr>
                        <tr>
                            <th scope="row">SESSION NO</th>
                            <td>{studentdata.sessionNumber}</td>
                        </tr>
                        <tr>
                            <th scope="row">BATCH YEAR</th>
                            <td>{studentdata.batchYear}</td>
                        </tr>
                        <tr>
                            <th scope="row">STUDENT CODE</th>
                            <td>{studentdata.studentCode}</td>
                        </tr>
                        <tr>
                            <th scope="row">OLD STUDENT CODE</th>
                            <td>{studentdata.oldStudentCode}</td>
                        </tr>
                        <tr>
                            <th scope="row">STUDENT ALLOTMENT</th>
                            <td>{studentdata.studentAllotment}</td>
                        </tr>
                        <tr>
                            <th scope="row">MERIT RANK</th>
                            <td>{studentdata.meritrank}</td>
                        </tr>
                        <tr>
                            <th scope="row">RE SHUFFLE STATUS</th>
                            <td>{studentdata.reShuffleSatus}</td>
                        </tr>
                        <tr>
                            <th scope="row">RE SHUFFLE PHASE</th>
                            <td>{studentdata.reShufflePhase}</td>
                        </tr>
                        <tr>
                            <th scope="row">CAST CATEGORY CODE</th>
                            <td>{studentdata.casteCategoryCode}</td>
                        </tr>
                    </tbody>
                </table>
                {/* {studentid} */}
            </div>
        </div>
    );
}

export default Home;
