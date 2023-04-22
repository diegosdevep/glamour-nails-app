import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  content: {
    position: 'relative',
    marginBottom: 30,
  },
  container: {
    width: 360,
    height: 180,
    borderRadius: 10,
    marginTop: 30,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 10,
  },
  textContainer: {
    position: 'absolute',
    bottom: 30,
    left: 10,
    padding: 10,
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
  },
});
