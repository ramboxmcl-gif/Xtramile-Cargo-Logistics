export default function handler(_, res) {
  res.setHeader("Set-Cookie", "auth=; Path=/; Max-Age=0");
  res.redirect("/");
}
