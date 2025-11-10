"use client";
import { Modal as AntdModal } from "antd";
import type { ModalProps } from "antd/es/modal";
import React, { useState, useEffect, useRef } from "react";
import styles from "./index.module.css";

export const Modal: React.FC<ModalProps> = (props) => {
  const [isScrollable, setIsScrollable] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const checkScroll = () => {
    const container = containerRef.current;
    if (container) {
      const contentExceedsHeight =
        container.scrollHeight > container.clientHeight;
      const atBottom =
        container.scrollHeight - container.scrollTop <=
        container.clientHeight + 1;
      setIsScrollable(contentExceedsHeight);
      setIsAtBottom(atBottom);
    }
  };

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      checkScroll();
      container.addEventListener("scroll", checkScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScroll);
      }
    };
  }, [props.children]);

  useEffect(() => {
    checkScroll();
  }, []);

  return (
    <AntdModal {...props} className={`${styles.modal} ${props.className}`}>
      <div className={styles.modal_container} ref={containerRef}>
        {props.children}
      </div>
      {!isAtBottom && isScrollable && <div className={styles.gradient}></div>}
    </AntdModal>
  );
};
