import React from "react";
// eslint-disable-next-line import/extensions
import sampleData from "../components/User/sampleData.js";
import Link from "next/link";
// eslint-disable-next-line import/extensions
import UserPage from "../components/User/UserPage.js";

function User() {
  return (
    <div>
      <UserPage userData={sampleData} />
      </div>
  );
}
export default User;
