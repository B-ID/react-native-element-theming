import { FC } from "react";
import { TextInput as NTextInput, TextInputProps } from "react-native";
import { Input } from "@rneui/base";
import { View } from "react-native";
import {
  Controller,
  Control,
  FieldValues,
} from "react-hook-form";

interface Props extends TextInputProps {
  name: string;
  control: Control<FieldValues> | undefined;
}

const TextInput: FC<Props> = (props) => {
  const { name, control } = props;


  return (
    <View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <NTextInput
            onChangeText={(value) => onChange(value)}
            value={value}
            onBlur={onBlur}
            placeholder="Native Input"
          />
        )}
        name={name}
        rules={{ required: true }}
      />
    </View>
  );
};

export default TextInput;
