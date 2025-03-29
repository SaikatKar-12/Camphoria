import React, { useState } from 'react';
import { FaSearch, FaBell } from "react-icons/fa";

import {
  Icon2fa,
  IconBellRinging,
  IconDatabaseImport,
  IconFingerprint,
  IconKey,
  IconLogout,
  IconReceipt2,
  IconSettings,
  IconSwitchHorizontal,
} from "@tabler/icons-react";

const data = [
  { link: "", label: "Notifications", icon: IconBellRinging },
  { link: "", label: "Billing", icon: IconReceipt2 },
  { link: "", label: "Security", icon: IconFingerprint },
  { link: "", label: "SSH Keys", icon: IconKey },
  { link: "", label: "Databases", icon: IconDatabaseImport },
  { link: "", label: "Authentication", icon: Icon2fa },
  { link: "", label: "Other Settings", icon: IconSettings },
];

function NavbarSimple() {
  const [active, setActive] = useState("Billing");

  const links = data.map((item) => (
    <a
      className={`flex items-center text-sm font-medium p-2 rounded-md transition-colors hover:bg-gray-200 hover:text-black ${
        item.label === active ? "bg-blue-200 text-blue-700" : "text-gray-700"
      }`}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className="mr-2 w-6 h-6" stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className="h-screen w-64 p-4 flex flex-col border-r border-gray-300">
      <div className="flex-1">{links}</div>
      <div className="border-t border-gray-300 pt-4 mt-4">
        <a
          href="#"
          className="flex items-center text-sm font-medium p-2 rounded-md hover:bg-gray-200 hover:text-black"
          onClick={(event) => event.preventDefault()}
        >
          <IconSwitchHorizontal className="mr-2 w-6 h-6" stroke={1.5} />
          <span>Change account</span>
        </a>
        <a
          href="#"
          className="flex items-center text-sm font-medium p-2 rounded-md hover:bg-gray-200 hover:text-black"
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className="mr-2 w-6 h-6" stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}
 export default NavbarSimple;