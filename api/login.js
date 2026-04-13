import jwt from "jsonwebtoken";

export default function handler(req, res) {
  const { email, pin } = req.body;
  if (email.endsWith("@xtramile.ph") && pin === "1234") {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "8h" });
    res.setHeader("Set-Cookie", `auth=${token}; HttpOnly; Path=/; Secure`);
    return res.json({ ok: true });
  }
  res.status(401).json({ error: "Unauthorized" });
}
