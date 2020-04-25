import React, {useState} from 'react';
import './App.css';
import Button from "react-bootstrap/Button";
import Kata, {defaultKata, getRandomKata} from "./models/Kata";
import KataCard from "./components/KataCard";

const App = () => {
    const [kata, setKata] = useState<Kata>(defaultKata)

    const handleGetRandomKata = () => {
        const kata = getRandomKata()
        setKata(kata)
    }

    const style: React.CSSProperties = {
        textAlign: "center",
        backgroundColor: "#282c34",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }

    return (
        <div style={style}>
            <h1 style={{color: "white"}}>Code Kata</h1>
            <Button
                variant="primary"
                size="lg"
                onClick={handleGetRandomKata}
            >
                Get a random Kata
            </Button>
            {kata && <KataCard kata={kata}/>}
        </div>
    );
}

export default App;
