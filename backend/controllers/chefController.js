import Chef from "../models/Chef.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Register Chef : /api/chef/register
export const registerChef = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({ success: false, message: "Missing Details" });
    }

    const existingChef = await Chef.findOne({ email });

    if (existingChef) {
      return res.json({ success: false, message: "Chef already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const chef = await Chef.create({ name, email, password: hashedPassword });

    const token = jwt.sign({ id: chef._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.cookie('chefToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({ success: true, chef: { email: chef.email, name: chef.name } });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// Login Chef : /api/chef/login
export const loginChef = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.json({ success: false, message: 'Email and password are required' });

    const chef = await Chef.findOne({ email });

    if (!chef) {
      return res.json({ success: false, message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, chef.password);

    if (!isMatch)
      return res.json({ success: false, message: 'Invalid email or password' });

    const token = jwt.sign({ id: chef._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.cookie('chefToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({ success: true, chef: { email: chef.email, name: chef.name } });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// Check Chef Auth : /api/chef/is-auth
export const isAuthChef = async (req, res) => {
  try {
    const chef = await Chef.findById(req.userId).select("-password");
    return res.json({ success: true, chef });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// Logout Chef : /api/chef/logout
export const logoutChef = async (req, res) => {
  try {
    res.clearCookie('chefToken', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
    });

    return res.json({ success: true, message: "Chef Logged Out" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
