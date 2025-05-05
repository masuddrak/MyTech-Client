import "./NavberCard.css";
import { Link } from 'react-router-dom';
export default function NavberCard({ IoPersonSharp, title, decription1, decription2,animatinIcon }) {
    return (
        <div className="flex items-center gap-3">
            <IoPersonSharp className={`text-[20px] text-[#ef4a23] ${animatinIcon}`}></IoPersonSharp>
            <div className="leading-4">
                <p >{title}</p>
                {decription2 ? <div className="flex gap-1">
                    <Link to="/signin" className="text-gray-400 text-sm hover:text-[#ef4a23] ">{decription1}</Link>
                    <small className="text-gray-400 text-sm">or</small>
                    <Link to="/signUp" className="text-gray-400 text-sm hover:text-[#ef4a23]">{decription2}</Link>
                </div> : <div className="flex gap-1">
                    <small className="text-gray-400 text-sm">{decription1}</small>
                </div>}

            </div>
        </div>
    )
}
