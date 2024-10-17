const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'); 
const Service = require('../models/Service');


router.post('/', async (req, res) => {
    const { name, description, price } = req.body;

    if (!name || !price) {
        return res.status(400).json({ msg: 'Please include all required fields' });
    }

    try {
        const newService = new Service({ name, description, price });
        await newService.save();
        res.status(201).json(newService);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

// Get all services
router.get('/', async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

// Update a service
router.put('/:id', async (req, res) => {
    const { name, description, price } = req.body;

    try {
        const service = await Service.findById(req.params.id);
        if (!service) {
            return res.status(404).json({ msg: 'Service not found' });
        }

        service.name = name || service.name;
        service.description = description || service.description;
        service.price = price || service.price;

        await service.save();
        res.json(service);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

// Delete a service
router.delete('/:id', async (req, res) => {
    try {
        // Validate the ID format
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ msg: 'Invalid ID' });
        }

        const service = await Service.findByIdAndDelete(req.params.id);
        if (!service) {
            return res.status(404).json({ msg: 'Service not found' });
        }

        res.json({ msg: 'Service removed' });
    } catch (err) {
        console.error(err); 
        res.status(500).json({ msg: 'Server error' });
    }
});



module.exports = router;
