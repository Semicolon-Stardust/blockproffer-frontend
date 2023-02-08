/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react'
import { PollContext } from '../../Helpers/Contexts'

function Verification(props) {

  const { question, setQuestion } = useContext(PollContext);

  // Hooks for forms
  const [tokenInput, setTokenInput] = useState("")
  const [userNotFound, setUserNotFound] = useState(false)


  // Functions for forms
  function changeTokenInput(e) {
    setTokenInput(e.target.value);
  }

  function checkToken(e) {
    e.preventDefault();
    
    let userFound = false;
    let hasVoted = false;

    props.roomData.allowedUsers.map((user, index) => {

      if(user.Token === tokenInput){
        props.setUserToken(tokenInput)
        userFound = true;
        if (user.hasVoted) {
          hasVoted = true;
        }
        
        return;
      } 
    })

    if (!userFound) {
      console.log("User not found")
    }
    else{
      props.timerCheck(hasVoted)
    }
  }



  return (
    <div className='flex h-screen justify-center items-center'>
      <div className='bg-base-300 p-[4rem] rounded-xl drop-shadow-xl drop-shadow-[0_10px_10px_hsl(var(--inc))]'>
        <div className="flex items-center flex-col gap-[2rem] justify-center">
          <form onSubmit={checkToken} className="flex items-center justify-center flex-col gap-[1rem]">
            <h1 className="text-5xl font-bold text-center">Verify your token</h1>
            
            <h1 className="text-3xl font-bold text-center">{props.roomData.title}</h1>
            
            <p className="text-2xl font-bold text-center text-accent-focus">{props.roomData.description}</p>
            
            <div className="w-full flex items-center justify-center flex-row gap-[1rem]">
              
              <div className="flex flex-col">
                  <div className='indicator w-full'>
                    <input type="text" id="floating_filled" value={tokenInput} onChange={changeTokenInput} className="input input-bordered input-error w-full" placeholder="Enter Token ID" />
                  </div>
              </div>

              <button className="btn btn-circle btn-outline">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>

            </div>
          </form>
          {/* <a onClick={() => {props.timerCheck()}}>test</a> */}

        </div>
      </div>
    </div>
  )
}

export default Verification