import React from "react";
import { View, Text } from "react-native";

const HeaderView = (props) => {
  return (
    <View
      style={[
        {
          width: "100%",
          height: 18,
          width:18,
          borderWidth: 1,
          borderRadius: 2.5,
          borderColor: "green",
         
        },
        props.style,
      ]}
    >
      <Text
        style={[
          {
            color: "green",
            fontSize:10
          },
          props.textStyle,
        ]}
      >
        Ad
      </Text>
    </View>
  );
};

export default HeaderView;
