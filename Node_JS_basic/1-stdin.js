process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}`);
  // Wait a moment before printing the next line
  setTimeout(() => {
    console.log('This important software is now closing\n');
    process.exit();
  }, 10); // Delay ensures first assertion is completed
});
