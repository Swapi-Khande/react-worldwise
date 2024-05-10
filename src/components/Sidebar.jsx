import React from "react";
import Logo from "./Logo";
import AppNav from "./AppNav";
import Styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={Styles.sidebar}>
      <Logo />
      <AppNav />

      <p>List of cities</p>
      <footer className={Styles.footer}>
        <p className={Styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWide Inc.
        </p>
      </footer>
    </div>
  );
}
