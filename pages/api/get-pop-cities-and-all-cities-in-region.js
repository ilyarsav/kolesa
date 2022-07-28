const fs = require("fs");

export default function handler(req, res) {
  const json_data = fs.readFileSync(
    "pages/api-data/get-pop-cities-and-all-cities-in-region.json"
  );
  res.status(200).json(JSON.parse(json_data));
}
