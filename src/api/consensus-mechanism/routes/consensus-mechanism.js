'use strict';

/**
 * consensus-mechanism router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::consensus-mechanism.consensus-mechanism');
