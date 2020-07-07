import axios, { AxiosInstance } from "axios";
// import { createResponseInterceptor, errorInterceptor } from "./interceptors";
import { ClientSettings, clientSettings } from "./settings";
import * as https from 'https'

/**
 * @beta
 */
export interface ConfigChangedArgs {
  config: ClientSettings;
}

/**
 * @beta
 */
export interface ShopwareApiInstance {
  onConfigChange: (fn: (context: ConfigChangedArgs) => void) => void;
  config: ClientSettings;
  setup: (config: ClientSettings) => void;

  invoke: {
    post: AxiosInstance["post"];
    get: AxiosInstance["get"];
    put: AxiosInstance["put"];
    patch: AxiosInstance["patch"];
    delete: AxiosInstance["delete"];
  };
  defaults: AxiosInstance["defaults"];
}

/**
 * Internal method for creating new instance, exported only for tests, not exported by package
 */
export function _createInstance(config: ClientSettings) {
  const callbackMethods: ((context: ConfigChangedArgs) => void)[] = [];
  const apiService: AxiosInstance = axios.create();

  function onConfigChange(fn: (context: ConfigChangedArgs) => void): void {
    callbackMethods.push(fn);
  }

  const setup = function (config: ClientSettings): void {
    apiService.defaults.baseURL = config.endpoint;
    apiService.defaults.timeout = config.timeout;
    if (config.rejectUnauthorized) {
      apiService.defaults.httpsAgent = new https.Agent({
        rejectUnauthorized: false
      })
    }
    apiService.defaults.headers.common["sw-access-key"] =
      config.accessToken;
    if (config.contextToken) {
      apiService.defaults.headers.common["sw-context-token"] =
        config.contextToken;
    } else {
      delete apiService.defaults.headers.common["sw-context-token"];
    }
    if (config.languageId) {
      apiService.defaults.headers.common["sw-language-id"] =
        config.languageId;
    } else {
      delete apiService.defaults.headers.common["sw-language-id"];
    }
  };

  setup(config);

  const invoke = {
    post: apiService.post,
    put: apiService.put,
    get: apiService.get,
    patch: apiService.patch,
    delete: apiService.delete,
  };

  return {
    onConfigChange,
    config: config,
    setup,
    invoke,
    defaults: apiService.defaults,
  };
}

/**
 *
 * @beta
 */
export function createInstance(
  clientConfig: ClientSettings
): ShopwareApiInstance {
  const {
    onConfigChange,
    config,
    setup,
    invoke,
    defaults,
  } = _createInstance(clientConfig);

  return {
    onConfigChange,
    config,
    setup,
    invoke,
    defaults,
  };
}

export const defaultInstance = createInstance(clientSettings);
