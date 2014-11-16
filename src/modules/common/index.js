'use strict';

module.exports =
  angular.module('doks.common', [
    require('./directives').name,
    require('./filters').name,
    require('./services').name
  ]);
