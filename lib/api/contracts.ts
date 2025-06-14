import { apiFetch } from "./api";


// Contracts Query Builder
export const contractsQuery = (
  page = 1,
  paginate = 100,
  q = "",
  document?: boolean
) => {
  const params: Record<string, any> = {
    page,
    paginate,
    q,
  };

  if (document !== undefined) {
    params.document = document;
  }

  return params;
};

// Contracts API
export const getContracts = (params = contractsQuery()) =>
  apiFetch("/contracts", {}, params);

export const getContract = (id: string) =>
  apiFetch(`/contracts/${id}`);

export const createContract = (data: any) =>
  apiFetch("/contracts", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const updateContract = (id: string, data: any) =>
  apiFetch(`/contracts/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });

export const deleteContract = (id: string) =>
  apiFetch(`/contracts/${id}`, {
    method: "DELETE",
  });

export const createDocumentContract = (data: any) =>
  apiFetch("/contracts/document", {
    method: "POST",
    body: JSON.stringify(data),
  });