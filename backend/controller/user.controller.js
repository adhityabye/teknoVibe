const bcrypt = require("bcrypt");
const userModel = require("../model/user");

// Controller for user registration
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  // Check if all required fields are filled
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Check if the password length is less than 8 characters
  if (password.length < 8) {
    return res
      .status(400)
      .json({ message: "Password must be at least 8 characters long" });
  }

  const exist = await userModel.findOne({ email });

  if (exist) {
    return res.status(400).json({ message: "Email is  already exist" });
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 6);

    // Create a new user document
    const newUser = new userModel({ name, email, password: hashedPassword });

    // Save the user to the database
    await newUser.save();

    // Respond with a success message
    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Controller for retrieving a list of users
const getUsers = async (req, res) => {
  try {
    // Retrieve a list of users from the database
    const users = await userModel.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Function to compare the provided password with the hashed password
const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

// Controller for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    // check if user exist
    if (!user) {
      return res.status(400).json({ message: "No user found" });
    }

    //check if password match
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "Password does not match" });
    }
    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller for deleting user
const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    // Check if the user with the provided ID exists in the database
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Delete the user from the database
    await userModel.findByIdAndRemove(userId);

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Controller for updating all user data
const updateUser = async (req, res) => {
  const userId = req.params.id;
  const { name, email, password } = req.body;

  try {
    // Check if the user with the provided ID exists in the database
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user data based on provided fields
    if (name) user.name = name;
    if (email) user.email = email;
    if (password) {
      // Hash and update the password
      const hashedPassword = await bcrypt.hash(password, 6);
      user.password = hashedPassword;
    }

    // Save the updated user to the database
    await user.save();

    return res.status(200).json({ message: "User data updated successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  registerUser,
  getUsers,
  loginUser,
  updateUser,
  deleteUser,
};
