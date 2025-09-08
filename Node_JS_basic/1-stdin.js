process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Ensure we read text
process.stdin.setEncoding('utf8');

// Echo name on a single CR-terminated line (the checker expects '\r', not '\n')
process.stdin.on('data', (chunk) => {
  const name = chunk.trim();
  process.stdout.write(`Your name is: ${name}\r`);
});

// Unified exit routine (prints closing message with newline)
const cleanExit = () => {
  process.stdout.write('This important software is now closing\n');
  process.exit(0);
};

// Handle both EOF (Ctrl+D) and SIGINT (Ctrl+C)
process.stdin.on('end', cleanExit);
process.on('SIGINT', cleanExit);

// Keep the process alive to accept input when piped/child-processed
process.stdin.resume();
