import React from "react";
import preload from "./Rolling-1s-200px.svg"
import {Container} from "react-bootstrap";

export default function Preload() {
    return <Container>
        <img src={preload} alt={"preload"}/>
    </Container>
}