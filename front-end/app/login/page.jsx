'use client';
import React, { useRef, useEffect, useState } from "react";
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

export default function Camera() {
  const videoRef = useRef();
  const router = useRouter();
  const [recognitionResult, setRecognitionResult] = useState(null);

  async function sendBlobToAPI(frameData) {
    try {
      const response = await fetch("http://10.169.183.1:8000/api/face-recognition", {
        method: "POST",
        body: frameData,
      });

      if (response.ok) {
        const result = await response.json();
        setRecognitionResult(result);

        if (result?.match) {
          // Set a login flag or token in localStorage
          localStorage.setItem("isLoggedIn", JSON.stringify(result));

          // Show the result for 2 seconds (adjust the duration as needed)
          setTimeout(() => {
            // Redirect to a new route after the timeout
            router.push("/dashboard");
          }, 2000); // 2000 milliseconds (2 seconds)
        } else {
          // Clear the login flag or token
          localStorage.removeItem("isLoggedIn");
        }
      }
    } catch (error) {
      console.error("Error sending frame to API:", error);
    }
  }

  async function captureAndSendFrame() {
    try {
      // capture frame from video to send to api to process
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(
        videoRef.current,
        0,
        0,
        videoRef.current.videoWidth,
        videoRef.current.videoHeight
      );

      canvas.toBlob(async (blob) => {
        // Create a FormData object and append the Blob data to it
        const formData = new FormData();
        formData.append("frameData", blob, "frame.jpg");

        // send frame to API
        await sendBlobToAPI(formData);
      }, "image/jpeg", 0.8);
    } catch (error) {
      console.error("Error capturing and sending frame:", error);
    }
  }

  useEffect(() => {
    async function startStream() {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setInterval(captureAndSendFrame, 1000);
    }

    startStream();
  }, []);

  return (
    <main className="min-h-[90svh] flex justify-center items-center flex-col bg-white">
      <h1 className="text-black text-3xl font-medium pb-8">
        Please look at the camera
      </h1>
      <p className="text-black text-xl font-medium pb-8">
        We are verifying your identity
      </p>
      <div className="w-[400px] h-[300px] relative">
        <video ref={videoRef} autoPlay playsInline width="100%" height="100%" />
        {recognitionResult?.match && (
          <div className="w-[400px] h-[300px] absolute top-0 flex justify-center items-center">
            <AiOutlineCheckCircle className="text-9xl text-green-500" />
          </div>
        )}
      </div>
    </main>
  );
}