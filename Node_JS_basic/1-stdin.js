process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.setEncoding('utf8');

let printedName = false;

process.stdin.on('data', (chunk) => {
  const name = String(chunk).trim();
  if (name.length > 0) {
    process.stdout.write(`Your name is: ${name}\r`);
    printedName = true;
  }
});

const cleanExit = () => {
  if (printedName) process.stdout.write('\n');
  process.stdout.write('This important software is now closing\n');
  process.exit(0);
};

process.stdin.on('end', cleanExit);
process.on('SIGINT', cleanExit);

// Keep process alive under child processes
process.stdin.resume();
