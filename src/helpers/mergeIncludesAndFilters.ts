// See https://docs.shopware.com/en/shopware-platform-dev-en/store-api-guide/products?category=shopware-platform-dev-en/store-api-guide

import { ClientSettings } from '@shopware-js-api-wrapper'

export interface ProductSeoFilter {
  manufacturer?: string;
  properties?: string;
  rating?: number; // to be handled later on
  "shipping-free"?: boolean; // to be handled later on
  "min-price"?: number; // to be handled later on
  "max-price"?: number; // to be handled later on
  p?: number,
  limit?: number //  Limit is not documented as a ProductSeoFilter but exists on the same level
  order?: string, // asc or desc
}

export interface ProductAggregationOptions {
  "no-aggregations"?: boolean,
  "reduce-aggregations"?: boolean,
  "only-aggregations"?: boolean
}

export interface ProductIncludes {
  [key: string]: string[]
}

export interface ProductParams {
 [key: string]: any
}

export function mergeIncludesAndFilters(
  productIncludes: ProductIncludes,
  productSeoFilter: ProductSeoFilter,
  productAggregationOptions: ProductAggregationOptions,
  config: ClientSettings
): ProductParams {
  // Set limit to default if not specified
  if (!productSeoFilter.limit || productSeoFilter.limit === null) {
    productSeoFilter.limit = config.defaultPaginationLimit
  }
  const params: ProductParams = Object.assign(productSeoFilter, productAggregationOptions)

  if (!isEmpty(productIncludes)) {
    params.includes = productIncludes
  }

  return params
}

function isEmpty(obj: object) {
  for(const key in obj) {
    if(Object.prototype.hasOwnProperty.call(obj, key))
      return false;
  }
  return true;
}
