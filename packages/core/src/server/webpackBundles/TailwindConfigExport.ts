import * as path from 'path';
// Plugins:production
import Tailwind2JsonPlugin from "../plugins/Tailwind2JsonPlugin";
import {BaseWebpackBundle} from "../BaseWebpackBundle";


export default class TailwindConfigExport extends BaseWebpackBundle {
  protected sharedWebpackConfig = {
    plugins: [
      new Tailwind2JsonPlugin(
        path.resolve(`${this.appConfig.absRootPath}/tailwind.config`),
        path.resolve(`${this.appConfig.absAppPath}/_config/_silo/tailwind.json`)
      )
    ]
  }
}