import { StyleSheet } from "react-native";

export default StyleSheet.create({

container: {
    backgroundColor: '#FFD885',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 30,
},
text: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 40,
    marginHorizontal: 20,
    borderWidth: 2,
    fontStyle: '',
    padding: 20
},
segmented: {
    paddingBottom: 10,
    paddingTop: 50, 
},
inputs: {
    backgroundColor: 'white',
    borderRadius: 9,
},
calendar:  {
    backgroundColor: '#FFF0CC',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
},
listcontainer: {
    backgroundColor: '#FFD885',
    padding: 10,
    flex: 1,
    borderRadius: 8,
    alignItems: 'stretch',
},
listText: {
    fontSize: 20,
    textAlign: 'left',
    margin: 5,
    fontStyle: 'normal',
    fontWeight: 'bold'
},

box: {
    display: 'flex',
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center', 
    borderWidth: 1,
    backgroundColor: '#FF9C38',
    padding: 3
},
button: {
    backgroundColor: '#FF9C38',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 40,
    marginTop: 20,
},
})