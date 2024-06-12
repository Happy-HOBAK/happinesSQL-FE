import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PUBLIC_DNS } from "@env";

export const getAllRankingActivity = async () => {
  const url = `${PUBLIC_DNS}/api/report/all/ranking/activities`;

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

export const getAllRankingLocation = async () => {
  const url = `${PUBLIC_DNS}/api/report/all/ranking/locations`;

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

export const getAllRankingTime = async () => {
  const url = `${PUBLIC_DNS}/api/report/all/ranking/time`;

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

export const getMonthRankingActivity = async () => {
  const url = `${PUBLIC_DNS}/api/report/month/ranking/activities`;

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

export const getMonthRankingLocation = async () => {
  const url = `${PUBLIC_DNS}/api/report/month/ranking/locations`;

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

export const getMonthRankingTime = async () => {
  const url = `${PUBLIC_DNS}/api/report/month/ranking/time`;

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

export const getYearRankingActivity = async () => {
  const url = `${PUBLIC_DNS}/api/report/year/ranking/activities`;

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

export const getYearRankingLocation = async () => {
  const url = `${PUBLIC_DNS}/api/report/year/ranking/locations`;

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

export const getYearRankingTime = async () => {
  const url = `${PUBLIC_DNS}/api/report/year/ranking/time`;

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
