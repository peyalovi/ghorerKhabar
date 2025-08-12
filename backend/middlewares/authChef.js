import jwt from 'jsonwebtoken';

const authChef = async (req, res, next) => {
  const { chefToken } = req.cookies;

  if (!chefToken) {
    return res.json({ success: false, message: 'Not Authorized' });
  }

  try {
    const tokenDecode = jwt.verify(chefToken, process.env.JWT_SECRET);
    if (tokenDecode.id) {
      req.userId = tokenDecode.id;
      next();
    } else {
      return res.json({ success: false, message: 'Not Authorized' });
    }
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export default authChef;