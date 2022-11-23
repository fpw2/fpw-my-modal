# Modal-App

## Description

A modal pluggin for react using create-react-app.

# Installation

Run the following command in your terminal:

`npm install fpw-my-modal`

# How to use ?

`import { useState } from "react"`
`import { ModalApp } from "fpw-my-modal"`

`const [openModal, setOpenModal] = useState(false)`

`<Modal`
    `openModal={openModal},` 
    `setOpenModal={setOpenModal}, `
    `message="your-modal-message",` 
    `className="your-class"`
`/>`

