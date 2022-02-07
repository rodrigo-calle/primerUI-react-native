import { StyleSheet, Text, View, Image } from 'react-native';
import data from "./data";

export default function App() {
  return (
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
            <Text style={styles.tag}>{item.tags[0]} </Text>
            <Text style={styles.comments}>
              <Image 
                style={styles.messageIcon}
                source={{uri: 'https://icongr.am/jam/messages-f.svg?size=128&color=2e2e2e'}} />
              <Text>  {`${item.comments.length}`} Comments </Text>
            </Text>
          </View>
        
        </View>
      ) 
    })}
    </View>
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
    width: 125,
    height: 125,
    marginHorizontal: 15
  },
  titlePost: {
    fontWeight: 'bold',
  },
  card: {
    borderBottomColor: '#233143',
    borderBottomWidth: 1,
    flexDirection: "row",
    paddingTop: '20px',
    paddingBottom: '20px',
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
    width: 'fit-content',
    padding: 3,
    borderRadius: 7,
    color: '#fff',
    marginBottom: 10,
  }
});
