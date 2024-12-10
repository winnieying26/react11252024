export const users = [
  {
    name: "Leanne Graham",
    username: "Bret",
    email: "leanne.graham@email.com",
    password: "1drowssapencoded",
  },
  {
    name: "Ervin Howell",
    username: "Antonette",
    email: "ervin.howell@email.com",
    password: "2drowssapencoded",
  },
];

export const encodePassword = (password) => {
  // encode the password by reversing it and add "encoded" at the end
  // for example, "password1" => "1drowssapencoded"
  return password.split("").reverse().join("") + "encoded";
};

export const decodePassword = (encrypted) => {
  // decode the password
  // for example, "1drowssapencoded" => "password1"
  const str = encrypted.substring(0, encrypted.length - 7);
  return str.split("").reverse().join("");
};

export const getUserByEmail = async (email) => {
  // fetch a user by email
  // should throw an error with message "User not found" if the user is not found
  // e.g. { name: "Leanne Graham", username: "Bret", email: "leanne.graham@email.com", password: "1drowssapencoded" }

  const user = users.find((_user) => _user.email === email);
  if (user) {
    return user;
  }

  throw new Error("User not found");
};

export const verifyPassword = async (password, encrypted) => {
  // verify the password
  // should throw an error with message "Invalid password" if the password is incorrect
  const decrypted = decodePassword(encrypted);
  if (password === decrypted) {
    return true;
  }
  throw new Error("Invalid password");
};

export const login = async (email, password) => {
  // login the user with email and password
  // should return the user and token if the login is successful
  // e.g. { name: "Leanne Graham", username: "Bret", email: "leanne.graham@email.com", token: "token" }
  // should return the error message if the login is unsuccessful
  // e.g. "User not found", "Invalid password"

  try {
    const user = await getUserByEmail(email);
    const { password: encryptedPassword, ...userInfo } = user;

    const passwordMatched = await verifyPassword(password, encryptedPassword);
    if (passwordMatched) {
      return {
        ...userInfo,
        token: "token",
      };
    }
  } catch (err) {
    return err.message;
  }
};
