import { useContext,React ,createContext,useState} from "react";




const user=createContext({
      userInfoData:[],
  userContentInfoData:[]
})

export const UserProvider=user.Provider


export default function useUser(){
    return useContext(user)
}