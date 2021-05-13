import { StyleSheet } from 'react-native';

export const appTheme = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  calcConatiner: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  result: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 16,
  },
  resultHistory: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 30,
    textAlign: 'right',
  },
  button: {
    height: 80,
    width: 80,
    marginHorizontal: 10,
    backgroundColor: '#333333',
    borderRadius: 100,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: 'bold',
  },
});
