import { StyleSheet, Text, View } from "react-native";
import { FeedItem } from "../types/Feed";
import React from 'react';


const Card = ({
  avatar,
  username,
  content,
  image,
  likes,
  reposts,
  comments,
}: FeedItem) => {
  return (
     <View style={styles.card}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.content}>{content}</Text>
        {/* Você pode adicionar mais elementos aqui, como imagem, botões, etc. */}
      </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 18,
  },
});

export default Card;
