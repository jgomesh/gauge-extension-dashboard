const validateInputs = ({ email, password, setValidInputs }) => {
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPassword = password !== "";

  setValidInputs(isValidEmail && isValidPassword);
};

export default validateInputs;
