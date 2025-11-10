// import React from 'react';
import styles from "./index.module.css";
import { PrimaryButton } from "../../../Buttons/PrimaryButton";
import { FiPlus } from "react-icons/fi";
import PostTable from "../PostTable";

const HomePage = () => {
  return (
    <div>
      <div className={styles.page_top}>
        <div>
          <h1 className={styles.title}>News & Announcements</h1>
          <h4 className={styles.post_number}>210 Posts</h4>
        </div>
        <PrimaryButton>
          <span className={styles.btn_iconPlus_wrapper}>
            <FiPlus />
          </span>
          Add News or Announcement
        </PrimaryButton>
      </div>
      <PostTable />
    </div>
  );
};

export default HomePage;
