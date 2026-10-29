const BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const fetchAPI = async (endpoint, options = {}) => {
  const token = localStorage.getItem('adminToken');

  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const config = {
    ...options,
    headers,
  };

  let response;
  try {
    response = await fetch(`${BASE_URL}${endpoint}`, config);
  } catch (netErr) {
    throw new Error('Unable to connect to backend server. Please ensure backend is running.');
  }

  let data;
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    try {
      data = await response.json();
    } catch (e) {
      throw new Error('Invalid JSON response from server');
    }
  } else {
    // Non-JSON response (e.g. HTML or empty string)
    const text = await response.text();
    if (!response.ok) {
      throw new Error(`Server returned error (${response.status}): ${text || 'No response body'}`);
    }
    data = { success: true, text };
  }

  if (!response.ok) {
    throw new Error(data.message || `Request failed with status ${response.status}`);
  }

  return data;
};

export const api = {
  get: (endpoint) => fetchAPI(endpoint, { method: 'GET' }),
  post: (endpoint, body) =>
    fetchAPI(endpoint, { method: 'POST', body: JSON.stringify(body) }),
  put: (endpoint, body) =>
    fetchAPI(endpoint, { method: 'PUT', body: JSON.stringify(body) }),
  patch: (endpoint, body) =>
    fetchAPI(endpoint, { method: 'PATCH', body: JSON.stringify(body) }),
  delete: (endpoint) => fetchAPI(endpoint, { method: 'DELETE' }),
};

export default api;
