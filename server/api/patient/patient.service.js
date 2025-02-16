const Patient = require('./patient.model');

exports.createPatient = async (patientData, user) => {
  try {
    const patient = new Patient({
      ...patientData,
      createdBy: user._id,
      updatedBy: user._id
    });
    return await patient.save();
  } catch (error) {
    return Promise.reject(error);
  }
};

exports.updatePatient = async (patientId, updateData, user) => {
  try {
    const patient = await Patient.findByIdAndUpdate(
      patientId,
      {
        ...updateData,
        updatedBy: user._id
      },
      { new: true }
    ).populate('doctor', 'name');

    if (!patient) {
      throw new Error('Patient not found');
    }
    return patient;
  } catch (error) {
    return Promise.reject(error);
  }
};

exports.deletePatient = async (patientId) => {
  try {
    const patient = await Patient.findByIdAndDelete(patientId);
    if (!patient) {
      throw new Error('Patient not found');
    }
    return patient;
  } catch (error) {
    return Promise.reject(error);
  }
};

exports.getAllPatients = async (query = {}) => {
  try {
    const { search, city, doctor, appointmentDate } = query;
    const filter = {};

    if (search) {
      filter.$or = [
        { name: new RegExp(search, 'i') },
        { mobile: new RegExp(search, 'i') },
        { city: new RegExp(search, 'i') }
      ];
    }

    if (city) {
      filter.city = new RegExp(city, 'i');
    }

    if (doctor) {
      filter.doctor = doctor;
    }

    if (appointmentDate) {
      const startDate = new Date(appointmentDate);
      startDate.setHours(0, 0, 0, 0);
      const endDate = new Date(appointmentDate);
      endDate.setHours(23, 59, 59, 999);
      
      filter.appointmentDateTime = {
        $gte: startDate,
        $lte: endDate
      };
    }

    return await Patient.find(filter)
      .populate('doctor', 'name')
      .sort({ appointmentDateTime: 1 });
  } catch (error) {
    return Promise.reject(error);
  }
};

exports.getPatientById = async (patientId) => {
  try {
    const patient = await Patient.findById(patientId).populate('doctor', 'name');
    if (!patient) {
      throw new Error('Patient not found');
    }
    return patient;
  } catch (error) {
    return Promise.reject(error);
  }
};