'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sensitive = exports.sensitive = function sensitive(content, words) {
  return content.replace(new RegExp(words.join('|'), 'ig'), '***');
};