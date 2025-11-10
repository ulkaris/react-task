import React from "react";
import styles from "./index.module.css";
import { Modal } from "../../../Modal";
import deleteIcon from "../../../../assets/images/icons/trash.svg";
import { TertiaryButton } from "../../../Buttons/TertiaryButton";
import { NegativeButton } from "../../../Buttons/NegativeButton";

interface DeleteModalProps {
  isModalOpen: boolean;
  handleCancel: () => void;
  handleDelete: () => void;
  desc: string;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  isModalOpen,
  handleCancel,
  handleDelete,
  desc,
}) => {
  return (
    <Modal
      footer={null}
      open={isModalOpen}
      onCancel={handleCancel}
      className={styles.modal}
      width={500}>
      <div className={styles.container}>
        <div className={styles.deleteIcon_wrapper}>
          <img src={deleteIcon} alt="delete icon" />
        </div>
        <div className={styles.title}>Delete Post</div>
        <p className={styles.desc}>
          <span>Are you sure you want to delete the post -</span> {desc}
        </p>
        <div className={styles.btns}>
          <TertiaryButton className={styles.btn_cancel} onClick={handleCancel}>
            No
          </TertiaryButton>
          <NegativeButton className={styles.btn_delete} onClick={handleDelete}>
            Yes
          </NegativeButton>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
