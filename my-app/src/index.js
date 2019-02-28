import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Icon, Image} from 'semantic-ui-react';

class TopMenu extends React.Component{
  render(){
    return (
        <Menu borderless className="socialmedia">
          <Container>
            <Menu.Item position="right"><Icon size="large" inverted name="facebook f" /></Menu.Item>
            <Menu.Item><Icon size="large" inverted name="twitter"/></Menu.Item>
            <Menu.Item><Icon size="large" inverted name="instagram"/></Menu.Item>
            <Menu.Item><Icon size="large" inverted name="tripadvisor"/></Menu.Item>
          </Container>
        </Menu>
    );
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item>
              <Image src="http://courses.ics.hawaii.edu/ics314s19/morea/ui-frameworks/formaggio-logo.png"/>
            </Menu.Item>
            <Menu.Item>
              <p>HOME</p>
            </Menu.Item>
            <Menu.Item>
              <p>MENU</p>
            </Menu.Item>
            <Menu.Item>
              <p>GALLERY</p>
            </Menu.Item>
            <Menu.Item>
              <p>EVENTS</p>
            </Menu.Item>
            <Menu.Item>
              <p>RESERVATIONS</p>
            </Menu.Item>
            <Menu.Item>
              <p>ABOUT US</p>
            </Menu.Item>
            <Menu.Item>
              <p>CONTACT</p>
            </Menu.Item>
          </Container>
        </Menu>
    );
  }
}

class Bottom extends React.Component{
  render() {
    return(
        <Image fluid src="http://courses.ics.hawaii.edu/ics314s19/morea/ui-frameworks/formaggio-wine-bottles.jpg"/>
    );
  }
}



class Formaggio extends React.Component {

  render() {
    return (
        <div className="blackbgr">
          <TopMenu/>
          <MiddleMenu/>
          <Bottom/>
        </div>
    );
  }
}

ReactDOM.render(<Formaggio/>, document.getElementById('root'));
