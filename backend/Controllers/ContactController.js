import { Contact } from "../Models/contactModel.js";
import TryCatch from "../Utils/TryCatch.js";

export const saveContactDetails = TryCatch(async (req, res) => {
  const { name, email, message } = req.body;

  const contact = await Contact.create({
    name,
    email,
    message,
  });

  res.status(201).json({
    message: "We will contact you soon....",
    contact,
  });
});
