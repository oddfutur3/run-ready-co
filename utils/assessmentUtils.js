import { assessValues as liteValues } from "@/app/(inAssessment)/[assessmentID]/lite-assessment/AssessmentQuestionData";
import { assessQs as liteQs } from "@/app/(inAssessment)/[assessmentID]/lite-assessment/AssessmentQuestionData";
import { assessVersion as assessMVersion, getAssessQs as getAssessMQs, getAssessValues as getAssessMValues } from "@/app/(inAssessment)/[assessmentID]/movement-assessment/AssessmentQuestionData";
import { assessQs as treadmillValues } from "@/app/(inAssessment)/[assessmentID]/treadmill-assessment/AssessmentQuestionData";


const movementQs = getAssessMQs(assessMVersion)
const movementValues = getAssessMValues(assessMVersion)

const values = {
  lite: liteValues,
  movement: movementValues,
  treadmill: treadmillValues,
}

export function readValue(qNum, part, response, type) {

  try {
    if (["lite", "movement"].includes(type)) {
      let value = values[type][qNum]?.[part]?.["1"]["i"][response?.[0]];
      while (value?.level && value?.set) {
        value =
          values[type][qNum][part][value.level][value.set][
            response?.[value.level - 1]
          ];
      }
      return value; // check array then null then object
    } else if (type == "treadmill") {
      if (values.treadmill[qNum].questions[part]?.sides.includes("both")) {

        const [absorb, bounce, stability] = values.treadmill?.[qNum]?.questions?.[part]?.choices[response?.both] || [null,null,null]
        return [[absorb,absorb],[bounce,bounce],[stability,stability]]

      } else {
        const [absorbR, bounceR, stabilityR] = values.treadmill?.[qNum].questions?.[part]?.choices[response?.right] || [null,null,null]
        const [absorbL, bounceL, stabilityL] = values.treadmill?.[qNum].questions?.[part]?.choices[response?.left] || [null,null,null]
        return [[absorbL,absorbR],[bounceL,bounceR],[stabilityL,stabilityR]]
      }

    } else {
      throw new Error("Invalid assessment type!")
    }
    
  } catch (err) {
    console.log(err)
    throw err
  }
}

export function readResponse(qNum, part, response, type) {
  try {
    if (["lite", "movement"].includes(type)) {
      let value = values[type][qNum]?.[part]?.["1"]["i"][response?.[0]];
      let lastLevel, lastSet
      while (value?.level && value?.set) {
        lastLevel = value.level
        lastSet = value.set
        value =
          values[type][qNum][part][value.level][value.set][
            response?.[value.level - 1]
          ];
      }
      const assessQs = type == "movement" ? movementQs : type == "lite" ? liteQs : {}
      const result = (lastLevel && lastSet) ? assessQs[qNum].parts[part].levels[lastLevel][lastSet].analysisResponses?.[response[lastLevel - 1]] : assessQs[qNum].parts[part].levels[1].analysisResponses?.[response[0]]
      return result; // check array then null then object

    } else {
      throw new Error("Invalid assessment type!")
    }
    
  } catch (err) {
    console.log(err)
    throw err
  }
}