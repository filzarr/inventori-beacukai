import { apiFetch, withPagination } from "./api";



// Income Inventories
export const getIncomeInventories = (params = withPagination()) =>
  apiFetch("/income-inventories", {}, params);
export const getIncomeInventory = (id: string) => apiFetch(`/income-inventories/${id}`);
export const createIncomeInventory = (data: any) =>
  apiFetch("/income-inventories", { method: "POST", body: JSON.stringify(data) });
export const updateIncomeInventory = (id: string, data: any) =>
  apiFetch(`/income-inventories/${id}`, { method: "PUT", body: JSON.stringify(data) });
export const deleteIncomeInventory = (id: string) =>
  apiFetch(`/income-inventories/${id}`, { method: "DELETE" });