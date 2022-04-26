'use strict';

/**
 *  pet controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::pet.pet');
