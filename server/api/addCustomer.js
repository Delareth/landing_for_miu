const express = require("express");
const router = express.Router();
const fs = require("fs");

router.post("/", async (req, res) => {
  try
  {
    const customer = req.body;
    const filePath = "./json/customers.json";

    // check directory
    if (!isDirExist("./json/"))
    {
      fs.mkdir("./json/", () => {});
    }

    // if file not exist create it with first res
    if (!fs.existsSync(filePath)) 
    {
      fs.writeFile(filePath, JSON.stringify([customer]), "utf8", () => {});
      res.json({state: "success"});
      console.log("[Customer] " + customer.name + " successful added");
      return;
    }

    // if file exist - read all data > add new customer > write back data with new customer
    fs.readFile(filePath, "utf8", function readFileCallback(err, data)
    {
      if (err) return console.log(err);

      let obj;

      try
      {
        obj = JSON.parse(data)
      }
      catch
      {
        obj = [];
      }
      
      obj.push(customer);

      fs.writeFile(filePath, JSON.stringify(obj), "utf8", () => {});
    });

    res.json({state: "success"});
    console.log("[Customer] " + customer.name + " successful added");
  }
  catch (error)
  {
    res.json({state: "error"});
    console.log("[ERROR] Can't add new customer: " + customer);
    console.log("[ERROR] " + error);
  }
});

module.exports = router;

function isDirExist(path)
{
  try 
  {
    fs.statSync(path);
    return true;
  }
  catch (err) 
  {
    return err.code !== "ENOENT";
  }
}