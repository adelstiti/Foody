import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Card from "../components/Card";
import { data } from "../model/data";

const CardListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <Card
        itemData={item}
        onPress={() =>
          navigation.navigate("CardItemDetails", { itemData: item })
        }
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CardListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
  },
});
