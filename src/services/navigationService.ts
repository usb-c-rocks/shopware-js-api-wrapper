import { getNavigationEndpoint } from "../endpoints";
import { defaultInstance, ShopwareApiInstance } from "../apiService";
import { NavigationResponse } from "@shopware-api-client/commons/interfaces/models/content/navigation/Navigation";

/**
 * @alpha
 */
export interface GetNavigationParams {
  depth: number;
  includes?: GetNavigationIncludes,
  buildTree?: boolean
}

/**
 * @alpha
 */
export interface GetNavigationIncludes {
  category: string[];
}

export enum NavigationType {
  Main = "main-navigation",
  Footer = "service-navigation",
  Service = "footer-navigation"
}

/**
 * @throws ClientApiError
 * @alpha
 */
export async function getNavigation(
  params: GetNavigationParams,
  navigationType: NavigationType | string = NavigationType.Main,
  contextInstance: ShopwareApiInstance = defaultInstance
): Promise<NavigationResponse> {
  params.includes = {
    category: ['id', 'name', 'children', 'translated']
  }
  const resp = await contextInstance.invoke.post(
    getNavigationEndpoint(navigationType),
    params
  );

  return resp.data;
}
