import { defaultInstance } from "../../../src/apiService";
import { getCategoryProductsListingWithIncludes } from "@shopware-js-api-wrapper";

jest.mock("../../../src/apiService");
const mockedApiInstance = defaultInstance as jest.Mocked<
  typeof defaultInstance
  >;

describe("ProductService - getCategoryProductsListingWithIncludes", () => {
  const mockedPost = jest.fn();
  beforeEach(() => {
    jest.resetAllMocks();
    mockedApiInstance.invoke = {
      post: mockedPost,
    } as any;
  });
  it("should return listing data with no parameters", async () => {
    mockedPost.mockResolvedValueOnce({
      data: { elements: [{ id: "044a190a54ab4f06803909c3ee8063ef" }] },
    });
    const categoryId = "044a190a54ab4f06803909c3ee8063ef";
    const result = await getCategoryProductsListingWithIncludes(categoryId);
    expect(mockedPost).toBeCalledTimes(1);
    expect(
      mockedPost
    ).toBeCalledWith(
      "/store-api/v1/product-listing/044a190a54ab4f06803909c3ee8063ef",
      { limit: 10 }
    );
    expect(result).toHaveProperty("elements");
  });
  it("should return listing data with parameters provided", async () => {
    mockedPost.mockResolvedValueOnce({
      data: { elements: [{ id: "044a190a54ab4f06803909c3ee8063ef" }] },
    });
    const categoryId = "044a190a54ab4f06803909c3ee8063ef";
    const result = await getCategoryProductsListingWithIncludes(categoryId, {
      "test": ["test"]
    }, {
      "shipping-free": true
    }, {
      "no-aggregations": true
    });
    expect(mockedPost).toBeCalledTimes(1);
    expect(
      mockedPost
    ).toBeCalledWith(
      "/store-api/v1/product-listing/044a190a54ab4f06803909c3ee8063ef",
      { includes: {
          "product_listing_sorting": ["key"]
        },
        limit: 10,
        "shipping-free": true,
        "no-aggregations": true
      }
    );
    expect(result).toHaveProperty("elements");
  });
});
