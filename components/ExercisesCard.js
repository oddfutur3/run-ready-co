"use client";


import { ProgramContext } from "@/app/(inAssessment)/[assessmentID]/exercise-prescription/ProgramProvider";
import { ProgramContext as PostProgramContext } from "@/app/(inAssessment)/[assessmentID]/new-exercise-prescription/ProgramProvider";
import VideoFetcher from "@/app/(inAssessment)/[assessmentID]/exercise-prescription/[exerciseID]/VideoFetcher";
import { saans } from "@/app/fonts";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { VScrollContext } from "./VScrollContext";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";
import { ImageLoader } from "@/app/(inAssessment)/[assessmentID]/exercise-prescription/ImageLoader";
import { exercisesStoragePath } from "@/data/exercisesStoragePath";
import { db } from "@/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { PrescriptionFixedContext } from "@/app/(inAssessment)/[assessmentID]/performance-program/PerformanceProgram";


const parseFocus = (focus) => {
  if (focus === "Both") {
    const result = ["Absorb","Bounce"]
    return result.join(" + ")
  } else {
    return focus
  }
}


export function ExercisesCardSelectable({
  exercise,
  index,
  scroll = false,
  postPrescription = false
}) {
  // console.log("exercise", exercise);
  const { isModalOpen, toggleModal, setModalExerciseKey, setCustomReps, setCustomSets, selectExercise, programCart, updateProgramCart } = useContext(
    postPrescription ? PostProgramContext : ProgramContext
  );

  // console.log(index)

  const { toggleVScroll } = useContext(VScrollContext);

  const tags = [exercise?.objective, parseFocus(exercise?.focus), exercise?.difficulty, ];

  const content = (
    <div
      className={
        "h-full flex-none flex flex-col gap-[1.5rem] " +
        (scroll
          ? "w-[13.1875rem] md:max-xl:w-full"
          : "w-full xl:w-[13.1875rem]")
      }
    >
      {/* <video
            preload="metadata"
            muted
            playsInline
            class="object-cover flex-none w-full h-[15.781875rem] md:h-[20.8125rem]  "
          >
            <source src="" type="video/mp4" />
          </video> */}
      <div className="flex-none w-full h-[15.781875rem] md:h-[20.8125rem]  overflow-hidden">
        <ImageLoader path={exercise?.thumbnail} />
      </div>
      <div className="h-full flex flex-col gap-[0.25rem]">
        <div className={saans.className + " h-[2rem] detail-bold text-dark-300 line-clamp-2"}>
          {exercise?.["coded_name"]}
        </div>
        <div className="h-[3.25rem] !font-secondary detail text-dark-200 !line-clamp-3">
          {exercise?.benefit}
        </div>
        <div className="flex gap-[0.5rem] flex-wrap">
          {tags.map((tag, i) => (
            <div
              key={i}
              className="px-[0.5rem] py-[0.25rem] bg-[#FFFFFF] border border-grey-400 rounded-full detail text-[#353535]"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );



  return (
    <>
      
        <button
          onClick={() => {
            if (exercise?.selected) { // to unselect
              selectExercise(index);
              updateProgramCart([...(programCart.filter(cartExercise => cartExercise.id != exercise.id))]);
            } else {  // open modal
              toggleModal(true);
              toggleVScroll(true);
            }
            setCustomReps("")
            setCustomSets("")
            setModalExerciseKey(index);
            // console.log(index)
          }}
          disabled={!selectExercise}
          className={exercise?.selected ? "outline outline-brand-midnight" : ""}
        >
          {content}
        </button>
      
    </>
  );
}


export function ExercisesCard({ exercise, scroll = false}) {

  const tags = [exercise?.objective, parseFocus(exercise?.focus), exercise?.difficulty, ]

  const content = <div className={"h-full flex flex-col gap-[1.5rem] " + (scroll ? "w-[13.1875rem] md:max-xl:w-full" : "w-full xl:w-[13.1875rem]")}>
    {/* <video
            preload="metadata"
            muted
            playsInline
            class="object-cover flex-none w-full h-[15.781875rem] md:h-[20.8125rem]  "
          >
            <source src="/images/raya15SecondLoop.mp4" type="video/mp4" />
          </video> */}
          <div className="flex-none w-full h-[15.781875rem] md:h-[20.8125rem]   overflow-hidden">
          <ImageLoader path={exercise?.thumbnail} />

          </div>
    <div className="h-full flex flex-col gap-[0.25rem]">
      <div className={saans.className + " detail-bold text-dark-300"}>
        {exercise?.['coded_name']}
      </div>
      <div className="h-full !font-secondary detail text-dark-200 line-clamp-2">
        {exercise?.benefit}
      </div>
      <div className="flex gap-[0.5rem] flex-wrap">
        {tags.map((tag, i) => <div key={i} className="px-[0.5rem] py-[0.25rem] bg-[#FFFFFF] border border-black rounded-full detail text-[#353535]">{tag}</div>)}
      </div>
    </div>
  </div>

  return (
      <div>
      <a href={`https://www.runasyouare.co/runready/exercise-library/${exercise?.id}/`} target="_blank" rel="noreferrer" className="block" >
        {content}
      </a>
      {exercise?.exerciseNotes && <div className="detail">
          <div className="font-semibold">Notes:</div><div>{exercise.exerciseNotes}</div>
        </div>}
      </div>
  )
}


export function ExercisesCardLite({ exercise, scroll = false}) {

  const { changeSelectedExercise, setVideoUrl, setImageUrls } = useContext(PrescriptionFixedContext)

  const content = <div className={"h-full flex flex-col gap-[0.5rem] " + (scroll ? "w-[13.1875rem] md:max-xl:w-full" : "w-full xl:w-[13.1875rem]")}>
    {/* <video
            preload="metadata"
            muted
            playsInline
            class="object-cover flex-none w-full h-[15.781875rem] md:h-[20.8125rem]  "
          >
            <source src="/images/raya15SecondLoop.mp4" type="video/mp4" />
          </video> */}
          <div className="flex-none w-full h-[15.781875rem] md:h-[20.8125rem]   overflow-hidden">
          <ImageLoader path={exercise?.thumbnail} />

          </div>
    <div className="h-full flex flex-col gap-[0.25rem]">
      <div className={saans.className + " detail-bold text-dark-300"}>
        {exercise?.['coded_name']}
      </div>
      <div className="h-full !font-secondary detail text-dark-200">
        <div>
          Reps: {exercise?.customReps || exercise?.reps}
          </div>
        <div>
        Sets: {exercise?.customSets || exercise?.sets}
          </div>
      </div>
    </div>
  </div>

  return (
      <div>
      <button onClick={()=>{changeSelectedExercise(exercise); setVideoUrl(null); setImageUrls([])}} className="block text-left" >
        {content}
      </button>
      {exercise?.exerciseNotes && <div className="detail">
          <div className="font-semibold">Notes:</div><div>{exercise.exerciseNotes}</div>
        </div>}
      </div>
  )
}