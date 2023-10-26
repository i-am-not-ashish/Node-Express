const http=require('http')
const server=http.createServer((req,res)=>{
 // console.log(req);
 if(req.url==='/'){
  res.end("Welcome to our home page")
 }
 else if(req.url==='/about'){
  res.end("Here is a short story")
 }
// res.write() to write something on homepage
else {
 res.end(`
 <h1>Oops</h1>
<p>We can't seem to find the page you are looking for</p>
<a href="/">back home</a>
`)}//To end the request
})
//req=>incoming objects,res=>what you are sending back
server.listen(5000)