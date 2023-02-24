import React from 'react';
import {Button, DropdownButton} from "react-bootstrap";


const CatalogsSelection = (props) => {
    const AddOrDel = (catalogId) => {
        if (props.flowerId) {
            return () => props.addFlowerInCatalog(catalogId, props.flowerId)
        } else if (props.catalogName) {
            return () => props.updateCatalog(catalogId, props.catalogName)
        } else {
            return () => props.delCatalog(catalogId)
        }
    }

    const title = () => {
        if (props.flowerId) {
            return "Добавить в каталог"
        } else if (props.catalogName || props.catalogName === "") {
            return "Обновить название каталога"
        } else {
            return "Удалить каталог"
        }
    }

    const catalogSelectionButton = () => {
        if (props.catalog && props.catalog[0].nameCatalog) {
            props.getCatalogs()
        } else {
            return props.catalogs.map(catalog =>
                <Button
                    className="m-2 d-block"
                    onClick={AddOrDel(catalog.id)}
                    key={catalog.id}
                >
                    {catalog.nameCatalog}
                </Button>
            )
        }
    }


    return (
        <DropdownButton title={title()} className="m-2" disabled={props.disabled}>
            {catalogSelectionButton()}
        </DropdownButton>
    );
};

export default CatalogsSelection;