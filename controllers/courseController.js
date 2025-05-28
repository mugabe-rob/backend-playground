const Course = require('../models/courseModel');

// Get all courses
exports.getAllCourses = (req, res) => {
  res.send(Course.getAll());
};

// Get course by ID
exports.getCourseById = (req, res) => {
  const course = Course.findById(parseInt(req.params.id));
  
  if (!course) {
    return res.status(404).send('The given id is not correct');
  }
  
  res.send(course);
};

// Create new course
exports.createCourse = (req, res) => {
  const course = Course.create(req.body);
  res.send(course);
};

// Update course
exports.updateCourse = (req, res) => {
  const course = Course.update(parseInt(req.params.id), req.body);
  
  if (!course) {
    return res.status(404).send('The id is not correct');
  }
  
  res.send(course);
};

// Delete course
exports.deleteCourse = (req, res) => {
  const course = Course.delete(parseInt(req.params.id));
  
  if (!course) {
    return res.status(404).send('The id is not correct');
  }
  
  res.send(course);
};