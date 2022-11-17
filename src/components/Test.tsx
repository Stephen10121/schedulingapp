import React from "react";
import { StyleSheet, Text, TextInput, View, SafeAreaView } from "react-native";

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  // const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles2.input}
        onChangeText={onChangeText}
        value={text}
      />
    </SafeAreaView>
  );
};

const styles2 = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

const Test = () => {
    return(
        <View style={{ backgroundColor: "#dfdfdf"}}>
            <Text style={styles.highlight}>Stephen Gruzin is making something right now</Text>
            <UselessTextInput
      />
        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
      color: "#000000",
      fontFamily: "Roboto"
    },
  });

export default Test;



/**
 * 
 * <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
 */