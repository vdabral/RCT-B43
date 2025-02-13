function Navbar() {
  const [bgColor, setBgColor] = React.useState("white");

  const handleBgChange = (color) => {
    setBgColor(color);
  };

  return (
    <div
      style={{ backgroundColor: bgColor, height: "100vh", transition: "0.5s" }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "teal",
          padding: "10px",
        }}
      >
        <ul style={{ display: "flex", listStyle: "none", padding: 0 }}>
          <li style={{ margin: "0 15px" }}>
            <a
              href="#home"
              onClick={() => handleBgChange("red")}
              style={linkStyle}
            >
              Home
            </a>
          </li>
          <li style={{ margin: "0 15px" }}>
            <a
              href="#about"
              onClick={() => handleBgChange("blue")}
              style={linkStyle}
            >
              About
            </a>
          </li>
          <li style={{ margin: "0 15px" }}>
            <a
              href="#contact"
              onClick={() => handleBgChange("green")}
              style={linkStyle}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "white",
  fontSize: "18px",
  padding: "8px 12px",
  transition: "background 0.3s ease-in-out",
};

ReactDOM.createRoot(document.querySelector("#root")).render(<Navbar />);
