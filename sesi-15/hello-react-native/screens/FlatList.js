import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";

let posts = []

for (let i = 1; i < 20; i++) {
  posts.push({
    title: `title ${i}`,
  })
}

export default function FlatListPage({ route }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>
        {route.params.name}
      </Text>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
      >
      </FlatList>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8FE3CF',
  },
  item: {
    backgroundColor: "#FA2FB5",
    padding: 10,
    height: 50
  },
  text: {
    color: '#002B5B',
    fontSize: 30
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
