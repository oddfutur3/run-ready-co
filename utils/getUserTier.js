import { fetchUserFromServer } from "@/utils/amplifyServerUtils";

import { getUser } from "@/serverActions/dynamoDBactions";

export async function getUserTier () {
  const user = await fetchUserFromServer()
  const userDoc = await getUser(user.userId)
  return userDoc?.Item?.tier
}