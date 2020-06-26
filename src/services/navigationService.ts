import { getNavigationEndpoint } from "../settings/endpoints";
import { defaultInstance, ShopwareApiInstance } from "./apiService";
import { NavigationResponse } from "@shopware-api-client/commons/interfaces/models/content/navigation/Navigation";

/**
 * @alpha
 */
export interface GetNavigationParams {
  depth: number;
  rootNode?: string;
}
/**
 * @throws ClientApiError
 * @alpha
 */
export async function getNavigation(
  params: GetNavigationParams,
  contextInstance: ShopwareApiInstance = defaultInstance
): Promise<NavigationResponse> {
  const resp = await contextInstance.invoke.post(
    getNavigationEndpoint(),
    params
  );

  return resp.data;
}
