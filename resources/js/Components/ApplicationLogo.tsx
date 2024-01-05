import submarineLogo from '../../../public/submarinelogo.png'
import {ImgHTMLAttributes} from "react";

export default function ApplicationLogo({ className = '', ...props }: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img {...props} className={"w-56 h-auto " + className} src={submarineLogo} />
    );
}
