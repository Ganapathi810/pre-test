import { Outlet, NavLink } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";
import { GoPerson } from "react-icons/go";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function ProtectedLayout() {

    const navItems = [
        { label : "Home",   icon : <HiOutlineHome />, path: "/home" },
        { label : "Invoice",icon : <IoDocumentTextOutline />, path: "/invoice" },
        { label : "Inquiry",icon : <IoChatbubbleOutline />, path: "/inquiry" },
        { label : "My page",icon : <GoPerson />, path: "/mypage" },
    ]

  return (
    <div className="min-h-screen mb-28">
      <main className="">
        <Outlet />
      </main>
      <footer className="fixed bottom-0 w-full border-t pb-4 bg-white">
        <nav className="p-4 text-white flex gap-4 w-full justify-around">
            {navItems.map(item => (
                <NavLink 
                    key={item.path} 
                    to={item.path}
                    className="group flex flex-col items-center text-sm  transition-all duration-200"
                >
                    {({ isActive }) => (
                        <>
                            <span className={`${isActive ? "text-blue-500" : "text-gray-700 group-hover:text-black"} text-xl`}>{item.icon}</span>
                            <span className={`${isActive ? "text-blue-500" : "text-gray-600 group-hover:text-black"} text-sm font-thin`}>{item.label}</span>
                        </>
                    )}
                </NavLink>
            ))}
        </nav>
      </footer>
    </div>
  );
}
