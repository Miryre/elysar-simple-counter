const SimpleCounter = ({
  hundredthousandsDigit,
  tenthousandsDigit,
  thousandsDigit,
  hundredsDigit,
  tensDigit,
  onesDigit,
}) => {
  return (
    <>
      <div className="counter-display d-flex justify-content-center mt-5 fs-1 bg-dark text-white">
        {/* divs for the counter image */}
        <div className="counter-image px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-clock"
            viewBox="0 0 16 16"
          >
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
          </svg>
        </div>
        {/* divs for the seconds */}
        <div className="seconds hundredthousands px-3">{hundredthousandsDigit}</div>
        <div className="seconds tenthousands px-3">{tenthousandsDigit}</div>
        <div className="seconds thousands px-3">{thousandsDigit}</div>
        <div className="seconds hundreds px-3">{hundredsDigit}</div>
        <div className="seconds tens px-3">{tensDigit}</div>
        <div className="seconds ones px-3">{onesDigit}</div>
      </div>
    </>
  );
};

export default SimpleCounter;
