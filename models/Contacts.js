const { model, Schema } = require('mongoose')

const ContactSchema = Schema({
  firstName: {
    type: String,
    required: [true, 'firstName is required'],
  },
  lastName: {
    type: String,
    required: [true, 'lastName is required'],
  },
  phoneNumber: {
    type: String,
    required: [true, 'phoneNumber is required'],
  },
  category: {
    type: String,
    required: [true, 'category is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
})

ContactSchema.methods.toJSON = function () {
  const { __v, createdAt, _id, ...contact } = this.toObject()
  contact.uid = _id
  return contact
}

module.exports = model('Contact', ContactSchema)
