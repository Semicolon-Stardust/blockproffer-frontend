import React from 'react'

function Rating() {
  return (
    <div className='pt-[4rem]'>
        <div className='py-20 pt-[5rem] pb-[5rem] w-screen bg-gradient-to-r from-accent to-primary-focus'>
            <div className="flex items-center justify-between pl-[4rem] pr-[4rem] w-full h-full max-sm:flex-col max-sm:gap-[1rem]">
                <div>
                    <h1 className='text-4xl max-sm:text-2xl font-black text-[hsl(var(--n))]'>Rate Us</h1>
                    <p className='text-2xl text-[hsl(var(--nc))] max-sm:text-xl'>Did you like our work? Rate Us and give us feedback</p>
                </div>
                <div className='bg-base-300 p-[1rem] rounded-2xl'>
                    <div className="rating rating-lg">
                        <div className="tooltip" data-tip="Very Poor">
                            <input type="radio" name="rating-8" className="tooltip mask mask-star-2 bg-orange-400"/>
                        </div>
                        <div className="tooltip" data-tip="Poor">
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400"/>
                        </div>
                        <div className="tooltip" data-tip="Average">
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="tooltip" data-tip="Good">
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="tooltip" data-tip="Excellent">
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Rating