import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Toast from "react-native-toast-message";
import { useEffect, useState } from "react";
import { useCurrencyMutation } from "../redux/services/api";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { getCurrencyCode, setCurrencyCode as persistCurrencyCode } from "../utils/secureStore";
import { setCurrencyCode } from "../redux/slices/userSlice";

const Currency = () => {
  const [currency, { isLoading }] = useCurrencyMutation();
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const params = useLocalSearchParams();
  const dispatch = useDispatch();
  const token = useSelector((state) => state?.auth?.token);

  const flags = {
    us: require("../assets/images/us.png"),
    au: require("../assets/images/aus.png"),
    gb: require("../assets/images/eng.png"),
    nz: require("../assets/images/aus.png"),
    eu: require("../assets/images/eu.png"),
  };

  const currencyData = [
    {
      id: "1",
      country: "United States of America",
      code: "USD",
      flag: flags.us,
    },
    { id: "2", country: "Australia", code: "AUD", flag: flags.au },
    { id: "3", country: "England", code: "GBP", flag: flags.gb },
    { id: "4", country: "New Zealand", code: "NZD", flag: flags.nz },
    { id: "5", country: "Europe", code: "EUR", flag: flags.eu },
  ];

  useEffect(() => {
    const loadStoredCurrency = async () => {
      const stored = await getCurrencyCode();
      if (stored) {
        const upper = stored.toUpperCase();
        setSelectedCurrency(upper);
        dispatch(setCurrencyCode(stored));
      }
    };

    loadStoredCurrency();
  }, [dispatch]);

  const navigateNext = () => {
    const next = typeof params?.next === "string" ? params.next : null;
    if (next === "back") {
      router.back();
      return;
    }
    if (next) {
      router.replace(next);
      return;
    }
    router.push("/(tabs)");
  };

  // 🔹 Handle API call
  const handleCurrency = async (selected) => {
    try {
      setSelectedCurrency(selected.code); // ✅ highlight selected

      const codeLower = selected.code.toLowerCase();
      await persistCurrencyCode(codeLower);
      dispatch(setCurrencyCode(codeLower));

      // Only call backend if we have a token (logged-in / verified user)
      let successMessage = "Currency updated.";
      if (token) {
        const result = await currency({
          currency: codeLower, // ✅ matches API
        }).unwrap();
        successMessage = result?.message || successMessage;
      }

      Toast.show({
        type: "success",
        position: "top",
        text1: "Success",
        text2: successMessage,
        visibilityTime: 3000,
        autoHide: true,
      });

      navigateNext();
    } catch (err) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Error",
        text2: err?.data?.message,
        visibilityTime: 3000,
        autoHide: true,
      });
    }
  };

  const CurrencyItem = ({ country, code, flag }) => (
    <TouchableOpacity
      style={[
        styles.itemContainer,
        selectedCurrency === code && styles.selectedItem, // ✅ highlight if selected
      ]}
      onPress={() => handleCurrency({ country, code })}
      disabled={isLoading}
    >
      <View style={styles.leftContent}>
        <Image source={flag} style={styles.flag} />
        <Text
          style={[
            styles.countryName,
            selectedCurrency === code && styles.selectedText,
          ]}
        >
          {country}
        </Text>
      </View>
      <Text
        style={[
          styles.currencyCode,
          selectedCurrency === code && styles.selectedText,
        ]}
      >
        {code}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={currencyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CurrencyItem
            country={item.country}
            code={item.code}
            flag={item.flag}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

export default Currency;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  flag: {
    width: 30,
    height: 20,
    marginRight: 15,
    resizeMode: "contain",
  },
  countryName: {
    fontSize: 16,
    color: "#333",
  },
  currencyCode: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  separator: {
    height: 1,
    backgroundColor: "#f0f0f0",
    marginHorizontal: 20,
  },
  selectedItem: {
    backgroundColor: "#e6f7e6", // light green background
    borderRadius: 8,
  },
  selectedText: {
    color: "green", // highlight text in green
    fontWeight: "bold",
  },
});
