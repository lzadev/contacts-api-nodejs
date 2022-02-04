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

router.get('/', getAllContacts)
router.post(
  '/',
  [
    check('firstName', 'The firstName is required').not().isEmpty(),
    check('lastName', 'The lastName is required').not().isEmpty(),
    check('phoneNumber', 'The phoneNumber is required').not().isEmpty(),
    check('phoneNumber', 'You must provide a valid phoneNumber').isLength({min:10,max:10}),
    check('phoneNumber').custom(pNumber =>{
      if(pNumber.includes('-')){
        throw new Error('phoneNumber cannot container any specials charaters')
      }
    }),
    validateErrrors,
  ],
  createContact,
)
router.put('/:id', updateContact)
router.delete('/:id', deleteContact)

module.exports = router
