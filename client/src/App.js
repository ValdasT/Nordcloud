import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';
import { calculateStation } from './calculate'
import './App.scss';

const App = () => {
  const [formInputs, setFormInputs] = useState({ xCoordinate: '', yCoordinate: '' })
  const [results, setResults] = useState([])
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = async (data) => {
    reset()
    let result = calculateStation([data.xCoordinate, data.yCoordinate])

    if (result.station) {
      result.text = `Best link station for point ${result.point[0]}, ${result.point[1]} 
      is ${result.station.coordinates[0]}, ${result.station.coordinates[1]} with power: ${result.station.power.toFixed(2)}`
      result.id = uuidv4()
    } else {
      result.text = `No link station within reach for point ${result.point[0]}, ${result.point[1]}`
      result.id = uuidv4()
    }
    setResults([...results, result])
  };

  const removeEntry = id => {
    setResults(results.filter(result => result.id !== id))
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group" >
          <input className="form-field" defaultValue={formInputs.xCoordinate}
            type="number" ref={register({ required: true, valueAsNumber: true, max: 999, min: -999 })} spellCheck="false"
            name="xCoordinate" placeholder='xCoordinate' id='xCoordinate' autoFocus />
          <label htmlFor="xCoordinate" className="form-label">X coordinate: </label>
          {errors.xCoordinate && errors.xCoordinate.type === "required" && <span className='danger-text'>X coordinate is required</span>}
          {errors.xCoordinate && errors.xCoordinate.type === "max" && <span className='danger-text'>Max value exceeded (999)</span>}
          {errors.xCoordinate && errors.xCoordinate.type === "min" && <span className='danger-text'>Min value exceeded (-999)</span>}
        </div>
        <div className="form-group">
          <input
            className="form-field" defaultValue={formInputs.yCoordinate}
            ref={register({ required: true, valueAsNumber: true, max: 999, min: -999 })}
            type="number" name="yCoordinate" placeholder='yCoordinate' id='yCoordinate' />
          <label htmlFor="yCoordinate" className="form-label">Y coordinate: </label>
          {errors.yCoordinate && errors.yCoordinate.type === "required" && <span className='danger-text'>Y coordinate is required</span>}
          {errors.yCoordinate && errors.yCoordinate.type === "max" && <span className='danger-text'>Max value exceeded (999)</span>}
          {errors.yCoordinate && errors.yCoordinate.type === "min" && <span className='danger-text'>Min value exceeded (-999)</span>}
        </div>
        <div>
          <button className='btn' type='submit'> Submit </button>
        </div>
      </form>
      <div className="results-container">
        {results.length ? results.map(result =>
          <div key={result.id} className='result'>
            {result.text}
            <button className='remove-btn' onClick={() => removeEntry(result.id)}>x</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
