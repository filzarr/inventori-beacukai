import { apiFetch, withPagination } from "./api";

// Products
export const getProducts = (params = withPagination()) =>
  apiFetch("/products", {}, params);
export const getProduct = (id: string) => apiFetch(`/products/${id}`);
export const createProduct = (data: any) =>
  apiFetch("/products", { method: "POST", body: JSON.stringify(data) });
export const updateProduct = (id: string, data: any) =>
  apiFetch(`/products/${id}`, { method: "PUT", body: JSON.stringify(data) });
export const deleteProduct = (id: string) =>
  apiFetch(`/products/${id}`, { method: "DELETE" });