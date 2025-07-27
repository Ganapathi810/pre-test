import { GoPerson } from "react-icons/go";
import { LuSettings } from "react-icons/lu";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiBell } from "react-icons/fi";
import { GoQuestion } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdChatBubbleOutline } from "react-icons/md";

export const MyPage = () => {

  const myPageItems = [
    { 
      id: '1', 
      label: "Settings", 
      description : 'Manage setting', 
      icon : <LuSettings />, 
      iconColor: "text-blue-500"
    },
    { id: '2',
      label: "Settings",
      description : 'Manage setting', 
      icon : <FiBell />, 
      iconColor: "text-green-500" 
    },
    { id: '3', 
      label: "Settings", 
      description : 'Have questions reach out', 
      icon : <GoQuestion />, 
      iconColor: "text-yellow-500" 
    },
    { id: '4', 
      label: "Settings", 
      description : 'Manage setting0', 
      icon : <IoDocumentTextOutline />, 
      iconColor: "text-violet-500" 
    },
    { id: '5', 
      label: "Settings", 
      description : 'have a chat', 
      icon : <MdChatBubbleOutline />, 
      iconColor: "text-blue-500" 
    },
  ]


  return (
    <div>
        <div className="flex justify-start items-center px-6 p-4 border-b">
          <span className="text-blue-600 text-xl">Inquiry</span>
        </div>
        <div className="flex justify-between items-center p-3 border-b py-6">
          <div className="flex items-center gap-3 ml-3">
              <span className="bg-gray-400/20 rounded-full  p-3 text-3xl text-gray-500"><GoPerson/></span>
              <div className="flex flex-col gap-1">
                <span className="text-black font-medium">Ganapathi</span>
                <span className="text-gray-500 text-sm">customer@email.com</span>
              </div>
          </div>
          <span className="text-gray-400 text-2xl p-1.5 rounded-md hover:bg-gray-400/20 transition-colors duration-300 mr-3"><MdKeyboardArrowRight/></span>
        </div>
        <div className="mx-5 mt-2 border-b pb-6">
          {myPageItems.map((item) => (
            <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-3">
                  <span className={`${item.iconColor} text-xl p-2 rounded-md bg-current/20`}>{item.icon}</span>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-black font-medium">{item.label}</span>
                    <span className="text-gray-600 text-sm">{item.description}</span>
                  </div>
                </div>
                <span><MdKeyboardArrowRight className="text-2xl text-gray-400"/></span>
            </div>
          ))}
        </div>
        <div className="flex justify-center p-3 mt-1">
          <div className="flex flex-col items-center justify-center gap-1">
            <span className="text-gray-500 text-sm">Secondchapter Co., Ltd v1.0.0</span>
            <span className="text-gray-400 text-[11px]">© 2025 All rights reserved</span>
          </div>
        </div>
    </div>
  );
}