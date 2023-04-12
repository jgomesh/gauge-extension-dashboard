const handleInputChange = (event, setData) => {
  const { name, value } = event.target;

  setData((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};

export default handleInputChange;
