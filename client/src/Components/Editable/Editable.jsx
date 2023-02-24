import React, {useState} from "react";

let Editable = (props) => {
    let [editMode, setEditMode] = useState(false)
    if (props.value === "") {}

    let toggleEditMode = () => {
        setEditMode(!editMode)
    }
    let deactivateEditMode = (e) => {
        setEditMode( editMode = false)
        props.dispatch(e.currentTarget.value) // отправить на сервер
    }
    let onChange = (e) => {
        props.dispatch(e.currentTarget.value) // сохранить в редаксе
    }


    const isEditMode = () => {
        if (editMode) {
            return <input autoFocus={true} onBlur={deactivateEditMode} value={props.value} onChange={onChange} type={props.type}/>
        } else if (props.value === "") {
            return <span onClick={toggleEditMode}> Текст не введён, можете кликать на меня </span>
        } else {
            return <span onClick={toggleEditMode}>  {props.value} </span>
        }

    }

        return <>
            { isEditMode() }

        </>
}

export default Editable