'use strict';

/**
 *  page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::page.page', ({ strapi }) => ({
  async findOne(ctx) {
    const { query } = ctx;

    query.populate = 'deep,5'

    const [slug, category] = ctx.params.id.split(',').reverse();

    query.filters = {
      ...(query.filters || {}),
      slug: { '$eq': slug },
      category: category ? {
        slug: { '$eq': category },
      } : null
    }
    const entity = await strapi.service('api::page.page').find(query);
    const { results } = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(results[0]);
  }
}));
