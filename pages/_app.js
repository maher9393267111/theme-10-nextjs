import "swiper/css";
import "swiper/css/navigation";
import '../public/assets/css/style.css';
import { useEffect } from "react";

function MyApp({ Component, paimgProps }) {
    useEffect(() => {
        const WOW = require('wowjs');
        window.wow = new WOW.WOW({
            live: false
        });
        window.wow.init();
    }, []);
    return (<>
        <Component {...paimgProps} />
    </>)
}

export default MyApp
