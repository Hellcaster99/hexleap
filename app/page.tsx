'use client';
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

const list = [
  {
    src: "/images/1.jpg",
    name: "Sacramento river cats",
    events:"48 events",
    sport:"Baseball"

  },
  {
    src: "/images/4.jpg",
    name: "Las Vegas Aviators",
    events:"28 events",
    sport:"Baseball"
  },
  {
    src: "/images/3.jpg",
    name: "New Jersey Devils",
    events:"15 events",
    sport:"Ice Hockey"
  },
  {
    src: "/images/4.jpg",
    name: "Las Vegas Aviators",
    events:"28 events",
    sport:"Baseball"
  }
]

const list2 = [
  {
    src: "/images/8.jpg",
    name: "Las Veggas Aviators",
    address: "Las Vegas Ballpark, Las Vegas, Nevada",
    button: "Take Flight Collection"
  },
  {
    src: "/images/7.jpg",
    name: "Sacramento River Cats",
    address: "Sutter Health Park, Sacramento, California",
    button: "Take Flight Collection"
  },
  {
    src: "/images/8.jpg",
    name: "Las Veggas Aviators",
    address: "Las Vegas Ballpark, Las Vegas, Nevada",
    button: "Take Flight Collection"
  }
]

export default function Home() {
  const [bg,setBg] = useState(true);

  return (
    <main className={clsx("flex min-h-screen w-[100%] flex-col items-center justify-center px-[3%] xl:px-[5%]",bg ? "bg-[#292b32]":"bg-[#f7f7f7]")}>
      <div className="flex w-[100%] h-[80px] justify-end items-center py-1">
        <span className={clsx(bg ? "text-white":"text-[#939498]","text-sm md:text-md mx-[15px]")}>
          {bg ? "Dark":"Light"} Mode
        </span>
        <button onClick={()=>{setBg(!bg)}} className={clsx("w-[40px] md:w-[60px] h-[20px] md:h-[30px] shadow-xl rounded-[20px] md:rounded-[30px] relative flex border",bg?"border-white":"border-[#939498]")} >
          <div className={clsx("absolute rounded-[50%] duration-300 w-[20px] md:w-[30px] border h-[20px] md:h-[30px] shadow-xl",bg ? "left-0 bg-white":"translate-x-[100%] bg-[#939498]")}></div>
        </button>
      </div>
      <div className="w-[100%] min-h-[650px] flex flex-col justify-between">
        <div className="w-[100%] h-[100px] flex items-center py-[25px]">
          <h1 className={clsx(bg ? "text-white":"","text-lg border-b border-blue-600 font-bold")}>Sports</h1>
        </div>
        <div className="w-[100%] min-h-[500px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[12px]">
          {list.map((item,i)=>{
            return(
              <div key={i} className={clsx("w-[100%] h-[450px] p-2 shadow-md flex flex-col justify-between items-center",bg ? "bg-[#393b45] text-white":"bg-white")}>
                <div className="w-[100%] h-[85%] relative flex flex-col justify-between">
                  <div className="w-[100%] h-[90%] relative">
                    <Image src={item.src} fill alt="img"></Image>
                  </div>
                  <h1 className="absolute bottom-0">{item.name}</h1>
                </div>
                <div className={clsx(bg ? "bg-[#212228] text-white":"bg-[#eeeeee]","w-[100%] h-[12%] text-[13px] lg:text-[12px] flex py-1 px-2")}>
                  <div className="w-[50%] h-[100%] flex flex-col justify-between py-1">
                    <p className={clsx(bg?"text-[#a5a5a5]":"text-[#585858]")}>Total Events</p>
                    <p>{item.events}</p>
                  </div>
                  <div className="w-[50%] h-[100%] flex flex-col justify-between py-1">
                    <p className={clsx(bg?"text-[#a5a5a5]":"text-[#585858]")}>Sport</p>
                    <p>{item.sport}</p>
                  </div>
                </div>
              </div>
            )
          })}
              <div className={clsx("w-[100%] h-[450px] p-2 shadow-xl",bg ? "bg-[#393b45] text-white":"bg-white")}>
                <div className="w-[100%] h-[45%] relative">
                  <Image src={"/images/ad.jpg"} fill alt="ad"></Image>
                </div>
                <div className={clsx("w-[100%] h-[55%] p-2 flex flex-col",bg?"":"border border-[#006555]")}>
                  <h1 className="font-bold my-[10px]">Advertisement title</h1>
                  <p className=" text-[12px] lg:text-xs font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor suscipit necessitatibus, aperiam cumque dolorem perspiciatis nostrum rerum pariatur. Velit ducimus laudantium saepe minus consectetur voluptate maxime, id provident tenetur iure.</p>
                </div>
              </div>
        </div>
        <div className="w-[100%] h-[100px] py-[25px] flex justify-center items-center">
          <button className="bg-blue-500 w-[150px] h-[50px] p-2 text-white">See More</button>
        </div>
      </div>
      <div className={clsx("w-[100%] mt-[10px] mb-[50px] py-[5%] min-h-[700px] flex justify-center items-center",bg ? "bg-gradient-to-b to-[#130530] from-[#041c03]":"")}>
        <div className={clsx("w-[90%] md:w-[80%] lg:w-[70%] min-h-[630px] flex flex-col gap-[20px] justify-between items-center",bg ? "text-white":"")}>
          <h1 className=" text-[30px] lg:text-[40px] font-bold text-center">Collection Spotlight</h1>
          <p className="font-light text-[10px] w-[90%] lg:text-[12px] text-center">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
          <div className="w-[95%] min-h-[450px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[25px] lg:gap-[50px]">
            {list2.map((item,i)=>{
              return (
                <div key={i} className={clsx("w-[100%] h-[480px] pt-3 pb-2 px-3 shadow-2xl flex flex-col justify-between items-center relative overflow-hidden",bg ? "bg-[#393b45] text-white":"bg-white")}>
                  <div className={clsx("absolute w-[20px] h-[20px] left-0 translate-x-[-50%] top-[67%] rounded-[20px] shadow-inner",bg ? "bg-[#130530]":"bg-gradient-to-r from-[#f7f7f7] to-[#ccc]")}/>
                  <div className={clsx("absolute w-[20px] h-[20px] right-0 translate-x-[50%] top-[67%] rounded-[20px] shadow-inner",bg ? "bg-[#130530]":"bg-gradient-to-l from-[#f7f7f7] to-[#ccc]")}/>
                  <div className="w-[100%] h-[70%] relative flex justify-center">
                    <div className="w-[90%] absolute bottom-0 flex gap-[2%] h-[1px] overflow-x-hidden">
                      {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((item)=> {return <span key={item} className={clsx("w-[10px] h-[1px]",bg ? "bg-white":"bg-[#656565]")}></span>})}
                    </div>
                    <div className="w-[100%] h-[93%] relative shadow-xl">
                      <Image src={item.src} fill alt="img"></Image>
                    </div>
                  </div>
                  <div className="w-[100%] mt-[10px] h-[28%] flex flex-col justify-around items-center">
                    <h1 className="text-[14px]">{item.name}</h1>
                    <div className="w-[50%] lg:w-[65%] text-[10px] lg:text-[8px] xl:text-[10px] font-light flex justify-between items-center h-[15px]">
                      <span className="w-[33%] text-center">OCT 15</span>
                      <span>|</span>
                      <span className="w-[20%] text-center">SUN</span>
                      <span>|</span>
                      <span className="w-[33%] text-center">4:30 PM</span>
                    </div>
                    <p className={clsx("text-[11px] w-[80%] text-center",bg?"font-thin":"font-light")}>{item.address}</p>
                    <button className={clsx(bg ? "bg-black":"bg-[#0c0a0a]","p-2 w-[100%] flex justify-center items-center")}>
                      <p className={clsx("text-[11px] text-white")}>{item.button}</p>
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      
    </main>
  );
}
