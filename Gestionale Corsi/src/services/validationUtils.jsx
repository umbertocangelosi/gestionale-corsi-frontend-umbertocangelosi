// validationUtils.js
export function isValidName(name) {
    return /^[a-zA-Z]+(?:\s[a-zA-Z]+)?$/.test(name);
  }
  
  export function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  
  export function isValidPassword(password) {
    // Almeno 8 caratteri, una lettera maiuscola, un numero e un simbolo
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  }