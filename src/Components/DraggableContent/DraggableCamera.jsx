import React, { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";
import * as faceapi from 'face-api.js';

const DraggableCamera = (props) => {
  const [isDragging, setIsDragging] = useState(false);
  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialY] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [currentY, setCurrentY] = useState(0);

  const handleMouseDown = (event) => {
    setInitialX(event.clientX - currentX);
    setInitialY(event.clientY - currentY);
    setIsDragging(true);
  };

    // ------------------ Face Detection ------------------ //
    const videoConstraints = {
        width: 300,
        height: 200,
        facingMode: "environment",
        mirrored: false,
    };

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
                props.setInitializing(null);
            }
            else if (detections.length > 1) {
                props.setInitializing("multiple");
            }
            else if (detections.length === 1) {
                props.setInitializing("detected");
            }

        }, 1000);     

    };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) {
      return;
    }
    setCurrentX(event.clientX - initialX);
    setCurrentY(event.clientY - initialY);
  };


  

  return (
    <div
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        // className="fixed z-[1000] bottom-[20px] left-[50px] cursor-move"
        style={{
            width: "300px",
            height: "200px",
            transform: `translate(${currentX}px, ${currentY}px)`,
            cursor: "move",
            zIndex: "100000",
        }}
        >
      <div className="detector fixed top-[100px] left-[50px]">
                <Webcam ref={webcamRef} audio={false} screenshotFormat="image/jpeg" videoConstraints={videoConstraints} onUserMedia={onUserMedia}/>
        </div>
    </div>
  );
};

export default DraggableCamera;
