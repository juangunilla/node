console.log("estoy usando nodemon")


const { request, METHOD } = require('node:http')
const http = require('node:http')
const moment= require('moment')
let contadorVisita = 0
const { url } = require('node:inspector')

//console.log(http)


const server  = http.createServer((request, response) => {
   // console.log(request.url)
    //console.log(request.method)
    const{method,url} = request
    if(method==='GET'){
        if(url==='/'){
            //console.log(response)
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.write('<h2> Hola soy un servidor</h2>')
            response.end()
          
        }else if(url === '/otra'){
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.write(`<h2> soy la fecha ${moment().format('LLL')}</h2>`)
            response.end()
        }
         }else if(url === '/contador'){
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.write(`<h2> soy la fecha ${++contadorVisita}</h2>`)
            response.end()

        }
    }

)

const PORT =8080


server.listen(PORT,err=>{
    if(err) return console.log(`error: ${err}`)
    console.log(`server is running on port ${PORT}`)
})