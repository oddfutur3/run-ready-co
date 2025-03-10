import { firebaseAdmin } from "@/firebaseAdmin";
import { cache } from "react";

export const exerciseCache = cache(async () => {
  const exercisesResult = await firebaseAdmin
        .firestore()
        .collection("exercises")
        .get();
  

  const compareCodedName = (a,b) => a["coded_name"].localeCompare(b["coded_name"])

  const exercisesData = exercisesResult.docs.map(doc => {
    return { id: doc.id, ...doc.data()}
  }).sort(compareCodedName)

  return exercisesData
})