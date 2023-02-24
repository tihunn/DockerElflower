import React, {useState} from 'react';
import {Button, Container, DropdownButton, Modal, ModalDialog, ModalTitle} from "react-bootstrap";
import css from "../../style/admin.module.css"
import {toggleSuccessAdd} from "../../store/catalogsReduser";
import CatalogsSelectionContainer from "../../Components/CatalogsSelection/CatalogsSelectionContainer";
import {useNavigate} from "react-router-dom";
import {FLOWER_ROUTE} from "../../Components/AppRouter/const";


const Admin = (props) => {
    const navigate = useNavigate()
    const [catalog, setCatalog] = useState("")
    const [isNamed, setIsNamed] = useState(true)

    const onChange = (e) => {
        setCatalog(e.target.value)
        if (catalog) {
            setIsNamed(false)
        }
    }


    return (
        <Container className="text-center">

            <Modal show={props.isSuccessAdd} onHide={() => props.toggleSuccessAdd(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Каталог успешно добавлен, удалён или обновлён</Modal.Title>
                </Modal.Header>
                <Modal.Body>Чтобы добавить в существующий каталог растения выберете нужные из списка всех
                    цветов, можете воспользоваться поиском</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => props.toggleSuccessAdd(false)}>
                        Хорошо
                    </Button>
                </Modal.Footer>
            </Modal>

            <div>
                <Button onClick={() => navigate(FLOWER_ROUTE + `/0`)} className="m-2" > Добавить растение </Button>
            </div>
            <div>
                <input className={css.input_category} type="text" value={catalog} onChange={onChange}
                       placeholder="Введите название нового каталога"/>
            </div>
            <div>
                <Button className="m-2" onClick={() => props.addCatalog(catalog)} disabled={isNamed}>
                    Добавить каталог
                </Button>
            </div>
            <div>
                <CatalogsSelectionContainer/>
            </div>
            <div>
                <CatalogsSelectionContainer catalogName={catalog} disabled={isNamed}/>
            </div>

        </Container>
    );
};

export default Admin;