import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";
import { createResponseInterceptor, errorInterceptor } from "./interceptors";
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
  update: (config?: ClientSettings) => void;

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
  let clientConfig: ClientSettings = {};
  const apiService: AxiosInstance = axios.create();

  function reloadConfiguration() {
    apiService.defaults.baseURL = clientConfig.endpoint;
    apiService.defaults.timeout = clientConfig.timeout;
    apiService.defaults.headers.common["sw-access-key"] =
      clientConfig.accessToken;
    if (clientConfig.contextToken) {
      apiService.defaults.headers.common["sw-context-token"] =
        clientConfig.contextToken;
    } else {
      delete apiService.defaults.headers.common["sw-context-token"];
    }
    if (clientConfig.languageId) {
      apiService.defaults.headers.common["sw-language-id"] =
        clientConfig.languageId;
    } else {
      delete apiService.defaults.headers.common["sw-language-id"];
    }
  }

  function onConfigChange(fn: (context: ConfigChangedArgs) => void): void {
    callbackMethods.push(fn);
  }

  const setup = function (config: ClientSettings): void {
    apiService.defaults.baseURL = config.endpoint;
    apiService.defaults.timeout = config.timeout;
    if (config.rejectUnauthorized !== undefined) {
      apiService.defaults.httpsAgent = new https.Agent({
        rejectUnauthorized: config.rejectUnauthorized
      })
    }

    apiService.defaults.httpsAgent = new https.Agent({
      rejectUnauthorized: false
    })

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

  const update = function (
    config: ClientSettings,
    responseConfig?: AxiosResponse<AxiosRequestConfig>["config"]
  ): void {
    clientConfig = Object.assign(clientConfig, config);
    if (
      process.env.NODE_ENV !== "production" &&
      !callbackMethods.length &&
      responseConfig
    ) {
      console.warn(
        `[shopware-6-api] After calling API method ${responseConfig.url} there is no "onConfigChange" listener. See https://shopware-pwa-docs.vuestorefront.io/landing/fundamentals/security.html#context-awareness`
      );
    }
    callbackMethods.forEach((fn) => fn({ config: clientConfig }));
    reloadConfiguration();
  };

  const invoke = {
    post: apiService.post,
    put: apiService.put,
    get: apiService.get,
    patch: apiService.patch,
    delete: apiService.delete,
  };

  apiService.interceptors.response.use(
    createResponseInterceptor(update),
    errorInterceptor
  );

  return {
    onConfigChange,
    config: config,
    setup,
    update,
    invoke,
    defaults: apiService.defaults,
  };
}

/**
 *
 * @beta
 */
export function createInstance(
  initialConfig: ClientSettings = {}
): ShopwareApiInstance {
  const {
    onConfigChange,
    config,
    setup,
    update,
    invoke,
    defaults,
  } = _createInstance(initialConfig);

  return {
    onConfigChange,
    config,
    setup,
    update: (config: ClientSettings = {}): void => {
      update(config);
    },
    invoke,
    defaults,
  };
}

export const defaultInstance = createInstance();
