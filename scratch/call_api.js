const http = require('http');

const data = JSON.stringify({
  fullName: "Live Test Customer",
  email: "testcustomer@gmail.com",
  phone: "+971509876543",
  subject: "Live Test Inquiry",
  message: "Checking if email is received now"
});

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/contact',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {
    console.log('STATUS:', res.statusCode);
    console.log('RESPONSE:', body);
  });
});

req.on('error', (e) => {
  console.error('PROBLEM WITH REQUEST:', e.message);
});

req.write(data);
req.end();
