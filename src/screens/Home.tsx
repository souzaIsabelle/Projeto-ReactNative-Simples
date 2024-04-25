import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Card, Button } from 'react-native-elements'; // Utilizando elementos semelhantes ao Bootstrap

const Home = () => {
  const posts = [
    {
      id: '1',
      avatar: 'https://source.unsplash.com/random',
      username: 'Grêmio é hepta gaúcho após mais de 50 anos',
      content: 'Tricolor vence o Juventude de virada, conquista o título estadual pela sétima vez consecutiva e repete feito histórico de 1968',
      image: 'https://th.bing.com/th/id/OIP.ew0J693FxrQXdQtILjqGAgHaEb?rs=1&pid=ImgDetMain',
      likes: 10,
      reposts: 50,
      comments: 100,
    },
    {
      id: '2',
      avatar: 'https://source.unsplash.com/random',
      username: 'Grêmio domina Lanús na Argentina, vence com golaços e é tri da Libertadores!',
      content: 'O Grêmio jogou como time grande que é, como pedia a ocasião. Na finalíssima da Libertadores, em plena La Fortaleza, acanhado estádio do Lanús, a equipe de Renato Gaúcho não deu chances ao adversário desde o primeiro minuto',
      image: 'https://conteudo.imguol.com.br/c/esporte/d3/2017/11/30/jogadores-do-gremio-comemoram-o-titulo-da-libertadores-de-2017-1512008903109_615x300.jpg',
      likes: 1,
      reposts: 5,
      comments: 10,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gremio News</Text>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <Card containerStyle={styles.cardContainer}>
            <Card.Image source={{ uri: item.image }} style={styles.cardImage} />
            <Text style={styles.cardUsername}>{item.username}</Text>
            <Text style={styles.cardContent}>{item.content}</Text>
            <View style={styles.cardFooter}>
              <Button
                icon={{
                  name: 'heart',
                  type: 'font-awesome',
                  color: 'red',
                  size: 18,
                }}
                title={` ${item.likes}`}
                type="clear"
              />
              <Button
                icon={{
                  name: 'retweet',
                  type: 'font-awesome',
                  color: 'green',
                  size: 18,
                }}
                title={` ${item.reposts}`}
                type="clear"
              />
              <Button
                icon={{
                  name: 'comment',
                  type: 'font-awesome',
                  color: 'blue',
                  size: 18,
                }}
                title={` ${item.comments}`}
                type="clear"
              />
            </View>
          </Card>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#f8f9fa', // Cor de fundo semelhante ao Bootstrap
   
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#343a40', // Cor do texto semelhante ao Bootstrap
  },

  cardContainer: {
    marginBottom: 20,
    borderRadius: 8,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    width: 350
  },
  cardImage: {
    height: 200,
    borderRadius: 8,
  },
  cardUsername: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  cardContent: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Home;
