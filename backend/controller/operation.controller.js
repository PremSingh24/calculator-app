export const operationHandler = async (req, res) => {
  try {
    const operator = req.headers["operator"];

    const input = req.body;
    let output;

    if (String(operator) === "+") {
      output = Number(input.first) + Number(input.second);
    } else if (String(operator) === "-") {
      output = Number(input.first) - Number(input.second);
    } else if (String(operator) === "/") {
      output = Number(input.first) / Number(input.second);
    } else if (String(operator) === "*") {
      output = Number(input.first) * Number(input.second);
    }

    res.status(200).json({ output });
  } catch (error) {
    res.status(500).json({ message: "Something Went Wrong" });
  }
};
