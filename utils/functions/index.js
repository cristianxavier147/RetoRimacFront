// Function to calculate age from date of birth
export function calculateAge(dateOfBirth) {
  const birthDate = new Date(dateOfBirth);
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthDate.getFullYear();

  // Adjust the age based on birth month and day
  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    return age - 1;
  }

  return age;
}

// Function to convert a string to PascalCase
export function convertToPascalCase(input) {
  // Remove accents and special characters
  const cleanedText = input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .toLowerCase();

  // Split words by spaces and convert to PascalCase
  const words = cleanedText.split(' ');
  const pascalCaseText = words
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');

  return pascalCaseText;
}
