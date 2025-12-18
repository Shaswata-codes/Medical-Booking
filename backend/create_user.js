const http = require('http');

// Helper to make request
function request(path, method, body, callback) {
    const data = JSON.stringify(body);
    const options = {
        hostname: 'localhost',
        port: 5000,
        path: path,
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    };

    const req = http.request(options, (res) => {
        let responseBody = '';
        res.on('data', (d) => responseBody += d);
        res.on('end', () => {
            callback(res.statusCode, responseBody);
        });
    });

    req.on('error', (e) => console.error(e));
    req.write(data);
    req.end();
}

// 1. Try to login to see if user exists and we can get token? No, we don't have password maybe? 
// We know password is "password123".

const user = {
    "name": "Demo User",
    "email": "demo@example.com",
    "password": "password123"
};

console.log("Attempting to Register...");
request('/api/auth/signup', 'POST', user, (status, body) => {
    console.log(`Register Status: ${status}`);
    console.log(`Body: ${body}`);

    if (status === 400 && body.includes('User already exists')) {
        console.log("User exists. Trying to Login instead...");
        request('/api/auth/login', 'POST', { email: user.email, password: user.password }, (lStatus, lBody) => {
            console.log(`Login Status: ${lStatus}`);
            console.log(`Body: ${lBody}`);
        });
    }
});
