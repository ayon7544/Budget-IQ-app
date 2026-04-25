import { useNavigation } from "expo-router";
import { useState, useCallback, useMemo } from "react";
import { Image, LayoutAnimation, StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/images/iq.png";
import ExpenseIncome from "../../components/Charts/ExpenseIncome";
import CostEarnList from "../../components/CostEarnList";
import FadeInView from "../../components/UI/FadeInView";
import Button from "../../components/UI/Button";
import {
  useGetAllCategoriesWithSumQuery,
  useGetSpecificTransactionRecentQuery,
} from "../../redux/services/api";
import * as SecureStore from "expo-secure-store";
import { useFocusEffect } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";

const areArraysEqual = (arrA = [], arrB = []) => {
  if (arrA.length !== arrB.length) return false;
  for (let i = 0; i < arrA.length; i += 1) {
    if (arrA[i] !== arrB[i]) return false;
  }
  return true;
};

const DashboardScreen = () => {

  const { tab } = useLocalSearchParams();

  const currencySymbols = {
    usd: "$",
    gbp: "£",
    aud: "A$",
    nzd: "NZ$",
    eur: "€",
  };

  const switchTransactionTab = useCallback((nextType) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpense(nextType);
    setType(nextType);
  }, []);

  useEffect(() => {
    if (tab) {
      switchTransactionTab(tab);
    }
  }, [tab, switchTransactionTab]);

  // --- STATE ---
  const [type, setType] = useState("expenses");
  const [expense, setExpense] = useState("expenses");
  const [limit, setLimit] = useState(1000);
  const [value, setValue] = useState("month");
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "This Month", value: "month" },
    { label: "This Week", value: "week" },
    { label: "This Year", value: "year" },
  ]);
  const [savedCategories, setSavedCategories] = useState([]);

  // --- API QUERIES ---
  const { data: allCategoriesWithSum } =
    useGetAllCategoriesWithSumQuery(
      { type, time: value, savedCategory: savedCategories },
      { refetchOnMountOrArgChange: true }
    );

  const { data: specificTransactionRecent, isFetching: isFetchingRecent } =
    useGetSpecificTransactionRecentQuery(
      { type, limit },
      { refetchOnMountOrArgChange: true }
    );

  const categoriesResult = allCategoriesWithSum?.result ?? [];

  const currency = specificTransactionRecent?.result?.[0]?.currency;

  // --- FETCH SAVED CATEGORIES + REFETCH ---
  useFocusEffect(
    useCallback(() => {
      const fetchSavedCategories = async () => {
        try {
          const storedCategories = await SecureStore.getItemAsync(
            type === "expenses"
              ? "selectedExpenseCategories"
              : "selectedIncomeCategories"
          );
          const categories = JSON.parse(storedCategories || "[]");
          setSavedCategories((prev) =>
            areArraysEqual(prev, categories) ? prev : categories
          );
        } catch (error) { }
      };

      fetchSavedCategories();
    }, [type, value])
  );

  // --- TRANSFORM DATA ---
  const transformedSpecificTransactionRecent = useMemo(
    () =>
      specificTransactionRecent?.result?.map((tx) => {
        const symbol = currencySymbols[tx.currency] || "$"; // fallback to $
        return {
          transactionId: tx._id,
          name: tx.category?.name || "Unknown",
          icon: tx.category?.categoryImage || null,
          amount: `${symbol}${Math.abs(tx.amount)}`,
          userId: tx.userId,
          createdAt: tx.createdAt,
          updatedAt: tx.updatedAt,
          categoryType: tx.category?.type || "unknown",
        };
      }) || [],
    [specificTransactionRecent]
  );

  const expenseData = useMemo(
    () =>
      categoriesResult
        .filter((cat) => cat.type === "expenses")
        .map((cat) => {
          const symbol = currencySymbols[currency] || "$";
          return {
            transactionId: cat._id,
            name: cat.name,
            icon: cat.categoryImage,
            amount: `${symbol}${Math.abs(cat.totalAmount)}`,
            userId: cat.userId,
            createdAt: cat.createdAt,
            updatedAt: cat.updatedAt,
            categoryType: cat.type,
          };
        }) || [],
    [categoriesResult, currency]
  );

  const incomeData = useMemo(
    () =>
      categoriesResult
        .filter((cat) => cat.type === "income")
        .map((cat) => {
          const symbol = currencySymbols[currency] || "$";
          return {
            transactionId: cat._id,
            name: cat.name,
            icon: cat.categoryImage,
            amount: `${symbol}${Math.abs(cat.totalAmount)}`,
            userId: cat.userId,
            createdAt: cat.createdAt,
            updatedAt: cat.updatedAt,
            categoryType: cat.type,
          };
        }) || [],
    [categoriesResult, currency]
  );

  // --- RENDER ---
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={logo} />
        <View style={styles.dropdownContainers}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Select Time Range"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownBox}
          />
        </View>
      </View>

      {/* Toggle Buttons */}
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => switchTransactionTab("expenses")}
          isActive={expense === "expenses"}
        >
          Expenses
        </Button>
        <Button
          onPress={() => switchTransactionTab("income")}
          isActive={expense === "income"}
        >
          Income
        </Button>
      </View>

      {/* Charts & Specific Transaction List */}
      {expense === "expenses" ? (
        <>
          <FadeInView trigger={`${expense}-${value}-${expenseData.length}`}>
            <ExpenseIncome expenseData={expenseData} />
          </FadeInView>
          <View style={{ flex: 1 }}>
            <Text style={styles.listText}>Specific Cost</Text>
            <FadeInView
              style={{ flex: 1 }}
              trigger={`${expense}-${value}-${transformedSpecificTransactionRecent.length}`}
            >
              <CostEarnList data={transformedSpecificTransactionRecent} />
            </FadeInView>
          </View>
        </>
      ) : (
        <>
          <FadeInView trigger={`${expense}-${value}-${incomeData.length}`}>
            <ExpenseIncome expenseData={incomeData} />
          </FadeInView>
          <View style={{ flex: 1 }}>
            <Text style={styles.listText}>Specific Earn</Text>
            <FadeInView
              style={{ flex: 1 }}
              trigger={`${expense}-${value}-${transformedSpecificTransactionRecent.length}`}
            >
              <CostEarnList data={transformedSpecificTransactionRecent} />
            </FadeInView>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dropdownContainers: {
    margin: 10,
    zIndex: 1000,
    width: 130,
  },
  dropdown: {
    borderColor: "#ccc",
  },
  dropdownBox: {
    borderColor: "#ccc",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    marginVertical: 25,
  },
  listText: {
    fontSize: 22,
    fontWeight: "700",
    padding: 10,
  },
});
