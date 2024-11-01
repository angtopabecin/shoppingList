import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity,TextInput ,ScrollView, Pressable, Image} from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';

import * as SQLite from 'expo-sqlite';

import React, { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

const arrowImage = require('..//assets/arrow2.png');
const trashImage = require('..//assets/trash.png');
const backArrow = require('..//assets/backArrow.png');
const deleteIcon = require('..//assets/deleteIcon.png');

function HomePage() {


 
  const [shopLists,setShopLists] = useState([]);
  const [shopsBool,setShopsBool] = useState(true);
  const [shopsPageBool,setShopsPageBool] = useState(false);
  const [shops,setShops] = useState([]);
  const [tableName,setTableName] = useState();
  const [shopId,setShopId] = useState();


  async function GetAllDatabase() {
    try {
      const db = await SQLite.openDatabaseAsync('mydatabase.db');
      const result = await db.getAllAsync('SELECT name FROM sqlite_master WHERE type="table"');
      setShopLists(result);
      console.log(result);
    } 
    catch (e) {
        console.log(e);
    }

  }

  async function GetAllDatabase2(tableName) {
    try {
      const db = await SQLite.openDatabaseAsync('mydatabase.db');
      const result = await db.getAllAsync(`Select * FROM ${tableName}`);
      console.log(result);
      setShops(result);
    } 
    catch (e) {
      console.log(e);
    } 
  }

  async function DeleteTable(tableName) {
    try{
      const db = await SQLite.openDatabaseAsync('mydatabase.db');
      const result = await db.runSync(`DROP TABLE ${tableName}`);
      GetAllDatabase();
    }
    catch(e){
      console.log(e);
    }
  }

  async function UpdateShopQuantity(tableName,shopName) {
    try{
      const db = await SQLite.openDatabaseAsync('mydatabase.db');
      const result = await db.runAsync(`UPDATE ${tableName} SET shopQuantity = shopQuantity - 1 WHERE shopName = ?`,shopName)
    }
    catch(e){
      console.log(e);
    }
  }

  async function DeleteShop(shopId) {
    console.log(shopId)
    try{
      const db = await SQLite.openDatabaseAsync('mydatabase.db');
      const result = await db.runAsync(`DELETE FROM ${tableName} WHERE shopId = ?`,shopId);
      GetAllDatabase();
      GetAllDatabase2(tableName);
    }
    catch(e){
      console.log(e);
    }
  }


  function a(){
    GetAllDatabase();
  }

  function openShopsPage(tableName){
    setTableName(tableName);
    GetAllDatabase2(tableName);
    setShopsPageBool(true);
    console.log(shopsPageBool);
  }

  useFocusEffect(
    useCallback(() => {
      GetAllDatabase();
      GetAllDatabase2(tableName);
    }, [])
  );

  useEffect(() => {
    if(shopsPageBool == true){
      GetAllDatabase2(tableName);
    }
  },[shopsPageBool]);
 

  if(shopsPageBool == true){
    
    return(
      <View style={{ flex: 1, padding: 20, backgroundColor: '#f5f5f5',bottom:'2%'}}>
        <TouchableOpacity style={{ position: 'absolute',top:'5%',left:'5%' }} onPress={() => setShopsPageBool(false)}>
          <Image source={backArrow} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
        <View style={{ alignItems: 'center', marginTop: 80, marginBottom: 20 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#333' }}>Alışveriş Listesi</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, backgroundColor: '#ddd', borderRadius: 8, marginBottom: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#555', textAlign: 'center', flex: 1 }}>Ürün No</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#555', textAlign: 'center', flex: 2 }}>Ürün İsmi</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#555', textAlign: 'center', flex: 1 }}>Miktar</Text>
        </View>
        <ScrollView style={{ flex: 1 }}>
          {shops.map((item, index) => (
            <View key={index} style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 10, marginVertical: 5, borderRadius: 8, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4 }}>
              <TouchableOpacity onPress={() => DeleteShop(item.shopId)} style={{ padding: 5}}>
                <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 18 }}>X</Text>
              </TouchableOpacity>
              <Text style={{ fontWeight: '600', fontSize: 16, color: '#333', flex: 1, textAlign: 'center' }}>{index + 1}</Text>
              <Text style={{ fontWeight: '600', fontSize: 16, color: '#333', flex: 2, textAlign: 'center' }}>{item.shopName}</Text>
              <Text style={{ fontWeight: '600', fontSize: 16, color: '#333', flex: 1, textAlign: 'center' }}>{item.shopQuantity}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

    )
  }


  if(shopsBool == true){
    GetAllDatabase();
    setShopsBool(false);
    if(shopLists == null){
      GetAllDatabase();
      setShopsBool(false);
    }
    return(
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text>Loading...</Text>
      </View>
    )
  }



  return(
    <View style={styles.container} >
      <Text style={{fontSize:24,color:'#4A90E2'}}>Alışveriş Listelerim</Text>
      <ScrollView style={{borderWidth:0,width:'98%',}}>
        {shopLists.map((item,index) => (
          <View key={index} style={{width:'100%',}}>
            <View style={styles.shopListButton}>
              <Text style={{top:'20%'}}>Liste adı</Text>
              <Text style={{fontWeight:'bold',fontSize:24,color:'#FF6F61',top:'30%'}}>{item.name}</Text>
              <View style={{left:'35%'}}>
                <TouchableOpacity style={{top:'5%'}} onPress={() => openShopsPage(item.name)}>
                  <Image source={arrowImage} style={styles.imageStyles}/>
                </TouchableOpacity>
              </View>
              <View style={{right:'35%'}}>
                <TouchableOpacity style={{top:'5%'}} onPress={() => DeleteTable(item.name)}>
                  <Image source={trashImage} style={styles.imageStylesTrash}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>

  );
}

export default HomePage;

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
    backgroundColor:'#F9F9F9',
    justifyContent:'center',
    alignItems:'center',
  },
  shopListButton:{
    width:'90%',
    height:150,
    marginBottom:20,
    left:'5%',
    top:'10%',
    borderWidth:2,
    borderRadius:20,
    borderColor:'#4A90E2',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#CBDCEB'
  },
  imageStyles:{
    left:'40%',
    top:'70%'
  },
  imageStylesTrash:{
    right:'40%',
    bottom:'30%'
  }

});