import React from 'react';
import {Button, Form} from "react-bootstrap";

const LightSensitivity = (props) => {
    return (
        <>
        <Button className="mt-2" onClick={props.toggleHideLightSensitivity}>Световосприимчивость</Button>
    <br/>
    <div hidden={props.isHiddenLightSensitivity}>
        <Form.Check type="radio" inline={true} name="sunOrShadow" label="Солнце"
                    checked={props.sunOrShadow} onChange={props.setSunOrShadow}/>
        <Form.Check type="radio" inline={true} name="sunOrShadow" label="Тень"
                    checked={!props.sunOrShadow} onChange={props.setSunOrShadow}/>
        <Form.Check type="checkbox" inline={true} label="Солнце-полутень"
                    checked={props.isSunAndShadow} onChange={props.setIsSunAndShadow}/>
    </div>
        </>
    )
}

export default LightSensitivity;