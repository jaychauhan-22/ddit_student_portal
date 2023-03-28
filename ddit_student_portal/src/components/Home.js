import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const [studentid,setStudenId] = useState("");
    let navigate = useNavigate();

    useEffect(() => {
            const temp = localStorage.getItem('studentid');
            setStudenId(temp);
            if (temp == undefined || temp == "")
                navigate("/");
    },[studentid]);
    return (
        <div>
            {studentid}
        </div>
    );
}

export default Home;
