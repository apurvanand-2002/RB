import React from 'react';
import './../resources/defaultlayout.css';
import { Button, Dropdown } from 'antd';
import { useNavigate } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';

function DefaultLayout(props) {
    const user = JSON.parse(localStorage.getItem('sheyresume-user'));
    const navigate = useNavigate();
    const items = [
        {
            key: '1',
            label: (
                <a rel="noopener noreferrer" href="/home">
                    Home
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a rel="noopener noreferrer" href="/profile">
                    Profile
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a onClick={() => {
                    localStorage.removeItem('sheyresume-user')
                    navigate('/login')
                }}>
                    <span>Logout</span>
                </a>
            ),
        },
    ];
    return (
        <div className='layout'>
            <div className='header'>
                <h1 onClick={() => navigate('/home')} style={{ cursor: 'pointer' }}>Apurv's Resume Building Website</h1>
                <Dropdown
                    menu={{
                        items,
                    }}
                    placement="bottomLeft"
                >
                    <Button icon={<UserOutlined />}>{user.username}</Button>
                </Dropdown>
            </div>
            <div className='content' style={{ overflow: 'scroll' }}>
                {props.children}
            </div>
        </div>
    )
}

export default DefaultLayout