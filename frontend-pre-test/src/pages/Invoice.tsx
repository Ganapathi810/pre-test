import { BsQuestion } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { LiaCubeSolid } from "react-icons/lia";
import { PiPaintBrushHouseholdBold,PiTruckTrailerBold } from "react-icons/pi";
import { LuBug } from "react-icons/lu";
import { TiDocumentDelete } from "react-icons/ti";
import { IoSnow } from "react-icons/io5";
import { AiOutlineTool } from "react-icons/ai";
import { MdChatBubbleOutline } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HiOutlineHome } from "react-icons/hi2";
import { LuEye } from "react-icons/lu";

export const Invoice = () => {

  const items = [
      { id : 1, icon : <LiaCubeSolid/>, label : "cube"},
      { id : 2, icon : <PiPaintBrushHouseholdBold/>, label : "Brush"},
      { id : 3, icon : <PiTruckTrailerBold />, label : "delete"},
      { id : 4, icon : <LuBug/>, label : "Bug"},
      { id : 5, icon : <IoSnow/>, label : "Snow"},
      { id : 6, icon : <TiDocumentDelete/>, label : "document"},
      { id : 7, icon : <AiOutlineTool/>, label : "tool"},
    ]

  const applicationData = [
    {
      deadline : "25.03.12 모집마감",
      items : {
        "상품 구성": "500M 인터넷+TV",
        "기존통신사": "이용안함",
        "희망통신사": "수신",
        "가입 유형": "가입(신규,변경)",
        "설치 지역": "경기도 의정부시 민락동 | 아파트"
      }
    },
    {
      deadline : "25.02.28 모집마감",
      items : {
        "상품 구성": "1G 인터넷",
        "기존통신사": "SKT",
        "희망통신사": "수신",
        "가입 유형": "가입(신규,변경)",
        "설치 지역": "경기도 의정부시 민락동 | 아파트"
      }
      
    }
  ]


  return (
    <div>
      <div className="h-16 border-b flex items-center justify-between px-5">
        <div className="flex gap-2 items-center">
          <span className="text-black text-sm">견적수신함</span>
          <span className="text-sm text-gray-500 p-0.5 bg-gray-200 rounded-full"><BsQuestion /></span>
        </div>
        <div className="flex gap-3.5 items-center text-gray-800 text-2xl">
          <span className="p-1.5 hover:bg-gray-400/20 rounded-md  transition-colors duration-300"><IoIosSearch /></span>
          <span className="p-1.5 hover:bg-gray-400/20 rounded-md transition-colors duration-300"><GoPerson /></span>
        </div>
      </div>
      <div className="flex ml-5 mt-5 border-b pb-3">
        {items.map((item) => (
          <div key={item.id} className={`${item.id === 1 ? "border border-blue-500/30 bg-blue-500/10" : null } p-3 flex flex-col justify-center items-center w-20 rounded-lg`}>
              <div className="flex flex-col gap-1 items-center">
                <span className={`${item.id === 1 ? 'text-blue-600 bg-current/10' : 'text-gray-500 bg-gray-500/10' } text-xl rounded-full h-8 w-8 flex items-center justify-center`}>{item.icon}</span>
                <span className="text-sm text-gray-700">{item.label}</span>
              </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center py-6 border rounded-lg mx-5 mt-7">
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-2 text-3xl">
            <MdChatBubbleOutline className="text-blue-600"/>
            <MdChatBubbleOutline className="text-blue-400"/>
          </div>
          <span className="text-sm">총 2개 중 2개 남았어요!</span>
          <div className="flex gap-0.5 items-center ">
            <span className="text-blue-500 text-lg">clickable link</span>
            <span><MdKeyboardArrowRight  className="text-blue-500 text-xl mt-0.5"/></span>
          </div>
        </div>
      </div>
      <div className="ml-5 mt-6 text-sm">진행 중인 견적 요청</div>
      <div className="flex items-center justify-center py-6 border rounded-lg mx-5 mt-7">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-700">요청하신 견적이 없습니다!</span>
          <span className="text-gray-500 text-sm">HOME 화면에서 나에게 맞는 상품을 찾아보세요!</span>
          <Button className="bg-blue-600 hover:bg-blue-700 mt-2 px-5 py-5">
            <span className=""><HiOutlineHome /></span>
            <span className="">HOME</span>
          </Button>
        </div>
      </div>
      <div className="ml-5 mt-7 text-sm">마감된 견적 요청</div>
      <div className="mx-5 mt-3 grid grid-cols-1 gap-4">
        {applicationData.map((application, index) => (
          <Card key={index}>
            <CardHeader className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <span><MdOutlineDateRange className="text-blue-600 text-lg" /></span>
                <span className="text-blue-500 text-sm">{application.deadline}</span>
              </div>

              <div className="flex gap-1 items-center px-3 py-0.5 rounded-md text-blue-500 border border-blue-400/20 bg-current/10 ">
                <span className="text-blue-500"><LuEye /></span>
                <span className="text-sm text-blue-500 mb-0.5">watching</span>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 mt-4">
              {Object.entries(application.items).map(([key, value]) => (
                <div key={key} className='flex gap-0.5 items-center'>
                    <span className="text-slate-600 text-sm">{key} :</span>
                    <span className="text-slate-900 text-sm">{value}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}