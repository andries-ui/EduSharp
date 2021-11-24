// import SQLite from 'react-native-sqlite-storage'

// const db = SQLite.openDatabase({
//     name:'EduSharpdb',
//     location:'default'
//   },
//   ()=>{},
//   error=>{
//     console.log(error)
//   });


//   class sqlFunctions{

//      createTable=(tblName)=>{
//             db.executeSql(
//                 "CREATE TABLE IF NOT EXIST"
//                 + tblName 
//                 + " (ID INTEGER PRIMARY KEY AUTOINCREMENT, Name Text, Email Text, Password Text);"
//             )
//     }

//     setData(tblName, names, email, password){
//       await db.executeSql(
//            "INSERT INTO "
//            + tblName
//            + "( Name, Email, Password) VALUES(?,?,?);",
//            [names, email,password]
//        ) 
//     }

//     getData(tblName,id){
//         db.executeSql(
//             "SELECT Email, Password from "
//             + tblName 
//             + "Where ID ="+ id
//         )
//     }
//   }

//   export default sqlFunctions()