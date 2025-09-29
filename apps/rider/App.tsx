import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export default function App() {
  const [pickup, setPickup] = React.useState('');
  const [dest, setDest] = React.useState('');
  const [quote, setQuote] = React.useState<number | null>(null);

  return (
    <View style={{ padding: 24, gap: 12 }}>
      <Text>KeySafe Rider</Text>
      <TextInput placeholder="Pickup" onChangeText={setPickup} value={pickup} style={{ borderWidth: 1, padding: 8 }} />
      <TextInput placeholder="Destination" onChangeText={setDest} value={dest} style={{ borderWidth: 1, padding: 8 }} />
      <Button title="Get Quote" onPress={() => setQuote(4200)} />
      {quote !== null && <Text>Estimate: {quote}</Text>}
    </View>
  );
}
