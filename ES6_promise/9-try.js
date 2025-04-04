export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction(); // Execute the passed function

    // If the result is a Promise, handle it properly
    if (result instanceof Promise) {
      result
        .then((value) => {
          queue.push(value); // Push the resolved value if Promise resolves
          queue.push('Guardrail was processed'); // Push the processed message
        })
        .catch((error) => {
          queue.push(error.message); // Push the error message if Promise rejects
          queue.push('Guardrail was processed');
        });
    } else {
      // If the result is not a Promise (sync function), directly push it
      queue.push(result);
      queue.push('Guardrail was processed');
    }
  } catch (error) {
    // If there’s an error in synchronous function, handle it here
    queue.push(error.message);
    queue.push('Guardrail was processed');
  }
  return queue;
}
