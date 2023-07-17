import "./App.css";
function App() {
  console.log("hello")
  return (
    <>
      <div>
        <button className="btn btn-primery" style={{ margin: 10 }}>
          Clear
        </button>
      </div>
      <button className="btn btn-primery" style={{ margin: 10 }}>
        -
      </button>
      <button className="btn btn-primery">+</button>
    </>
  );
}

export default App;
