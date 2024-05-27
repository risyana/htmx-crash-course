import express from 'express'

const app = express()

app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))

app.use(express.json())

app.get('/users', (req, res) => {
    const users = [
        {id: 1, name: 'Hei'},
        {id: 2, name: 'Don'},
        {id: 3, name: 'Dave'},
        {id: 4, name: 'Darren'},
        {id: 5, name: 'Dody'},
    ]

    res.send(`
    <h1 class="text-2xl font-bold my-4"> Users </h1>
    <ul>
    ${users.map(user => `<li>${user.name}</li>`).join('') }
    </ul>`)
})

app.listen(3000, () => {
    console.log('server listeting to port 3000')
})