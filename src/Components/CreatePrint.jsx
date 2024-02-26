import Switch from './Switch'
import "./createPrint.css"
// eslint-disable-next-line react/prop-types
const CreatePrint = ({setTogglePrinter}) => {
  return (
    <div>
       <div className='header'>
        <h1>Create Printer</h1>
      </div>
      <form>
          <input type='text' placeholder='Name'/>
          <div className='select-div'>
          <label>Print model</label>
          <select>
            <option>No printer</option>
            <option>1 printer</option>
            <option>2 printer</option>
          </select></div>
          <hr/>
          <div className='check-div'>
          <div className='checkOption'>
            <p>Print receipt and Bill</p> <Switch/>
         </div>
          <div className='checkOption'>
            <p>Print Orders</p> <Switch/>
         </div>
         <hr/>
         <div className='checkOption'>
            <p>Automatically print receipt</p> <Switch/>
         </div>
         <div className='checkOption'>
            <p>print Single item per order ticket</p> <Switch/>
         </div>
         </div>
         <button className='print-btn'><span className="material-symbols-outlined">print</span><p>PRINT TEST</p></button>
         <button className='save-btn' onClick={() => setTogglePrinter(prev => !prev)}>SAVE</button>
      </form>
    </div>
  )
}

export default CreatePrint
