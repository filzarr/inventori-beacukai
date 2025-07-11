import { apiFetch, withPagination } from "./api";

export const incomeinventoriesquery = (
  page = 1,
  paginate = 100,
  q = "",
  full?: boolean
) => {
  const params: Record<string, any> = {
    page,
    paginate,
    q,
    full
  };

  if (full !== undefined) {
    params.full = full;
  }
  return params;
};

// Income Inventories Products
export const getIncomeInventoriesProducts = (params = incomeinventoriesquery()) =>
  apiFetch("/income-inventories-products", {}, params);
export const getIncomeInventoriesProduct = (id: string) =>
  apiFetch(`/income-inventories-products/${id}`);
export const createIncomeInventoriesProduct = (data: any) =>
  apiFetch("/income-inventories-products", { method: "POST", body: JSON.stringify(data) });
export const updateIncomeInventoriesProduct = (id: string, data: any) =>
  apiFetch(`/income-inventories-products/${id}`, { method: "PUT", body: JSON.stringify(data) });
export const deleteIncomeInventoriesProduct = (id: string) =>
  apiFetch(`/income-inventories-products/${id}`, { method: "DELETE" });