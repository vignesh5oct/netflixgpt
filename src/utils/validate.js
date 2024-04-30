
export const checkValidate = (email, password, fullName) => {

  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isFullNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(fullName);

  if (!isEmailValid)
    return "Email is Not Valid"
  if (!isPasswordValid)
    return "Password is Not Valid"
  if (!isFullNameValid)
    return "Name is Not Valid"
  return null;
}

