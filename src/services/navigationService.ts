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
  category: Array<string>;
}
/**
 * @throws ClientApiError
 * @alpha
 */
export async function getNavigation(
  params: GetNavigationParams,
  navigationType: string,
  contextInstance: ShopwareApiInstance = defaultInstance
): Promise<NavigationResponse> {
  const resp = await contextInstance.invoke.post(
    getNavigationEndpoint(navigationType),
    params
  );

  return resp.data;
}
