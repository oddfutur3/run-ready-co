import { db } from "@/firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

export default async function fetchRunClubs({currentUser}) {
  if (currentUser) {
    const userRef = doc(db, "users", currentUser.uid);
    try {
      const userDoc = await getDoc(userRef);
      if (userDoc.exists()) {
        console.log("User data:", userDoc.data());
        const runClubsCollectionRef = collection(userRef, "runClubs");
        const runClubsSnapshot = await getDocs(runClubsCollectionRef);
        const clubsDataPromises = runClubsSnapshot.docs.map(async (clubDoc) => {
          const clubRef = doc(db, "runClubs", clubDoc.id);
          const clubData = await getDoc(clubRef);
          if (clubData.exists()) {
            const eventsCollectionRef = collection(clubRef, "events");
            const eventsSnapshot = await getDocs(eventsCollectionRef);
            const events = eventsSnapshot.docs.map(eventDoc => ({
              id: eventDoc.id,
              ...eventDoc.data()
            }));
            return {
              id: clubData.id,
              ...clubData.data(),
              events: events  // Include events data inside each club object
            };
          }
          return null;  // Return null if club data does not exist, and filter out later
        });
        const runClubsList = (await Promise.all(clubsDataPromises)).filter(club => club !== null);
        console.log('i ran');
        return runClubsList;
      } else {
        console.log("No such user!");
      }
    } catch (error) {
      console.error("Error fetching user's run clubs:", error);
    }
  }
  return null; // Return null if currentUser is not defined or no clubs are found
}
