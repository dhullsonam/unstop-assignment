function SeatBooking(props) {
    return (
        <div style={{marginLeft :"10%"}}>
            <div style={{display:"grid", marginTop: "20px",gridTemplateColumns: "repeat(7, 1fr)",width:"70%"}}>
                {props.values.map(seat => {
                    return <div key={seat} style={{height:"50px" ,width:"100px" ,backgroundColor:"pink", margin:"2px"}}>{seat}</div>;
                })}
            </div>
        </div>
    );
}

export default SeatBooking;