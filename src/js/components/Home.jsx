import SimpleCounter from "./SimpleCounter";

// let counter = 0;

// setInterval(function () {
//   console.log(counter);
//   counter++;
// }, 1000);

function calculateSeconds(aCounter, placeValue) {
  return Math.floor(aCounter / placeValue) % 10;
}

const Home = ({ counter }) => {
  return (
    <div className="text-center">
      <SimpleCounter
        thousandsDigit={calculateSeconds(counter, 1000)}
        hundredsDigit={calculateSeconds(counter, 100)}
        tensDigit={calculateSeconds(counter, 10)}
        onesDigit={calculateSeconds(counter, 1)}
      />
      {counter}
    </div>
  );
};

export default Home;
