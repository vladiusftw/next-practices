"use client"
import { fetchData } from "@/utils/data";
import React from "react";

type Props = {};

export const revalidate = 30 * 60 // 30 mins

const page = async(props: Props) => {

    const data = await fetchData()
    
  return(
    <div>
       {data?.map((item,index) => {
        return(
            <p>{item.title}</p>
        )
       }) ?? <p>error has occured</p>}
    </div>
  )
};

export default page;
