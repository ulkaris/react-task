import React from "react";
import styles from "./index.module.css";
import { Modal } from "../../../Modal";
import checkIcon from "../../../../assets/images/icons/check_circle.svg";
import { PrimaryButton } from "../../../Buttons/PrimaryButton";

interface SuccessModalProps {
  isModalOpen: boolean;
  handleCancel: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isModalOpen,
  handleCancel,
}) => {
  return (
    <Modal
      footer={null}
      open={isModalOpen}
      onCancel={handleCancel}
      className={styles.modal}
      width={500}>
      <div className={styles.container}>
        <div className={styles.checkIcon_wrapper}>
          <img src={checkIcon} alt="check icon" />
        </div>
        <div className={styles.title}>Added Successfully!</div>
        <p className={styles.desc}>Your news added successfully</p>
        <PrimaryButton onClick={handleCancel} className={styles.btn}>
          Ok
        </PrimaryButton>
      </div>
    </Modal>
  );
};

export default SuccessModal;
