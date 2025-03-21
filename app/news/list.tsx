import { FlatList, StyleSheet, TextInput } from "react-native";

import { NewCard } from "@/components/NewCard";
import { PageContent } from "@/components/PageContent";
import { useNewsList } from "@/hooks/useNewsList";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function NewsScreen() {
  const { items, loading, search, setSearch } = useNewsList();
  return (
    <>
      <TextInput
        style={styles.input}
        value={search}
        placeholder="Поиск по названию"
        placeholderTextColor="gray"
        onChangeText={setSearch}
      />
      <PageContent loading={loading}>
        <FlatList
          data={items}
          renderItem={({ item, index }) => <NewCard key={index} item={item} />}
          style={styles.list}
        />
      </PageContent>
    </>
  );
}

const styles = StyleSheet.create({
  list: {
    display: "flex",
    flexDirection: "column",
    width: "95%",
    margin: "auto",
    marginTop: 12,
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    margin: "auto",
    borderRadius: 8,
    marginTop: 12,
    marginBottom: 12,
    width: "95%",
  },
});
