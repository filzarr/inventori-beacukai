const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL+"/api/v1" || "http://localhost:8000/api/v1";

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

const buildQuery = (params: Record<string, any>) =>
  Object.entries(params)
    .filter(([_, val]) => val !== undefined && val !== "")
    .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
    .join("&");

const withPagination = (page = 1, paginate = 20, q = "") => ({
  page,
  paginate,
  q,
});
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

// Users
export const getUsers = (params = withPagination()) =>
  apiFetch("/users", {}, params);

// Supliers
export const getSupliers = (params = withPagination()) =>
  apiFetch("/supliers", {}, params);
export const getSuplier = (id: string) => apiFetch(`/supliers/${id}`);
export const createSuplier = (data: any) =>
  apiFetch("/supliers", { method: "POST", body: JSON.stringify(data) });
export const updateSuplier = (id: string, data: any) =>
  apiFetch(`/supliers/${id}`, { method: "PUT", body: JSON.stringify(data) });
export const deleteSuplier = (id: string) =>
  apiFetch(`/supliers/${id}`, { method: "DELETE" });

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

// Currencies
export const getCurrencies = (params = withPagination()) =>
  apiFetch("/currencies", {}, params);
export const getCurrency = (id: string) => apiFetch(`/currencies/${id}`);
export const createCurrency = (data: any) =>
  apiFetch("/currencies", { method: "POST", body: JSON.stringify(data) });
export const updateCurrency = (id: string, data: any) =>
  apiFetch(`/currencies/${id}`, { method: "PUT", body: JSON.stringify(data) });
export const deleteCurrency = (id: string) =>
  apiFetch(`/currencies/${id}`, { method: "DELETE" });

// BC Documents
export const getBcDocuments = (params = withPagination()) =>
  apiFetch("/bc-documents", {}, params);
export const getBcDocument = (id: string) => apiFetch(`/bc-documents/${id}`);
export const createBcDocument = (data: any) =>
  apiFetch("/bc-documents", { method: "POST", body: JSON.stringify(data) });
export const updateBcDocument = (id: string, data: any) =>
  apiFetch(`/bc-documents/${id}`, { method: "PUT", body: JSON.stringify(data) });
export const deleteBcDocument = (id: string) =>
  apiFetch(`/bc-documents/${id}`, { method: "DELETE" });

// Contracts
export const getContracts = (params = withPagination()) =>
  apiFetch("/contracts", {}, params);
export const getContract = (id: string) => apiFetch(`/contracts/${id}`);
export const createContract = (data: any) =>
  apiFetch("/contracts", { method: "POST", body: JSON.stringify(data) });
export const updateContract = (id: string, data: any) =>
  apiFetch(`/contracts/${id}`, { method: "PUT", body: JSON.stringify(data) });
export const deleteContract = (id: string) =>
  apiFetch(`/contracts/${id}`, { method: "DELETE" });

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

// Transaction Incomes
export const getTransactionIncomes = (params = withPagination()) =>
  apiFetch("/transaction-incomes", {}, params);

export const getTransactionIncome = (id: string) =>
  apiFetch(`/transaction-incomes/${id}`);

export const createTransactionIncome = (data: any) =>
  apiFetch("/transaction-incomes", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const updateTransactionIncome = (id: string, data: any) =>
  apiFetch(`/transaction-incomes/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });

export const deleteTransactionIncome = (id: string) =>
  apiFetch(`/transaction-incomes/${id}`, {
    method: "DELETE",
  });

// Saldo Awal
export const getSaldoAwals = (params = withPagination()) =>
  apiFetch("/saldo-awals", {}, params);

export const getSaldoAwal = (id: string) =>
  apiFetch(`/saldo-awals/${id}`);

export const createSaldoAwal = (data: any) =>
  apiFetch("/saldo-awals", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const updateSaldoAwal = (id: string, data: any) =>
  apiFetch(`/saldo-awals/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });

export const deleteSaldoAwal = (id: string) =>
  apiFetch(`/saldo-awals/${id}`, {
    method: "DELETE",
  });

// Buyers
export const getBuyers = (params = withPagination()) =>
  apiFetch("/buyers", {}, params);
export const getBuyer = (id: string) => apiFetch(`/buyers/${id}`);
export const createBuyer = (data: any) =>
  apiFetch("/buyers", { method: "POST", body: JSON.stringify(data) });
export const updateBuyer = (id: string, data: any) =>
  apiFetch(`/buyers/${id}`, { method: "PUT", body: JSON.stringify(data) });
export const deleteBuyer = (id: string) =>
  apiFetch(`/buyers/${id}`, { method: "DELETE" });

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

// LaporanMutasi
export const getLaporanMutas = (params = withPagination()) =>
  apiFetch("/laporan-mutasi", {}, params);
