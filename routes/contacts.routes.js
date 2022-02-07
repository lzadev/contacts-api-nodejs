const express = require('express')
const { check } = require('express-validator')
const router = express.Router()
const validateErrrors = require('../middlewares/validate-errors')

const {
  getAllContacts,
  createContact,
  updateContact,
  deleteContact,
} = require('../controllers/contact.controller')
const { existsContactById, existCategory } = require('../helpers/database-validations')

router.get('/', getAllContacts)
router.post(
  '/',
  [
    check('firstName', 'The firstName is required').not().isEmpty(),
    check('lastName', 'The lastName is required').not().isEmpty(),
    check('phoneNumber', 'The phoneNumber is required').not().isEmpty(),
    check('phoneNumber', 'You must provide a valid phoneNumber').isLength({
      min: 10,
      max: 10,
    }),
    check('category').custom(existCategory),
    validateErrrors,
  ],
  createContact,
)
router.put('/:id',[
  check('id', 'You must provide a valid id').isMongoId(),
  check('id').custom(existsContactById),
  check('firstName', 'The firstName is required').not().isEmpty(),
  check('lastName', 'The lastName is required').not().isEmpty(),
  check('phoneNumber', 'The phoneNumber is required').not().isEmpty(),
  check('phoneNumber', 'You must provide a valid phoneNumber').isLength({
    min: 10,
    max: 10,
  }),
  check('category').custom(existCategory),
  validateErrrors,
], updateContact)
router.delete(
  '/:id',
  [
    check('id', 'You must provide a valid id').isMongoId(),
    check('id').custom(existsContactById),
    validateErrrors,
  ],
  deleteContact,
)

module.exports = router
