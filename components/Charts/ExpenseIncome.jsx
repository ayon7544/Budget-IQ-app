import { memo, useCallback } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import RemoteSvg from "../RemoteSvg";

// ✅ Lifted OUTSIDE — stable identity across re-renders
const CategoryItem = memo(({ item, onPress }) => (
  <View style={styles.categoryItem}>
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.iconContainer}>
        {item.icon?.endsWith(".svg") ? (
          <RemoteSvg uri={item.icon} width={60} height={60} />
        ) : (
          <Image
            source={{ uri: item.icon }}
            style={styles.iconImage}
            resizeMode="cover"
          />
        )}
      </View>
      <Text style={styles.amountText}>{item?.amount}</Text>
    </TouchableOpacity>
  </View>
));

const ExpenseIncome = ({ expenseData }) => {
  const router = useRouter();

  // ✅ Stable navigation callback
  const handlePress = useCallback(
    (item) => {
      router.push({
        pathname: "/IncrementDecrementAmount",
        params: {
          id: item.transactionId,
          name: item.name,
          image: item.icon,
          fromTab: item.categoryType,
        },
      });
    },
    [router]
  );

  return (
    <View style={styles.listContainer}>
      {expenseData.map((item) => (
        <CategoryItem
          key={item.transactionId}
          item={item}
          onPress={() => handlePress(item)}
        />
      ))}
    </View>
  );
};

export default ExpenseIncome;

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  categoryItem: {
    width: "20%",
    alignItems: "center",
    marginBottom: 15,
    marginHorizontal: 5,
  },
  iconContainer: {
    backgroundColor: "#E0F2E9",
    borderRadius: 10,
    width: 60,
    height: 60,
    overflow: "hidden",
    elevation: 2,
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    shadowOffset: { width: 0, height: 1 },
  },
  iconImage: {
    width: "100%",
    height: "100%",
  },
  amountText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2E8B57",
    marginTop: 5,
    textAlign: "center",
  },
});