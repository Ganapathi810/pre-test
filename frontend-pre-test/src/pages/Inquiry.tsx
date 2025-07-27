import { IoMdMenu } from "react-icons/io";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { GoPerson } from "react-icons/go";

export const Inquiry = () => {

  const inquiryItems = [
    { id : 'u1', name : "Ganapathi", avatar : <GoPerson />, latestChat : "Hello, how can I help you?", CountOfMessages : 5,},
    { id : 'u2', name : "Ganapathi", avatar : <GoPerson />, latestChat : "Hello, how can I help you?", CountOfMessages : 5,},
    { id : 'u3', name : "Ganapathi", avatar : <GoPerson />, latestChat : "Hello, how can I help you?", CountOfMessages : 5,},
    { id : 'u4', name : "Ganapathi", avatar : <GoPerson />, latestChat : "Hello, how can I help you?", CountOfMessages : 0,},
    { id : 'u5', name : "Ganapathi", avatar : <GoPerson />, latestChat : "Hello, how can I help you?", CountOfMessages : 5,},
  ]

  return (
    <div>
      <div className="flex justify-between items-center px-6 p-3 border-b ">
        <span className="text-blue-500">Inquiry</span>
        <span className="p-2 hover:bg-gray-300/30 rounded-md"><IoMdMenu className="text-gray-600 text-2xl"/></span>
      </div>
      <div className="grid grid-cols-1 mx-3 mt-5">
        {inquiryItems.map((item) => (
          <Card key={item.id} className="m-2 hover:shadow-md transition-shadow duration-300 h-[70px] flex justify-between items-center px-3">
            <div className="flex items-center gap-3">
              <div className="text-2xl text-gray-600 bg-gray-500/10 rounded-full p-2">
                {item.avatar}
              </div>
              <div className="flex flex-col gap-1">
                <CardTitle className="text-black font-medium">{item.name}</CardTitle>
                <CardDescription className="text-gray-500 text-sm truncate w-48">{item.latestChat}</CardDescription>
              </div>  
            </div>
            <span className={`${item.CountOfMessages === 0 ? null : 'bg-blue-600 text-blue-100 text-sm'} rounded-full px-1.5 mb-5`}>
              {item.CountOfMessages}
            </span>
          </Card>
        ))}
      </div>
    </div>
  );
}