const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./src/db')
const { graphqlHTTP } = require('express-graphql');
const schema = require('./src/graphql/schema');
const path = require('path');
const { authenticate } = require('./src/middleware/auth')
const cookieParser = require('cookie-parser')
const {userData} = require('./src/middleware/userData')

dotenv.config()

const app = express();
//Connecting Database
connectDB()

//Middleware (authentication)
app.use(cookieParser())
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true 
}))
app.use(express.urlencoded({ extended: true }))
app.use(authenticate)
app.use(userData)



// Setting View Engine
app.set('view engine','ejs'),
app.set('views', path.join(__dirname, '/src/templates/views'))


// Initilize Routes
require('./src/routes')(app)

app.listen(process.env.PORT, ()=>{
    console.log(`Server now running at port: ${process.env.PORT}`)
})