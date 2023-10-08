const express = require('express')
const axios = require('axios');
const https = require('https');

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.json({success: true})
})

async function getUser() {
    try {
      const response = await axios.get('http://localhost:3333/api/getUser');
      return response;
    } catch (error) {
      console.error(error);
    }
}

app.get('/to', async (req, res) => { 
    const response = await getUser();

    res.json({success: true,
    data: response.data})
})



app.listen(3000, (req, res) => {console.log('rodando')})