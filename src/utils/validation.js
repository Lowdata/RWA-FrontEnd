export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};


export const validatePassword = (password) => {
  const lengthCriteria = /.{6,}/;
  const numberCriteria = /\d/;
  const uppercaseCriteria = /[A-Z]/;
  const specialCharacterCriteria = /[!@#$%^&*(),.?":{}|<>]/;

  return (
    lengthCriteria.test(password) &&
    numberCriteria.test(password) &&
    uppercaseCriteria.test(password) &&
    specialCharacterCriteria.test(password)
  );
};