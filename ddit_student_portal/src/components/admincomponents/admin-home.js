import React,{useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminNavbar from '../static_components/Admin-Navbar';
const AdminHome = () => {
    let navigate = useNavigate();
    useEffect(() => {
      if(!localStorage.getItem("admin"))
        navigate("/admin-login");

    }, []);
    return (
        <div>
            <AdminNavbar/>
        <div class="p-5 mb-4 bg-body-tertiary rounded-4">
        <div class="h-100 p-5 bg-body-tertiary border rounded-4 row">
          <h2 className='text-center'><strong>Admin Panel</strong></h2>
          <p className='text-center'>The Admin Panel provides access to settings related to Configuration, Account, Security, System and all the Documents. The Admin Portal also provides a tile view for quick access to frequently used options.</p>
          <button class="btn btn-outline-secondary m-auto w-25" type="button">Explore Admin Panel</button>
        </div>
      </div>
        </div>
    );
}

export default AdminHome;
