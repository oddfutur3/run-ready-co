"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RefreshToken() {
  const { currentUser, newUserToken } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      newUserToken()
        .then(() => {
          router.refresh();
        })
        .catch((err) => console.log(err));
    }
  }, [currentUser]);

  return <div></div>;
}
