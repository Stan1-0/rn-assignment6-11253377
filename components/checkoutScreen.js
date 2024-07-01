import { Text, StyleSheet, Image, SafeAreaView, ScrollView } from "react-native";


const Checkout = () => {
    return(
        <SafeAreaView>
            <ScrollView style={styles.scrollViewContainer}>
                <View style ={styles.container}>

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
});

export default Checkout; 