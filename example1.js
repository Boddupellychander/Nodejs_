const express = require('express');
const app = express();

app.use(express.json());

app.get('/', function(req, res) {
    res.send('<h1>Hello Welcome</h1>')
});
const products = [{
        id: 1,
        name: "iphone"
    },
    { id: 2, name: "Mi" },
    { id: 3, name: "Realme" },
    { id: 4, name: "Nokia" },
    { id: 5, name: "Moto" }
]
app.get('/products', (req, res) => {
    res.json(products)
})
app.get('/products/:id', (req, res) => {
    const newData = products.filter(item => item.id.toString() === req.params.id);
    return res.send(newData);
})
app.post('/addproducts', (req, res) => {
    const { id, name } = req.body;
    console.log(id, name);
    return res.send('Data Stored !!')
})
app.listen(5900, () => console.log('Server is Running in...'));