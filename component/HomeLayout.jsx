'use client'
import { AntdRegistry } from "@ant-design/nextjs-registry"
import 'animate.css';

const MainLayout = ({children}) => {
    return(
        <AntdRegistry>
            {children}
        </AntdRegistry>
    )
}

export default MainLayout