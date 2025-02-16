'use strict';

const express = require('express'),
    { joiValidate } = require("../../helpers/apiValidation.helper"),
    controller = require('./patient.controller'),
    auth = require('../auth/auth.service'),
    validationInputs = require('./patient.validation'),
    router = express.Router(),
    usersVersion = '/v1',
    options = {
        wantResponse: true,
    };



router.post(
    usersVersion + '/patients',
    auth.isAuthenticated({}),
    // joiValidate(validationSchema.createPatient),
    controller.createPatient
  );
  
  // Update patient
  router.put(
    usersVersion + '/patients/:id',
    auth.isAuthenticated({}),
    // joiValidate(validationSchema.updatePatient),
    controller.updatePatient
  );
  
  // Delete patient
  router.delete(
    usersVersion + '/patients/:id',
    auth.isAuthenticated({}),
    controller.deletePatient
  );
  
  // Get all patients
  router.get(
    usersVersion + '/patients',
    auth.isAuthenticated({}),
    controller.getAllPatients
  );
  
  // Get patient by ID
  router.get(
    usersVersion + '/patients/:id',
    auth.isAuthenticated({}),
    controller.getPatientById
  );
  
  module.exports = router;