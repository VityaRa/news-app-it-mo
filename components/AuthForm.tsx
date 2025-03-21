import React from "react";
import { ThemedView } from "./ThemedView";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Text, TextInput, View } from "react-native";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import { inputStyles } from "@/constants/Styles";

const PASSWORD_RULES = {
  MIN: 8,
  MAX: 12,
};

const ERROR_CODES = {
  MIN: `Мин. длина - ${PASSWORD_RULES.MIN} символов`,
  MAX: `Макс. длина - ${PASSWORD_RULES.MAX} символов`,
  EMAIL: "Некорретная почта",
};

const LoginFormSchema = z.object({
  email: z.string().email({ message: ERROR_CODES.EMAIL }),
  password: z
    .string()
    .min(PASSWORD_RULES.MIN, { message: ERROR_CODES.MIN })
    .max(PASSWORD_RULES.MAX, { message: ERROR_CODES.MAX }),
});

export type LoginFormSchemaType = z.infer<typeof LoginFormSchema>;

const inputWrapper = inputStyles.root

export const AuthForm = () => {

  const { control } = useForm<LoginFormSchemaType>({
    resolver: zodResolver(LoginFormSchema),
    mode: "onChange",
  });

  return (
    <ThemedView style={styles.container}>
      <Controller
        control={control}
        name="email"
        render={({ field, fieldState }) => (
          <View>
            <TextInput style={[inputWrapper, styles.input]} value={field.value} onChangeText={field.onChange} placeholder="Email" placeholderTextColor={'gray'} />
            <Text style={styles.error}>{fieldState.error?.message ?? " "}</Text>
          </View>
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field, fieldState }) => (
          <View>
            <TextInput secureTextEntry style={[inputWrapper, styles.input]} value={field.value} onChangeText={field.onChange} placeholder="Пароль" placeholderTextColor={'gray'}  />
            <Text style={styles.error}>{fieldState.error?.message ?? " "}</Text>
          </View>
        )}
      />
      <Link href="/news/list" style={styles.link}>Вход</Link>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingLeft: 12,
    paddingRight: 12,

  },
  error: {
    color: "red",
    fontSize: 10,
    marginBottom: 12,
    width: '100%',
    margin: 'auto'
  },
  input: {
    color: 'gray',
  },
  link: {
    color: 'orange',
  }
});
