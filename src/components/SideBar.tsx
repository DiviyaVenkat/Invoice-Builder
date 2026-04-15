export default function Sidebar() {
  return (
    <div style={sidebar}>
      <h2 style={{ color: "white" }}>Invoice App</h2>
    </div>
  );
}

// styles
const sidebar = {
  width: "100%",
  background: "var(--primary)",
  color: "#fff",
  padding: "10px",
};
