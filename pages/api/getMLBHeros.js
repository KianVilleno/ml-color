import axios from "axios";

export default async function handler(req, res) {
  try {
    const result = await axios.get("https://mapi.mobilelegends.com/hero/list");
    res.json(result?.data?.data);
  } catch (err) {
    res.status(400).json(err);
  }
}
