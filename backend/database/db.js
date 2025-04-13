import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dnyanu:taware@cluster0.laml8.mongodb.net/",
      {
        dbName: "Project_Management",
      }
    );

    console.log("mongoDB connected..");
  } catch (error) {
    console.log(error);
  }
};
