import { Navbar } from "../../UI/Navbar/Navbar";
import { Footer } from "../../UI/Footer/Footer";
import { useOutlet } from "react-router-dom";

export function MainLayout(){
    // per gestire il layout della pagina
    const outlet = useOutlet()
    
// creaiamo il nostro layout che sará costituito sempre da navbar e footer e un contenuto variabile
    return (
        <div>
            <Navbar />
            <div>
                {outlet}
            </div>
            <Footer />
        </div>
    )



}