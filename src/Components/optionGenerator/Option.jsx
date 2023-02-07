import React from 'react'

const Option = (props) => {
  return (
    <div class=''>
      <div class="mb-7">
          <span class="py-2.5 px-5 mr-2 mb-2 text-xl font-medium btn btn-outline btn-warning" >
            <span className='option-name'>
              {props.data.option}
            </span>
            {/* <button class='ml-2' type="button" onClick={() => {props.deleteOption(props.i)}}>
                <i class="fa-solid fa-circle-xmark"></i>
            </button> */}
            <button className="btn btn-circle btn-outline" onClick={() => {props.deleteOption(props.i)}} class='ml-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </span>
      </div>
    </div>
  )
}

export default Option