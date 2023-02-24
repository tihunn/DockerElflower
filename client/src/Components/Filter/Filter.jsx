import React from 'react';
import {Button, Form} from "react-bootstrap";
import VariantsBloomTime from "../VariantsBloomTime/VariantsBloomTime";
import AddFlowerContainer from "../SendFlower/SendFlowerContainer";
import LightSensitivityContainer from "../LightSensitivity/LightSensitivityContainer";


const Filter = (props) => {
    const isWholesale = props.role === "wholesale" || props.role === "admin"
    const isAdmin = props.role === "admin"

    return (<>
            <h3>Поиск</h3>
            <Form>
                название растения
                <Form.Control value={props.filter.nameFlower} onChange={(e) => props.setNameFlower(e.target.value)}/>
                <Button className="mt-2" onClick={props.onHide} hidden={!props.hide}>ещё параметры</Button>
                <Button className="mt-2" onClick={props.onHide} variant={"secondary"} hidden={props.hide}>скрыть
                    параметры</Button>
                <div hidden={props.hide}>

                    <div hidden={!isAdmin}>
                        <VariantsBloomTime monthsCheckboxes={props.filter.bloomTime}
                                           setChangeCheckbox={props.setChangeCheckbox}/>
                    </div>

                    <LightSensitivityContainer/>

                    <Button className="mt-2 d-block" onClick={props.clickHeight}>Высота (в см)</Button>
                    <div hidden={props.isHeight} className="row text-center">
                        <div className="col">
                            Min
                            <Form.Control value={props.filter.heightMin}
                                          onChange={(e) => props.setHeightMin(Number(e.target.value))}
                                          type="number"/>
                        </div>
                        <div className="col">
                            Max
                            <Form.Control className="col" value={props.filter.height}
                                          onChange={(e) => props.setHeight(Number(e.target.value))}
                                          type="number"/>
                        </div>
                    </div>

                    <div hidden={!isAdmin}>
                        Цена
                        <Form.Control value={props.filter.price}
                                      onChange={(e) => props.setPrice(Number(e.target.value))} type="number"/>
                        <div hidden={!isWholesale}>
                        </div>
                        Оптовая цена
                        <Form.Control value={props.filter.wholesale}
                                      onChange={(e) => props.setWholesale(Number(e.target.value))}
                                      type="number"/>
                    </div>

                    <div hidden={!isAdmin}>
                        Кол-во в наличии
                        <Form.Control value={props.filter.available}
                                      onChange={(e) => props.setAvailable(Number(e.target.value))}
                                      type="number"/>
                    </div>

                    <div hidden={!isAdmin}>
                        Описание
                        <Form.Control placeholder={"Сохраняется пока открыта страница"}
                                      value={props.filter.description}
                                      onChange={(e) => props.setDescription(e.target.value)}/>
                    </div>
                </div>
            </Form>
            <Button className="mt-2" variant="success" onClick={props.onSearch}>Найти</Button>

        </>
    )
}

export default Filter;