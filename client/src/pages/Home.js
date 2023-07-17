import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import templateimg from '../resources/templates/template1.png'
import template2img from '../resources/templates/template2.png'
import '../resources/templates.css'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

function Home() {
    const templates = [
        {
            title: 'Sample template-1',
            image: templateimg
        },
        {
            title: 'Sample template-2',
            image: template2img
        }
    ]
    const navigate = useNavigate();
    return (
        <div>
            <DefaultLayout>
                <h1>
                    <div className='row home'>
                        {templates.map((template, index) => {
                            return <div className='col-md-4'>
                                <div className='template'>
                                    <img src={template.image} height='400' alt="" style={{ width: '100%' }} />
                                    <div className='text'>
                                        <h5>{template.title}</h5>
                                        <Button onClick={() => navigate(`/templates/${index + 1}`)}>Try</Button>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </h1>
            </DefaultLayout>
        </div >
    )
}

export default Home