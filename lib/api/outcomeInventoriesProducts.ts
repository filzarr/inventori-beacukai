import { apiFetch, withPagination } from "./api";


// Outcomes Inventories Products
export const getOutcomesInventoriesProducts = (params = withPagination()) =>
  apiFetch("/outcomes-inventories-products", {}, params);
export const getOutcomesInventoriesProduct = (id: string) =>
  apiFetch(`/outcomes-inventories-products/${id}`);
export const createOutcomesInventoriesProduct = (data: any) =>
  apiFetch("/outcomes-inventories-products", { method: "POST", body: JSON.stringify(data) });
export const updateOutcomesInventoriesProduct = (id: string, data: any) =>
  apiFetch(`/outcomes-inventories-products/${id}`, { method: "PUT", body: JSON.stringify(data) });
export const deleteOutcomesInventoriesProduct = (id: string) =>
  apiFetch(`/outcomes-inventories-products/${id}`, { method: "DELETE" });