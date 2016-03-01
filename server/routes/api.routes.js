import { Router } from 'express';
import * as ApiController from '../controllers/api.controller';
const router = new Router();

// Get an array of courses
router.route('/search').get(ApiController.getCourses);

// Get an array of suggestions according to input
router.route('/suggest').get(ApiController.getSuggests);

export default router;
