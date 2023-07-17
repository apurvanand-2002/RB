import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import DefaultLayout from '../../components/DefaultLayout'
import Template1 from './Template1'
import { useNavigate, useParams } from 'react-router-dom'
import Template2 from './Template2';
import { Button } from 'antd';

function Templates() {
    const params = useParams();
    const gettemplate = () => {
        switch (params.id) {
            case '1': {
                return <Template1 />
            }
            case '2': {
                return <Template2 />
            }
        }
    }
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    const navigate = useNavigate();
    return (
        <DefaultLayout>
            <div className='d-flex justify-content-end my-5'>
                <Button className='mr-5 mx-3' onClick={() => (navigate('/home'))}>Back</Button>
                <Button className='mx-3' onClick={handlePrint}>Print</Button>
            </div>
            <div ref={componentRef}>
                {gettemplate()}
            </div>
        </DefaultLayout>
    )
}

export default Templates