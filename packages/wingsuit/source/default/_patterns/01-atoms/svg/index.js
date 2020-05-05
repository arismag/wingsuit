/**
 * svg
 */

import svg4everybody from 'svg4everybody';

// Module template
import './_icons.generated.css';
import './_svg.twig';
import './_svg--icon.twig';

const patternDefinition = require('./svg.wingsuit.yml');

export const name = 'svg';

export const defaults = {
  patternDefinition: patternDefinition
};

/**
 * Components may need to run clean-up tasks if they are removed from DOM.
 *
 * @param {jQuery} $context - A piece of DOM
 * @param {Object} settings - Pertinent settings
 */
// eslint-disable-next-line no-unused-vars
export function disable($context, settings) {}

/**
 * Each component has a chance to run when its enable function is called. It is
 * given a piece of DOM ($context) and a settings object. We destructure our
 * component key off the settings object and provide an empty object fallback.
 * Incoming settings override default settings via Object.assign().
 *
 * @param {jQuery} $context - A piece of DOM
 * @param {Object} settings - Settings object
 */
export function enable() {
  // Enable svg4everybody.
  svg4everybody();
}

export default enable;
