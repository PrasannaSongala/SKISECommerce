import { Request, Response } from 'express';
import Location from '../models/Locations';

// Get all locations
export const getAllLocations = async (req: Request, res: Response): Promise<void> => {
  try {
    const locations = await Location.findAll();
    res.json(locations); // No `return` here
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Get single location by ID
export const getLocationById = async (req: Request, res: Response): Promise<void> => {
  try {
    const location = await Location.findByPk(req.params.id);
    if (!location) {
      res.status(404).json({ message: 'Location not found' });
      return; // Explicitly stop execution
    }
    res.json(location);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Create  new location
export const createLocation = async (req: Request, res: Response): Promise<void> => {
  try {
    const newLocation = await Location.create(req.body);
    res.status(201).json(newLocation);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Update  existing location
export const updateLocation = async (req: Request, res: Response): Promise<void> => {
  try {
    const location = await Location.findByPk(req.params.id);
    if (!location) {
      res.status(404).json({ message: 'Location not found' });
      return;
    }
    await location.update(req.body);
    res.json(location);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Delete  location
export const deleteLocation = async (req: Request, res: Response): Promise<void> => {
  try {
    const location = await Location.findByPk(req.params.id);
    if (!location) {
      res.status(404).json({ message: 'Location not found' });
      return;
    }
    await location.destroy();
    res.json({ message: 'Location deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
