"use client"
import { useEffect, useState } from "react";

export default function Counter() {
  const [counter,setCounter] = useState(0);

  useEffect(() => {
    console.log("test",counter);
  },[counter])


  return (
   <>
   <p>{counter}</p>
   <button onClick={() => {
    setCounter((prev) => prev+1)
    setCounter((prev) => prev+1)
   }}>click me</button>
   </>
  );
}
