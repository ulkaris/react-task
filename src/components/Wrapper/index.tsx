import React, { useState, ReactNode, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./index.module.css";
import logo from "../../assets/images/naa_logo_favicon 1.svg";
import { IoSettingsOutline } from "react-icons/io5";
import { RiHome5Line } from "react-icons/ri";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { PiBookOpenTextLight } from "react-icons/pi";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import adminPhoto from "../../assets/images/admin photo.jpg";
import { SelectNav } from "../Inputs/SelectNav";
import { useNavigate, useLocation } from "react-router-dom";

interface DashboardLayoutWrapperProps {
  children?: ReactNode;
}

interface SidebarLink {
  title: string;
  icon: React.ReactNode;
  links: { name: string; href: string }[];
}

const DashboardLayoutWrapper: React.FC<DashboardLayoutWrapperProps> = ({
  children,
}) => {
  const navigate = useNavigate();

  const sidebarLinks: SidebarLink[] = [
    {
      title: "NAA Website",
      icon: <RiHome5Line size={20} />,
      links: [
        { name: "Post", href: "/" },
        { name: "Media Library", href: "/" },
        { name: "System Settings", href: "/about" },
      ],
    },
    {
      title: "Library",
      icon: <PiBookOpenTextLight size={20} />,
      links: [
        { name: "Books", href: "/about" },
        { name: "Authors", href: "/" },
      ],
    },
    {
      title: "Meteorology",
      icon: <TiWeatherPartlySunny size={20} />,
      links: [
        { name: "Weather Forecast", href: "/" },
        { name: "Climate Data", href: "/" },
      ],
    },
    {
      title: "Museum",
      icon: <HiOutlineBuildingLibrary size={20} />,
      links: [
        { name: "Exhibits", href: "/" },
        { name: "Events", href: "/" },
      ],
    },
  ];

  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <div>
          <div className={styles.sidebar_top}>
            <div className={styles.logo}>
              <Link to="/">
                <img src={logo} alt="NAA logo" />
              </Link>
            </div>
            <h2>NAA Control Panel</h2>
          </div>
          <div className={styles.nav}>
            {sidebarLinks.map((section, i) => (
              <SelectNav
                key={i}
                options={section.links.map((link) => ({
                  label: link.name,
                  value: link.href,
                }))}
                onChange={(value) => {
                  navigate(value);
                }}
                placeholder={
                  <div className={styles.select_placeholder}>
                    {section.icon}
                    <span>{section.title}</span>
                  </div>
                }
              />
            ))}
          </div>
        </div>
        <div className={styles.sidebar_bottom}>
          <Link to="/" className={styles.settings}>
            <IoSettingsOutline size={20} />
            <h3 className={styles.nav_text}>Settings</h3>
          </Link>
          <div className={styles.profile}>
            <div className={styles.profile_photo}>
              <img src={adminPhoto} alt="admin photo" />
            </div>
            <div>
              <h3>Khayal Ahmadli</h3>
              <h4>khahmadli</h4>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.content}>{children ?? <Outlet />}</div>
    </div>
  );
};

export default DashboardLayoutWrapper;
