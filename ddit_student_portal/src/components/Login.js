import React,{useState} from 'react';

const Login = () => {
    const [statusError,setStatusError] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const  handleSubmit = (e)=>{

    }
    return (
        <div className='bg-color'>
            <section className="vh-100">
                <div className="container h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <img src="ddu.png" width="200%"  
                                className="img-fluid" alt="Phone image" />
                        </div>
                        
                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        
                            <form onSubmit={handleSubmit}>
                            <h1 className='fs-1 fw-bold'>DDU Student Portal</h1>
                                <span className="fs-1 text-style">
                                    Student Login
                                </span><br /><br />
                                <div className="form-floating mb-4">
                                    <input type="username" required id="username" className="form-control" onChange={(e) => setUsername(e.target.value)}  placeholder="username"/>
                                    <label htmlFor="username">Username<span className='text-danger'>*</span></label>
                                </div>
                                <div className="form-floating mb-4">
                                    <input type="password" required id="userpassword" className="form-control form-control-lg" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                                    <label className="form-label" htmlFor="userpassword">Password<span className='text-danger'>*</span></label>
                                </div>
                                <div className="my-4">
                                    {statusError !== "" && (
                                        <div>
                                            <p className="text-danger fs-5">{statusError}</p>
                                        </div>
                                    )}
                                </div>
                                <br />
                                <div className='d-grid gap-2'>
                                    <button type="submit" className="btn btn-fill btn-lg">Sign in</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;
