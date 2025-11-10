import { useState } from "react";
import styles from "./index.module.css";
import { SelectFilter } from "../../../Inputs/SelectFilter";
import searchIcon from "../../../../assets/images/icons/search-normal.svg";
import { Row, Col, Flex, Select } from "antd";
import { GoDotFill } from "react-icons/go";
import deleteIcon from "../../../../assets/images/icons/trash.svg";
import editIcon from "../../../../assets/images/icons/edit.svg";
import Pagination from "../../../Pagination";
import { SelectLimit } from "../../../Inputs/SelectLimit";
import { usePosts } from "../../../../hooks/usePosts";
import { useDeletePost } from "../../../../hooks/deletePost";
import DeleteModal from "../DeletePostModal";

const PostTable = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [typeFilter, setTypeFilter] = useState("all posts");
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const deleteMutation = useDeletePost();

  const { data, isLoading, isError } = usePosts(
    page,
    limit,
    typeFilter,
    statusFilter,
    search
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching posts.</p>;

  const posts = data?.data || [];
  const total = data?.total || 0;

  const handleOpenModal = (post: any) => {
    setSelectedPost(post);
    setSelectedPostId(post.id);
    setIsModalOpen(true);
  };

  const handleCancelModal = () => {
    setSelectedPostId(null);
    setIsModalOpen(false);
  };

  const handleConfirmDelete = () => {
    if (selectedPostId !== null) {
      deleteMutation.mutate(selectedPostId);
    }
    handleCancelModal();
  };

  const handleLimit = (value: number) => {
    setLimit(value);
    setPage(1);
  };

  const handleTypeFilter = (value: string) => {
    setTypeFilter(value);
    setPage(1);
  };

  const handleStatusFilter = (value: string) => {
    setStatusFilter(value);
    setPage(1);
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const applySearch = () => {
    setSearch(searchInput);
    setPage(1);
  };

  return (
    <div>
      <div className={styles.table_filter}>
        <SelectFilter
          options={[
            { label: "All Posts", value: "all posts" },
            { label: "News", value: "news" },
            { label: "Announcements", value: "announcement" },
          ]}
          onChange={handleTypeFilter}
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
              value: "Active",
            },
            {
              label: (
                <div className={styles.select_status_label}>
                  <div
                    className={`${styles.status_icon} ${styles.status_icon_inactive}`}></div>{" "}
                  Inactive
                </div>
              ),
              value: "Inactive",
            },
          ]}
          onChange={handleStatusFilter}
          placeholder="All Status"
          className={styles.select_filter}
        />
        <div className={styles.search_wrapper}>
          <img src={searchIcon} alt="search" onClick={applySearch} />
          <input
            type="search"
            placeholder="Search"
            value={searchInput}
            onChange={handleSearchInput}
            onKeyDown={(e) => {
              if (e.key === "Enter") applySearch();
            }}
          />
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
          {posts.map((post) => (
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
                        <p>{post.desc}</p>
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
                    <img
                      src={deleteIcon}
                      alt="delete icon"
                      onClick={() => handleOpenModal(post)}
                    />
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
          current={page}
          total={total}
          pageSize={limit}
          onChange={(pageNum) => setPage(pageNum)}
        />
        <SelectLimit
          limit={limit}
          handleLimit={handleLimit}
          className={styles.select_limit}
        />
      </div>
      <DeleteModal
        isModalOpen={isModalOpen}
        handleCancel={handleCancelModal}
        handleDelete={handleConfirmDelete}
        desc={selectedPost?.title}
      />
    </div>
  );
};

export default PostTable;
