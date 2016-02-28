import { Router } from 'express';
import * as CourseController from '../controllers/course.controller';
const router = new Router();

// Get an array of courses
router.route('/search').get(CourseController.getCourses);

// Get an array of suggestions according to input
router.route('/suggest').get(CourseController.getSuggests);

export default router;
