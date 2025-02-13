function changeJs() {
  let head = document.querySelector(".js-title");
  head.innerText = "Vanilla JS";
}

function Reactbtn() {
  const [name, setName] = React.useState("Hello World");
  return (
    <>
      <h1 className={"react-head"}>{name}</h1>
      <button onClick={() => setName("React")}>Click me to change react</button>
    </>
  );
}

ReactDOM.createRoot(document.querySelector("#root-react")).render(<Reactbtn />);
