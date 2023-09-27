const bcrypt = require('bcrypt');
const userModel = require('../model/user');

// Controller untuk mendaftarkan pengguna baru
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  // Check if all required fields are filled
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Check if the password length is less than 8 characters
  if (password.length < 8) {
    return res.status(400).json({ message: 'Password must be at least 8 characters long' });
  }

  const exist = await userModel.findOne({email});

  if(exist){
    return res.status(400).json({ message: 'Email is  already exist' });
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 6);

    // Create a new user document
    const newUser = new userModel({ name, email, password: hashedPassword });

    // Save the user to the database
    await newUser.save();

    // Respond with a success message
    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller untuk mengambil daftar pengguna
const getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  registerUser,
  getUsers,
};
