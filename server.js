const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
const PORT = 3000;
app.get("/", (req, res) => {
res.render("index", {
error: null
});
});
app.post("/search", (req, res) => {
const name = req.body.name;
const password = req.body.password;
const search = req.body.search;
const correctPassword = "Raghu@2026";
if(password !== correctPassword){
return res.render("index", {
error: "Incorrect Password!"
});
}
res.render("result", {
username: name,
searchQuery: search
});
});
app.listen(PORT, () => {
console.log(`Server Running on Port ${PORT}`);
});