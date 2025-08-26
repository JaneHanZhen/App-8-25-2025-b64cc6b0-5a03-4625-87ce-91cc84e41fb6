import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello BB</Text>
      <Text style={styles.subtitle}>Welcome to my React Native app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6a11cb', // Vibrant gradient background start
    backgroundGradient: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#fff', // Bright white color for contrast
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    fontSize: 18,
    color: '#ffeb3b', // Bright yellow for contrast
    textAlign: 'center',
    fontWeight: '500',
  },
});