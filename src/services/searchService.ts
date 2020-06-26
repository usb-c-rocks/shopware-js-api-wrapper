import { getSuggestSearchEndpoint, getSearchEndpoint } from "../endpoints";
import { defaultInstance, ShopwareApiInstance } from "../apiService";
import { SearchCriteria } from "@shopware-api-client/commons/interfaces/search/SearchCriteria";
import { convertSearchCriteria, ApiType } from "../helpers/searchConverter";
import { ProductListingResult } from "@shopware-api-client/commons/interfaces/response/ProductListingResult";

/**
 * @throws ClientApiError
 * @beta
 */
export async function getSuggestedResults(
  term: string,
  searchCriteria?: SearchCriteria,
  contextInstance: ShopwareApiInstance = defaultInstance
): Promise<ProductListingResult> {
  const resp = await contextInstance.invoke.post(
    `${getSuggestSearchEndpoint()}?search=${term}`,
    {
      ...convertSearchCriteria({
        searchCriteria,
        apiType: ApiType.store,
        config: contextInstance.config,
      }),
    }
  );

  return resp.data;
}

/**
 * @throws ClientApiError
 * @beta
 */

export async function getResults(
  term: string,
  searchCriteria?: SearchCriteria,
  contextInstance: ShopwareApiInstance = defaultInstance
): Promise<ProductListingResult> {
  const resp = await contextInstance.invoke.post(
    `${getSearchEndpoint()}?search=${term}`,
    {
      ...convertSearchCriteria({
        searchCriteria,
        apiType: ApiType.store,
        config: contextInstance.config,
      }),
    }
  );

  return resp.data;
}
