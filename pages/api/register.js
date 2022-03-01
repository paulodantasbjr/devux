import bcrypt from "bcrypt";

import connectDB from "../../utils/connectDB";
import User from "../../model/User";

connectDB();

export default async function Register(req, res) {
  switch (req.method) {
    case "POST":
      await register(req, res);
      break;
  }
}

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ err: "Esse email já existe." });

    const passwordHash = await bcrypt.hash(password, 12);

    const newUser = new User({
      name,
      email,
      password: passwordHash,
    });

    await newUser.save();
    res.json({ user: { name, email }, msg: "Cadastro realizado com sucesso!" });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
