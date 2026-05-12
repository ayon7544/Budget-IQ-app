import * as SecureStore from "expo-secure-store";

// Save token and email
export const saveAuthData = async (token, email) => {
  if (typeof token === "string" && token.length > 0) {
    await SecureStore.setItemAsync("accessToken", token);
  }

  if (typeof email === "string" && email.length > 0) {
    await SecureStore.setItemAsync("userEmail", email);
  }
};

// Get token
export const getToken = async () => {
  return await SecureStore.getItemAsync("accessToken");
};

// Get email
export const getEmail = async () => {
  return await SecureStore.getItemAsync("userEmail");
};

// Delete all auth data
export const deleteAuthData = async () => {
  await SecureStore.deleteItemAsync("accessToken");
};

const REVIEW_KEY = "user_review_info";

// Save review info
export const setReviewInfo = async (value) => {
  try {
    await SecureStore.setItemAsync(REVIEW_KEY, JSON.stringify(value));
  } catch (e) { }
};

// Get review info
export const getReviewInfo = async () => {
  try {
    const result = await SecureStore.getItemAsync(REVIEW_KEY);
    return result ? JSON.parse(result) : null;
  } catch (e) {
    return null;
  }
};

// ===================== SUBSCRIPTION =====================

// Save last subscription view time
export const saveSubscriptionViewTime = async () => {
  try {
    const timestamp = new Date().getTime(); // current time in ms
    await SecureStore.setItemAsync(
      "subscriptionTimestamp",
      timestamp.toString()
    );
  } catch (error) { }
};

// Get last subscription view time
export const getSubscriptionViewTime = async () => {
  try {
    const ts = await SecureStore.getItemAsync("subscriptionTimestamp");
    return ts ? parseInt(ts, 10) : null;
  } catch (error) {
    return null;
  }
};

// ===================== CURRENCY =====================

const CURRENCY_KEY = "user_currency_code";

export const setCurrencyCode = async (currencyCode) => {
  try {
    if (typeof currencyCode !== "string" || currencyCode.trim().length === 0) {
      return;
    }
    await SecureStore.setItemAsync(CURRENCY_KEY, currencyCode.trim().toLowerCase());
  } catch (e) {}
};

export const getCurrencyCode = async () => {
  try {
    return await SecureStore.getItemAsync(CURRENCY_KEY);
  } catch (e) {
    return null;
  }
};

export const deleteCurrencyCode = async () => {
  try {
    await SecureStore.deleteItemAsync(CURRENCY_KEY);
  } catch (e) {}
};
