'use strict';

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _react2.default.createClass({
  displayName: 'exports',

  render: function render() {
    return _react2.default.createElement(
      'p',
      null,
      'react module says its: ',
      (0, _moment2.default)().calendar()
    );
  }
});