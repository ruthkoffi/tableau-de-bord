import { useState,useEffect } from "react";

export default function BarrePro({value, color}){
    const [width , setwidth]= useState(0);

    useEffect(() =>{
        const timer = setTimeout(() => setwidth(value),300);
        return () =>clearTimeout(timer);
    },[value]);


    return (
    <div className="w-full bg-stone-100 rounded-full h-2.5 overflow-hidden">
      <div
        className="h-2.5 rounded-full transition-all duration-1000 ease-out"
        style={{
          width: `${width}%`,
          backgroundColor: color,
        }}
      />
    </div>
  );

}