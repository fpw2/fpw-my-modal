import styled, {
    keyframes
} from "styled-components"

const fadeIn = keyframes `
    0% {
    opacity: 0;
    }

    50% {
    opacity: 0;
    }

    100% {
    opacity: 1;
    }
`

export const ModalContainer = styled.div `
    ${(props) =>
        props.openModal &&
        `   margin: 0px;
            padding:0px;
            position: fixed;
            height: 100vh;
            width: 100%;
            background: rgba(0, 0, 0, .3);
        `
    }
`

export const ModalBackground = styled.div `  
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;  
`

export const ModalText = styled.div `      
    background-color: transparent;
    color: #2b8379;
    padding: 15px;
    font-weight: bold;
    border: 2px solid #2b8379;
    border-radius: 10px;
    min-width: 200px;
    animation: ${fadeIn} .8s ease-in-out;
`

export const ModalClose = styled.div `
    position: absolute;
    top: -13px;
    right: -13px;
    cursor: pointer;
    animation: ${fadeIn} .8s ease-in-out;
`