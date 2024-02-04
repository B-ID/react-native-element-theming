import {  NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../screenparam-types.ts/index.types";

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;
