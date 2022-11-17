import React from "react";
import { StyleSheet, Text } from "react-native";

const Test = () => {
    return(
        <Text style={styles.highlight}>Stephen Gruzin is making something right now</Text>
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
    },
  });

export default Test;