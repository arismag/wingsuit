/**
 * Share atomic concepts with Webpack, Gulp, Pattern Lab, Drupal, etc
 */

const path = require('path');

//const patterns = path.resolve(__dirname, '_patterns');
//const patterns = path.resolve('source/default', '_patterns');
const patterns = 'source/default/_patterns';
module.exports = {
  // Outside of atomic concepts
  tokens: path.resolve(__dirname, 'tokens'),
  clientside: path.resolve(__dirname, 'clientside'),
  // Atomic concepts
  protons: path.resolve(patterns, '00-protons'),
  atoms: path.resolve(patterns, '01-atoms'),
  molecules: path.resolve(patterns, '02-molecules'),
  organisms: path.resolve(patterns, '03-organisms'),
  templates: path.resolve(patterns, '04-templates'),
  pages: path.resolve(patterns, '05-pages'),
};
