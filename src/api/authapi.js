import axios from "axios";
import Swal from "sweetalert2";

    const apiBase = "https://oxadmedia.in";

export const refreshAccessToken = async (mobile) => {
  try {
    const res = await axios.post(
      `${apiBase}/api/refresh-token-ai`,
      { mob: mobile },
      { withCredentials: true }
    );

    if (res.data.success && res.data.access_token) {
      localStorage.setItem("accessToken", res.data.access_token);
      return res.data.access_token;
    }

    if (res.data.error !== 111) {
      Swal.fire({
        icon: "warning",
        title: "Session Expired",
        text: "Please login again.",
      });

      return null;
    }

    Swal.fire({
      icon: "error",
      title: "Server Error",
      text: "Unable to refresh session.",
    });

    return null;
  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "Network Error",
      text: "Please check your internet connection.",
    });

    return null;
  }
};

export const checkToken = async ({
  gymId,
  token,
  mobile,
  navigate,
  path,
  setChecking = () => {},
  retryCount = 0,
}) => {
  const MAX_RETRIES = 1;

  try {
    setChecking(true);

    Swal.fire({
      title: "Loading...",
      text: "Please wait",
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => Swal.showLoading(),
    });

    const response = await axios.get(
      `${apiBase}/api/check_tok?gymid=${gymId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    Swal.close();

    if (response.data.success) {
      

      return true;
    }

    if (
      response.data.error === 1 &&
      retryCount < MAX_RETRIES
    ) {
      const newToken = await refreshAccessToken(mobile);

      if (newToken) {
        return checkToken({
          gymId,
          token: newToken,
          mobile,
          navigate,
          path,
          setChecking,
          retryCount: retryCount + 1,
        });
      }

      return false;
    }

    if (response.data.error === 99) {
      Swal.fire({
        icon: "warning",
        title: "Access Denied",
        text: "Please login again.",
      });

      return false;
    }

    Swal.fire({
      icon: "error",
      title: "Error",
     // text: response.data.message,
    });

    return false;
  } catch (err) {
    Swal.close();

    Swal.fire({
      icon: "error",
      title: "Connection Error",
      text: "Unable to connect to server.",
    });

    return false;
  } finally {
    setChecking(false);
  }
};

export const logout = (navigate) => {
  localStorage.removeItem("gyms");
  localStorage.removeItem("selectedGymai");
  localStorage.removeItem("accessToken");

  localStorage.setItem("isLoggedInWeb", "false");

  navigate("/login", {
    replace: true,
  });
};