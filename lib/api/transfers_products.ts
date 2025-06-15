import { apiFetch, withPagination } from "./api";

// Transfers Products
export const getTransfersProducts = (params = withPagination()) =>
  apiFetch("/transfers-products", {}, params);

export const getTransferProduct = (id: string) =>
  apiFetch(`/transfers-products/${id}`);

export const createTransferProduct = (data: any) =>
  apiFetch("/transfers-products", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const updateTransferProduct = (id: string, data: any) =>
  apiFetch(`/transfers-products/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });

export const deleteTransferProduct = (id: string) =>
  apiFetch(`/transfers-products/${id}`, {
    method: "DELETE",
  });