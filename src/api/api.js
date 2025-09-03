import axios from "axios";
// Create base Axios instance
const api = axios.create({
    baseURL: "https://gentlemanwell.shop/api/", // Your Django backend
    withCredentials: true, // <-- ensures cookies are sent for session auth
    headers: {
        "Content-Type": "application/json",
    },
});
// Request interceptor: add access token to headers
api.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken && config.headers) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
}, (error) => Promise.reject(error));
// Response interceptor: handle 401 errors (token expiration)
api.interceptors.response.use((response) => response, async (error) => {
    const originalRequest = error.config;
    // If access token expired, try to refresh
    if (error.response?.status === 401 &&
        !originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = localStorage.getItem("refresh_token");
        if (refreshToken) {
            try {
                const refreshResponse = await axios.post("https://gentlemanwell.shop/api/auth/refresh/", { refresh: refreshToken });
                // Update localStorage with new tokens
                localStorage.setItem("access_token", refreshResponse.data.access);
                localStorage.setItem("refresh_token", refreshResponse.data.refresh);
                // Update Authorization header and retry original request
                originalRequest.headers.Authorization = `Bearer ${refreshResponse.data.access}`;
                return api(originalRequest);
            }
            catch (refreshError) {
                console.error("Refresh token failed", refreshError);
                // Optional: logout user
                localStorage.clear();
                window.location.href = "/login";
            }
        }
    }
    return Promise.reject(error);
});
export default api;
