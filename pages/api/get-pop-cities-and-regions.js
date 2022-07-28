
const fs = require("fs");

export default function handler(req, res) {
  const json_data = fs.readFileSync("pages/api-data/get-pop-cities-and-regions.json");
  res.status(200).json(JSON.parse(json_data));
}
