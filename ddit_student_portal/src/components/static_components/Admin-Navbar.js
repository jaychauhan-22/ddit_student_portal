import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const AdminNavbar = () => {
    let navigate = useNavigate();
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src="ddu.png" alt="" width="40" />
                        </a>
                        <a className="navbar-brand" href="https://www.ddu.ac.in/" target={'_blank'}><strong>DDU ADMIN PANEL</strong></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">

                                    <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                                        <ul className="navbar-nav">
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href='#' aria-expanded="false">
                                                    Student Info
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li><Link className="dropdown-item" to={"/admin/students/add"}>Add Student</Link></li>
                                                    <li><Link className="dropdown-item" to={"/admin/students/update"}>Update/Delete Student</Link></li>
                                                    {/* <li><Link className="dropdown-item" to={"/admin/students/delete"}>Delete Student</Link></li> */}
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <Link to={"/admin-studentinfo"} className={"nav-link"}>
                                        Student Information
                                    </Link> */}
                                </li>
                                <li className="nav-item">
                                    {/* <Link to={"/fees"} className={"nav-link"}>Subject Details</Link> */}
                                </li>
                                <li className="nav-item">
                                    {/* <Link to={"/examresults"} className={"nav-link"}>Exam Results</Link> */}
                                </li>
                                <li className="nav-item">
                                    {/* <Link to={"/home"} className={"nav-link"}>Hall Ticket</Link> */}
                                </li>
                                <li className="nav-item dropdown">
                                    {/* <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Information
                                    </a> */}
                                    <ul className="dropdown-menu text-dark" aria-labelledby="navbarDropdown">

                                        <li><Link to={"/info-searchsubjects"} className={"nav-link text-dark"}>Search Subjects</Link></li>
                                        <li><Link to={"/info-mysubjects"} className={"nav-link active text-dark"}>My Subjects</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn btn-link nav-link" onClick={(e) => {
                                        localStorage.removeItem("admin");
                                        localStorage.removeItem("studentid");
                                        localStorage.removeItem("student");
                                        navigate("/admin-login");
                                    }} >Logout(Admin)</button>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default AdminNavbar;
