import React from 'react'
import SuccessToast from './SuccessToast'
import DeleteToast from './DeleteToast'
import ErrorToast from './ErrorToast';

function ToastContainer({ successToastState, deleteToastState, errorToastState, toastInfo}) {
    console.log('some information', successToastState);

    return (
        <div
            className=' w-screen fixed bottom-14 flex flex-col justify-center items-center'
        >
            <ErrorToast bg={'bg-gray-600 mb-2'} textColor={'text-gray-300 '} info={toastInfo} isVisible={errorToastState[0]} setisVisible={errorToastState[1]} />
            <DeleteToast bg={'bg-gray-600 mb-2'} textColor={'text-gray-300 '} info={toastInfo} isVisible={deleteToastState[0]} setisVisible={deleteToastState[1]} />
            <SuccessToast bg={'bg-gray-600 mb-2'} textColor={'text-gray-300 '} info={toastInfo} isVisible={successToastState[0]} setisVisible={successToastState[1]} />
        </div>
    )
}

export default ToastContainer