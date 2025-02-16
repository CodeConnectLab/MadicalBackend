const Doctor = require('./docter.model');

exports.createDoctor = async (doctorData, user) => {
  try {
    const doctor = new Doctor({
      ...doctorData,
      createdBy: user._id,
      updatedBy: user._id
    });
    return await doctor.save();
  } catch (error) {
    return Promise.reject(error);
  }
};

exports.updateDoctor = async (doctorId, updateData, user) => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(
      doctorId,
      {
        ...updateData,
        updatedBy: user._id
      },
      { new: true }
    );
    if (!doctor) {
      throw new Error('Doctor not found');
    }
    return doctor;
  } catch (error) {
    return Promise.reject(error);
  }
};

exports.deleteDoctor = async (doctorId) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(doctorId);
    if (!doctor) {
      throw new Error('Doctor not found');
    }
    return doctor;
  } catch (error) {
    return Promise.reject(error);
  }
};

exports.toggleDoctorStatus = async (doctorId) => {
  try {
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      throw new Error('Doctor not found');
    }
    doctor.isActive = !doctor.isActive;
    return await doctor.save();
  } catch (error) {
    return Promise.reject(error);
  }
};

exports.getAllDoctors = async (query = {}) => {
  try {
    const { search, specialization, isActive } = query;
    const filter = {};

    if (search) {
      filter.$or = [
        { name: new RegExp(search, 'i') },
        { clinicName: new RegExp(search, 'i') },
        { mobile: new RegExp(search, 'i') }
      ];
    }

    if (specialization) {
      filter.specialization = specialization;
    }

    if (isActive !== undefined) {
      filter.isActive = isActive === 'true';
    }

    return await Doctor.find(filter).sort({ createdAt: -1 });
  } catch (error) {
    return Promise.reject(error);
  }
};

exports.getDoctorById = async (doctorId) => {
  try {
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      throw new Error('Doctor not found');
    }
    return doctor;
  } catch (error) {
    return Promise.reject(error);
  }
};