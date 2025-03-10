'use client'

import { faChevronLeft } from "@/graphics/faRegular";
import { useRouter } from "next/navigation";

export default function BackButton() {

  const router = useRouter()

  return (
    <button onClick={()=>router.back()} className="flex-none flex items-center justify-center bg-brand-midnight     h-[2.25rem] w-[2.25rem] ">
      {faChevronLeft("h-[1rem] fill-bg-primary")}
    </button>
  )
}