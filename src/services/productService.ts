import {
  getProductEndpoint,
  getProductDetailsEndpoint,
  getProductsIdsEndpoint,
  getProductListingEndpoint,
} from "../endpoints";
import { ProductListingResult } from "@shopware-js-api-wrapper/commons/interfaces/response/ProductListingResult";
import { Product } from "@shopware-js-api-wrapper/commons/interfaces/models/content/product/Product";
import { SearchCriteria } from "@shopware-js-api-wrapper/commons/interfaces/search/SearchCriteria";
import { SearchResult } from "@shopware-js-api-wrapper/commons/interfaces/response/SearchResult";
import { convertSearchCriteria, ApiType } from "../helpers/searchConverter";
import { defaultInstance, ShopwareApiInstance } from "../apiService";
import {
  mergeIncludesAndFilters, ProductAggregationOptions,
  ProductIncludes,
  ProductSeoFilter
} from '@shopware-js-api-wrapper/helpers/mergeIncludesAndFilters'

/**
 * Get default amount of products' ids
 *
 * @throws ClientApiError
 * @alpha
 */
export const getProductsIds = async function (
  options?: any,
  contextInstance: ShopwareApiInstance = defaultInstance
): Promise<SearchResult<string[]>> {
  const resp = await contextInstance.invoke.post(getProductsIdsEndpoint());
  return resp.data;
};

/**
 * Get default amount of products
 *
 * @throws ClientApiError
 * @alpha
 */
export const getProducts = async function (
  searchCriteria?: SearchCriteria,
  contextInstance: ShopwareApiInstance = defaultInstance
): Promise<SearchResult<Product[]>> {
  const resp = await contextInstance.invoke.post(
    `${getProductEndpoint()}`,
    convertSearchCriteria({ searchCriteria, config: contextInstance.config })
  );
  return resp.data;
};

/**
 * Get default amount of products and listing configuration for given category
 *
 * @throws ClientApiError
 * @alpha
 */
export const getCategoryProductsListing = async function (
  categoryId: string,
  searchCriteria?: SearchCriteria,
  contextInstance: ShopwareApiInstance = defaultInstance
): Promise<ProductListingResult> {
  const resp = await contextInstance.invoke.post(
    `${getProductListingEndpoint(categoryId)}`,
    convertSearchCriteria({
      searchCriteria,
      apiType: ApiType.store,
      config: contextInstance.config,
    })
  );
  return resp.data;
};

/**
 * Get default amount of products and listing configuration for given category
 *
 * @throws ClientApiError
 * @alpha
 */
export const getCategoryProductsListingWithIncludes = async function (
  categoryId: string,
  productIncludes: ProductIncludes = {},
  productSeoFilter: ProductSeoFilter = {},
  productAggregationOptions: ProductAggregationOptions = {},
  contextInstance: ShopwareApiInstance = defaultInstance
): Promise<ProductListingResult> {
  const resp = await contextInstance.invoke.post(
    `${getProductListingEndpoint(categoryId)}`,
    mergeIncludesAndFilters(
      productIncludes,
      productSeoFilter,
      productAggregationOptions,
      contextInstance.config
    )
  );
  return resp.data;
};


/**
 * Get the product with passed productId
 *
 * @throws ClientApiError
 * @alpha
 */
export async function getProduct(
  productId: string,
  params: any = null,
  contextInstance: ShopwareApiInstance = defaultInstance
): Promise<Product> {
  const resp = await contextInstance.invoke.get(
    getProductDetailsEndpoint(productId),
    {
      params,
    }
  );
  return resp.data.data;
}
