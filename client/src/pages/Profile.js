import React, { useState } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { Button, Form, Spin, Tabs, message } from 'antd';
import PersonalInfo from '../components/PersonalInfo';
import SkillsEducation from '../components/SkillsEducation';
import ExperienceProjects from '../components/ExperienceProjects';
import axios from 'axios';


function Profile() {
    const [loading, setLoading] = useState(false);
    const user = JSON.parse(localStorage.getItem('sheyresume-user'));
    const onFinish = async (values) => {
        setLoading(true);
        try {
            const result = await axios.post('api/user/update', { ...values, _id: user._id });
            localStorage.setItem('sheyresume-user', JSON.stringify(result.data));
            setLoading(false);
            message.success('Profile Update successful!');

        } catch (error) {
            setLoading(false);
            message.error('Profile Update failed!');
        }
    }
    const items = [
        {
            key: '1',
            label: `Personal Info`,
            children: <PersonalInfo />,
        },
        {
            key: '2',
            label: `Skills & Education`,
            children: <SkillsEducation />,
        },
        {
            key: '3',
            label: `Experience & Projects`,
            children: <ExperienceProjects />,
        },
    ];
    return (
        <div className='update-profile'>
            <DefaultLayout>
                {loading && <Spin size="large" />}
                <h2><b>Update Profile</b></h2>
                <hr />
                <Form layout='vertical' onFinish={onFinish} initialValues={user}>
                    <Tabs defaultActiveKey="1" items={items} />
                    <Button htmlType='submit'>Update</Button>
                </Form>
            </DefaultLayout>
        </div>
    )
}

export default Profile