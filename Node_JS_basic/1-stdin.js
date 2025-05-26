process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}`);
  // Wait a moment before printing the next line
  setTimeout(() => {
    console.log('\nThis important software is now closing');
    process.exit();
  }, 10); // Delay ensures first assertion is completed
});
