"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navs = [
  {
    id: 1,
    path: "/dashboard/public-profile",
    title: "Public Profile",
  },
  {
    id: 2,
    path: "/dashboard/stores",
    title: "Stores",
  },
];

const DashboardNavbar = () => {
  const pathname = usePathname();
  return (
    <ul className="max-w-[1200px]  mx-auto px-6 md:px-0 mt-10 flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 mb-5">
      {navs.map((item) => (
        <li className="me-2" key={item.id}>
          <Link
            href={item.path}
            className={`${
              pathname == item.path &&
              "text-blue-600 bg-gray-100 rounded-t-lg active"
            } inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300`}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DashboardNavbar;
