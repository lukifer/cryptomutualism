'use strict';

/**
 * argument service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::argument.argument');
