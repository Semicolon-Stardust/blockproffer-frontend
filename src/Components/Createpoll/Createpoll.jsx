import React, { useState } from 'react';
import Papa from 'papaparse'
import FileUpload from '../fileUpload/FileUpload'
import OptionGenerator from '../optionGenerator/OptionGenerator';
import Success from './Success';
import { useKey } from '../../useKeyHook.js';
// import { createPoll } from '../../Blockchain.services'


function Createpoll() {


  // ------------------ Hooks ------------------ //

  // Hook for room data
  const [room, setRoom] = useState(null);
  const [roomErr, setRoomErr] = useState(null);

  // Hooks for handling form data
  const [pollTitle, setPollTitle] = useState('');
  const [pollDesc, setPollDesc] = useState('');
  const [options, setOptions] = useState([]);
  const [sendEmail, setSendEmail] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [endTime, setEndTime] = useState(null);

  // Hooks for handling file upload
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [fileData, setFileData] = useState([]);



  // ----------- Functions to handle form data states ----------- //

  const handleTitle = e => setPollTitle(e.target.value);
  const handleDesc = e => setPollDesc(e.target.value);
  const handleStartDate = e => setStartDate(e.target.value);
  const handleStartTime = e => setStartTime(e.target.value);
  const handleEndDate = e => setEndDate(e.target.value);
  const handleEndTime = e => setEndTime(e.target.value);
  const handleSendEmail = e => setSendEmail(sendEmail ? false : true);
  const handleVisibility = e => setVisibility(visibility ? false : true);



  // ----------- Functions for file handling ----------- //


  const uploadHandler = (e) => {
    setFileError("");
    
    // Checking if user has selected wrong file
    if (e.target.files.length) {
        const inputFile = e.target.files[0];

        const allowedExtensions = ["csv"];

        const fileExtension = inputFile?.type.split("/")[1];
        if (!allowedExtensions.includes(fileExtension)) {
            setFileError("Please input a csv file !");
            return -1;
        }

        return inputFile
    }
  }

  function handleEnter()
  {
    console.log("Enter pressed");
  }

  useKey("Enter", handleEnter);

  const handleFileParse = (e) => {
         
    // If user clicks the parse button without
    // a file we show a error
    let inpFile = uploadHandler(e);
    
    if (!inpFile) return setFileError("Enter a valid file");

    if (inpFile === -1) return setFileError("Please input a csv file !");

    setFile(inpFile);

    // Initialize a reader which allows user
    // to read any file or blob.
    const reader = new FileReader();
     
    // Event listener on reader when the file
    // loads, we parse it and set the data.
    reader.onload = ({ target }) => {
        const csv =  Papa.parse(target.result, { header: true });
        const parsedData = csv?.data;
        setFileData(parsedData);
    };
    reader.readAsText(inpFile);
  }


  const onFormSubmit = async (e) => {
    e.preventDefault();
    setRoomErr(null);

    if (options.length < 2) {
      setRoomErr("Please add atleast 2 options")
      alert("Please add atleast 2 options");
      return;
    }

    const formData = {
      form: {
      title : pollTitle,
      description : pollDesc,
      pollOptions : options,
      resultVisibility : visibility,
      startDate,
      startTime,
      endDate,
      endTime,
      allowedUsers : fileData
    },
    sendEmail
  }

    const response = await fetch('http://localhost:5555/room/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    const data = await response.json();
    console.log(data);

    (response.status === 201) ? setRoom(data.room) : setRoomErr("Something Went Wrong !");

  }


  return (
    <>
    {(room !== null) ? <Success roomID={room.roomID}/> : 
    <section>

      <div class='pt-[9rem] text-center'>
        <h1 class='text-6xl font-bold'>Create Poll</h1>
      </div>
      <div class='pt-[2rem] text-[#f0592f] text-xl text-center '>
        <h1 class='font-mono'>{(roomErr !== null) ? roomErr : ""}</h1>
      </div>
      <div class=" flex flex-col items-center justify-center">
    <section class="mt-16 w-8/12">
      <form onSubmit={onFormSubmit} class="mt-6 mb-3">

        <h2 class="text-3xl font-bold">Poll Details</h2>
        
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div class="relative">
          <label className="label">
            <span className="label-text text-xl">Poll Title</span>
            <span className="label-text-alt">Title of the Voting Poll You Want</span>
          </label>
          <div className='indicator w-full'>
              <span className="indicator-item badge">Required</span>
              <input type="text" name="poll-title" id="poll-title" onChange={handleTitle} value={pollTitle} required placeholder="Title" className="input input-bordered input-error w-full" />
          </div>
        </div>
        <div class='relative'>
        <label className="label">
          <span className="label-text text-xl">Poll Description</span>
          <span className="label-text-alt">Describe the Poll in a few words</span>
        </label>
        <div className='indicator w-full'>
              <span className="indicator-item badge">Required</span>
              <textarea name="poll-desc" className="textarea textarea-info w-full resize-none" cols="30" rows="10" placeholder='Description' onChange={handleDesc} value={pollDesc} required></textarea>
        </div>
        </div>
        
        <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>

        <h2 class="text-3xl mt-[2rem] font-bold">Main Options</h2>

        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        
        <OptionGenerator options={options} setOptions={setOptions} />

        <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>

        <h2 class="text-3xl mt-[2rem] font-bold">Uploads</h2>
        
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        
        <FileUpload file={file} setFile={setFile} fileError={fileError} setFileError={setFileError} handleFileParse={handleFileParse} />
        
        <div className='mt-4'>
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text text-xl">Send Tokens to Users through Emails (from csv file)</span>
              <input type="checkbox" onChange={handleSendEmail} value={sendEmail} className="toggle toggle-success" />
            </label>
          </div>

          <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>

          <h2 class="text-3xl mt-[2rem] font-bold">Poll Settings</h2>

          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text text-xl">Allow Result Visibility to Voters</span>
              <input type="checkbox" onChange={handleVisibility} value={visibility} className="toggle toggle-primary" />
            </label>
          </div>
        </div>

        <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>

        <h2 class="text-3xl mt-[2rem] font-bold">Poll Duration</h2>

        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        <div class='flex justify-center gap-[1rem] items-center flex-wrap flex-row'>
          <div class='mt-2 flex flex-col w-full'>
          <label className="label">
              <span className="label-text text-xl">Start Date</span>
              <span className="label-text-alt">Required</span>
            </label>

            
            <input type="date" placeholder="Start Date" className="input input-bordered text-center input-warning w-full " name="startDate" id="startDate" onChange={handleStartDate} value={startDate} />
            <label className="label">
              <span className="label-text text-xl">Start Time</span>
              <span className="label-text-alt">Required</span>
            </label>
            <input type="time" class="input input-bordered input-accent text-center w-full " name='startTime' id='startTime' onChange={handleStartTime} value={startTime}/>
          </div>
          
          <div class="inline-flex items-center justify-center w-full">
              <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <span class="absolute px-3 font-medium bg-primary-neutral -translate-x-1/2 left-1/2">AND</span>
          </div>

          <div class='flex flex-col w-full'>
            <label className="label">
              <span className="label-text text-xl">End Date</span>
              <span className="label-text-alt">Required</span>
            </label>
            <input type="date" placeholder="End Date" className="input input-bordered text-center input-warning w-full " name="endDate" id="endDate" onChange={handleEndDate} value={endDate} />
            <label className="label">
              <span className="label-text text-xl">End Time</span>
              <span className="label-text-alt">Required</span>
            </label>
            <input type="time" class="input input-bordered input-accent text-center w-full " name='endTime' id='endTime' onChange={handleEndTime} value={endTime}/>
          </div>
        </div>
        <div class="grid justify-items-end mt-4 mb-4">
          <label htmlFor="my-modal-4" class="btn btn-success">Submit</label>

          {/* Confirmation Modal */}

        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label className="modal-box relative flex items-center justify-center gap-[1rem]" htmlFor="">
            <div className='flex flex-col justifiy-center items-center'>
              <h3 className="font-bold text-lg">Are You Sure you want to Continue?</h3>
              <p>(Click Anywhere to Cancel)</p>
            </div>
          <button htmlFor="my-modal-4" className="btn btn-success">Submit</button>
          </label>
        </label>

        </div>
      </form>
    </section>
    </div>
    </section>
    }
    </>
  )
}

export default Createpoll