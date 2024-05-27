import express from 'express'

const app = express()

app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))

app.use(express.json())

app.get('/users', async (req, res) => {
    const { limit } = req.query

    setTimeout(async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?_limit=${+limit}`)
        const users = await response.json()

        res.send(`
        <h1 class="text-2xl font-bold my-4"> Users </h1>
        <ul>
        ${users.map(user => `<li>${user.name}</li>`).join('') }
        </ul>`)
        
    }, 2000);
})

app.post('/convert', (req, res) => {
    const { fah } = req.body
    const celsius = (fah - 32) * (5 / 9)

    setTimeout(() => {
        res.send(`
            <p>${celsius.toFixed(2)}<sup>o</sup> celcius</p>
        `)
    }, 2000);
})


const initialWeather = 20;
app.get('/weather', (req, res) => {
    const weather = initialWeather + Math.random() * 2 - 1;

    res.send(`
        <p>${weather.toFixed(2)}<sup>o</sup> celcius</p>
    `)

})

app.listen(3000, () => {
    console.log('server listeting to port 3000')
})