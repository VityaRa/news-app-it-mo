import { NewItem } from "@/api/types";
import {
    ColorSchemeName,
    Image,
    StyleSheet,
    useColorScheme
} from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

interface IProps {
  item: NewItem;
}

export const DetailedNew = ({ item }: IProps) => {
  const scheme = useColorScheme();
  const styles = makeStyles(scheme);
  return (
    <ThemedView style={styles.container}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={{ uri: item.image_url }}
      />
        <ThemedText
          darkColor="white"
          lightColor="black"
          style={[styles.title]}
        >
          {item.title}
        </ThemedText>
        <ThemedText
          darkColor="white"
          lightColor="black"
          style={[styles.desc]}
        >
          {item.summary}
        </ThemedText>
    </ThemedView>
  );
};

const makeStyles = (colorScheme: ColorSchemeName) =>
  StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      padding: 16,
      borderRadius: 8,
      marginBottom: 16,
      gap: 16,
      width: '100%',
    },
    image: {
      width: '100%',
      height: 250,
      resizeMode: "contain",
      borderRadius: 20,
      overflow: "hidden",
    },
    title: {
      fontSize: 24,
      fontWeight: 600,
    },
    desc: {
      fontSize: 16,
    },
  });
