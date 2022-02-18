import { firestore } from "../configue/Firebase";


class Service  {

    post(table,data, id, navigation){

        const userdata = {
            email: data.email,
            name: data.name,
            location: "",
            phonenumber: "",
          };

          console.log(userdata);

        return firestore.collection(`${table}`).doc(`${id}`).set(userdata).then((res)=>{
            console.log(res);
            navigation.navigate('SignInScreen');
        }).catch((err)=>{
            console.log(err);
        });
    }

    get(table){
        
    }
    get(table,id, navigation){

    }

    update(table,id,data, navigation){

    }
}

export default new Service();