import React from "react";

import { SlideMenuAdmin } from "../../components/SlideMenuAdmin";
import ListProducts from "./ListProducts";
import Orders from "./Orders";
import PropTypes from "prop-types";


import { Container, ContainerItems } from "./styles"
import paths from "../../constants/paths";
import NewProduct from "../Admin/NewProducts";
//import EditProduct from "./EditProduct";

function Admin({ match: { path } }) {

    return (
        <Container>

            <SlideMenuAdmin path={path} />

            <ContainerItems>

                {path === paths.Order && <Orders />}
                {path === paths.Products && <ListProducts />}
                {path === paths.NewProduct && <NewProduct />}
                {/*    {path === paths.EditProduct && <EditProduct />}  */}
            </ContainerItems>

        </Container>
    )
}
export default Admin

Admin.propTypes = {
    match: PropTypes.shape({
        path: PropTypes.string
    })
}