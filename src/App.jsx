import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [details, setDetails] = useState(null);
    const [error, setError] = useState(null);
    const fetchData = async () => {
        try {
            console.log("Fetching data");
            const data = await fetch("http://localhost:3000/somepath");
            console.log(data);
            if (!data.ok) {
                setError("Server Error");
            } else {
                const json = await data.json();
                console.log(json);
                setDetails(json);
            }
        } catch (exp) {
            setError("No data found");
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            {details && <p>Hello: {details.hello}</p>}
            {error && <p>{error}</p>}
        </div>
    );
}

export default App;