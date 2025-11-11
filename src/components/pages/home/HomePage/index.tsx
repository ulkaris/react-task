import { useState } from "react";
import styles from "./index.module.css";
import { PrimaryButton } from "../../../Buttons/PrimaryButton";
import { FiPlus } from "react-icons/fi";
import PostTable from "../PostTable";
import SuccessModal from "../SuccessModal";
import AddPostModal from "../AddPostModal";

const HomePage = () => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isAddPostModalOpen, setIsAddPostModalOpen] = useState(false);

  //open and close functions for success modal
  const handleOpenSuccessModal = () => {
    setIsSuccessModalOpen(true);
  };

  const handleCancelSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };

  //open and close functions for add post modal
  const handleOpenAddPostModal = () => {
    setIsAddPostModalOpen(true);
  };

  const handleCancelAddPostModal = () => {
    setIsAddPostModalOpen(false);
  };

  return (
    <div>
      <div className={styles.page_top}>
        <div>
          <h1 className={styles.title}>News & Announcements</h1>
          <h4 className={styles.post_number}>210 Posts</h4>
        </div>
        <PrimaryButton onClick={handleOpenAddPostModal}>
          <span className={styles.btn_iconPlus_wrapper}>
            <FiPlus />
          </span>
          Add News or Announcement
        </PrimaryButton>
      </div>
      <PostTable />
      <SuccessModal
        isModalOpen={isSuccessModalOpen}
        handleCancel={handleCancelSuccessModal}
      />
      <AddPostModal
        isModalOpen={isAddPostModalOpen}
        handleCancel={handleCancelAddPostModal}
      />
    </div>
  );
};

export default HomePage;
