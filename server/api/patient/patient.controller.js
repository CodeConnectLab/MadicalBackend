const service = require('./patient.service');

exports.createPatient = (req, res, next) => {
  return service.createPatient(req.body, req.user)
    .then(result => responseHandler.success(res, result, 'Patient created successfully', 201))
    .catch(error => responseHandler.error(res, error, error.message, 500));
};

exports.updatePatient = (req, res, next) => {
  return service.updatePatient(req.params.id, req.body, req.user)
    .then(result => responseHandler.success(res, result, 'Patient updated successfully', 200))
    .catch(error => responseHandler.error(res, error, error.message, 500));
};

exports.deletePatient = (req, res, next) => {
  return service.deletePatient(req.params.id)
    .then(result => responseHandler.success(res, result, 'Patient deleted successfully', 200))
    .catch(error => responseHandler.error(res, error, error.message, 500));
};

exports.getAllPatients = (req, res, next) => {
  return service.getAllPatients(req.query)
    .then(result => responseHandler.success(res, result, 'Patients retrieved successfully', 200))
    .catch(error => responseHandler.error(res, error, error.message, 500));
};

exports.getPatientById = (req, res, next) => {
  return service.getPatientById(req.params.id)
    .then(result => responseHandler.success(res, result, 'Patient retrieved successfully', 200))
    .catch(error => responseHandler.error(res, error, error.message, 500));
};