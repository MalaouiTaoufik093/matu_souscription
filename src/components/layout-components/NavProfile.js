import React from "react";
import { Menu, Dropdown, Avatar } from "antd";
import { connect } from 'react-redux'
import { 
  EditOutlined, 
  SettingOutlined, 
  ShopOutlined, 
  QuestionCircleOutlined, 
  LogoutOutlined 
} from '@ant-design/icons';
import Icon from 'components/util-components/Icon';
import { signOut } from 'redux/actions/Auth';
import {useSelector} from 'react-redux'


const menuItem = [
	{
		title: "Modifier le Profile",
		icon: EditOutlined ,
		path: "/"
    },
    
  //   {
	// 	title: "Account Setting",
	// 	icon: SettingOutlined,
	// 	path: "/"
  //   },
  //   {
	// 	title: "Billing",
	// 	icon: ShopOutlined ,
	// 	path: "/"
	// },
  //   {
	// 	title: "Help Center",
	// 	icon: QuestionCircleOutlined,
	// 	path: "/"
	// }
]

export const NavProfile = ({signOut}) => {
  const username__ = useSelector (state => state.auth)
  const profileImg = "/img/avatars/user_matu.png";
  const profileMenu = (
    <div className="nav-profile nav-dropdown" style={{MARGINTOP: -4}}>
      <div className="nav-profile-header" >
        <div className="d-flex">
          <Avatar size={25} src={profileImg} />
          <div className="pl-3">
            <h4 className="mb-0">{username__.username}</h4>
            <span className="text-muted">Utilisateur Matu</span>
          </div>
        </div>
      </div>
      <div className="nav-profile-body">
        <Menu>
          {menuItem.map((el, i) => {
            return (
              <Menu.Item key={i}>
                <a href={el.path}>
                  <Icon className="mr-3" type={el.icon} />
                  <span className="font-weight-normal">{el.title}</span>
                </a>
              </Menu.Item>
            );
          })}
          <Menu.Item key={menuItem.length + 1} onClick={e => signOut()}>
            <span>
              <LogoutOutlined className="mr-3"/>
              <span className="font-weight-normal">se déconnecter</span>
            </span>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
  return (
    <Dropdown placement="bottomRight" overlay={profileMenu} trigger={["click"]}>
      <Menu className="d-flex align-item-center" mode="horizontal">
        <Menu.Item key="profile">
          <Avatar src={profileImg} size={25}  />
        </Menu.Item>
      </Menu>
    </Dropdown>
  );
}

export default connect(null, {signOut})(NavProfile)
