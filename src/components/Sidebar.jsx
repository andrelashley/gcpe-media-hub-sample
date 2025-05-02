import { NavDrawer, Nav, NavItem, NavDrawerBody, AppItem } from '@fluentui/react-nav-preview';


export default function Sidebar() {
    return (
    <NavDrawer open={true} type='inline'>
    <NavDrawerBody>
    <AppItem as="a"> Media Requests</AppItem>
    <AppItem as="a"> Media Contacts</AppItem>
      <NavItem key='home' value="home">Home</NavItem>
      <NavItem key='body' value="settings">Settings</NavItem>
      <NavItem key='about' value='about'>About</NavItem>
    </NavDrawerBody>
  </NavDrawer>
    );
  }
  
