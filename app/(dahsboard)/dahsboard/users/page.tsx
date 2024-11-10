import React from "react";
import Link from "next/link";



const page = () => {
  
  return (
    <>
      <h1>USERS</h1>
      <ul>
        <li>
          <Link href="/dahsboard/users/1">User 1</Link>
        </li>
        <li>
          <Link href="/dahsboard/users/1">User 2</Link>
        </li>
        <li>
          <Link href="/dahsboard/users/1">User 3</Link>
        </li>
      </ul>
    </>
  );
};

export default page;
