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
sumbox: {
    borderWidth: 1,
    borderRadius: 6,
    margin: 6,
    marginHorizontal: 80, 
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#FF9C38',
    
},
box: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
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