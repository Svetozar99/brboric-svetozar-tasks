//ovo iskljucuje provjeru SSL sertifikata, 
//to nije preporucljivo za proizvodno okruzenje, jer moze ugroziti sigurnost aplikacije
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const https = require('https');

const options = {
  hostname: 'reqres.in',
  path: '/api/users?page=2',
  method: 'GET'
};
https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    const users = JSON.parse(data).data;
    const names = users.map(user => `${user.first_name}`);
    console.log(names.join(', '));
  });

}).on('error', (err) => {
  console.error(`Došlo je do greške: ${err}`);
}).end();