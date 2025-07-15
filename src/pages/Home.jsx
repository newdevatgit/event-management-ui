import Slider from "../components/Slider";
import Categories from "./Categories";


export default function Home() {
    return(
       <>
        <div className="mb-8"><Slider/></div>
        <Categories />
       </> 
    );
}