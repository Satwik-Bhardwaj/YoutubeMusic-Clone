import Header from "../header/header";
import PlayerOver from "../PlayerOver/PlayerOver";
import PlayerNavigation from "../PlayerOver/PlayerNavigation";

const AppLayout = ({children})=>{
    return(
        <>
            <Header/>
            {children}
            {/* <PlayerOver/> */}
            
        </>
    )
    
}
export default AppLayout;