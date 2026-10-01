import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import ProductCard from './components/ProductCard';

const PRODUCTS = [
  { id: '1', name: 'Wireless Headphones', price: 59 },
  { id: '2', name: 'Smart Watch', price: 120 },
  { id: '3', name: 'Backpack', price: 35 },
  { id: '4', name: 'Water Bottle', price: 12 },
  { id: '5', name: 'Desk Lamp', price: 28 },
];

export default function App() {
  const [query, setQuery] = useState('');
  const filtered = PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Explorer</Text>
      <Text style={styles.student}>Azfaar | 23i-3055</Text>
      <TextInput
        style={styles.search}
        placeholder="Search products..."
        value={query}
        onChangeText={setQuery}
      />
      <FlashList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard name={item.name} price={item.price} />
        )}
        ListEmptyComponent={<Text>No products found</Text>}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 24, paddingTop: 80 },
  title: { fontSize: 28, fontWeight: 'bold' },
  student: { fontSize: 18, color: '#2563eb', marginBottom: 16 },
  search: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
  },
});
