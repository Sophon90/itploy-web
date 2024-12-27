import React from "react";
import "./Header.css"; // สำหรับใส่สไตล์เพิ่มเติม

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>IT Department</h1>
        <p>Lanna Polytechnic College, Chiang Mai</p>
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="/">หน้าหลัก</a></li>
          <li><a href="/about">เกี่ยวกับเรา</a></li>
          <li><a href="/courses">หลักสูตร</a></li>
          <li><a href="/contact">ติดต่อ</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
