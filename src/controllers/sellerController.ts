// src/controllers/sellerController.ts
import { Request, Response } from 'express';
import { Op } from 'sequelize'; 
import Seller from '../models/sellerlist';

// Create Seller
export const createSeller = async (req: Request, res: Response): Promise<Response> => {
  const { 
    name, 
    companyName, 
    gstin, 
    mobileNumber, 
    emailId, 
    line1, 
    line2, 
    pincode, 
    city, 
    state, 
    alternateMobile 
  } = req.body;

  try {
    // if seller  same mobile or email already exists
    const existingSeller = await Seller.findOne({
      where: {
        [Op.or]: [
          { mobileNumber },
          { emailId },
        ],
      },
    });

    if (existingSeller) {
      return res.status(400).json({ message: 'Mobile number or email already exists' });
    }

    // Create new seller
    const newSeller = await Seller.create({
      name,
      companyName,
      gstin,
      mobileNumber,
      emailId,
      line1,
      line2,
      pincode,
      city,
      state,
      alternateMobile,
      isDisabled: false,   });

    return res.status(201).json({
      message: 'Seller created successfully',
      sellerId: newSeller.id,
    });
  } catch (error) {
    console.error('Error creating seller:', error);
    return res.status(500).json({
      message: 'Error creating seller',
      error: error instanceof Error ? error.message : error,
    });
  }
};

// Get All Sellers
export const getAllSellers = async (req: Request, res: Response): Promise<Response> => {
  try {
    // Fetch only active sellers
    const sellers = await Seller.findAll({
      where: { isDisabled: false }, 
    });

    return res.status(200).json({ sellers });
  } catch (error) {
    console.error('Error fetching sellers:', error);
    return res.status(500).json({
      message: 'Error fetching sellers',
      error: error instanceof Error ? error.message : error,
    });
  }
};

// Get Seller by ID
export const getSellerById = async (req: Request, res: Response): Promise<Response> => {
  const sellerId = req.params.id;

  try {
    const seller = await Seller.findByPk(sellerId);

    if (!seller) {
      return res.status(404).json({ message: 'Seller not found' });
    }

    return res.status(200).json({ seller });
  } catch (error) {
    console.error('Error fetching seller:', error);
    return res.status(500).json({
      message: 'Error fetching seller',
      error: error instanceof Error ? error.message : error,
    });
  }
};

// Disable Seller
export const disableSeller = async (req: Request, res: Response): Promise<Response> => {
  const sellerId = req.params.id;

  try {
    const seller = await Seller.findByPk(sellerId);

    if (!seller) {
      return res.status(404).json({ message: 'Seller not found' });
    }

    seller.isDisabled = true; 
    await seller.save();

    return res.status(200).json({ message: 'Seller disabled successfully' });
  } catch (error) {
    console.error('Error disabling seller:', error);
    return res.status(500).json({
      message: 'Error disabling seller',
      error: error instanceof Error ? error.message : error,
    });
  }
};


// Update Seller
export const updateSeller = async (req: Request, res: Response): Promise<Response> => {
  const sellerId = req.params.id;
  const { name, companyName, gstin, mobileNumber, emailId, line1, line2, pincode, city, state, alternateMobile } = req.body;

  try {
    const seller = await Seller.findByPk(sellerId);

    if (!seller) {
      return res.status(404).json({ message: 'Seller not found' });
    }

    // Update the seller details with new values or keep existing ones if not provided
    seller.name = name || seller.name;
    seller.companyName = companyName || seller.companyName;
    seller.gstin = gstin || seller.gstin;
    seller.mobileNumber = mobileNumber || seller.mobileNumber;
    seller.emailId = emailId || seller.emailId;
    seller.line1 = line1 || seller.line1;
    seller.line2 = line2 || seller.line2;
    seller.pincode = pincode || seller.pincode;
    seller.city = city || seller.city;
    seller.state = state || seller.state;
    seller.alternateMobile = alternateMobile || seller.alternateMobile;

    // Save  updated seller
    await seller.save();

    return res.status(200).json({ message: 'Seller updated successfully', seller });
  } catch (error) {
    console.error('Error updating seller:', error);
    return res.status(500).json({ message: 'Error updating seller', error: error instanceof Error ? error.message : error });
  }
};
