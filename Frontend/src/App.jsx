
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import NewProduct from './Component/NewProduct';
import { Routes, Route, useActionData } from 'react-router';
import Edit from './Component/Edit'
import { useEffect, useState } from 'react';
import ToastContainer from './ToastTemplate/ToastContainer';
import GridContainer from './Component/GridContainer';


function App() {

  const [editProduct, seteditProduct] = useState({
    createdAt: "",
    image: "",
    name: "",
    price: "",
    updatedAt: "",
    __v: 0,
    _id: ""
  });

  const[successToastVisible,setsuccessToastVisible] = useState(false);
  const[deleteToastVisible,setdeleteToastVisible] = useState(false);
  const[errorToastVisible,seterrorToastVisible] = useState(false);

  const[toastInfo,settoastInfo] = useState({
    success:"",
    delete:"",
    error:""
  });

  return (
    <div className='  overflow-hidden w-full  bg-gray-300 dark:bg-[#0A2647] relative'>
      <Navbar />
      <div className='w-full min-h-screen px-4 '>
        <GridContainer seteditProduct={seteditProduct} setdeleteToast={setdeleteToastVisible} seterrorToast={seterrorToastVisible} settoastInfo={settoastInfo} />
        <Routes>
          <Route path='/' />
          <Route path='edit' element={<Edit editProduct={editProduct} setsuccessToast={setsuccessToastVisible} settoastInfo={settoastInfo} seterrorToast={seterrorToastVisible} />} />
          <Route path='add' element={<NewProduct setsuccessToast={setsuccessToastVisible} seterrorToast={seterrorToastVisible} settoastInfo={settoastInfo} />} />
        </Routes>
      </div>
      <ToastContainer successToastState={[successToastVisible,setsuccessToastVisible]} deleteToastState={[deleteToastVisible,setdeleteToastVisible]}errorToastState={[errorToastVisible,seterrorToastVisible]} toastInfo={toastInfo}/>
      <Footer />
    </div>
  )
}

export default App;
