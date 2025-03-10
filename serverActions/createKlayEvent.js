'use server';

import { firebaseAdmin } from "@/firebaseAdmin";
import { cookies } from "next/headers";

export const createKlayEvent = async (payload) => {
    console.log("API request received");
  
    const url = "https://a.klaviyo.com/api/events";
  
    try {
      console.log("Payload:", payload); // Log incoming payload
      
      const options = {
        method: "POST",
        headers: {
          accept: "application/vnd.api+json",
          revision: "2024-10-15",
          "content-type": "application/vnd.api+json",
          Authorization: `Klaviyo-API-Key ${process.env.KLAYVIO_PRIVATE_API_KEY}`,
        },
        body: payload,
      };
  
      console.log("Sending request to Klaviyo:", options);  
      const response = await fetch(url, options);
      const resStatus = response.status;
      
      // Log Klaviyo response
      console.log("Klaviyo Raw Response:", resStatus);
      
      // Parse JSON only if the response status is not 202
      if (resStatus !== 202) {
        const errorResponse = await response.json(); // Parse JSON
        console.error("Klaviyo Error Response:", errorResponse);
        throw new Error(`${resStatus} - ${JSON.stringify(errorResponse)}`);
      }
      
      // Return a plain JSON object instead of a Response object
      return { status: resStatus, message: "Klaviyo Success" };
      
    } catch (error) {
      console.error("Error sending Klaviyo event:", error);
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  }