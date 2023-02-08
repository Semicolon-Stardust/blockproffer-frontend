import React, { useRef } from 'react'
import Webcam from "react-webcam";

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "environment"
};


function Camera() {

    const webcamRef = useRef(null);
    const [url, setUrl] = React.useState(null);
   
    const capturePhoto = React.useCallback(async () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setUrl(imageSrc);
    }, [webcamRef]);
   
    const onUserMedia = (e) => {
      console.log(e);
    };

    return (
        <div className='flex flex-col justify-center align-center pt-[6rem]'>
            <div className='border-solid border-accent-content rounded flex justify-center'>
                <Webcam ref={webcamRef} audio={true} screenshotFormat="image/jpeg" videoConstraints={videoConstraints} onUserMedia={onUserMedia}/>
            </div>
            <div className='pt-[1rem] flex justify-center gap-[1rem] align-center'>
                <button className='btn' onClick={capturePhoto}>Capture</button>
                <button className='btn' onClick={() => setUrl(null)}>Refresh</button>
            </div>
        
        {url && (
            <div>
            <img src={url} alt="Screenshot" />
            </div>
        )}
        </div>
    )
}

export default Camera