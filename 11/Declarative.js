let head = React.createElement(
  "p",
  { id: "declarative" },
  "Hello World! : Declarative"
);
let root = ReactDOM.createRoot(
  document.querySelector("#root-declarative")
).render(head);
