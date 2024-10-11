"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const tabs = [
  { id: 1, path: "profile", title: "Profile" },
  { id: 2, path: "products", title: "Products" },
  { id: 3, path: "orders", title: "Orders" },
  { id: 4, path: "analytics", title: "Analytics" },
  { id: 5, path: "settings", title: "Settings" },
];

const StoreNavigation = () => {
  const pathname = usePathname();
  return (
    <div>
      <div>
        <ul className="flex flex-row md:flex-column justify-between items-center flex-wrap space-y text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
          {tabs.map((item) => (
            <li key={item.id} className="md:w-full mb-2 md:mb-3">
              <Link
                href={`${pathname}/${item.path}`}
                className={`${
                  pathname == item.path && "bg-blue-500"
                } inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`}
              >
                <svg
                  className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StoreNavigation;
