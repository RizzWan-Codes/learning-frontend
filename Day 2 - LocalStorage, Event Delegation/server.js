const http = require("http");

const data = [
    {id: 1, name: "Rizwan"},
    {id: 2, name: "Tareque"},
    {id: 3, name: "Shareque"},
    {id: 4, name: "Zayyan"},
    {id: 5, name: "Asma MOM"}
];

const server = http.createServer((req, res) => {
   
    res.writeHead (200, {
        "Content-Type" : "application/json",
        "Access-Control-Allow-Origin" : "*" 
    });

    res.end(JSON.stringify(data));

});

server.listen(3000, () => {
    console.log("Server Running On PORT 3000")
});