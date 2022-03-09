import { firestore } from "../configue/Firebase";


class GeneralService {

    async post(table, data, navigation) {
        let obj = {};
        
        return await firestore.collection(table).doc().push(data).then((res) => {
            
            obj = { status: 'Success', details: res };
            console.log(res, "==>>");
        }).catch((err) => {
            obj = { status: 'Failed', details: err };
            console.log(err, "======>>>>>>>");
        });
    }

    async indiPost(table,id,object,data,navigation){
        return await firestore.collection(table).doc(id).doc(object).push(data).then(res=>{
            log
        }).catch(err=>{
            console.log(err);
        })
    }

    async get(table) {
          await firestore.collection(table).get().then(querySnapshot=>{
            console.log('Total users: ', querySnapshot.size);
            let data = [];
            querySnapshot.forEach(documentSnapshot => {
                data.push(documentSnapshot.data());
            });  

            return [data];
        }).catch(err=>{
            console.log('====================================');
            console.log(err, "==>>==>");
            console.log('====================================');
        });
    }
    async getItem(table, id, navigation) {

        return await firestore.collection(table).doc(id).get();
    }

    async update(table, id, data, navigation) {
        return await firestore.collection(table).doc(id).update(data);
    }
}

export default new GeneralService();