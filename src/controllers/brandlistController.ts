import { Request, Response } from 'express';
import Brandlist from '../models/Brandlist';

//  all brandlist entries
export const getAllBrandlists = async (req: Request, res: Response) => {
  try {
    const brandlists = await Brandlist.findAll();

    res.status(200).json(brandlists);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

//  specific brandlist by ID
export const getBrandlistById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const brandlist = await Brandlist.findByPk(id);
    if (brandlist) {
      res.status(200).json(brandlist);
    } else {
      res.status(404).json({ message: 'Brandlist not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new brandlist entry
export const createBrandlist = async (req: Request, res: Response) => {
  const { name, link, type, isDisabled, createdAt, updatedAt } = req.body;
  try {
    const newBrandlist = await Brandlist.create({
      name,
      link,
      type,
      isDisabled,
      createdAt,
      updatedAt,
    });
    res.status(201).json(newBrandlist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update  brandlist entry
export const updateBrandlist = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, link, type, isDisabled, createdAt, updatedAt } = req.body;
  try {
    const brandlist = await Brandlist.findByPk(id);
    if (brandlist) {
      brandlist.name = name;
      brandlist.link = link;
      brandlist.type = type;
      brandlist.isDisabled = isDisabled;
      brandlist.createdAt = createdAt;
      brandlist.updatedAt = updatedAt;

      await brandlist.save();
      res.status(200).json(brandlist);
    } else {
      res.status(404).json({ message: 'Brandlist not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete  brandlist entry
export const deleteBrandlist = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const brandlist = await Brandlist.findByPk(id);
    if (brandlist) {
      await brandlist.destroy();
      res.status(200).json({ message: 'Brandlist deleted' });
    } else {
      res.status(404).json({ message: 'Brandlist not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
