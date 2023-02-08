import React from 'react'
import { useContext } from 'react'
import { PollContext } from '../../Helpers/Contexts'

function StartMenu() {
    const { question, setQuestion } = useContext(PollContext)
  return (
    <div class='h-screen'>
      <div class='pt-[14rem] flex flex-col justify-center align-center'>
        <h1 class="pb-[1rem] text-center font-[700] text-[4rem]">Start the poll</h1>
        <ul class='flex text-info flex-col pl-[9rem] justify-center text-left text-[1.7rem]'>
          <li>1.  Select your choice in the poll once the poll starts</li>
          <li>2.  Press the submit button once you have chosen your option, then wait for It to process</li>
          <li>3.  Please ensure your meta mask account is connected and signed in</li>
        </ul>
      </div>
      <div class='flex justify-center align-center pt-[2rem]'>
        <button class="btn btn-ghost" onClick= {() => setQuestion("poll")}>
          <span class='text-[2rem]'>
            Start
          </span>
        </button>
      </div>
    </div>
  )
}

export default StartMenu