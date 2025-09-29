import React from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {
  const [online, setOnline] = React.useState(false);

  return (
    <View style={{ padding: 24, gap: 12 }}>
      <Text>KeySafe Driver</Text>
      <Button title={online ? "Go Offline" : "Go Online"} onPress={() => setOnline(!online)} />
      {online && <Button title="View Job" onPress={() => {}} />}
    </View>
  );
}
