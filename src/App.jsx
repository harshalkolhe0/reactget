import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [details, setDetails] = useState(null);
    const [error, setError] = useState(null);
    const fetchData = async () => {
        try {
            console.log("Fetching data");
            //const data = await fetch("http://localhost:3000/somepath");
const data = await fetch("http://ip172-18-0-149-cq6cfg8l2o9000dcfp2g-3000.direct.labs.play-with-docker.com/somepath");
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
    return (
        <div>
<button onClick={()=>fetchData()}>click me</button>
            {details && <p>Hello: {details.hello}</p>}
            {error && <p>{error}</p>}
        </div>
    );
}

export default App;
