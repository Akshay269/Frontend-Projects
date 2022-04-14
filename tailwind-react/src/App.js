import "./App.css";

function App() {
  return (
    <div
      className="min-h-screen w-screen flex justify-center items-center flex-col-reverse"
      style={{
        background: "linear-gradient(to bottom,#F0F4FD,#A1A3BA)",
      }}
    >
      <div className="mt-5 text-center">
        <h1 classname="font-black text-4xl">Fresh Healthy Delicious Salads</h1>
        <p>We made a fresh and healthy foods</p>
        <span>Explore</span>
      </div>
      <img
        src={process.env.PUBLIC_URL + "/assets/food.svg"}
        alt="food"
        className="w-screen"
      />
    </div>
  );
}

export default App;
