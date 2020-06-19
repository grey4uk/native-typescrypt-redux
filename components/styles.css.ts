import {StyleSheet} from 'react-native';
import { transform } from '@babel/core';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width:280,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    marginBottom: 20,
    backgroundColor:'#fff'
  },
  modalInput:{
    width:280,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    marginBottom: 20,
    backgroundColor:'#fff',
    position:'absolute',
    top:'40%',
    left:'15%',
  },
  buttonAdd: {
    backgroundColor: 'green',
    width: 280,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  post: {
    width: 280,
    backgroundColor: 'grey',
    borderRadius: 10,
    padding:10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonTitle: {
    margin: 20,
  },
modal:{
  width:300,
  height:60,
  backgroundColor:'red',
  position:'absolute',
},
closeBtn:{
  position:'absolute',
  top:10,
  right:10
}
});
