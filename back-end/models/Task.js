const { Schema, model, Types } = require('mongoose');

const taskSchema = new Schema(
  {
    title: {
      type: String,
      maxlength: 25,
    },
    description: {
      type: String,
      required: [true, 'Please provide a task description'],
      maxlength: 100,
    },
    createdBy: {
      type: Types.ObjectId,
      ref: 'User',
      required: [true, 'No user found to assign this task'],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = model('Task', taskSchema);
