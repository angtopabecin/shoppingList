import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity,TextInput ,ScrollView, Pressable,} from 'react-native';
import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import * as SQLite from 'expo-sqlite';

function AddPage() {


  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(Number);
  const [items, setItems] = useState([
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' },
    { label: '8', value: '8' },
    { label: '9', value: '9' },
    { label: '10', value: '10' },
    { label: '11', value: '11' },
    { label: '12', value: '12' },
    { label: '13', value: '13' },
    { label: '14', value: '14' },
    { label: '15', value: '15' },
    { label: '16', value: '16' },
    { label: '17', value: '17' },
    { label: '18', value: '18' },
    { label: '19', value: '19' },
    { label: '20', value: '20' },
    { label: '21', value: '21' },
    { label: '22', value: '22' },
    { label: '23', value: '23' },
    { label: '24', value: '24' },
    { label: '25', value: '25' },
    { label: '26', value: '26' },
    { label: '27', value: '27' },
    { label: '28', value: '28' },
    { label: '29', value: '29' },
    { label: '30', value: '30' },
    { label: '31', value: '31' },
    { label: '32', value: '32' },
    { label: '33', value: '33' },
    { label: '34', value: '34' },
    { label: '35', value: '35' },
    { label: '36', value: '36' },
    { label: '37', value: '37' },
    { label: '38', value: '38' },
    { label: '39', value: '39' },
    { label: '40', value: '40' },
    { label: '41', value: '41' },
    { label: '42', value: '42' },
    { label: '43', value: '43' },
    { label: '44', value: '44' },
    { label: '45', value: '45' },
    { label: '46', value: '46' },
    { label: '47', value: '47' },
    { label: '48', value: '48' },
    { label: '49', value: '49' },
    { label: '50', value: '50' },
  ]);

  const changeItems = () => {
    if(buttonText == "Kilogram"){
      setButtonText("Adet");
      setDropDownText("Adet");
      setItems([]);
      setItems([
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' },
        { label: '8', value: '8' },
        { label: '9', value: '9' },
        { label: '10', value: '10' },
        { label: '11', value: '11' },
        { label: '12', value: '12' },
        { label: '13', value: '13' },
        { label: '14', value: '14' },
        { label: '15', value: '15' },
        { label: '16', value: '16' },
        { label: '17', value: '17' },
        { label: '18', value: '18' },
        { label: '19', value: '19' },
        { label: '20', value: '20' },
        { label: '21', value: '21' },
        { label: '22', value: '22' },
        { label: '23', value: '23' },
        { label: '24', value: '24' },
        { label: '25', value: '25' },
        { label: '26', value: '26' },
        { label: '27', value: '27' },
        { label: '28', value: '28' },
        { label: '29', value: '29' },
        { label: '30', value: '30' },
        { label: '31', value: '31' },
        { label: '32', value: '32' },
        { label: '33', value: '33' },
        { label: '34', value: '34' },
        { label: '35', value: '35' },
        { label: '36', value: '36' },
        { label: '37', value: '37' },
        { label: '38', value: '38' },
        { label: '39', value: '39' },
        { label: '40', value: '40' },
        { label: '41', value: '41' },
      ]);
    }
    if(buttonText == "Adet"){
      setButtonText("Kilogram");
      setDropDownText("Kilogram");
      setItems([]);
      setItems([
        { label: '100 gr', value: '100 gr' },
        { label: '200 gr', value: '200 gr' },
        { label: '300 gr', value: '300 gr' },
        { label: '400 gr', value: '400 gr' },
        { label: '500 gr', value: '500 gr' },
        { label: '600 gr', value: '600 gr' },
        { label: '700 gr', value: '700 gr' },
        { label: '800 gr', value: '800 gr' },
        { label: '900 gr', value: '900 gr' },
        { label: '1 kg', value: '1 kg' },
        { label: '2 kg', value: '2 kg' },
        { label: '3 kg', value: '3 kg' },
        { label: '4 kg', value: '4 kg' },
        { label: '5 kg', value: '5 kg' },
        { label: '6 kg', value: '6 kg' },
        { label: '7 kg', value: '7 kg' },
        { label: '8 kg', value: '8 kg' },
        { label: '9 kg', value: '9 kg' },
        { label: '10 kg', value: '10 kg' },
        { label: '11 kg', value: '11 kg' },
        { label: '12 kg', value: '12 kg' },
        { label: '13 kg', value: '13 kg' },
        { label: '14 kg', value: '14 kg' },
        { label: '15 kg', value: '15 kg' },
        { label: '16 kg', value: '16 kg' },
        { label: '17 kg', value: '17 kg' },
        { label: '18 kg', value: '18 kg' },
        { label: '19 kg', value: '19 kg' },
        { label: '20 kg', value: '20 kg' },
        { label: '21 kg', value: '21 kg' },
        { label: '22 kg', value: '22 kg' },
        { label: '23 kg', value: '23 kg' },
        { label: '24 kg', value: '24 kg' },
        { label: '25 kg', value: '25 kg' },
        { label: '26 kg', value: '26 kg' },
        { label: '27 kg', value: '27 kg' },
        { label: '28 kg', value: '28 kg' },
        { label: '29 kg', value: '29 kg' },
        { label: '30 kg', value: '30 kg' },
        { label: '31 kg', value: '31 kg' },
        { label: '32 kg', value: '32 kg' },
        { label: '33 kg', value: '33 kg' },
        { label: '34 kg', value: '34 kg' },
        { label: '35 kg', value: '35 kg' },
        { label: '36 kg', value: '36 kg' },
        { label: '37 kg', value: '37 kg' },
        { label: '38 kg', value: '38 kg' },
        { label: '39 kg', value: '39 kg' },
        { label: '40 kg', value: '40 kg' },
        { label: '41 kg', value: '41 kg' },
        { label: '42 kg', value: '42 kg' },
        { label: '43 kg', value: '43 kg' },
        { label: '44 kg', value: '44 kg' },
        { label: '45 kg', value: '45 kg' },
        { label: '46 kg', value: '46 kg' },
        { label: '47 kg', value: '47 kg' },
        { label: '48 kg', value: '48 kg' },
        { label: '49 kg', value: '49 kg' },
        { label: '50 kg', value: '50 kg' },
      ])
    }
    
  };


  //text inputlardan verş alma func

  const changeTextTableName = (input) => {
    setTableName(input);
    
  }
    
  const changeTextShopName = (input) => {
    setShopName(input);
    
  }

  

  //button ve dropdown Textleri
  const [buttonText,setButtonText] = useState('Adet');
  const [dropdownText,setDropDownText] = useState('Adet');
  

  //veritabanı kodları

  const [tableName,setTableName] = useState();
  const [shopId,setShopId] = useState(Date.now());
  const [shopName,setShopName] = useState();
  const [shopQuantity,setShopQuantity] = useState(Number(value));
  

  async function CreateDataBase(tableName) {
    try{
      const db = await SQLite.openDatabaseSync('mydatabase.db');
      await db.execAsync(`CREATE TABLE IF NOT EXISTS ${tableName}(shopId INTEGER PRIMARY KEY,shopName TEXT NOT NULL, shopQuantity TEXT NOT NULL)`);
    }
    catch(e){
      console.log(e);
    }
  }
  async function InsertDataBase(tableName,shopName,shopQuantity) {
    try {
      const db = await SQLite.openDatabaseSync('mydatabase.db');
      const result = await db.runAsync(`INSERT INTO ${tableName}(shopName, shopQuantity) VALUES(?,?)`,shopName,shopQuantity);
      GetAllDatabase();
      GetAllDatabase2(tableName);
    }
    catch (e) {
      console.log(e);
    }
  }
  async function GetAllDatabase() {
      try {
        const db = await SQLite.openDatabaseAsync('mydatabase.db');
        const result = await db.getAllAsync('SELECT name FROM sqlite_master WHERE type="table"');
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

  function addNewList(){
    CreateDataBase(tableName);
    InsertDataBase(tableName,shopName,value);
    console.log(value)
  }
  
  return(
    <View style={styles.container}>
        <Text style={{marginBottom:10,fontWeight:'bold'}}>Liste Adı</Text>
        <TextInput style={styles.textInpStyles} placeholder='Liste Adı Giriniz' onChangeText={changeTextTableName}/>
        <Text style={{marginBottom:10,fontWeight:'bold'}}>Ürün Adı</Text>
        <TextInput style={styles.textInpStyles} placeholder='Ürün Adı Giriniz' onChangeText={changeTextShopName}/>
        <View style={{flexDirection:'row',}}>
            <TouchableOpacity style={styles.buttonStyle} onPress={changeItems}>
              <Text style={{color:'white',fontWeight:'bold'}}>{buttonText}</Text>
            </TouchableOpacity>    
        </View>
        <View style={{justifyContent:'center',alignItems:'center',marginBottom:10}}>  
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder={dropdownText}
            style={styles.dropDownStyle}
            dropDownContainerStyle={styles.dropDownStyle}
          />
        </View>
        <View style={{flexDirection:'row',}}>
          <TouchableOpacity style={styles.buttonStyle} onPress={addNewList}>
            <Text style={{color:'white',fontWeight:'bold'}}>Oluştur</Text>
          </TouchableOpacity>
        </View>
       
    </View>

  );
}

export default AddPage;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F9F9F9',
    justifyContent:'center',
    alignItems:'center',
  },
  textInpStyles:{
    width:'40%',
    height:'5%',
    borderWidth:2,
    borderRadius:8,
    textAlign:'center',
    marginBottom:10,
    borderColor:'#4A90E2',
    fontWeight:'bold'
  },
  dropDownStyle:{
    width:'40%',
    backgroundColor:'#4A90E2',
    borderWidth:2,
    fontWeight:'bold'
  
  },
  buttonStyle:{
    width:'20%',
    borderWidth:2,
    borderRadius:8,
    borderColor:'black',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10,
    backgroundColor:'#FF6F61',
    color:'white',
    fontWeight:'bold'
  }
});