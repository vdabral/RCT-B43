function List() {
  return (
    <>
      <div>
        <li>React</li>
        <li>Javascript</li>
        <li>CSS</li>
      </div>
    </>
  );
}
ReactDOM.createRoot(document.querySelector("#root")).render(<List />);
