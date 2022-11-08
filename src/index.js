import React from "react";
import ReactDOM from "react-dom/client";
import JeuDe from "./JeuDe";
const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);
function App() {
return (
<div>
<JeuDe cache={2}/>
</div>
);
}
root.render(<App />);
