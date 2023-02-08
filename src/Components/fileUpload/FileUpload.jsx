import React from 'react'

function FileUpload(props) {

  return (
    <>
        <div className='pt-4 file-card'>
            <p className="file-err">
                {props.fileError}
            </p>
            <div className='file-inputs'>
              <label className="label">
                <span class="pb-4 label-text text-xl" for="file_input">Upload a CSV file to get the name of the eligible voters</span>
              </label>
              <div className='indicator w-full'>
                  <span className="indicator-item badge">Required</span>
                  <input className="file-input file-input-bordered file-input-accent w-full" type='file' id='file' name='csv-file' accept='.csv' onChange={props.handleFileParse} required />
              </div>
            </div>
        </div>
    </>
  )
}

export default FileUpload