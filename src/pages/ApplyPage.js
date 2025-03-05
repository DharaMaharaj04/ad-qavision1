import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ApplyPage = () => {
  const { jobId } = useParams();

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await fetch(
          `https://2tlb4p195k.execute-api.ap-south-1.amazonaws.com/jobs/${jobId}`
        );
        if (!response.ok) {
          throw new Error(`Error fetching job details: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched job data:", data);
        // If your API returns a DynamoDB raw object, it might be wrapped in attributes like { S: "value" }
        if (Array.isArray(data)) {
          console.log("Title:", data[0].title);
          console.log("Location:", data[0].location);
          console.log("Description:", data[0].description);
        } else {
          console.log("Title:", data.title);
          console.log("Location:", data.location);
          console.log("Description:", data.description);
        }
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchJobData();
  }, [jobId]);

  return <div>Check your console for job data output.</div>;
};

export default ApplyData;
