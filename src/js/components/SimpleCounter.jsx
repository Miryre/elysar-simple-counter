const SimpleCounter = ({
  thousandsDigit,
  hundredsDigit,
  tensDigit,
  onesDigit,
}) => {
  return (
    <>
      <div className="counter-display">
        {/* divs for the counter image */}
        <div className="counter-image">{}</div>
        {/* divs for the seconds */}
        <div className="seconds thousands">{thousandsDigit}</div>
        <div className="seconds hundreds">{hundredsDigit}</div>
        <div className="seconds tens">{tensDigit}</div>
        <div className="seconds ones">{onesDigit}</div>
      </div>
    </>
  );
};

export default SimpleCounter;
