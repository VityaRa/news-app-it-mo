import { NewItem } from "@/api/types";
import {
  ColorSchemeName,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { ThemedView } from "./ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedText } from "./ThemedText";
import { Link, useRouter } from "expo-router";

const IMAGE_PREVIEW_SIZE = 80;

interface IProps {
  item: NewItem;
}

export const NewCard = ({ item }: IProps) => {
  const scheme = useColorScheme();
  const styles = makeStyles(scheme);
  const router =  useRouter();
  const handlePress = () => {
    router.push(`/news/${item.id}` as any);

  }
  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
      <ThemedView style={styles.container}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: item.image_url }}
        ></Image>
        <View style={styles.textContainer}>
          <ThemedText
            lightColor="white"
            darkColor="white"
            style={[styles.title, styles.text]}
            numberOfLines={2}
          >
            {item.title}
          </ThemedText>
          <ThemedText
            lightColor="white"
            darkColor="white"
            style={[styles.desc, styles.text]}
            numberOfLines={3}
          >
            {item.summary}
          </ThemedText>
        </View>
      </ThemedView>
    </TouchableOpacity>
  );
};

const makeStyles = (colorScheme: ColorSchemeName) =>
  StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      padding: 16,
      borderRadius: 8,
      backgroundColor: colorScheme === "dark" ? "#868e91" : "#4e4a42",
      marginBottom: 16,
      gap: 16,
    },
    image: {
      minWidth: IMAGE_PREVIEW_SIZE,
      minHeight: IMAGE_PREVIEW_SIZE,
      maxHeight: IMAGE_PREVIEW_SIZE,
      maxWidth: IMAGE_PREVIEW_SIZE,
      resizeMode: "contain",
      borderRadius: 20,
      overflow: "hidden",
    },
    textContainer: {
      display: "flex",
      flexDirection: "column",
    },
    title: {
      fontSize: 24,
      fontWeight: 600,
      // maxHeight: 50,
      // height: 50,
    },
    desc: {
      fontSize: 16,
      // maxHeight: 80,
      // height: 80,
    },
    text: {
      maxWidth: "87%",
    },
  });
