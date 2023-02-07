import React from 'react'
import { useState } from 'react'
import Option from './Option'

const OptionGenerator = (props) => {
    
    const [optionInput, setOptionInput] = useState('');
    const [optionErr, setOptionErr] = useState('');

    const optionHandler = (e) => {
        setOptionInput(e.target.value)
    }

    const addOption = () => {
        setOptionErr('');

        if (optionInput === "") return;

        if (props.options.length >= 10) return setOptionErr("You can't have more than 10 options");

        let similarOptionFound = false;
        props.options.forEach((e) => {
            if (e.option === optionInput) {
                setOptionErr("You can't have duplicate options");
                similarOptionFound = true;
                return;
            }
        })

        if (similarOptionFound) return;

        props.setOptions([...props.options, {optionNum: props.options.length ,option: optionInput, votes : 0}]);
        setOptionInput('');
    }

    const deleteOption = (index) => {
        props.setOptions(props.options.filter((e, i) => {
            return i !== index;
        }))
    }

  return (
    <div class='mt-6'>

        <div id="options" class='flex items-center justify-center flex-wrap'>
            {props.options.map((e, index) => {
                return <Option key={index} i={index} data={e} deleteOption={deleteOption}/>
            })}
        </div>
        <div className="option-error">
            {(optionErr !== "") ? <p className="text-red-500 text-sm">{optionErr}</p> : null}
        </div>
        <div class="relative">
            <label className="label">
                <span className="label-text text-xl">Options</span>
                {/* <span className="label-text-alt">Alt label</span> */}
            </label>
            <div className='indicator w-full'>
                <span className="indicator-item badge">Required</span>
            </div>
            <input type="text" id="optionInput" onChange={optionHandler} value={optionInput} class="input input-bordered input-success w-full" placeholder="Add Options" />
        </div>
        <button className="mt-4 btn" type='button' onClick={addOption}>Add Option</button>
    </div>
  )
}

export default OptionGenerator