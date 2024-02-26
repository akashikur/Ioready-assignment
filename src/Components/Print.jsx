import "./Print.css"
// eslint-disable-next-line react/prop-types
const Print = ({setTogglePrinter}) => {
  return (
    <>
      <div className='header'>
      <h1>Printers</h1>
      </div>
      <div className='print-body'>
      <div className='printer'>
      <span className="material-symbols-outlined">print</span>
      </div>
      <p>You have no printers Yet</p>
      <p>click to add the printer</p>
      <button onClick={() => setTogglePrinter(prev => !prev)}>Add printer</button>
      </div>
    </>
  )
}

export default Print
