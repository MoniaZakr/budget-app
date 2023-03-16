"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ExpenseDate(props) {
  var month = props.date.toLocaleString('en-US', {
    month: 'short'
  });
  var day = props.date.toLocaleString('en-US', {
    day: '2-digit'
  });
  var year = props.date.getFullYear();
  return;
}

var _default = ExpenseDate;
exports["default"] = _default;
//# sourceMappingURL=ExpenseDate.dev.js.map
