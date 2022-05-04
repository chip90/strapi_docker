'use strict';

/**
 * workorder service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::workorder.workorder');
