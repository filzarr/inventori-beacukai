export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL + "/api/v1" || "http://localhost:8000/api/v1";

export async function apiFetch<T = any>(
  path: string,
  options: RequestInit = {},
  queryParams?: Record<string, any>
): Promise<T> {
  const query = queryParams ? `?${buildQuery(queryParams)}` : "";
  console.log(`${BASE_URL}${path}${query}`)
  const res = await fetch(`${BASE_URL}${path}${query}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(error || "API error");
  }

  return res.json();
}

export const buildQuery = (params: Record<string, any>) =>
  Object.entries(params)
    .filter(([_, val]) => val !== undefined && val !== "")
    .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
    .join("&");

export const withPagination = (page = 1, paginate = 20, q = "") => ({
  page,
  paginate,
  q,
});

// Users
export const getUsers = (params = withPagination()) =>
  apiFetch("/users", {}, params);







export * from './BcDocuments'
export * from './buyers'
export * from './contracts'
export * from './ContractsProducts'
export * from './currencies'
export * from './incomeInventories'
export * from './incomeInventoriesProducts'
export * from './laporan'
export * from './products'
export * from './readyProducts'
export * from './saldoAwals'
export * from './supliers'