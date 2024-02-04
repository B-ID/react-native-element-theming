import { TextProps } from "@rneui/base";
import React, { FC } from "react";
import { View, Text as NText, StyleProp } from "react-native";

interface Props extends TextProps {
  variant?: keyof typeof textVariants;
}

export const textVariants = {
  defaults: {},
  h1: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 40,
  },
  h2: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 32,
  },
  h3: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 28,
  },
  h4: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 24,
  },
  h5: {
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 22,
  },
  h6: {
    fontSize: 12,
    fontWeight: "bold",
    lineHeight: 20,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
};

const Text: FC<Props> = (props) => {
  const { children, variant = "defaults", style, ...rest } = props;
  return (
    <NText style={[textVariants[variant], style]} {...rest}>
      {children}
    </NText>
  );
};

export default Text;
