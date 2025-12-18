const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '.env');

try {
    let content = fs.readFileSync(envPath, 'utf8');
    // Remove the bad JWT_SECRET if it was appended to a line
    // Look for pattern where JWT_SECRET starts mid-line
    // OR just parse it line by line?
    // Let's just append a newline and JWT_SECRET if missing, or fix if present.

    console.log("Current content length:", content.length);

    // Naive fix: if JWT_SECRET is there but not on new line
    if (content.includes('JWT_SECRET') && !content.includes('\nJWT_SECRET')) {
        // It might be stuck to previous line
        content = content.replace(/([^\n])JWT_SECRET/, '$1\nJWT_SECRET');
    } else if (!content.includes('JWT_SECRET')) {
        if (!content.endsWith('\n')) content += '\n';
        content += 'JWT_SECRET=supersecretkey';
    }

    fs.writeFileSync(envPath, content);
    console.log("Fixed .env content");
} catch (err) {
    console.error("Error fixing .env:", err);
}
