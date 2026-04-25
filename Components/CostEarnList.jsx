import { useRouter } from "expo-router";
import { memo, useCallback } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RemoteSvg from "./RemoteSvg";

const SpecificCostItem = memo(function SpecificCostItem({
  icon,
  name,
  createdAt,
  amount,
  transactionId,
  categoryType,
  onPress,
}) {
  return (
    <TouchableOpacity onPress={() => onPress({ icon, name, createdAt, amount, transactionId, categoryType })}>
      <View style={styles.itemContainer}>
        <View style={styles.iconAndText}>
          {icon ? (
            icon?.endsWith(".svg") ? (
              <RemoteSvg uri={icon} width={40} height={40} />
            ) : (
              <Image source={{ uri: icon }} style={styles.iconImage} />
            )
          ) : (
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#eee",
                borderRadius: 8,
                marginRight: 15,
              }}
            />
          )}
          <View>
            <Text style={styles.itemName}>  {name}</Text>
            <Text style={styles.itemDate}>  {createdAt?.split("T")[0]}</Text>
          </View>
        </View>
        <Text style={styles.itemAmount}>{amount}</Text>
      </View>
    </TouchableOpacity>
  );
});

const CostEarnList = ({ data }) => {
  const router = useRouter();

  const handleItemPress = useCallback(
    ({ icon, name, createdAt, amount, transactionId, categoryType }) => {
      router.push({
        pathname: "/IncrementDecrementAmount",
        params: {
          image: icon,
          name,
          createdAt,
          ammount: amount,
          transactionId,
          categoryType,
          fromTab: categoryType,
        },
      });
    },
    [router]
  );

  const renderItem = useCallback(
    ({ item }) => (
      <SpecificCostItem
        icon={item.icon}
        name={item.name}
        createdAt={item.createdAt}
        amount={item.amount}
        transactionId={item.transactionId}
        categoryType={item.categoryType}
        onPress={handleItemPress}
      />
    ),
    [handleItemPress]
  );

  const keyExtractor = useCallback((item) => item.transactionId.toString(), []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        removeClippedSubviews
        initialNumToRender={8}
        windowSize={7}
      />
    </View>
  );
};

export default CostEarnList;

const styles = StyleSheet.create({
  container: { flex: 1 },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  iconAndText: { flexDirection: "row", alignItems: "center" },
  iconImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 15,
    backgroundColor: "#e8f5e9", // optional placeholder background
  },
  itemName: { fontSize: 16, fontWeight: "500", color: "#333" },
  itemDate: { fontSize: 13, color: "#777", marginTop: 2 },
  itemAmount: { fontSize: 16, fontWeight: "bold", color: "#333" },
});
