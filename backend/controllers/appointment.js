
const Appointment=require('../models/appointment');
//const Business=require('../models/business');


// Add Appointments
 async function addAppointments (req, res) {

    const appointmentData = {
            business_id: req.body.business_id,  // Use the _id of the created business
            name: req.body.name,
            durration: req.body.durration,
            timing: req.body.timing,  
            days: req.body.days,
            price: req.body.price
        };
   
    const createdAppointment = await Appointment.create(appointmentData);

        await Business.findByIdAndUpdate(req.body.business_id, {
            $push: { appointments: createdAppointment._id }
        });
        return res.send("Appointment add Sucessfuly");

};
async function getAll(req, res) {
    try {
        const appointments = await Appointment.find();
        return res.json(appointments);
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
};
async function getById(req, res) {
    const Id = req.params.id;

    try {
        const appointment = await Appointment.findById(Id);

        if (!appointment) {
            return res.status(404).send('appointment  not found');
        }

        return res.send(appointment);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
async function updateById(req, res) {
    const Id = req.params.id;

    try {
        // Check if the appointment exists
        const existingAppointment = await Appointment.findById(Id);

        if (!existingAppointment) {
            return res.status(404).send('Appointment not found');
        }

        // Update appointment fields
        existingAppointment.name = req.body.name || existingAppointment.name;
        existingAppointment.durration = req.body.durration || existingAppointment.durration;
        existingAppointment.timing = req.body.timing || existingAppointment.timing;
        existingAppointment.days = req.body.days || existingAppointment.days;
        existingAppointment.price = req.body.price || existingAppointment.price;

        // Save the updated appointment
        const updatedAppointment = await existingAppointment.save();

        return res.json(updatedAppointment);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};
async function deleteById(req, res) {
    const Id = req.params.id;

    try {
        // Check if the appointment exists
        const existingAppointment = await Appointment.findById(Id);

        if (!existingAppointment) {
            return res.status(404).send('Appointment not found');
        }

        // Remove the appointment
        await Appointment.deleteOne({_id:Id});

        return res.json({ message: 'Appointment deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}



module.exports = {
    addAppointments,
    getAll,
    getById,
    updateById,
    deleteById
    
};