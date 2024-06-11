const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://alfraka3:q7mfG3YAD6CBEQqC@databaseuser.iig90do.mongodb.net/?retryWrites=true&w=majority"
      )
      .then(() => {
        console.log("Connected");
      });
  } catch (error) {
    console.log(error);
  }
};
conn();
