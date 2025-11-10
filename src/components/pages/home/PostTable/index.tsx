// import React from 'react';
import styles from "./index.module.css";
import { SelectFilter } from "../../../Inputs/SelectFilter";
import searchIcon from "../../../../assets/images/icons/search-normal.svg";
import { Row, Col, Flex, Select } from "antd";
import { GoDotFill } from "react-icons/go";
import image from "../../../../assets/images/admin photo.jpg";
import deleteIcon from "../../../../assets/images/icons/trash.svg";
import editIcon from "../../../../assets/images/icons/edit.svg";
import Pagination from "../../../Pagination";

const PostTable = () => {
  const mockPosts = [
    {
      id: 1,
      title:
        "Milli Aviasiya Akademiyasının təşkilatçılığı ilə həyata keçirilən tədbir",
      image: image,
      type: "News",
      date: "06/11/2026",
      time: "10:19 AM",
      status: "Active",
      publishStatus: "Publish",
      author: "snovruzlu",
    },
    {
      id: 2,
      title: "Milli Aviasiya Akademiyasının Akademiyasında keçirilən görüş",
      image,
      type: "Announcement",
      date: "06/11/2026",
      time: "10:19 AM",
      status: "Inactive",
      publishStatus: "Publish",
      author: "snovruzlu",
    },
    {
      id: 3,
      title:
        "Milli Aviasiya Akademiyası tələbələri üçün yeni laboratoriya açıldı",
      image,
      type: "News",
      date: "06/11/2026",
      time: "10:19 AM",
      status: "Active",
      publishStatus: "Publish",
      author: "snovruzlu",
    },
    {
      id: 4,
      title: "Milli Aviasiya Akademiyası – gələcəyin pilotları üçün elan",
      image,
      type: "Announcement",
      date: "06/11/2026",
      time: "10:19 AM",
      status: "Active",
      publishStatus: "Publish",
      author: "snovruzlu",
    },
    {
      id: 5,
      title: "Milli Aviasiya Akademiyasında yeni tədris ili başladı",
      image,
      type: "News",
      date: "06/11/2026",
      time: "10:19 AM",
      status: "Active",
      publishStatus: "Publish",
      author: "snovruzlu",
    },
    {
      id: 6,
      title: "Milli Aviasiya Akademiyası beynəlxalq konfransda təmsil olundu",
      image,
      type: "News",
      date: "06/11/2026",
      time: "10:19 AM",
      status: "Active",
      publishStatus: "Publish",
      author: "snovruzlu",
    },
  ];

  return (
    <div>
      <div className={styles.table_filter}>
        <SelectFilter
          options={[
            { label: "All Posts", value: "all posts" },
            { label: "News", value: "news" },
            { label: "Announcements", value: "announcements" },
          ]}
          //   onChange={(value) => {
          //   }}
          placeholder="All Posts"
          className={styles.select_filter}
        />
        <SelectFilter
          options={[
            {
              label: (
                <div className={styles.select_status_label}>
                  <div
                    className={`${styles.status_icon} ${styles.status_icon_active}`}></div>{" "}
                  Active
                </div>
              ),
              value: "active",
            },
            {
              label: (
                <div className={styles.select_status_label}>
                  <div
                    className={`${styles.status_icon} ${styles.status_icon_inactive}`}></div>{" "}
                  Inactive
                </div>
              ),
              value: "inactive",
            },
          ]}
          //   onChange={(value) => {
          //   }}
          placeholder="All Status"
          className={styles.select_filter}
        />
        <div className={styles.search_wrapper}>
          <img src={searchIcon} alt="search" />
          <input type="search" placeholder="Search" />
        </div>
      </div>
      <div className={styles.table}>
        <Row className={styles.header}>
          <Col span={6}>
            <span>Post</span>
          </Col>
          <Col span={4}>
            <span>Type</span>
          </Col>
          <Col span={4}>
            <span>Sharing time</span>
          </Col>
          <Col span={2}>
            <span>Status</span>
          </Col>
          <Col span={4}>
            <span>Publish Status</span>
          </Col>
          <Col span={2}>
            <span>Author</span>
          </Col>
          <Col span={2}>
            <span>Actions</span>
          </Col>
        </Row>

        <Row className={styles.body}>
          {mockPosts.map((post) => (
            <Col span={24} key={post.id}>
              <Row>
                <Col span={6} className={styles.table_col}>
                  <Flex gap={10}>
                    <div className={styles.post_img}>
                      <img src={post.image} alt={post.title} />
                    </div>
                    <div>
                      <div className={styles.text_wrapper}>
                        <h4>{post.title}</h4>
                      </div>
                      <div className={styles.text_wrapper}>
                        <p>
                          Milli Aviasiya Akademiyasının təşkilatçılığı ilə
                          həyata keçirilən tədbir
                        </p>
                      </div>
                    </div>
                  </Flex>
                </Col>
                <Col span={4} className={styles.table_col}>
                  <span
                    className={`${styles.type} ${
                      post.type === "News"
                        ? styles.type_news
                        : styles.type_announcement
                    }`}>
                    {post.type}
                  </span>
                </Col>
                <Col span={4} className={styles.table_col}>
                  <div className={styles.dateAndTime}>
                    <p className={styles.date}>{post.date}</p>
                    <p className={styles.time}>{post.time}</p>
                  </div>
                </Col>
                <Col span={2} className={styles.table_col}>
                  <span
                    className={`${styles.chip_status} ${
                      post.status === "Active"
                        ? styles.chip_status_active
                        : styles.chip_status_inactive
                    }`}>
                    <GoDotFill size={12} />
                    {post.status}
                  </span>
                </Col>
                <Col span={4} className={styles.table_col}>
                  <Select
                    defaultValue={post.publishStatus}
                    options={[
                      {
                        value: "Publish",
                        label: (
                          <div className={styles.select_status_label}>
                            <div
                              className={`${styles.status_icon} ${styles.status_icon_active}`}></div>
                            <span>Publish</span>
                          </div>
                        ),
                      },
                      {
                        value: "Draft",
                        label: (
                          <div className={styles.select_status_label}>
                            <div
                              className={`${styles.status_icon} ${styles.status_icon_inactive}`}></div>
                            <span>Draft</span>
                          </div>
                        ),
                      },
                    ]}
                    className={styles.select_filter}
                  />
                </Col>
                <Col span={2} className={styles.table_col}>
                  <span className={styles.author}>{post.author}</span>
                </Col>
                <Col span={2} className={styles.table_col}>
                  <div className={styles.actions}>
                    <img src={deleteIcon} alt="delete icon" />
                    <img src={editIcon} alt="edit icon" />
                  </div>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </div>
      <div className={styles.pagination_wrapper}>
        <Pagination
          align="center"
          current={1}
          total={12}
          pageSize={1}
          // onChange={onChange}
        />
      </div>
    </div>
  );
};

export default PostTable;
