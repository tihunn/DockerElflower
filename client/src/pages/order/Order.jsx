import React from "react";
import {Button, Col, Container, Image} from "react-bootstrap";
import OrderItemContainer from "../../Components/OrderItem/OrderItemContainer";
import css from "../../style/OrderItem.module.css";
import trash from "../../icons/trash.svg"




const Order = (props) => {
    let orders = () => {
        return props.orders.map(order => <OrderItemContainer key={order.id} order={order} />)
    }

    if (props.orders.length === 0) {
        return <Container><h1> Заказа пока нет. Сделайте его, выбрав цветы в левом верхнем уголу страницы! </h1></Container>}

    return (
        <Container>
            <Col >
                <div className={css.delAll} onClick={props.deleteAllOrders}>
                     Очистить весь заказ
                    <Image src={trash} className={css.trash} title="Удалить из заказа"/>
                </div>

                {orders()}

                <Button className="m-2" onClick={props.postOrders}>отправить собирать</Button>
            </Col>
        </Container>
    )
}

export default Order;