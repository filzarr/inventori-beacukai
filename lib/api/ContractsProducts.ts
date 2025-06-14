import { apiFetch, withPagination } from "./api";
const withPaginationContractProduct = (
  page = 1,
  paginate = 20,
  q = "",
  noKontrak?: string
) => {
  const params: Record<string, any> = {
    page,
    paginate,
    q,
  };

  if (noKontrak) {
    params.noKontrak = noKontrak;
  }

  return params;
};

// Contract Products
export const getContractProducts = (params = withPaginationContractProduct()) =>
  apiFetch("/contract-products", {}, params);
export const getContractProduct = (id: string) => apiFetch(`/contract-products/${id}`);
export const createContractProduct = (data: any) =>
  apiFetch("/contract-products", { method: "POST", body: JSON.stringify(data) });
export const updateContractProduct = (id: string, data: any) =>
  apiFetch(`/contract-products/${id}`, { method: "PUT", body: JSON.stringify(data) });
export const deleteContractProduct = (id: string) =>
  apiFetch(`/contract-products/${id}`, { method: "DELETE" });