import { apiFetch, withPagination } from "./api";
export const productsQuery = (
  page = 1,
  paginate = 100,
  q = "",
  kategori?: string,
) => {
  const params: Record<string, any> = {
    page,
    paginate,
    q,
  };

  if (kategori !== undefined) {
    params["kategori"] = kategori; 
  }

  return params;
};
// Products
export const getProducts = (params = productsQuery()) =>
  apiFetch("/products", {}, params);
export const getProduct = (id: string) => apiFetch(`/products/${id}`);
export const createProduct = (data: any) =>
  apiFetch("/products", { method: "POST", body: JSON.stringify(data) });
export const updateProduct = (id: string, data: any) =>
  apiFetch(`/products/${id}`, { method: "PUT", body: JSON.stringify(data) });
export const deleteProduct = (id: string) =>
  apiFetch(`/products/${id}`, { method: "DELETE" });