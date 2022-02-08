import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import data from "./data";
import chatting from './assets/chatting.png';

export default function App() {
  return (
    <ScrollView style={styles.scrollView}>  
      <View style={styles.container}>
      {data.map((item) => {
        return(
          <View style={styles.card} key={item.id}>
            <Image 
              style={styles.tinyLogo}
              source={{ uri: item.picture }} 
            />
            <View style={styles.descriptionCard}>
              <Text style={styles.titlePost}>
                {item.about.slice(0, 50)}
              </Text>
              <Text style={styles.author}>by {item.author}</Text>
              <Text style={styles.tag}>{item.tags[0].slice(0,9)} </Text>
              <Text style={styles.comments}>
                <Image 
                  style={styles.messageIcon}
                  source={chatting} />
                <Text>  {`${item.comments.length}`} Comments </Text>
              </Text>
            </View>
          
          </View>
        ) 
      })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: 20
  },
  tinyLogo: {
    marginTop: 20,
    width: 125,
    height: 125,
    marginHorizontal: 15,
    marginBottom: 20,
  },
  titlePost: {
    fontWeight: 'bold',
    marginTop: 20,
  },
  card: {
    borderBottomColor: '#233143',
    borderBottomWidth: 1,
    flexDirection: "row",
    textAlign: 'left',
    
  },
  messageIcon: {
    width: 20,
    height: 20,
  },
  comments: {
    alignItems: 'center',
  },
  descriptionCard: {
    width: '60%'
  },
  author: {
    marginBottom: 10,
    color: '#233143',
  },
  tag: {
    backgroundColor: '#233143',
    padding: 3,
    borderRadius: 7,
    color: '#fff',
    width: '30%',
    marginBottom: 10,
  },
  scrollView: {
    backgroundColor: '#233143',
  }
});
