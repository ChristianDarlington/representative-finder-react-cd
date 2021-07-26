import { useState } from "react"

function RepresentativeSearch(){
  const [address, setAddress] = useState()
  
  const searchRepresentative = () => {
    console.log('searching...')
  }

  return (
  <div className="search-container">
    <input
    name="representativeSearch"
    type="text"
    className="search-bar"
    value={address}
    onChange={event => setAddress(event.target.value)}
    />
    <div>
    <button 
    className="search-btn"
      onClick={() => searchRepresentative() }
      >
      Submit
    </button>
    </div>
  </div>
  )
}

export default RepresentativeSearch