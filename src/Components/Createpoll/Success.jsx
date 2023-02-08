import React from 'react'
import { Link } from 'react-router-dom'

function Success(props) {
  return (
    <div class='h-screen'>
        <div class="pt-[16rem]">
            <h1 className="text-5xl text-center font-bold text-green-600">Success!</h1>
            <svg viewBox="0 0 24 24" class="text-green-600 w-[10rem] h-[10rem] mx-auto my-6"><path fill="currentColor" d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"></path></svg>
            <p className="text-3xl text-center text-gray-400">Your poll has been created.</p>

            <div className='mt-5 w-full flex justify-center'>
                <div className=' w-1/2'>
                    <div class="flex w-full">
                        <input class="input input-bordered w-full text-center" value={props.roomID}/></div>
                </div>
            </div>

            <div class='flex justify-center mt-7 gap-[1rem]'>
                <Link to="/createpolls" class='btn btn-outline btn-info'>
                    Make Another Poll
                </Link>
                <Link to="/" class='btn btn-outline btn-secondary'>
                    Back to Home
                </Link>
            </div>
        </div>


    </div>
  )
}

export default Success