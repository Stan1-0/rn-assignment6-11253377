import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.button}>
            <Image source={require('../assets/Menu.png')}/>
          </TouchableOpacity>
          <Image source={require('../assets/Logo.png')}/>
          <View style={styles.icons}>
            <TouchableOpacity style={styles.button}>
              <Image source={require('../assets/Search.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image source={require('../assets/shoppingBag.png')}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>OUR STORY</Text>
          <View style={styles.grid}>
            {[
              { image: require('../assets/dress1.png'), title: 'Office Wear', description: 'reversible angora cardigan', price: '$120' },
              { image: require('../assets/dress2.png'), title: 'Black', description: 'reversible angora cardigan', price: '$120' },
              { image: require('../assets/dress3.png'), title: 'Church Wear', description: 'reversible angora cardigan', price: '$120' },
              { image: require('../assets/dress4.png'), title: 'Lomere', description: 'reversible angora cardigan', price: '$120' },
              { image: require('../assets/dress5.png'), title: '2IWN', description: 'reversible angora cardigan', price: '$120' },
              { image: require('../assets/dress6.png'), title: 'Lopo', description: 'reversible angora cardigan', price: '$120' },
              { image: require('../assets/dress7.png'), title: '2IWN', description: 'reversible angora cardigan', price: '$120' },
              { image: require('../assets/dress3.png'), title: 'lame', description: 'reversible angora cardigan', price: '$120' },
            ].map((item, index) => (
              <View key={index} style={styles.card}>
                <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.image} />
                <TouchableOpacity style={styles.addbutton}>
                  <Image source={require('../assets/add_circle.png')}/>
                </TouchableOpacity>
                </View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>{item.price}</Text>
                
              </View>
            ))}
          </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  scrollViewContainer: {
    flexGrow: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  button: {
    padding: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  section: {
    padding: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 150,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  addbutton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14
  },
}
);

export default Home;
