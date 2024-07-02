import {
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Checkout = ({route}) => {
  const {items} = route.params || {}
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    fetchSelectedItems();
  }, []);

  const fetchSelectedItems = async () => {
    try {
      const storedItems = await AsyncStorage.getItem('@selectedItems');
      if (storedItems !== null) {
        setSelectedItems(JSON.parse(storedItems));
      }
    } catch (error) {
      console.error("Error fetching selected items:", error);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image source={require("../assets/Logo.png")} />
            <View style={styles.icons}>
              <TouchableOpacity style={styles.button}>
                <Image source={require("../assets/Search.png")} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.body}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16",
  },
  icons: {
    flexDirection: "row",
  },
  button: {
    padding: 8,
  },
});

export default Checkout;
