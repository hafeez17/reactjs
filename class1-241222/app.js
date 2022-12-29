// const heading = document.createElement("h1");
// heading.innerHTML="Namaste Javascript";
// const root = document.getElementById("root");
// root.appendChild(heading);

// const heading = React.createElement("h1", {}, "My heading 1");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const heading1 = React.createElement("h1", {
    style: { color: "red"}
}, "Heading1");

const heading2 = React.createElement("h2", {
    style: { color: "green"}
}, "Heading1");


const container = React.createElement("div", {
    id:"container"
}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);