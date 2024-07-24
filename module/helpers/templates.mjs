/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  return loadTemplates([
    // Actor partials.
    'systems/neon-city-overdrive-unofficial/templates/actor/parts/actor-actions.hbs',
    'systems/neon-city-overdrive-unofficial/templates/actor/parts/actor-conditions.hbs',
    'systems/neon-city-overdrive-unofficial/templates/actor/parts/actor-drive.hbs',
    'systems/neon-city-overdrive-unofficial/templates/actor/parts/actor-effects.hbs',
    'systems/neon-city-overdrive-unofficial/templates/actor/parts/actor-flaws.hbs',
    'systems/neon-city-overdrive-unofficial/templates/actor/parts/actor-gear.hbs',
    'systems/neon-city-overdrive-unofficial/templates/actor/parts/actor-tags.hbs',
    'systems/neon-city-overdrive-unofficial/templates/actor/parts/actor-trademarks.hbs',
    'systems/neon-city-overdrive-unofficial/templates/actor/parts/actor-traumas.hbs',
    // Item partials
    'systems/neon-city-overdrive-unofficial/templates/item/parts/item-effects.hbs',
  ]);
};
