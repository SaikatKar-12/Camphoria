const express = require('express');

const UserController = require('../../controllers/user-controller');
const RoleController = require('../../controllers/role-controller');
const ConvenorController = require('../../controllers/convenor-controller');    
const teacherController = require('../../controllers/teacher-controller');
const {AuthRequestValidators} = require('../../middlewares/index');

const router = express.Router();

router.post(
    '/signup',
    AuthRequestValidators.validateUserAuth,
    UserController.create
);
router.post(
    '/signin',
    AuthRequestValidators.validateUserAuth,
    UserController.signIn
);
router.get(
    '/isAuthenticated',
    UserController.isAuthenticated
);

router.post(
    '/convenorSignup',
    //AuthRequestValidators.validateUserAuth,
    ConvenorController.create
);
router.post(
    '/ConvenorSignin',
    AuthRequestValidators.validateUserAuth,
    ConvenorController.signIn
);
router.get(
    '/convenorisAuthenticated',
    ConvenorController.isAuthenticated
);

router.post(
    '/teacherSignup',
    //AuthRequestValidators.validateUserAuth,
    teacherController.create
);
router.post(
    '/teacherSignin',
    //AuthRequestValidators.validateUserAuth,
    teacherController.signIn
);
router.get(
    '/teacherisAuthenticated',
    teacherController.isAuthenticated
);

//router.get('/email',UserController.get);
router.post(
    '/role',
    RoleController.create
);
router.post(
    '/isTeacher',
    UserController.isTeacher
);
router.post(
    '/isConvenor',
    UserController.isConvenor
);
router.post(
    '/addUserRole',
    UserController.addUserRole
);

module.exports=router;