import { Request, Response } from 'express';
import Setting from '../models/setting';

export const getAllSettings = async (req: Request, res: Response) => {
  try {
    const settings = await Setting.findAll({
      include: 'location',  
    });
    res.json(settings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching settings', error });
  }
};

export const getSettingById = async (req: Request, res: Response) => {
  try {
    const setting = await Setting.findByPk(req.params.id, {
      include: 'location',
    });
    if (setting) {
      res.json(setting);
    } else {
      res.status(404).json({ message: 'Setting not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching setting', error });
  }
};

export const createSetting = async (req: Request, res: Response) => {
  try {
    const setting = await Setting.create(req.body);
    res.status(201).json(setting);
  } catch (error) {
    res.status(500).json({ message: 'Error creating setting', error });
  }
};

export const updateSetting = async (req: Request, res: Response) => {
  try {
    const setting = await Setting.findByPk(req.params.id);
    if (setting) {
      await setting.update(req.body);
      res.json(setting);
    } else {
      res.status(404).json({ message: 'Setting not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating setting', error });
  }
};

export const deleteSetting = async (req: Request, res: Response) => {
  try {
    const setting = await Setting.findByPk(req.params.id);
    if (setting) {
      await setting.destroy();
      res.json({ message: 'Setting deleted' });
    } else {
      res.status(404).json({ message: 'Setting not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting setting', error });
  }
};
