import { View } from "react-native";
import React, { FC } from "react";
import NativeSafeAreaView from "@components/ui/native-safearea-view";
import { HomeScreenProps } from "./home.types";
import Text from "@components/ui/text";
import TextInput from "@components/ui/text-input";
import { useForm } from "react-hook-form";
import { Button } from "@rneui/base";

const Home: FC<HomeScreenProps> = (props) => {
  //   const { navigation, route } = props;

  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <NativeSafeAreaView>
      <Text variant="h1" style={{ color: "red" }}>
        Hello world
      </Text>
      <TextInput
        control={control}
        name="email"
        style={{ borderColor: "red", borderWidth: 2 }}
      />
      <TextInput
        control={control}
        name="password"
        style={{ borderColor: "red", borderWidth: 2 }}
      />
      <TextInput
        control={control}
        name="phone"
        style={{ borderColor: "red", borderWidth: 2 }}
      />
      <Button title="submit" onPress={handleSubmit(onSubmit)} />
    </NativeSafeAreaView>
  );
};

export default Home;
