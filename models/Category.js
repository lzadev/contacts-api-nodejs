const { Schema, model } = require('mongoose')

const CategorySchema = Schema({
  name: String,
})

CategorySchema.methods.toJSON = function () {
  const { __v, _id, ...category } = this.toObject()
  category.uid = _id
  return category
}

module.exports = model('Categories', CategorySchema)
