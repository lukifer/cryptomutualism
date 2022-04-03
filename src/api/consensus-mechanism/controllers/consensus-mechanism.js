'use strict';

/**
 *  consensus-mechanism controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::consensus-mechanism.consensus-mechanism');
