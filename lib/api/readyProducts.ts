import { apiFetch, withPagination } from "./api";

// Ready Products
export const getReadyProducts = (params = withPagination()) =>
  apiFetch("/ready-products", {}, params);
export const getReadyProduct = (id: string) => apiFetch(`/ready-products/${id}`);
export const createReadyProduct = (data: any) =>
  apiFetch("/ready-products", { method: "POST", body: JSON.stringify(data) });
export const updateReadyProduct = (id: string, data: any) =>
  apiFetch(`/ready-products/${id}`, { method: "PUT", body: JSON.stringify(data) });
export const deleteReadyProduct = (id: string) =>
  apiFetch(`/ready-products/${id}`, { method: "DELETE" });