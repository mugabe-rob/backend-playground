const express = require('express');
const router = express.Router();

// ✅ Corrected path to controller after moving everything under src/
const courseController = require('../controllers/courseController');

// To get all the courses
router.get('/', courseController.getAllCourses);

// Getting the course by id
router.get('/:id', courseController.getCourseById);

// To post a new course
router.post('/', courseController.createCourse);

// Updating the course
router.put('/:id', courseController.updateCourse);

// Deleting the course
router.delete('/:id', courseController.deleteCourse);

module.exports = router;
