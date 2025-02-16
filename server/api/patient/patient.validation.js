const Joi = require('joi');

const patientValidationSchema = {
  createPatient: Joi.object({
    name: Joi.string().required().trim(),
    mobile: Joi.string().pattern(/^\d{10}$/).required(),
    city: Joi.string().required().trim(),
    address: Joi.string().required().trim(),
    doctor: Joi.string().required(), // Doctor ID
    appointmentDateTime: Joi.date().required(),
    problem: Joi.string().required().trim()
  }),
  updatePatient: Joi.object({
    name: Joi.string().trim(),
    mobile: Joi.string().pattern(/^\d{10}$/),
    city: Joi.string().trim(),
    address: Joi.string().trim(),
    doctor: Joi.string(), // Doctor ID
    appointmentDateTime: Joi.date(),
    problem: Joi.string().trim()
  })
};

module.exports = patientValidationSchema;