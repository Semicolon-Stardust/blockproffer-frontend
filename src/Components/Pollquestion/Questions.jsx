import React, { useState, useEffect, useRef, useContext } from 'react'
import { PollContext } from '../../Helpers/Contexts'
import { useCountdown } from '../Timer/CountDown';
import Timer from '../Timer/Timer';
import Webcam from "react-webcam";
import * as faceapi from 'face-api.js';
// import DraggableCamera from '../DraggableContent/DraggableCamera';


function Questions(props) {
    const { setQuestion } = useContext(PollContext);

    // ------------------ Face Detection ------------------ //
    const videoConstraints = {
        width: 300,
        height: 200,
        facingMode: "environment",
        mirrored: false,
    };


    const [initializing, setInitializing] = useState(null);

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
                setInitializing(null);
            }
            else if (detections.length > 1) {
                setInitializing("multiple");
            }
            else if (detections.length === 1) {
                setInitializing("detected");
            }

        }, 1000);     

    };


    // ------------------ Option Selection ------------------ //
    const [optionChosen, setOptionChosen] = useState("");

    const selectOption = (e) => {
        setOptionChosen(e.target.value)  
        console.log(e.target.value)
    }


    const addVote = async () => {
        
        if (optionChosen === "") return;

        props.roomData.pollOptions.forEach((option, index) => {
            if (option.optionNum === Number(optionChosen)) {
                option.votes += 1;
                return;
            }
        })

        props.roomData.allowedUsers.forEach((user, i) => {
            console.log(user)
            if (user.Token === props.userToken) {
                console.log(user)
                user.hasVoted = true;
                return;
            }
        })


        const response = await fetch('http://localhost:5555/room/upvote', {
            method: 'PATCH',
            body: JSON.stringify({
                roomID: props.roomData.roomID,
                pollOptions: props.roomData.pollOptions,
                allowedUsers: props.roomData.allowedUsers
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        if (response.status === 201){
            const data = await response.json();
            console.log(data);
            setQuestion("endScreen")
            
        }
        else{
            console.log("Error")
        }
    }
    
    const endDate = props.roomData.endDate;
    const endTime = props.roomData.endTime;

    const [days, hours, minutes, seconds] = useCountdown(endDate + " " + endTime);

    if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
        setQuestion("finalScreen")
    }
    else{
        return (

            <>
            <div className="detector  fixed bottom-[50px] left-[50px] z-[1000]">
                <Webcam ref={webcamRef} audio={false} screenshotFormat="image/jpeg" videoConstraints={videoConstraints} onUserMedia={onUserMedia}/>
            </div>

            {/* <DraggableCamera initializing={initializing} setInitializing={setInitializing} /> */}

            <span className='text-xl'>
                {(initializing !== "detected") ? 
                <>
                    <input type="checkbox" id="my-modal" className="modal-toggle" checked/>
                    <div className="modal">
                        <div className="modal-box">
                            {(initializing === null) ? 
                            <>
                            <h3 className="font-bold text-lg">We are not able to detect your Face</h3>
                            <p className="py-4">Please keep your face within the camera frame, otherwise we can't let you vote... <br /><br /> Note: If there is too much light in the background, you may use flashlight near your face.</p>
                            </> :
                            <>
                            <h3 className="font-bold text-lg">There are More than One Person in the Frame</h3>
                            <p className="py-4">Please don't let this happen, otherwise we can't let you vote...</p>
                            </>
                            }
                        </div>
                    </div>
                </> : ""}
            </span>
            <div class=' h-screen w-full flex flex-col align-center justify-center'>
                <div class='flex justify-center align-center'>
                    <div class='flex justify-center align-center w-8/12'>
                        <div class='flex flex-col w-8/12 align-center justify-items-center'>
                            <div class="pb-[2rem]">
                                <Timer timerDays={days} timerHours={hours} timerMinutes={minutes} timerSeconds={seconds}/>
                            </div>
                            <h3 class="mb-4 text-center text-6xl font-semibold ">{props.roomData.title}</h3>
                            <p class="mb-4 text-center text-xl font-medium ">{props.roomData.description}</p>
                            <ul class="w-full flex justify-center flex-col text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 ">
                                
                                {props.roomData.pollOptions.map((option, index) => {
                                    return ( 
                                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div class="flex items-center pl-3">
                                        <input id={"list-radio" + option.optionNum} type="radio" onChange={selectOption} value={option.optionNum} name="list-radio" class="w-4 h-4 radio radio-success" />
                                        <label for={"list-radio" + option.optionNum} class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{option.option}</label>
                                    </div>
                                    </li>   
                                    )
                                })}

                            </ul>
                        </div>
                    </div>
                </div>
                <div class='flex justify-center'>
                    <div class='grid justify-items-end mt-4 mb-4 w-2/5'>
                        <button onClick={addVote} class="btn btn-outline btn-success">
                            <span class="">
                                Submit
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            </>
        )
        }
}

export default Questions