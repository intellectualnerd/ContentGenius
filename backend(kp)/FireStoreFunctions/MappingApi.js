import { firestore } from "../FireStoreFunctions/index.js"
export const AssignApi=async (idtoken)=>{
const docref=firestore.collection("MappingOfApi").doc("api_users");
const fetch=await docref.get()

let data=fetch.data()["Mapping"]
let userMap=fetch.data()["userMap"]
if(!userMap){
    userMap={}
}
const eligibleKeys = Object.keys(data).filter(key => data[key] < 15);
if (eligibleKeys.length==0){
    return null;
}

const getRandomElement = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const randomKey = getRandomElement(eligibleKeys);

console.log('Random Key:', randomKey);
data[randomKey]++;
console.log(data)
userMap[idtoken]=randomKey
docref.set({
    Mapping:data,
    userMap:userMap


})
return randomKey


}