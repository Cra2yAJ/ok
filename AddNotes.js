import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'

export default class AddNotesScreen extends Component{
  constructor(){
    super();
    this.state ={
      userId : firebase.auth().currentUser.email,
      NoteTitle:"",
      NoteContent:""
    }
  }

  createUniqueId(){
    return Math.random().toString(36).substring(7);
  }



  addNotes =(NoteTitle,NoteContent)=>{
    var userId = this.state.userId
    var randomRequestId = this.createUniqueId()
    db.collection('New_Notes').add({
        "user_id": userId,
        "Note_Title":NoteTitle,
        "Note_Content":NoteContent,
        "request_id"  : randomRequestId,
    })

    this.setState({
        NoteTitle:'',
      NoteContent:''
    })

    return Alert.alert("Note Added Successfully")
  }


  render(){
    return(
        <View style={{flex:1}}>
          <MyHeader title="Add Notes" navigation ={this.props.navigation}/>
            <KeyboardAvoidingView style={styles.keyBoardStyle}>
              <TextInput
                style ={styles.formTextInput}
                placeholder={"enter Note title"}
                onChangeText={(text)=>{
                    this.setState({
                        NoteTitle:text
                    })
                }}
                value={this.state.NoteTitle}
              />
              <TextInput
                style ={[styles.formTextInput,{height:300}]}
                multiline
                numberOfLines ={8}
                placeholder={"Enter your note content"}
                onChangeText ={(text)=>{
                    this.setState({
                        NoteContent:text
                    })
                }}
                value ={this.state.NoteContent}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={()=>{this.addNotes(this.state.NoteTitle,this.state.NoteContent)}}
                >
                <Text>Add note</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  keyBoardStyle : {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
    },
  }
)
