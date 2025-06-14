import { apiFetch, withPagination } from "./api";


// Income Inventories Products
export const getIncomeInventoriesProducts = (params = withPagination()) =>
  apiFetch("/income-inventories-products", {}, params);
export const getIncomeInventoriesProduct = (id: string) =>
  apiFetch(`/income-inventories-products/${id}`);
export const createIncomeInventoriesProduct = (data: any) =>
  apiFetch("/income-inventories-products", { method: "POST", body: JSON.stringify(data) });
export const updateIncomeInventoriesProduct = (id: string, data: any) =>
  apiFetch(`/income-inventories-products/${id}`, { method: "PUT", body: JSON.stringify(data) });
export const deleteIncomeInventoriesProduct = (id: string) =>
  apiFetch(`/income-inventories-products/${id}`, { method: "DELETE" });