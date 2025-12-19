function isSameType(value1, value2) {
  // If both are NaN
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }

  // If either one is NaN (but not both)
  if (Number.isNaN(value1) || Number.isNaN(value2)) {
    return false;
  }

  // Check normal types
  return typeof value1 === typeof value2;
}

// Example usage with prompt
let value1 = Number(prompt("Enter Start of the Range."));
let value2 = Number(prompt("Enter End Of the Range."));

alert(isSameType(value1, value2));
