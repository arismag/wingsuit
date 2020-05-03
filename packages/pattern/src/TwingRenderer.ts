import IRenderer from "./IRenderer";
import {TwingNamespaceLoader} from "./TwingNamespaceLoader";
import {twigAttributeFunction} from "./twigExtensions";
import {renderPattern, renderPatternPreview} from "./twigRenderEngine";

const {TwingEnvironment, TwingFilter, TwingFunction} = require('twing');
const filters = require('twig-drupal-filters/filters');
const functions = require('twig-drupal-filters/functions');

export class TwingRenderer implements IRenderer {
  private environment;

  constructor() {
    const loader = new TwingNamespaceLoader({});
    this.environment = new TwingEnvironment(loader, {autoescape: false});

    Object.keys(filters).forEach((filterName) => {
      const filter = filters[filterName];
      this.environment.addFilter(new TwingFilter(filterName, filter));
    });
    Object.keys(functions).forEach((functionName) => {
      const filter = filters[functionName];
      this.environment.addFunction(new TwingFunction(functionName, filter));
    })
    this.environment.addFunction(new TwingFunction('attributes_object', twigAttributeFunction));
    this.environment.addFunction(new TwingFunction('pattern_preview', renderPatternPreview));
    this.environment.addFunction(new TwingFunction('pattern', renderPattern));

  }

  render(id: string, include: string, variables: {}): string {
    return this.environment.render(include, variables);
  }
}