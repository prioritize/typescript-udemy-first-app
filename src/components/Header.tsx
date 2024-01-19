import {type FC, type ReactNode} from "react";

interface HeaderProps {
    image: {
        src: string
        alt: string,
    },
    children: ReactNode
}
const Header: FC<HeaderProps> = ({image, children}) => {
    return (
        <header>
            <img {...image}/>
            {children}
        </header>
    )
}
export default Header;