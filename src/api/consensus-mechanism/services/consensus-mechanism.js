'use strict';

/**
 * consensus-mechanism service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::consensus-mechanism.consensus-mechanism');
