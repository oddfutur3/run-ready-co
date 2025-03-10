"use client";

import { AssessmentContext } from "@/app/(inAssessment)/[assessmentID]/assessmentContext";
import { PrescriptionContext } from "@/app/(inAssessment)/[assessmentID]/exercise-prescription/PrescriptionProvider";
import { saans } from "@/app/fonts";
import {
  faBoot,
  faChevronDown,
  faChevronUp,
  faClock,
  faLocationPin,
  faShoePrints,
  faUser,
} from "@/graphics/faRegular";
import { writePrescription } from "@/serverActions/dynamoDBactions";
// import { ProgramContext } from "@/app/(AuthedLayout)/runready/exercise-library/ExerciseClientProvider"
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { ExercisesCardLite } from "./ExercisesCard";

export function ProgramCard({ program }) {
  // console.log(program);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const formattedDate = date.toLocaleDateString("en-US", {
      dateStyle: "short",
    });
    return formattedDate;
    // console.log(formattedDate); // prints "3/01/24"
  };

  return (
    <div className="flex flex-col gap-[2rem]">
      <div
        className="p-[2rem] border border-black "
      >
        <div className="space-y-[0.5rem]">
          <div className="flex items-center justify-between">
            <div className="space-y-[1.5rem] w-[20rem]">
              <div className="flex items-center gap-[1rem]">
                {/* <div className="self-start flex items-center justify-center w-[2rem] h-[2rem] bg-border-secondary rounded-full">
                  {faPlay("h-[0.75rem]")}
                </div> */}
                <div className={"font-secondary font-medium text-[20px] leading-[1.2] tracking-[-0.4px] text-[#000000]"}>{program.programName}</div>
              </div>
              <div className="space-y-[0.25rem]">
                {/* <div className="body-text text-text-secondary">
                  Slowpokes Vancouver
                </div> */}
                <div className="body-text text-text-tertiary">
                  {program.exercises?.length || 0} Exercises
                </div>
                <div className="body-text text-text-tertiary">
                  {program.description}
                </div>
                {/* <div className="body-text text-text-tertiary">
                  {formatDate(program["latestUnlock"])}
                </div> */}
              </div>
            </div>
            <div className="flex gap-[0.5775rem]">
              {Array.isArray(program.exercises) && program.exercises.slice(0,4).map((exercise,i) =>
                      <div key={i} className="w-[79px] h-[124px] border-black relative  overflow-hidden">
                <Image src={exercise.thumbnail || ''} fill={true} sizes="79px" className="object-cover" alt=' ' />
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export function ProgramCardEditable({ program, index }) {
  // console.log(program);

  const {assessment} = useContext(AssessmentContext)
  const { prescription, updatePrescription, setScreen, setSelectedProgram } = useContext(PrescriptionContext)

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const formattedDate = date.toLocaleDateString("en-US", {
      dateStyle: "short",
    });
    return formattedDate;
    // console.log(formattedDate); // prints "3/01/24"
  };

  return (
    <div className="flex flex-col gap-[2rem]">
      <div
        className="p-[2rem] border border-black "
      >
        <div className="space-y-[0.5rem]">
          <div className="flex items-center justify-between">
            <div className="space-y-[1rem] w-[20rem]">
              <div className="space-y-[0.25rem]">
              <div className="flex items-center gap-[1rem]">
                {/* <div className="self-start flex items-center justify-center w-[2rem] h-[2rem] bg-border-secondary rounded-full">
                  {faPlay("h-[0.75rem]")}
                </div> */}
                <div className={"font-secondary font-medium text-[20px] leading-[1.2] tracking-[-0.4px] text-[#000000]"}>{program.programName}</div>
              </div>
                <div className="body-text text-text-tertiary">
                  {program.description}
                </div>
                </div>
              <div className="space-y-[0.25rem]">
                {/* <div className="body-text text-text-secondary">
                  Slowpokes Vancouver
                </div> */}
                <div className="body-text text-text-tertiary">
                  {program.exercises?.length || 0} Exercises
                </div>
                {/* <div className="body-text text-text-tertiary">
                  {formatDate(program["latestUnlock"])}
                </div> */}
              </div>
              <div className="flex gap-[1rem] items-center">
                <button className="" onClick={()=>{setSelectedProgram(index);setScreen("2")}}>Edit</button>
                <button onClick={async () => {
                  prescription.splice(index, 1)
                  await writePrescription(
                    assessment.AssessmentID,
                    prescription
                  );
                  updatePrescription([...prescription])
                }}>Remove</button>
              </div>
            </div>
            <div className="flex gap-[0.5775rem]">
              {Array.isArray(program.exercises) && program.exercises.slice(0,4).map((exercise,i) =>
                      <div key={i} className="w-[79px] h-[124px] border-black relative rounded-[0.5rem] overflow-hidden">
                <Image src={exercise.thumbnail || ''} fill={true} sizes="79px" className="object-cover" alt=' ' />
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export function ProgramCardAccordion({ program }) {
  // console.log(program);

  const [accordionOpen, updateAccordionOpen] = useState(false)

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const formattedDate = date.toLocaleDateString("en-US", {
      dateStyle: "short",
    });
    return formattedDate;
    // console.log(formattedDate); // prints "3/01/24"
  };

  // console.log(program.exercises)

  const sortedExercises = {}

  for (const exercise of program.exercises) {
    if (!sortedExercises[exercise.objective]) {
      sortedExercises[exercise.objective] = []
    }
    sortedExercises[exercise.objective].push(exercise)
  }

  // console.log(sortedExercises)

  return (
    <div className="flex flex-col gap-[2rem]">
      <div
        onClick={()=>updateAccordionOpen(!accordionOpen)}
        className="p-[2rem] pb-0 border border-black  text-left cursor-pointer"
      >
        <div className="flex flex-col gap-y-[0.5rem]">
          <div className="flex items-center justify-between">
            <div className="space-y-[1.5rem] w-[20rem]">
              <div className="flex items-center gap-[1rem]">
                {/* <div className="self-start flex items-center justify-center w-[2rem] h-[2rem] bg-border-secondary rounded-full">
                  {faPlay("h-[0.75rem]")}
                </div> */}
                <div className={"font-secondary font-medium text-[20px] leading-[1.2] tracking-[-0.4px] text-[#000000]"}>{program.programName}</div>
              </div>
              <div className="space-y-[0.25rem]">
                {/* <div className="body-text text-text-secondary">
                  Slowpokes Vancouver
                </div> */}
                <div className="body-text text-text-tertiary">
                  {program.exercises?.length || 0} Exercises
                </div>
                <div className="body-text text-text-tertiary">
                  {program.description}
                </div>
                {/* <div className="body-text text-text-tertiary">
                  {formatDate(program["latestUnlock"])}
                </div> */}
              </div>
            </div>
            <div className={"flex gap-[0.5775rem] " + (accordionOpen ? "invisible" : "")}>
              {Array.isArray(program.exercises) && program.exercises.slice(0,4).map((exercise,i) =>
                      <div key={i} className="w-[79px] h-[124px] border-black relative  overflow-hidden">
                <Image src={exercise.thumbnail || ''} fill={true} sizes="79px" className="object-cover" alt=' ' />
              </div>
              )}
            </div>
          </div>


          {accordionOpen && 
          <div onClick={(e)=>e.stopPropagation()} className="space-y-[1rem] cursor-auto">
            {Array.isArray(sortedExercises["Flexibility "]) &&
            <div><div className="">Flexibility:</div>
            <div className="flex flex-wrap gap-[2rem]">
            {sortedExercises["Flexibility "].map((sortedExercise,i) =>
            <ExercisesCardLite exercise={sortedExercise} key={i} />)}
            </div>

            </div>
            }
            
            {Array.isArray(sortedExercises["Strength"]) &&
            <div><div className="">Strength:</div>
            <div className="flex flex-wrap gap-[2rem]">
            {sortedExercises["Strength"].map((sortedExercise,i) =>
            
              <ExercisesCardLite exercise={sortedExercise} key={i} />
  )}
          </div>
          </div>
          }

            {Array.isArray(sortedExercises["Adaptability"]) &&
            <div><div className="">Adaptability:</div>
            <div className="flex flex-wrap gap-[2rem]">
            {sortedExercises["Adaptability"].map((sortedExercise,i) =>
            
              <ExercisesCardLite exercise={sortedExercise} key={i} />
)}
          </div>
            </div>
            }

            
          </div>
          }


<div className="self-center h-[2rem] flex items-center">
              {accordionOpen ? faChevronUp("h-[1rem]") : faChevronDown("h-[1rem]")}
              {/* {faChevronUp("h-[1rem]")} */}
          </div>
        </div>
      </div>
    </div>
  );
}