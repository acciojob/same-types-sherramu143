function isSameType(value1, value2) {
  // Check if both are NaN
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }

  // Check normal types
  return typeof value1 === typeof value2;
}

// Example usage with prompt
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

// Convert to numbers if you want to handle numbers vs NaN correctly
value1 = Number(value1);
value2 = Number(value2);

alert(isSameType(value1, value2));
