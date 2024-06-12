import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PUBLIC_DNS } from "@env";

export const getAllHappiness = async () => {
  const url = `${PUBLIC_DNS}/api/report/all/happiness/`;

  try {
    const token = await AsyncStorage.getItem("accessToken");
    if (!token) {
      throw new Error("토큰없음");
    }

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching calendar data:", error);
    throw error;
  }
};

export const getAllSummary = async () => {
  const url = `${PUBLIC_DNS}/api/report/all/summary`;

  try {
    const token = await AsyncStorage.getItem("accessToken");
    if (!token) {
      throw new Error("토큰없음");
    }

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching calendar data:", error);
    throw error;
  }
};

export const getAllTopActivities = async () => {
  const url = `${PUBLIC_DNS}/api/report/all/top-activities`;

  try {
    const token = await AsyncStorage.getItem("accessToken");
    if (!token) {
      throw new Error("토큰없음");
    }

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching calendar data:", error);
    throw error;
  }
};

export const getAllTopLocations = async () => {
  const url = `${PUBLIC_DNS}/api/report/all/top-locations`;

  try {
    const token = await AsyncStorage.getItem("accessToken");
    if (!token) {
      throw new Error("토큰없음");
    }

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching calendar data:", error);
    throw error;
  }
};

export const getMonthGraph = async () => {
  const url = `${PUBLIC_DNS}/api/report/month/graph`;

  try {
    const token = await AsyncStorage.getItem("accessToken");
    if (!token) {
      throw new Error("토큰없음");
    }

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching calendar data:", error);
    throw error;
  }
};

export const getMonthHappiness = async () => {
  const url = `${PUBLIC_DNS}/api/report/month/happiness`;

  try {
    const token = await AsyncStorage.getItem("accessToken");
    if (!token) {
      throw new Error("토큰없음");
    }

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching calendar data:", error);
    throw error;
  }
};

export const getMonthSummary = async () => {
  const url = `${PUBLIC_DNS}/api/report/month/summary`;

  try {
    const token = await AsyncStorage.getItem("accessToken");
    if (!token) {
      throw new Error("토큰없음");
    }

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching calendar data:", error);
    throw error;
  }
};

export const getMonthActivities = async () => {
  const url = `${PUBLIC_DNS}/api/report/month/top-activities`;

  try {
    const token = await AsyncStorage.getItem("accessToken");
    if (!token) {
      throw new Error("토큰없음");
    }

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching calendar data:", error);
    throw error;
  }
};

export const getMonthLocations = async () => {
  const url = `${PUBLIC_DNS}/api/report/month/top-locations`;

  try {
    const token = await AsyncStorage.getItem("accessToken");
    if (!token) {
      throw new Error("토큰없음");
    }

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching calendar data:", error);
    throw error;
  }
};

export const getYearHappiness = async () => {
  const url = `${PUBLIC_DNS}/api/report/year/happiness`;

  try {
    const token = await AsyncStorage.getItem("accessToken");
    if (!token) {
      throw new Error("토큰없음");
    }

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching calendar data:", error);
    throw error;
  }
};

export const getYearSummary = async () => {
  const url = `${PUBLIC_DNS}/api/report/year/summary`;

  try {
    const token = await AsyncStorage.getItem("accessToken");
    if (!token) {
      throw new Error("토큰없음");
    }

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching calendar data:", error);
    throw error;
  }
};

export const getYearActivities = async () => {
  const url = `${PUBLIC_DNS}/api/report/year/top-activities`;

  try {
    const token = await AsyncStorage.getItem("accessToken");
    if (!token) {
      throw new Error("토큰없음");
    }

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching calendar data:", error);
    throw error;
  }
};

export const getYearLocation = async () => {
  const url = `${PUBLIC_DNS}/api/report/year/top-locations`;

  try {
    const token = await AsyncStorage.getItem("accessToken");
    if (!token) {
      throw new Error("토큰없음");
    }

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching calendar data:", error);
    throw error;
  }
};

export const getYearGraph = async () => {
  const url = `${PUBLIC_DNS}/api/report/year/graph`;

  try {
    const token = await AsyncStorage.getItem("accessToken");
    if (!token) {
      throw new Error("토큰없음");
    }

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching calendar data:", error);
    throw error;
  }
};
