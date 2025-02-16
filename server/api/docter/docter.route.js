'use strict';

const express = require('express'),
    { joiValidate } = require("../../helpers/apiValidation.helper"),
    controller = require('./docter.controller'),
    auth = require('../auth/auth.service'),
    validationInputs = require('./docter.validation'),
    router = express.Router(),
    usersVersion = '/v1',
    options = {
        wantResponse: true,
    };

// Create new doctor
router.post(
    usersVersion + '/doctors',
    auth.isAuthenticated({

    }),
    // joiValidate(validationInputs.createDoctor),
    controller.createDoctor
  );
  
  // Update doctor
  router.put(
    usersVersion + '/doctors/:id',
    auth.isAuthenticated({

    }),
    // joiValidate(validationInputs.updateDoctor),
    controller.updateDoctor
  );
  
  // Delete doctor
  router.delete(
    usersVersion + '/doctors/:id',
    auth.isAuthenticated({

    }),
    controller.deleteDoctor
  );
  
  // Toggle doctor status
  router.patch(
    usersVersion + '/doctors/:id/toggle-status',
    auth.isAuthenticated({

    }),
    controller.toggleDoctorStatus
  );
  
  // Get all doctors
  router.get(
    usersVersion + '/doctors',
    auth.isAuthenticated({

    }),
    controller.getAllDoctors
  );
  
  // Get doctor by ID
  router.get(
    usersVersion + '/doctors/:id',
    auth.isAuthenticated({

    }),
    controller.getDoctorById
  );
  
  module.exports = router;