import React from "react";
// eslint-disable-next-line import/extensions
import sampleData from "../../components/User/sampleData.js";
import Link from "next/link";
// eslint-disable-next-line import/extensions
import UserPage from './[id].js';

function User() {
  return (
    <Link href={'/user/'+sampleData.username}>
      <UserPage userData={sampleData} />
    </Link>
  );
}
export default User;
