import { Category } from "@shopware-api-client/commons/interfaces/models/content/category/Category";
import { getCategoryEndpoint, getCategoryDetailsEndpoint } from "../settings/endpoints";
import { convertSearchCriteria } from "../helpers/searchConverter";
import { SearchResult } from "@shopware-api-client/commons/interfaces/response/SearchResult";
import { defaultInstance, ShopwareApiInstance } from "./apiService";
import { SearchCriteria } from "@shopware-api-client/commons/interfaces/search/SearchCriteria";

/**
 * @throws ClientApiError
 * @alpha
 */
export async function getCategories(
  searchCriteria?: SearchCriteria,
  contextInstance: ShopwareApiInstance = defaultInstance
): Promise<SearchResult<Category[]>> {
  const resp = await contextInstance.invoke.post(
    getCategoryEndpoint(),
    convertSearchCriteria({ searchCriteria, config: contextInstance.config })
  );

  return resp.data;
}

/**
 * @throws ClientApiError
 * @alpha
 */
export async function getCategory(
  categoryId: string,
  contextInstance: ShopwareApiInstance = defaultInstance
): Promise<Category> {
  const resp = await contextInstance.invoke.get(
    getCategoryDetailsEndpoint(categoryId)
  );

  return resp.data.data;
}
