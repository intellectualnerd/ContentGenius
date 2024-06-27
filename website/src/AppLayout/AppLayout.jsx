import { Outlet,useNavigation } from "react-router-dom";
import LoaderAnimation from "./Loader/LoaderAnimation";
const AppLayout = ()=>{
    const navigation = useNavigation();
    const isLoading =  navigation.state=="loading"
    return(
        <>
            {isLoading && <LoaderAnimation/>}
            <main>
                <Outlet/>
            </main>
        </>
    )
};
export default AppLayout;