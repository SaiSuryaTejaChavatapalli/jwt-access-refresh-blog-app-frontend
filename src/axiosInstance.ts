import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/",
  withCredentials: true, // Send cookies with every request
});

// Adding an interceptor to handle token renewal
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await axiosInstance.post(
          "/auth/refresh-token",
          {},
          {
            withCredentials: true,
          }
        );

        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${res.data.accessToken}`;
        return axiosInstance(originalRequest);
      } catch (err) {
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
