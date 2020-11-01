// import React, {useState} from 'react'

// export default function Contact() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');

//     const submitRequest = async (e) => {
//         e.preventDefault();
//         console.log({ name, email, message });
//         const response = await fetch("/access", { 
//         method: 'POST', 
//         headers: { 
//             'Content-type': 'application/json'
//         }, 
//         body: JSON.stringify({name, email, message}) 
//   }); 
//     const resData = await response.json(); 
//         if (resData.status === 'success'){
//             alert("Message Sent."); 
//             this.resetForm()
//         } else if(resData.status === 'fail'){
//             alert("Message failed to send.")
//   }
//   };


//     return (
//         <form className="contact" onSubmit={submitRequest}>
//             <h2>Contact me</h2>
//             <form action="" className="contact__form">
//                 <input type="text" id="name" 
//                        placeholder="Your name" 
//                        onChange={e => setName(e.target.value)} 
//                        value={name} required
//                        />
//                 <input type="email" id="email" 
//                        placeholder="Your email" 
//                        onChange={e => setEmail(e.target.value)}
//                        value={email} required
//                         />
//                 <textarea name="" id="message"
//                           placeholder="Your message" 
                          
//                           onChange={e => setMessage(e.target.value)}
//                           value={message}
//                           ></textarea>
//                 <button type="submit">Send</button>
//             </form>
//         </form>
//     )
// }
