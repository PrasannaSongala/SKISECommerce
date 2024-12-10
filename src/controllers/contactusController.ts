//src/controllers/contactusController.ts

import { Request, Response } from 'express';
import ContactUs from '../models/contactusModel';

//  all contact us entries
export const getAllContactUsEntries = async (req: Request, res: Response) => {
  const entries = await ContactUs.findAll();
  res.json(entries);
};

// Get  contact  entry by ID
export const getContactUsById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const entry = await ContactUs.findByPk(id);
  if (!entry) {
    res.status(404).json({ message: 'Entry not found' });
    return;
  }
  res.json(entry);
};

// Create  new contact  entry
export const createContactUsEntry = async (req: Request, res: Response) => {
  const { name, email, message } = req.body;
  const newEntry = await ContactUs.create({ name, email, message });
  res.status(201).json(newEntry);
};

// Update a contact us entry
export const updateContactUsEntry = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, message, status, note } = req.body;

  const entry = await ContactUs.findByPk(id);
  if (!entry) {
    res.status(404).json({ message: 'Entry not found' });
    return;
  }

  await entry.update({ name, email, message, status, note });
  res.json(entry);
};

// Delete a contact us entry
export const deleteContactUsEntry = async (req: Request, res: Response) => {
  const { id } = req.params;

  const entry = await ContactUs.findByPk(id);
  if (!entry) {
    res.status(404).json({ message: 'Entry not found' });
    return;
  }

  await entry.destroy();
  res.json({ message: 'Entry deleted successfully' });
};
