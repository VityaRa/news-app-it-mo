import { FlatList, StyleSheet, TextInput } from "react-native";

import { NewCard } from "@/components/NewCard";
import { PageContent } from "@/components/PageContent";
import { useNewsList } from "@/hooks/useNewsList";
import { useThemeColor } from "@/hooks/useThemeColor";
import { AuthForm } from "@/components/AuthForm";

export default function LoginScreen() {
  return <PageContent children={<AuthForm />} loading={false} />;
}
