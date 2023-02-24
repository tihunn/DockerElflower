import React, {useState} from 'react';
import css from "../../style/basket.module.css"

const ButtonNumberFlowers = (props) => {
    let [newNum, setNewNum] = useState( Number(props.number) )

    let sendNewNumberFlower = () => {}
    let onChangeNum = (e) => {
        setNewNum(e.currentTarget.value )
    }


    return (
        <div>
            кол-во: <br/>
            <input className={css.input} type="number" value={newNum} onFocus={sendNewNumberFlower} onChange={onChangeNum}/>
        </div>
    )
}

export default ButtonNumberFlowers;