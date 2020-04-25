import Kata from "../models/Kata";
import React from "react";
import Card from "react-bootstrap/Card";

interface Props {
    kata: Kata;
}

const KataCard: React.FC<Props> = (props) => {
    const { kata } = props

    return (
        <Card style={{ width: "50vw", height: "30vh", color: "black", margin: 20 }}>
            <Card.Body style={{overflow: "scroll"}}>
                <Card.Title>{kata.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify"}}>
                    <pre>
                    {kata.description}
                    </pre>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default KataCard