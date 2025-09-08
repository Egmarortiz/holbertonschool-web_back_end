process.stdout.write("Welcome to Holberton School, what is your name?\n");

// Listen for user input from stdin
process.stdin.on("data", (data) => {
  const name = data.toString().trim(); // clean input
  console.log(`Your name is: ${name}`);
});

// When the process is about to exit (user presses CTRL+C or EOF)
process.on("exit", () => {
  console.log("This important software is now closing");
});
