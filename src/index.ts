import { defaultInstance, ConfigChangedArgs, ClientSettings } from "./apiService";
export {
  ClientSettings,
  createInstance,
  ConfigChangedArgs,
  ShopwareApiInstance,
} from "./apiService";

export * from "./services/categoryService";
export * from "./services/productService";
export * from "./services/customerService";
export * from "./services/contextService";
export * from "./services/cartService";
export * from "./services/navigationService";
export * from "./services/pageService";
export * from "./services/checkoutService";
export * from "./services/pluginService";
export * from "./services/searchService";

export { ShopwareParams } from "./helpers/searchConverter";

/**
 * @beta
 */
export const config: ClientSettings = defaultInstance.config;
/**
 * Setup configuration. Merge default values with provided in param.
 * This method will override existing config. For config update invoke **update** method.
 * @beta
 */
export const setup: (config: ClientSettings) => void = defaultInstance.setup;

/**
 * @beta
 */
export const onConfigChange: (
  fn: (context: ConfigChangedArgs) => void
) => void = defaultInstance.onConfigChange;

