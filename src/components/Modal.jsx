import React from "react";
import { ModalContainer } from "./styled";
import { ModalBackground } from "./styled";
import { ModalText } from "./styled";
import { ModalClose } from "./styled";
import { Close } from "./Close";

export const Modal = ({ openModal, setOpenModal, message, className }) => {
  if (!openModal) {
    return null;
  } 

  window.addEventListener("keydown", (e) => {
    if(e.key === "Escape" || e.key === "Esc") {
      openModal = false
    }
  })

  return (<>
    <ModalContainer onClick={() => setOpenModal(false)} openModal={openModal} >
      <ModalBackground onClick={(e) => {e.stopPropagation()}} >
        <ModalText className={className} >
          {message}
        </ModalText>
        <ModalClose onClick={() => setOpenModal(false)}>
          <Close />
        </ModalClose>
      </ModalBackground>
    </ModalContainer>
  </>);
}

