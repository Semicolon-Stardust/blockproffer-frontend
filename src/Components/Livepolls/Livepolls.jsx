import React from 'react'
import { useState } from 'react';
// import Chart from 'chart.js/auto';
// import { useSearchParams, Link } from 'react-router-dom';
import Pollquestion from '../Pollquestion/Pollquestion'
import Rating from '../Rating/Rating';




function Livepolls() {



  const [roomName, changeRoomName] = useState("");
  const [room, changeRoom] = useState(null);
  const [roomNotFound, changeRoomNotFound] = useState(false);


  function changeRoomData(e) {
    changeRoomName(e.target.value);
  }


  // if (queryParameters.get('rm') !== null && room === null){
  //   changeRoomName(queryParameters.get('rm'))
  //   reqRoom(queryParameters.get('rm'));
  // };




  // async function reqRoom(roomName){
    // const Res= fetch(`http://localhost:5555/room/join`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({roomName: roomName})
    // });

    

    // const response= await Res;
    // if (response.status === 200){
    //   const data = await response.json();
    //   changeRoom(data.room);
    //   changeRoomNotFound(false);
    // }
    // else{
    //   changeRoomNotFound(true);
    // }
  //   console.log(roomName)
  // }


async function sendRoomReq(e){

    e.preventDefault();

    if (roomName === "") return;

    const Res= fetch(`http://localhost:5555/room/join`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({roomName: roomName})
    });

    

    const response= await Res;
    if (response.status === 200){
      const data = await response.json();
      changeRoom(data.room);
      changeRoomNotFound(false);
    }
    else{
      changeRoomNotFound(true);
    }
    
  }



  

  return (
    <>
    {(room == null) ?
    
    <div class="w-full text-center">
      <div className='flex flex-col items-center justify-center'>
        <form onSubmit={sendRoomReq}>
          {(roomNotFound === true) ? 
          <div id="alert-border-2" className="flex p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800" role="alert">
            <svg className="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <div className="ml-3 text-sm font-medium">
              Error Room Not Found
            </div>
            <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"  data-dismiss-target="#alert-border-2" aria-label="Close">
              <span className="sr-only">Dismiss</span>
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div> : ""}
          <div className="w-full h-screen flex items-center justify-center flex-col gap-[5rem]">
            <div className='flex flex-col gap-[5rem] bg-base-300 p-[4rem] rounded-xl w-full drop-shadow-xl drop-shadow-[0_10px_10px_hsl(var(--inc))]'>
            <h1 className="text-5xl max-sm:text-3xl font-bold">Enter Room ID</h1>
            
            <div className="w-full flex items-center justify-center flex-row gap-[1rem]">
              <div className="flex flex-col">
                  <div className='indicator w-full'>
                      <input type="text" name="poll-title" id="poll-title" onChange={changeRoomData} value={roomName} required placeholder="Room ID" className="input input-bordered input-error w-full" />
                  </div>
              </div>

              <button className="btn btn-circle btn-outline">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>

            </div>

          </div>
            </div>
        </form>
      </div> 
    </div>
    
    : <Pollquestion room={room}/>}

    <Rating />

    </>
  )
}

export default Livepolls