
import { useState } from 'react';
import './App.css';
import SeatBooking from './Components/seatBook';

function App() {
  const [noOfSeat, setNoOfSeat] = useState(0);
  const checkSeatAvailability = () => {
    if(noOfSeat > 7){
      return alert("can not reverse more than 7 seats at a single time")
    }
  }


const createSeats = (rows, startIndex) => {
    let i = 0;
    let j = startIndex;
    let k = 'A';
    let x = 1;
    const section = [];
    while(i < 7 && j <= rows) {
        if(k > 'G') {
            k = 'A';
            j++;
        }
        if(j < rows + 1) {
            section.push(x);
            x++;
            k = String.fromCharCode(k.charCodeAt(0) + 1);
        }
    }
    return section;

}

  const premiumSeats = createSeats(11, '1');
  const lastRow = createSeats(1,'78')
  return (
    
    <div className="App">
      <input type={'number'} placeholder={"number of seats to book"} onChange ={(e)=>setNoOfSeat(e.target.value)}></input>
      <button onClick={() => checkSeatAvailability()}>confirm</button>
      <SeatBooking values={premiumSeats}/>
      <SeatBooking values={lastRow}/>
    </div>
  );
}

export default App;
