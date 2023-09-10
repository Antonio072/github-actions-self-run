const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    let stime = performance.now(); 
    let stopTime = performance.now();
    let elapsed_time = stopTime - stime
    res.send(`Tiempo ${elapsed_time}`);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`))
