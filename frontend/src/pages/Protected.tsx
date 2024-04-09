import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Protected({Component}: {Component: React.ComponentType}) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/signin')
        }
        
    }, [])
    return (
        <div>
            <Component />
        </div>
    )
}

export default Protected