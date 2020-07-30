import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";
//import axios, { AxiosInstance } from "axios";
import { createResponseInterceptor, errorInterceptor } from "./interceptors";
import * as https from 'https'

/**
 * @beta
 */
export interface ClientSettings {
  endpoint?: string;
  accessToken?: string;
  contextToken?: string;
  paginationLimit?: number;
  timeout?: number;
  languageId?: string;
  rejectUnauthorized?: boolean;
}

export const clientSettings: ClientSettings = {
  endpoint: "",
  accessToken: "",
  contextToken: "",
  languageId: "",
  paginationLimit: 10,
  timeout: 10000, // ms
  rejectUnauthorized: true
};

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
  update: (config: ClientSettings) => void;

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
export function createInstance(config: ClientSettings) {
  const callbackMethods: ((context: ConfigChangedArgs) => void)[] = [];
  let clientConfig: ClientSettings = clientSettings;
  const apiService: AxiosInstance = axios.create();

  function setConfiguration(configuration: ClientSettings) {

    if (configuration.rejectUnauthorized !== undefined) {
      apiService.defaults.httpsAgent = new https.Agent({
        rejectUnauthorized: configuration.rejectUnauthorized
      })
    }

    apiService.defaults.baseURL = configuration.endpoint;
    apiService.defaults.timeout = configuration.timeout;
    apiService.defaults.headers.common["sw-access-key"] = configuration.accessToken;
    if (configuration.contextToken) {
      apiService.defaults.headers.common["sw-context-token"] = configuration.contextToken;
    } else {
      delete apiService.defaults.headers.common["sw-context-token"];
    }
    if (configuration.languageId) {
      apiService.defaults.headers.common["sw-language-id"] = configuration.languageId;
    } else {
      delete apiService.defaults.headers.common["sw-language-id"];
    }
  }

  const setup = function (config: ClientSettings): void {
    setConfiguration(config);
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
    setConfiguration(clientConfig);
  };

  apiService.interceptors.response.use(
    createResponseInterceptor(update),
    errorInterceptor
  );

  function onConfigChange(fn: (context: ConfigChangedArgs) => void): void {
    callbackMethods.push(fn);
  }


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
    update,
    invoke,
    defaults: apiService.defaults,
  };
}

export const defaultInstance = createInstance(clientSettings);
