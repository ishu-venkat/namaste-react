
const child1 = React.createElement("li", { key:1, id: "child1", className: "list-item" }, "This is child 1");
const child2 = React.createElement("li", { key:2,id: "child2", className: "list-item" }, "This is child 2");
const parent = React.createElement("ul", { id: "parent", className : "list" }, [child1,child2]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("content"));
console.log(root);
root.render(parent);
