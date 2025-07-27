import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiHammerBold,PiPaintBrushHouseholdBold,PiTruckTrailerBold   } from "react-icons/pi";
import { LuBug } from "react-icons/lu";
import { IoSnow } from "react-icons/io5";
import { TiDocumentDelete } from "react-icons/ti";
import { AiOutlineTool } from "react-icons/ai";
import { GiBabyFace } from "react-icons/gi";

export const Home = () => {

  const items = [
    { id : 1, icon : <RiDeleteBin6Line/>, label : "delete", color: "text-red-500"},
    { id : 2, icon : <PiHammerBold/>, label : "Hammer", color: "text-yellow-400"},
    { id : 3, icon : <PiPaintBrushHouseholdBold />, label : "delete", color: "text-green-500"},
    { id : 4, icon : <PiTruckTrailerBold />, label : "delete", color: "text-blue-500"},
    { id : 5, icon : <LuBug/>, label : "Bug", color: "text-red-500"},
    { id : 6, icon : <IoSnow/>, label : "Snow", color: "text-blue-500"},
    { id : 7, icon : <TiDocumentDelete/>, label : "document", color: "text-yellow-500"},
    { id : 8, icon : <AiOutlineTool/>, label : "tool", color: "text-blue-500"},
    { id : 9, icon : <GiBabyFace/>, label : "Baby face", color: "text-violet-500"},
  ]
  
  return (
    <div>
      <div className="h-14 shadow w-full flex items-center justify-between px-5">
        <span className="text-blue-600 font-medium text-sm">모두의 관리</span>
        <span className="text-gray-600 hover:text-black transition-colors duration-200">sign out</span>
      </div>
      <h4 className="text-center mt-6 text-gray-600 text-sm">견적을 희망하는 서비스를 선택해주세요</h4>
      <div className="grid grid-cols-3 p-3 mt-3">
        {items.map((item) => (
          <Card key={item.id} className="group m-1.5 h-34 hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-200 transition-transform duration-300 shadow-sm">
            <CardContent className="flex items-center h-full w-full justify-center ">
              <div className="flex flex-col items-center">
                <div className={`${item.color} bg-current/10 text-3xl font-semibold mb-2 rounded-full  p-3 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <CardTitle className="text-medium font-medium">{item.label}</CardTitle>
              </div>
            </CardContent>
          </Card>
         ))}
      </div>

    </div>
  );
}