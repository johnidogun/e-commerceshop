//console.log('hi there!');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req,res)=>{
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

app.listen(3000,()=>{
    console.log('Listening');
});

 //Form parsing logic and handling
// const bodyParser = (req, res, next)=>{ 
//   if (req.method ==='POST') {
//     req.on('data', data=>{
//       console.log(data.toString('utf8'));
//       const parsed = data.toString('utf8').split('&');
//       const formData = {};
  
//       for(let pair of parsed){
//      const [key, value] = pair.split("=");
//      formData[key] = value;
//       }
//       //console.log('formData');
//       req.body =formData;
//       next();
//     });
//   }
//   else {
//     next();
//   }
// };


//Post Request Handler to handle account creation
app.post('/',(req, res) =>{
 // console.log(req);
console.log(req.body);


  //get access to your email, password, confirmation email
  res.send('We are Alright!');
});