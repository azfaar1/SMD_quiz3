import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductCard from './components/ProductCard';

const PRODUCTS = [
  { id: '1', name: 'Wireless Headphones', price: 59 },
  { id: '2', name: 'Smart Watch', price: 120 },
  { id: '3', name: 'Backpack', price: 35 },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Explorer</Text>
      <Text style={styles.student}>Azfaar | 23i-3055</Text>
      {PRODUCTS.map((p) => (
        <ProductCard key={p.id} name={p.name} price={p.price} />
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 24, paddingTop: 80 },
  title: { fontSize: 28, fontWeight: 'bold' },
  student: { fontSize: 18, color: '#2563eb', marginBottom: 24 },
});
