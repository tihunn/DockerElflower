import React from "react";
import {Button, Card, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {FLOWER_ROUTE} from "../AppRouter/const";
import css from "../../style/FlowerItem.module.css"
import CatalogsSelectionContainer from "../CatalogsSelection/CatalogsSelectionContainer";
import CarouselComponent from "../Carousel/Carousel";


const FlowerItem = (props) => {
    const navigate = useNavigate()
    const navClick = () => {
        navigate(FLOWER_ROUTE + `/${props.flower.id}`)
    }

    return (
        <Row className={"mt-2"} >
            <div className={css.card}>

                <CarouselComponent image={props.flower.image} css={css} onClick={navClick}/>

                <div onClick={navClick}>

                    <h2 className={css.nameFlower}>{props.flower.nameFlower}</h2>
                    <div>Высота: {props.flower.height}</div>
                    <div>Цена: {props.flower.price}</div>
                    <div>В наличии: {props.flower.available}</div>
                </div>

                <Button variant="success"
                        className="m-2 "
                        onClick={() => props.addOrder(props.flower.id)}
                >
                    Заказать
                </Button>
                {props.role === "admin"
                    ? <CatalogsSelectionContainer flowerId={props.flower.id}/>
                    : null}
            </div>
        </Row>
    )
}

export default FlowerItem;