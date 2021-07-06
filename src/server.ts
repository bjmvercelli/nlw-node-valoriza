import express from "express";

const app = express();

app.get('/', (req, res) => {
    return res.json({message: "Working!"});
});

app.post('/post', (req, res) => {
    return res.json({message: "POST Route Working!"});
})

app.listen(3000, () => console.log("Server is running on port 3000"));

