'use strict';

/**
 * pet service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pet.pet');
