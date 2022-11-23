import { ModalContainer } from "./styled";
import { ModalBackground } from "./styled";
import { ModalText } from "./styled";
import { ModalClose } from "./styled";
import { Close } from "./Close";

export const Modal = ({ message, openModal, onClose }) => {
  if (!openModal) {
    return null;
  } 

  window.addEventListener("keydown", (e) => {
    if(e.key === "Escape" || e.key === "Esc") {
      openModal = false
    }
  })

  return (<>
    <ModalContainer onClick={onClose} openModal={openModal} >
      <ModalBackground onClick={(e) => {e.stopPropagation()}} >
        <ModalText className="modal-txt">
          {message}
        </ModalText>
        <ModalClose onClick={onClose}>
          <Close />
        </ModalClose>
      </ModalBackground>
    </ModalContainer>
  </>);
}

