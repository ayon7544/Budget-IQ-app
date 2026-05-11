import { memo, useCallback } from "react";
import { useRouter } from "expo-router";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RemoteSvg from "./RemoteSvg";

// ✅ Lifted OUTSIDE the parent — stable identity, no remounts on parent re-render
const SpecificCostItem = memo(
  ({ icon, name, createdAt, amount, onPress }) => (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.itemContainer}>
        <View style={styles.iconAndText}>
          {icon ? (
            icon.endsWith(".svg") ? (
              <RemoteSvg uri={icon} width={40} height={40} />
            ) : (
              <Image
                source={{ uri: icon }}
                style={styles.iconImage}
                resizeMode="cover"
              />
            )
          ) : (
            <View style={styles.iconPlaceholder} />
          )}
          <View>
            <Text style={styles.itemName}>  {name}</Text>
            <Text style={styles.itemDate}>  {createdAt?.split("T")[0]}</Text>
          </View>
        </View>
        <Text style={styles.itemAmount}>{amount}</Text>
      </View>
    </TouchableOpacity>
  )
);

const CostEarnList = ({ data }) => {
  const router = useRouter();

  // ✅ Stable navigation callback — won't trigger item re-renders
  const handlePress = useCallback(
    (item) => {
      router.push({
        pathname: "/IncrementDecrementAmount",
        params: {
          image: item.icon,
          name: item.name,
          createdAt: item.createdAt,
          ammount: item.amount,
          transactionId: item.transactionId,
          categoryType: item.categoryType,
          fromTab: item.categoryType,
        },
      });
    },
    [router]
  );

  // ✅ Memoized renderItem — only changes if handlePress changes
  const renderItem = useCallback(
    ({ item }) => (
      <SpecificCostItem
        icon={item.icon}
        name={item.name}
        createdAt={item.createdAt}
        amount={item.amount}
        transactionId={item.transactionId}
        categoryType={item.categoryType}
        onPress={() => handlePress(item)}
      />
    ),
    [handlePress]
  );

  const keyExtractor = useCallback(
    (item) => item.transactionId.toString(),
    []
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        removeClippedSubviews={false} // ✅ prevents flash when items re-enter viewport
        initialNumToRender={15}
        maxToRenderPerBatch={10}
        windowSize={5}
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
    backgroundColor: "#e8f5e9",
  },
  iconPlaceholder: {
    width: 40,
    height: 40,
    backgroundColor: "#eee",
    borderRadius: 8,
    marginRight: 15,
  },
  itemName: { fontSize: 16, fontWeight: "500", color: "#333" },
  itemDate: { fontSize: 13, color: "#777", marginTop: 2 },
  itemAmount: { fontSize: 16, fontWeight: "bold", color: "#333" },
});