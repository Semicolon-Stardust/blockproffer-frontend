import React, { useState, useEffect, useRef } from 'react'
import * as faceapi from 'face-api.js';
import Webcam from "react-webcam";




function Camera() {

    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "environment"
    };

    const [initializing, setInitializing] = useState("");

    const webcamRef = useRef(null);
    
    useEffect(() => {
        const loadModels = async () => {
            const MODEL_URL = process.env.PUBLIC_URL + '/models';
            Promise.all([
                faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL)
            ]).then(startVideo);
        }
        loadModels();
    }, []);

    const startVideo = () => {
        navigator.mediaDevices.getUserMedia({ 
            video: {} 
        }, (stream) => {
            webcamRef.current.srcObject = stream;
        });

    }

    const onUserMedia = (e) => {
        setInterval(async () => {
            const detections = await faceapi.detectAllFaces(webcamRef.current.video, new faceapi.TinyFaceDetectorOptions());
            
            if (detections.length === 0) {
                setInitializing("");
            }
            else if (detections.length > 1) {
                setInitializing("Multiple Faces Detected");
            }
            else if (detections.length === 1) {
                setInitializing("Face Detected");
            }

        }, 1000);     

    };

    return (
        <div className='flex flex-col justify-center align-center pt-[6rem]'>
            <span>{(initializing !== "" && initializing !== "Multiple Faces Detected") ? "Face Detected" : "Detecting your Face..."}</span>
            <span>{(initializing === "Multiple Faces Detected") ? initializing : ""}</span>
            <div className='border-solid border-accent-content rounded flex justify-center'>
                <Webcam ref={webcamRef} audio={false} screenshotFormat="image/jpeg" videoConstraints={videoConstraints} onUserMedia={onUserMedia}/>
            </div>
            <div className='pt-[1rem] flex justify-center gap-[1rem] align-center'>
                {(initializing !== "" && initializing !== "Multiple Faces Detected") ? <button className='btn' onClick={e => {console.log("Next")}}>Next</button> : ""}
            </div>
        </div>
    )
}

export default Camera