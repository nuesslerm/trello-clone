/* eslint-disable quotes */
const mongoose = require('mongoose');
require('mongoose-type-email');

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  const Schema = mongoose.schema;
  const userSchema = Schema(
    {
      email: {
        type: mongoose.SchemaTypes.Email,
        unique: true,
        index: true,
        required: [true, `can't be blank`],
        match: [/^[a-zA-Z0-9_-]+$/, 'is invalid'],
      },
      password: { type: String, required: [true, `can't be blank`] },
      displayName: {
        type: String,
        unique: true,
        required: [true, 'DisplayName is required'],
      },
      imageUrl: { type: String, required: [true, `can't be blank`] },
    },
    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  // if (mongooseClient.modelNames().includes(modelName)) {
  //   mongooseClient.deleteModel(modelName);
  // }

  const Model = mongoose.model('users', userSchema);
  return Model;
};
