const { request } = require("express");

const express = require (express);
const app = express;


app.get('/', (res, req)=>{
res.send(`
<div>
<form method="POST">
 <input name="email" placeholder="email"/>
 <input name="password" placeholder="password"/>
 <input name="passwordConfirmation" placeholder="password confirmation"/>
 <button>Signup<button></button>
</form>

</div>`);

});

app.listen('3000', ()=>{console.log('listening')});

app.post('/',(req, res)=>{
    req.on('data', data=>{
      console.log(data.toString('utf8'));
      const parsed = data.toString('utf8').split();
      const formData = {};
  
      for(let pair of parsed){
     const [key, value] = pair.split("=");
     formData[key] = value
      }
      console.log('formData');
    });
    //get access to your email, password, confirmation email
    res.send('We are Alright!');
  });