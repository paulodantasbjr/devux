import jwt from "jsonwebtoken";

import { createAccessToken } from "../../utils/generateToken";

import connectDB from "../../utils/connectDB";
import Users from "../../model/userModel";

connectDB();

export default async function accessToken(req, res) {
  try {
    const ref_token = req.cookies.refreshtoken;
    if (!ref_token)
      return res.status(400).json({ err: "Por favor realize o login!" });

    const result = jwt.verify(ref_token, process.env.REFRESH_TOKEN_SECRET);
    if (!result)
      return res
        .status(400)
        .json({ err: "Seu token esta expirado com incorreto." });

    const user = await Users.findById(result.id);
    if (!user) return res.status(400).json({ err: "Usuario não existe." });

    const access_token = createAccessToken({ id: user._id });
    res.json({
      access_token,
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
}
