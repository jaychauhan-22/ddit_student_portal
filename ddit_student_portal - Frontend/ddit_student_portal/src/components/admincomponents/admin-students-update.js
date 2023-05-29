import React, { useState } from 'react';
import AdminNavbar from '../static_components/Admin-Navbar';
import { useNavigate } from 'react-router-dom';


const AdminStudentsUpdate = () => {
    let navigate = useNavigate();
    const [studentdata, setStudenData] = useState({});
    const [searchStudent, setStudentId] = useState("");
    const [statusError, setStatusError] = useState("");
    const [oldstudentid, setOldStudentID] = useState("");
    const [isActive, setIsActive] = useState(false);
    const handleInputChange = (event) => {
        console.log(event.target);
        let { name, value } = event.target;
        console.log(name, value);
        if (value == "true" || value == "false")
            value = (value === 'true');
        setStudenData(prev => { return { ...prev, [name]: value } })
        console.log(studentdata);
    }
    const performStudentSearch = (e) => {
        fetch(`https://localhost:44339/api/Students/${searchStudent}`, {
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
                setOldStudentID(data.studentCode);
                setStudenData(data);
                // studentdata.isD2d = studentdata.isD2d + "";
                console.log(data);
                if (data.status !== 404) {
                    setIsActive(true);
                    setStatusError("");
                }
                else {
                    // console.log("hjgjh");
                    setStatusError("No Record Found..");
                }

            });
    }
    const deleteStudentHandler = (e) => {
        const temp = localStorage.getItem("student");
        const temp2 = JSON.parse(temp);
        console.log(temp2);
        fetch(`https://localhost:44339/api/Students/${temp2.studentId}`, {
            method: "DELETE",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(
                studentdata),
        })
            .then((res) => {
                if (res.ok)
                    alert("Student Details Updated Successfully..");
                    navigate("/admin-home");
            });


    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const temp = localStorage.getItem("student");
        const temp2 = JSON.parse(temp);
        console.log(temp2);
        fetch(`https://localhost:44339/api/Students/${temp2.studentId}`, {
            method: "PUT",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(
                studentdata),
        })
            .then((res) => {
                if (res.ok)
                    alert("Student Details Updated Successfully..")
            });

    }
    return (
        <div>
            <AdminNavbar />
            <div className=''>
                <label className='my-3 mx-5 px-5 h4'>
                    <strong>UPDATE EXISTING STUDENT DETAILS</strong>
                </label>
                <div className="input-group my-4 w-50 container">
                    <input
                        type="text"
                        className="form-control mx-2"
                        placeholder="Enter StudentId"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={(e) => setStudentId(e.target.value)}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-primary"
                            onClick={performStudentSearch}
                            type="button"
                        >
                            Search
                        </button>
                    </div>


                </div>

                <div className="">
                    {statusError !== "" && (
                        <div>
                            <p className="text-danger fs-5 text-center">{statusError}</p>
                        </div>
                    )}
                </div>
                <form className={isActive ? '' : 'd-none row'} onSubmit={handleSubmit}>
                    <table className="table table-striped table-hover container table-responsive">
                        <tbody>
                            <tr>
                                <th scope="row">DDU REPORTING DATE</th>
                                <td>

                                    <input className="form-control" value={studentdata.dduReportingDate} onChange={handleInputChange} type='date' name='dduReportingDate' />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">ADDMISSION TYPE</th>
                                {/* <td>{studentdata.admissionType}</td> */}
                                <td>
                                    <select value={studentdata.admissionType} onChange={handleInputChange} className="form-select" aria-label="Default select example" name='admissionType'>
                                        {/* <option selected>Open this select menu</option> */}
                                        <option value="">Select AdmissionType</option>
                                        <option value="GIA">GIA</option>
                                        <option value="SFI">SFI</option>
                                        <option value="TFWS">TFWS</option>
                                        <option value="NRI">NRI</option>
                                        <option value="MQ/VQ">MQ/VQ</option>
                                    </select>
                                    {/* <input className="form-control" placeholder='' type='text' name='admissionType' onChange={handleInputChange} /> */}
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">FIRST NAME</th>
                                {/* <td>{studentdata.firstName}</td> */}
                                <td><input className="form-control" value={studentdata.firstName} placeholder='Enter First Name' type='text' name='firstName' onChange={handleInputChange} /></td>

                            </tr>

                            <tr>
                                <th scope="row">MIDDLE NAME</th>
                                {/* <td>{studentdata.middleName}</td> */}
                                <td><input className="form-control" value={studentdata.middleName} type='text' placeholder='Enter Middle Name' name='middleName' onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <th scope="row">LAST NAME</th>
                                {/* <td>{studentdata.lastName}</td> */}
                                <td><input className="form-control" value={studentdata.lastName} type='text' placeholder='Enter Last Name' name='lastName' onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <th scope="row">NAME FORMAT</th>
                                {/* <td>{studentdata.nameFormat}</td> */}
                                <td><input className="form-control" value={studentdata.nameFormat} type='text' placeholder='Enter Name Format' name='nameFormat' onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <th scope="row">FULL NAME</th>
                                {/* <td>{studentdata.fullName}</td> */}
                                <td><input className="form-control" value={studentdata.fullName} type='text' placeholder='Enter Full Name' name='fullName' onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <th scope="row">GENDER</th>

                                {/* <td>{studentdata.gender}</td> */}
                                <td>
                                    <select onChange={handleInputChange} value={studentdata.gender} className="form-select" aria-label="Default select example" name='gender'>
                                        {/* <option selected>Open this select menu</option> */}
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Others">Others</option>
                                    </select>
                                    {/* <input className="form-control" type='text' name='gender' onChange={handleInputChange} /> */}
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">BIRTH DATE</th>
                                {/* <td>{studentdata.birthDate}</td> */}
                                <td>
                                    <input className="form-control" value={studentdata.birthDate} type='text' name='birthDate' onChange={handleInputChange} />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">BIRTHPLACE</th>
                                {/* <td>{studentdata.birthPlace}</td> */}
                                <td>
                                    <input className="form-control" value={studentdata.birthPlace} type='text' name='birthPlace' placeholder='Enter Birthplace' onChange={handleInputChange} />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">ACPC SEAT ALLOTMENT DATE</th>
                                {/* <td>{studentdata.acpcSeatAllotmentDate}</td> */}
                                <td><input className="form-control" value={studentdata.acpcSeatAllotmentDate} type='date' name='acpcSeatAllotmentDate' onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <th scope="row">IS D2D</th>
                                {/* <td>{String(studentdata.isD2D)}</td> */}
                                <td>
                                    <select onChange={handleInputChange} value={studentdata.isD2d} className="form-select" aria-label="Default select example" name='isD2d'>
                                        {/* <option selected>Open this select menu</option> */}
                                        <option value="" >Select Appropriate Choice</option>
                                        <option value="true" >YES</option>
                                        <option value="false">NO</option>
                                    </select>
                                    {/* <input className="form-control" type='text' name='isD2D' onChange={handleInputChange} /> */}
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">ENROLLMENT YEAR</th>
                                {/* <td>{studentdata.enrollmentYear}</td> */}
                                <td><input className="form-control" value={studentdata.enrollmentYear} type='number' placeholder='Enter Enrollment Year' name='enrollmentYear' onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <th scope="row">DEGREE</th>
                                {/* <td>{studentdata.degree}</td> */}
                                <td>
                                    <select onChange={handleInputChange} value={studentdata.degree} className="form-select" aria-label="Default select example" name='degree'>
                                        {/* <option selected>Open this select menu</option> */}
                                        <option value="B.Tech.C.E" selected>B.Tech.C.E</option>
                                        <option value="B.Tech.M.E">B.Tech.M.E</option>
                                        <option value="B.Tech.E.E">B.Tech.E.E</option>
                                        <option value="B.Tech.Ch.E">B.Tech.Ch.E</option>
                                        <option value="B.Tech.I.T">B.Tech.I.T</option>
                                    </select>
                                    {/* <input className="form-control" type='text' placeholder='' name='degree' onChange={handleInputChange} /> */}
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">QUALIFYING EXAM ROLLNO</th>
                                {/* <td>{studentdata.qualifyingExamRollno}</td> */}
                                <td><input className="form-control" value={studentdata.qualifyingExamRollno} type='number' name='qualifyingExamRollno' onChange={handleInputChange} placeholder='Enter Qualifying Exam Roll Number' /></td>
                            </tr>
                            <tr>
                                <th scope="row">SESSION TYPE</th>
                                {/* <td>{studentdata.sessionType}</td> */}
                                <td><input className="form-control" value={studentdata.sessionType} type='text' placeholder='Enter Session Type' name='sessionType' onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <th scope="row">SESSION NO</th>
                                {/* <td>{studentdata.sessionNumber}</td> */}
                                <td><input className="form-control" value={studentdata.sessionNumber} type='number' placeholder='Enter Session Number' name='sessionNumber' onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <th scope="row">BATCH YEAR</th>
                                {/* <td>{studentdata.batchYear}</td> */}
                                <td><input className="form-control" value={studentdata.batchYear} type='number' placeholder='Enter Current Batch Year' name='batchYear' onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <th scope="row">STUDENT CODE</th>
                                {/* <td>{studentdata.studentCode}</td> */}
                                <td><input className="form-control" value={studentdata.studentCode} type='text' placeholder='Assign a new Student Code' name='studentCode' onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <th scope="row">OLD STUDENT CODE</th>
                                {/* <td>{studentdata.oldStudentCode}</td> */}
                                <td><input className="form-control" value={studentdata.oldStudentCode} type='text' placeholder='Enter Previous Student Code' name='oldStudentCode' onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <th scope="row">STUDENT ALLOTMENT</th>
                                {/* <td>{studentdata.studentAllotment}</td> */}
                                <td><input className="form-control" value={studentdata.studentAllotment} type='text' placeholder='Enter Seat Allotment' name='studentAllotment' onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <th scope="row">MERIT RANK</th>
                                {/* <td>{studentdata.meritrank}</td> */}
                                <td><input className="form-control" value={studentdata.meritrank} type='number' placeholder='Enter Merit Rank' name='meritrank' onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <th scope="row">RE SHUFFLE STATUS</th>
                                {/* <td>{studentdata.reShuffleSatus}</td> */}
                                <td><input className="form-control" value={studentdata.reShuffleSatus} type='text' placeholder='Enter Reshuffle Status' name='reShuffleSatus' onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <th scope="row">RE SHUFFLE PHASE</th>
                                {/* <td>{studentdata.reShufflePhase}</td> */}
                                <td><input className="form-control" value={studentdata.reShufflePhase} type='number' placeholder='Enter Current Reshuffle Phase' name='reShufflePhase' onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <th scope="row">CAST CATEGORY CODE</th>
                                {/* <td>{studentdata.casteCategoryCode}</td> */}
                                <td><input className="form-control" value={studentdata.casteCategoryCode} type='text' placeholder='Enter Caste Category Code' name='casteCategoryCode' onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <td className='text-center' colSpan={2}>
                                    <button className='btn btn-success px-5' type='submit'>Update Student</button>
                                    <button className='btn btn-danger px-5 mx-5' type='button' onClick={deleteStudentHandler}>Delete Student</button></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                {/* {studentid} */}
            </div>
        </div>
    );
}

export default AdminStudentsUpdate;
