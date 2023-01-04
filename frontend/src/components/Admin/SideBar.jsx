// import { ProSidebarProvider, SubMenu, Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
// import { AiFillPieChart} from 'react-icons/ai';
// import { SiGooglemaps } from "react-icons/si";
// import { FaAffiliatetheme, FaShoppingCart } from "react-icons/fa";
// import { HiDocumentText } from "react-icons/hi";
// import { BsFillCalendarFill } from "react-icons/bs";
// import { RiServiceFill } from "react-icons/ri";

// const SideBar = (props) => {
//     const {collapsed} = props

//     return (  
//         <>
//             <ProSidebarProvider>
//                 <div style={{ display: 'flex', height: '100%' }}>
//                     <Sidebar 
//                         image="https://i.pinimg.com/736x/8e/6c/06/8e6c064f57f94838263d7ba9ad80f353.jpg" 
//                         collapsed = {collapsed}>
//                         <Menu>
//                             <Menu>
//                                 <SubMenu icon={<AiFillPieChart />} label="Charts">
//                                     <MenuItem> Pie charts</MenuItem>
//                                     <MenuItem> Line charts</MenuItem>
//                                     <MenuItem> Bar charts</MenuItem>
//                                 </SubMenu>
//                                 <SubMenu icon={<SiGooglemaps/>} label="Maps">
//                                     <MenuItem> Google maps</MenuItem>
//                                     <MenuItem> Open street maps</MenuItem>
//                                 </SubMenu>
//                                 <SubMenu icon={<FaAffiliatetheme/>} label="Theme">
//                                     <MenuItem> Dark</MenuItem>
//                                     <MenuItem> Light</MenuItem>
//                                 </SubMenu>
//                                 <MenuItem icon={<HiDocumentText/>}>Document</MenuItem>
//                                 <MenuItem icon={<BsFillCalendarFill/>}>Calendar</MenuItem>
//                                 <MenuItem icon={<FaShoppingCart/>}>E-commerce</MenuItem>
//                                 <MenuItem icon={<RiServiceFill/>}>Examples</MenuItem>
//                             </Menu>
//                         </Menu>
//                     </Sidebar>
//                 </div>
//             </ProSidebarProvider>
//         </>
//     );
// }

import 'react-pro-sidebar/dist/css/styles.css';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';

import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
// import sidebarBg from '../../assets/bg2.jpg';


const SideBar = (props) => {
    const {collapsed, toggled, handleToggleSidebar } = props;
    return (
        <>
            <ProSidebar
                image="https://i.pinimg.com/736x/8e/6c/06/8e6c064f57f94838263d7ba9ad80f353.jpg" 
                // image={sidebarBg}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        Hoi Dan IT
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<FaTachometerAlt />}
                            suffix={<span className="badge red">New</span>}
                        >
                            Dashboard
                        </MenuItem>
                        {/* <MenuItem icon={<FaGem />}> components 
                        </MenuItem> */}
                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu
                            suffix={<span className="badge yellow">3</span>}
                            icon={<FaGem />}
                        >   
                            <MenuItem>Manager Users</MenuItem>
                            <MenuItem>Manager Quiz</MenuItem>
                            <MenuItem>Manager Question</MenuItem>
                        </SubMenu>

                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <a
                            href="https://github.com/azouaoui-med/react-pro-sidebar"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                viewSource
                            </span>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </>
    )
}

export default SideBar;