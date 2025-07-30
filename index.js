const express = require('express');
const { getJson } = require('serpapi');

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the serpapi-search backend");
})

app.get("/papers", async (req, res) => {
    const apiKey = "api key here";
    const query = req.query.q;

    
    if(!query) {
        res.send("No query provided")
    } else {
        try {
            const response = await getJson({
                engine: "google_scholar",
                api_key: apiKey, 
                q: query,
                location: "Austin, Texas",
            });
            res.status(200).json(response);
        } catch(err) {
            res.status(500).json({message: err.message})
        }
    }
    
    
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
});