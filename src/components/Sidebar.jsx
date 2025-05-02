import { NavDrawer, Nav, NavItem, NavDrawerBody } from '@fluentui/react-nav-preview';


export default function Sidebar() {
    return (
    <NavDrawer open={true} type='inline'>
    <NavDrawerBody>
      <NavItem key='home' value="home">Home</NavItem>
      <NavItem key='body' value="settings">Settings</NavItem>
      <NavItem key='about' value='about'>About</NavItem>
    </NavDrawerBody>
  </NavDrawer>
    );
  }
  
