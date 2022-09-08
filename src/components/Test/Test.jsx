import React, { useState, useEffect } from 'react';

export default function Test() {
    return (
        <div style={{ border: '3px solid red', margin: '20px', padding: '20px' }}>
            Test
        </div>
    )
}


// import React from 'react';
// import './style.css';
// import toast, { Toaster } from 'react-hot-toast';
// import Tostadita from './Tostadita';
// import 'bootstrap/dist/css/bootstrap.css';

// export default function App() {
//   const handlerChange = (e) => {
//     e.preventDefault();
//     toast.custom((t) => <Tostadita t={t} />);
//   };
//   return (
//     <div>
//       <input placeholder="no se permiten vocales" onKeyDown={handlerChange} />
//       <Toaster
//         containerStyle={{
//           top: 80,
//           left: 20,
//           bottom: 20,
//           right: 20,
//         }}
//         toastOptions={{
//           duration: 1500,
//         }}
//       />
//     </div>
//   );
// }


// const vowels = ['a', 'e','i', 'o', 'u'];

//     function onKey(e){

//         if(vowels.find(vowel=>vowel=== e.key)){
//             e.preventDefault()
//         }
//     }
//     const [email, setEmail] = useState('');

//   return (
//     <div>Evento
//         <div className='full-div' style={{ border: '3px solid red', margin: '20px', padding: '20px' }}>
//             <h1 onClick={handleClick}>Helloo</h1>
//             <input onKeyDown={onKey} type={'text'} /> 
//             <input type={'email'} value={email} onChange={(e) => setEmail(e.target.value)} placeholder={'ingrese su email'} /> 
//         </div>
//     </div>
