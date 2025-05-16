const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// To get all the courses
router.get('/', courseController.getAllCourses);

// Getting the course by id
router.get('/:id', courseController.getCourseById);

// Tom post a new course
router.post('/', courseController.createCourse);

// Updating the course
router.put('/:id', courseController.updateCourse);

// Deleting the course
router.delete('/:id', courseController.deleteCourse);

module.exports = router;