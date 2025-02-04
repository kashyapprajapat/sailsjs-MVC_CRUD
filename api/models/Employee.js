/* eslint-disable indent */
module.exports = {
  attributes: {
      empid: { type: 'number', autoIncrement: true, },
      empname: { type: 'string', required: true, },
      salary: { type: 'number', required: true, },
      status: { type: 'string', isIn: ['free', 'learning', 'work'], defaultsTo: 'free' },
  },
};
