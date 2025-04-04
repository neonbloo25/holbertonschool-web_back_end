export default function guardrail(mathFunction) {
    const queue = [];
    try {
      const result = mathFunction();  // Call the passed function
      
      if (result instanceof Promise) {
        // If the result is a Promise, handle it with then() / catch()
        result
          .then((value) => {
            queue.push(value);
            queue.push('Guardrail was processed');
          })
          .catch((error) => {
            queue.push(error.message);
            queue.push('Guardrail was processed');
          });
      } else {
        // If it's not a Promise, push the result directly
        queue.push(result);
        queue.push('Guardrail was processed');
      }
    } catch (error) {
      queue.push(error.message);
      queue.push('Guardrail was processed');
    }
    return queue;
  }
  
