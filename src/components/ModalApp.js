import { useState } from "react";
import { Container, ButtonModal } from "./styled";
import Modal from "./Modal";


export const ModalApp = ({buttonText, message}) => {
  const [modal, setModal] = useState(false);


  return (
    <Container>
      <ButtonModal onClick={() => setModal(true)}>
        {buttonText}
      </ButtonModal>
      <Modal message={message} openModal={modal} onClose={() => setModal(false)}>
      </Modal>
    </Container>
  );
}
