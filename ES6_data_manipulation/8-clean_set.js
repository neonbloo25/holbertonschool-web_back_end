// 8-clean_set.js
function cleanSet(set, startString) {
    // Step 1: Initialize an empty array to store the results
    const result = [];
  
    // Step 2: Loop through each value in the set
    set.forEach(value => {
      // Step 3: Check if the value starts with startString
      if (value.startsWith(startString)) {
        // Step 4: Push the value after the startString to the result
        result.push(value.slice(startString.length));
      }
    });
  
    // Step 5: Join the result array into a string with '-' separator and return it
    return result.join('-');
  }
  