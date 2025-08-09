import { createContext, useState, useEffect } from 'react';
import { dummyCourses } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const AppContext = createContext();

export const AppContextProvider = (props) => {

    const currency = import.meta.env.VITE_CURRENCY;
    const navigate = useNavigate();

    const [allCourses, setAllCourses] = useState([]);

    // Fetch all Courses
    const fetchAllCourses = async () => {
        setAllCourses(dummyCourses);
    }

    useEffect(() => {
        fetchAllCourses();
    }, []);

    const value = {
        // Add shared state or functions here
        currency, allCourses, navigate
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
}

export default AppContext;