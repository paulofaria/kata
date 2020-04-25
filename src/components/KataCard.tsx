import Kata from "../models/Kata";
import React from "react";
import Card from "react-bootstrap/Card";

import "./styles.css";

interface Props {
    kata: Kata;
}

const KataCard: React.FC<Props> = (props) => {
    const { kata } = props

    return (
        <Card className="overflow-scroll-gradient">
            <div className="overflow-scroll-gradient__scroller">
                <Card.Body className="cardBody">
                    <Card.Title>{kata.title}</Card.Title>
                    <Card.Text style={{ textAlign: "justify"}}>
                        {kata.description}
                    </Card.Text>
                </Card.Body>
            </div>
        </Card>
    )
}

export default KataCard