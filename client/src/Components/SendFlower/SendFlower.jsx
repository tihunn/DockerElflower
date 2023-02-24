import React from 'react';
import {Button} from "react-bootstrap";


const SendFlower = (props) => {
    const addFlower = () => {
        const formData = new FormData()
        formData.append("nameFlower", props.state.nameFlower)
        formData.append("height", `${props.state.height}`)
        formData.append("price", `${props.state.price}`)
        formData.append("wholesale", `${props.state.wholesale}`)
        formData.append("available", `${props.state.available}`)
        formData.append("description", props.state.description)

        if (props.state.arrFiles.length !== 0) {
            props.state.arrFiles.forEach( (file, index) => {
                formData.append(`img${index}`, file)
            })
        }

        let strBloomTime = props.creatorStrBloomTime(props.bloomTime)
        if (strBloomTime) { formData.append("bloomTime", strBloomTime) }

        if (props.createFlower || !props.isHiddenLightSensitivity) {
            formData.append("lightSensitivity", props.creatorStrLightSensitivity(props.sunOrShadow, props.isSunAndShadow))
        }

        if (props.state.id) {formData.append("id", props.state.id)}

        props.methodSend(formData)
    }

    return  (
        <Button onClick={addFlower} variant="success" className="m-2">
            {props.title}
        </Button>
    )
}


export default SendFlower;