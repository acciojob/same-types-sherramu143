function isSameType(value1, value2) {
  // Convert string inputs to numbers if possible
  value1 = Number(value1);
  value2 = Number(value2);

  // Check if both are NaN
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }

  // Check type normally
  return typeof value1 === typeof value2;
}

// Do not change below
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

alert(isSameType(value1, value2));
