export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();  // Call the passed function

    if (result instanceof Promise) {
      result
        .then((value) => {
          queue.push(value);  // If the Promise resolves, add value
          queue.push('Guardrail was processed');
        })
        .catch((error) => {
          queue.push(error.message);  // If Promise rejects, add error message
          queue.push('Guardrail was processed');
        });
    } else {
      queue.push(result);
      queue.push('Guardrail was processed');
    }
  } catch (error) {
    queue.push(error.message);
    queue.push('Guardrail was processed');
  }
  return queue;
}
