import { apiFetch, withPagination } from "./api";

// Contracts Query Builder
export const productsMovementQuery = (
  page = 1,
  paginate = 100,
  q = "",
  status?: string
) => {
  const params: Record<string, any> = {
    page,
    paginate,
    q,
  };

  if (status !== undefined) {
    params.status = status;
  }

  return params;
};
// ProductMovement
export const getProductsMovements = (params = productsMovementQuery()) =>
  apiFetch("/products_movement", {}, params);
export const getProductsMovement = (id: string) => apiFetch(`/products_movement/${id}`);
export const createProductsMovement = (data: any) =>
  apiFetch("/products_movement", { method: "POST", body: JSON.stringify(data) });
export const updateStatusProductsMovement = (data: any) =>
  apiFetch("/products-movement-status", { method: "POST", body: JSON.stringify(data) });
export const updateProductsMovement = (id: string, data: any) =>
  apiFetch(`/products_movement/${id}`, { method: "PUT", body: JSON.stringify(data) });
export const deleteProductsMovement = (id: string) =>
  apiFetch(`/products_movement/${id}`, { method: "DELETE" });