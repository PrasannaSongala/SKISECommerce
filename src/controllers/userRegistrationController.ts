// src/controllers/userRegistrationController.ts
import { Request, Response } from 'express';
import UserRegistration from '../models/userRegistration';

// Create a new user registration record
export const addUserRegistration = async (req: Request, res: Response): Promise<void> => {
  try {
    const { mobileNumber, otp } = req.body;

    const newRegistration = await UserRegistration.create({
      mobileNumber,
      otp,
      numberOfOtpSent: 1,
      numberOfOtpTried: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    res.status(201).json({ message: 'User registration created successfully', data: newRegistration });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user registration', error: error instanceof Error ? error.message : error });
  }
};

// Retrieve all user registration records
export const getAllUserRegistrations = async (req: Request, res: Response): Promise<void> => {
  try {
    const registrations = await UserRegistration.findAll();
    res.status(200).json({ data: registrations });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user registrations', error: error instanceof Error ? error.message : error });
  }
};

// Retrieve a specific user registration record
export const getUserRegistration = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const registration = await UserRegistration.findByPk(id);

    if (!registration) {
      res.status(404).json({ message: 'User registration not found' });
      return;
    }

    res.status(200).json({ data: registration });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user registration', error: error instanceof Error ? error.message : error });
  }
};

// Update a user registration record
export const editUserRegistration = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { otp, numberOfOtpSent, numberOfOtpTried } = req.body;

    const registration = await UserRegistration.findByPk(id);
    if (!registration) {
      res.status(404).json({ message: 'User registration not found' });
      return;
    }

    registration.otp = otp || registration.otp;
    registration.numberOfOtpSent = numberOfOtpSent || registration.numberOfOtpSent;
    registration.numberOfOtpTried = numberOfOtpTried || registration.numberOfOtpTried;
    registration.updatedAt = new Date();

    await registration.save();

    res.status(200).json({ message: 'User registration updated successfully', data: registration });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user registration', error: error instanceof Error ? error.message : error });
  }
};

// Delete a user registration record
export const removeUserRegistration = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const deletedCount = await UserRegistration.destroy({ where: { id } });

    if (deletedCount === 0) {
      res.status(404).json({ message: 'User registration not found' });
      return;
    }

    res.status(200).json({ message: 'User registration deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user registration', error: error instanceof Error ? error.message : error });
  }
};
