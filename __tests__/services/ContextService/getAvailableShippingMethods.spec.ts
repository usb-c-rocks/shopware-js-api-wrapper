import { defaultInstance } from "../../../src/apiService";
import { getAvailableShippingMethods } from "@shopware-js-api-wrapper";

jest.mock("../../../src/apiService");
const mockedApiInstance = defaultInstance as jest.Mocked<
  typeof defaultInstance
>;

describe("ContextService - getAvailableShippingMethods", () => {
  const mockedGet = jest.fn();
  beforeEach(() => {
    jest.resetAllMocks();
    mockedApiInstance.invoke = {
      get: mockedGet,
    } as any;
  });
  it("should return array with shipping methods", async () => {
    mockedGet.mockResolvedValueOnce({ data: [{ id: 1 }, { id: 2 }] });

    const result = await getAvailableShippingMethods();
    expect(mockedGet).toBeCalledTimes(1);
    expect(mockedGet).toBeCalledWith("/store-api/v1/shipping-method");
    expect(result).toHaveLength(2);
  });
});
