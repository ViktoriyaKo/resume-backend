'use strict';

/**
 * router service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::router.router');
