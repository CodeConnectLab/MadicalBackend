
const service = require("./docter.service")

exports.createDoctor = (req, res, next) => {
    return service.createDoctor(req.body, req.user)
      .then(result => responseHandler.success(res, result, 'Doctor created successfully', 201))
      .catch(error => responseHandler.error(res, error, error.message, 500));
  };
  
  exports.updateDoctor = (req, res, next) => {
    return service.updateDoctor(req.params.id, req.body, req.user)
      .then(result => responseHandler.success(res, result, 'Doctor updated successfully', 200))
      .catch(error => responseHandler.error(res, error, error.message, 500));
  };
  
  exports.deleteDoctor = (req, res, next) => {
    return service.deleteDoctor(req.params.id)
      .then(result => responseHandler.success(res, result, 'Doctor deleted successfully', 200))
      .catch(error => responseHandler.error(res, error, error.message, 500));
  };
  
  exports.toggleDoctorStatus = (req, res, next) => {
    return service.toggleDoctorStatus(req.params.id)
      .then(result => responseHandler.success(res, result, 'Doctor status updated successfully', 200))
      .catch(error => responseHandler.error(res, error, error.message, 500));
  };
  
  exports.getAllDoctors = (req, res, next) => {
    return service.getAllDoctors(req.query)
      .then(result => responseHandler.success(res, result, 'Doctors retrieved successfully', 200))
      .catch(error => responseHandler.error(res, error, error.message, 500));
  };
  
  exports.getDoctorById = (req, res, next) => {
    return service.getDoctorById(req.params.id)
      .then(result => responseHandler.success(res, result, 'Doctor retrieved successfully', 200))
      .catch(error => responseHandler.error(res, error, error.message, 500));
  };
