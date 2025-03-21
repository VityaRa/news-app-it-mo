import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { ThemedView } from "./ThemedView";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  loading: boolean;
}

export const PageContent = ({ children, loading }: Props) => {
  if (loading) {
    return (
      <ThemedView style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" />
      </ThemedView>
    );
  }

  return <ThemedView style={styles.container}>{children}</ThemedView>;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  center: {
    justifyContent: "center",
  },
  top: {
    justifyContent: "flex-start",
  },
});
