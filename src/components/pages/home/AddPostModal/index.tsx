import React, { useState } from "react";
import styles from "./index.module.css";
import { Modal } from "../../../Modal";
import flagAze from "../../../../assets/images/AZ flag.svg";
import flagUK from "../../../../assets/images/UK flag.svg";
import { PostFormStep1 } from "../PostFormStep1";
import { PostFormStep2 } from "../PostFormStep2";

interface AddPostModalProps {
  isModalOpen: boolean;
  handleCancel: () => void;
}

const AddPostModal: React.FC<AddPostModalProps> = ({
  isModalOpen,
  handleCancel,
}) => {
  const [progressValue, setProgressValue] = useState(50);
  return (
    <Modal
      footer={null}
      open={isModalOpen}
      onCancel={handleCancel}
      className={styles.modal}
      width={728}>
      <div className={styles.container}>
        <div className={styles.languages}>
          <span>
            <img src={flagAze} alt="Azerbaijani language" />
            AZ
          </span>
          <span>
            <img src={flagUK} alt="English language" />
            EN
          </span>
        </div>
        <div className={styles.modal_top}>
          <div className={styles.title}>Create News / Announcement</div>
          <div>
            <span> {progressValue === 100 ? "2" : "1"}</span>/2
          </div>
        </div>
        <div className={styles.proggressBar_wrapper}>
          <div
            className={`${styles.proggressBar} ${styles.proggressBar_full}`}></div>
          <div
            className={`${styles.proggressBar} ${
              progressValue === 100 ? styles.proggressBar_full : ""
            }`}></div>
        </div>
        {progressValue === 50 ? (
          <PostFormStep1 setProgressValue={setProgressValue} />
        ) : (
          <PostFormStep2 setProgressValue={setProgressValue} handleCancel={handleCancel}/>
        )}
      </div>
    </Modal>
  );
};

export default AddPostModal;
