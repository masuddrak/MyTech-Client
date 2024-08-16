import { Link } from "react-router-dom";

const Submenu = () => {
    return (
        <div className="bg-white py-4 shadow-md w-full absolute">
            <ul className="flex gap-3 justify-between font-bold text-sm max-w-[1320px] mx-auto">
                <Link to="/shop"><li>Shop Page</li></Link>
                <li>Desktop</li>
                <li>Component</li>
                <li>Monitor</li>
                <li>UPS</li>
                <li>Phone</li>
                <li>Tablet</li>
                <li>Office Equipment</li>
                <li>Camera</li>              
                <li>Security</li>
                <li>Networking</li>
                <li>Software</li>
                <li>Server & Storage</li>
                <li>Accessories</li>
                <li>Gadget</li>
                <li>Gaming</li>
                <Link to="/details">TV</Link>
                <li>Appliance</li>
            </ul>
        </div>
    );
};

export default Submenu;