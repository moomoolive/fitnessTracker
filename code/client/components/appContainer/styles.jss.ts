import React from 'react'
import { WithStylesProps }  from 'react-jss'

const lightGrey = "#131412"

export const styles = {
    app: {
        background: "#000000",
        height: "100vh",
        width: "100vw",
        position: "fixed"
    },
    header: {
        background: lightGrey,
        "padding-top": "20px",
        "padding-bottom": "20px",
        position: "fixed",
        width: "100vw",
        "z-index": 5
    },
    "header-content": {
        "margin-left": "auto",
        "margin-right": "auto",
        "width": "90%",
        "max-width": "800px"
    },
    "body-content": {
        "margin-top": "80px",
        "margin-bottom": "40px",
        "min-height": "80vh",
    },
    "header-logo": {
        "font-size": "18px !important",
    },
    "main-section": {
        width: "100vw",
        position: "relative",
        "z-index": 0
    },
    footer: {
        background: lightGrey,
        "min-height": "20vh",
    },
    '@global': {
        body: {
            padding: "0 0 0 0",
            margin: "0 0 0 0",
            color: "#f8f8ff",
            "font-family": ' "Titillium Web" "Helvetica","Arial",sans-serif;',
            "font-size": "18px",
            "overflow-y": "auto"
        }
    },
    "@media screen and (max-width: 600px)": {
        '@global': {
            body: {
                "font-size": "14px"
            }
        },
    },
    "@media screen and (max-width: 1000px)": {
        '@global': {
            body: {
                "font-size": "16px"
            }
        },
    }
}

export interface IProps extends WithStylesProps<typeof styles> {
    children: React.ReactNode
}