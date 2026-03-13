import SimpleCounter from "./SimpleCounter";

// let counter = 0;

// setInterval(function () {
//   console.log(counter);
//   counter++;
// }, 1000);

const Home = () => {
  return (
    <div className="text-center">
      <SimpleCounter
        thousandsDigit={2}
        hundredsDigit={5}
        tensDigit={7}
        onesDigit={0}
      />
    </div>
  );
};

export default Home;
