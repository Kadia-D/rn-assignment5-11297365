import React from 'react';
import { Card } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';

export default function CustomCard({ title, content }) {
  return (
    <Card style={styles.card}>
      <Card.Title title={title} />
      <Card.Content>
        {content.map((item, index) => (
          <Text key={index} style={styles.text}>{item}</Text>
        ))}
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
  },
  text: {
    fontSize: 16,
  },
});
