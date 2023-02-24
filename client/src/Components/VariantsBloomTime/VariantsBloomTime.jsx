import React from 'react';
import {DropdownButton, Form} from "react-bootstrap";

const VariantsBloomTime = (props) => {
    const onChangeCheckBox = (idChecked, arrState, setArrState) => {
        arrState[idChecked].checked = !arrState[idChecked].checked
    }
    const variantsBloomTime = (arrBloomTime, setBloomTime) => {
        return arrBloomTime.map(month => {
                return <Form.Check
                    className="mx-2"
                    type="checkbox"
                    label={month.value}
                    key={month.id}
                    checked={arrBloomTime.checked}
                    onChange={() => onChangeCheckBox(month.id, arrBloomTime, setBloomTime)}
                />
            }
        )
    }

    return (
        <DropdownButton title="Время цветения" className="mt-2">
            {variantsBloomTime(props.monthsCheckboxes)}
        </DropdownButton>
    )
}

export default VariantsBloomTime;