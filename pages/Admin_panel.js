import React from "react";
import admin from "./components/styles/admin.module.css";

const userLoginStatus = {
  day0: 1500,
  day1: 2000,
  day2: 2220,
  day3: 2420,
  day4: 2630,
  day5: 2800,
};

const dailySales = {
  day0: 1000,
  day1: 1500,
  day2: 2000,
  day3: 2102,
  day4: 2300,
  day5: 2400,
};

function Admin_panel() {
  function generateReport(Object) {
    let list = "";
    for (const key in Object) {
      list = list.concat(`${key} : ${Object[key]}\n`);
    }
    return list;
  }
  return (
    <>
      <div className={admin.container}>
        <p className={admin.text}>Admin Panel 📈</p>
        <div className={admin.reports}>
          <div className={admin.card}>
            <p className={admin.headline}>Daily sales 💸</p>
            <p className={admin.reportstext} >{generateReport(dailySales)}</p>
          </div>
          <div className={admin.card}>
            <p className={admin.headline}>Logins 🔓</p>
            <p className={admin.reportstext} >{generateReport(userLoginStatus)}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin_panel;
