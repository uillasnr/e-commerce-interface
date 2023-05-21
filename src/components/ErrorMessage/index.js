
import React from 'react'
import PropTypes from "prop-types"

import { ErrorMessageStyles } from "./styles"


function ErrorMessage({ children }) {


    return (
        <ErrorMessageStyles>
            {children}
        </ErrorMessageStyles>
    )
}
export default ErrorMessage

ErrorMessage.prototype = {
    children: PropTypes.string
}