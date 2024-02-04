import React, { type FC } from "react";
import { type INativeSafeAreaViewPops } from "./native-safearea-view.types";
import { SafeAreaView, Platform } from "react-native";
import { SafeAreaView as AndroidSafeAreaView } from "react-native-safe-area-context";

const NativeSafeAreaView: FC<INativeSafeAreaViewPops> = (props) => {
  const { children, style } = props;
  if (Platform.OS === "android") {
    return <AndroidSafeAreaView style={style}>{children}</AndroidSafeAreaView>;
  }
  if (Platform.OS === "ios") {
    return <SafeAreaView style={style}>{children}</SafeAreaView>;
  }
};

export default NativeSafeAreaView;
