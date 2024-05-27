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

app.listen(3000, () => {
    console.log('server listeting to port 3000')
})