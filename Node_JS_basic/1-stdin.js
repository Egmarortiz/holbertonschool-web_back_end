console.log('Welcome to Holberton School, what is your name?');
process.stdin.setEncoding('utf8');

let buffer = '';

if (process.stdin.isTTY) {
  process.stdin.on('data', (chunk) => {
    const name = chunk.trim();
    console.log(`Your name is: ${name}`);
    process.exit(0);
  });
} else {
  process.stdin.on('data', (chunk) => {
    buffer += chunk;
  });

  process.stdin.on('end', () => {
    const name = buffer.trim();
    console.log(`Your name is: ${name.trim()}`);
    console.log('This important software is now closing');
  });
}
