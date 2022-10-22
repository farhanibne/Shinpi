import {useState,useEffect,useRef} from 'react'
import { v4 as uuidv4 } from 'uuid';
import {storage,firestore,serverTimestamp,human} from '../../config/firebase'
import Link from 'next/link';
import emailjs from '@emailjs/browser';

function QQ({user}) {
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [image,setImage] = useState(null)
    const [url,setUrl] = useState('')
    const form = useRef();

    const SubmitDetails = ()=>{
   
        if (!title || !body || !image){  
            return (alert("Please fill all the fields"))
        }
       var uploadTask = storage.ref().child(`image/${uuidv4()}`).put(image)
       uploadTask.on('state_changed', 
       (snapshot) => {
         var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
         if(progress == '100') return(alert(' Articles posted Successfully 🥳'))    
         
       }, 
       (error) => {
            alert("Error Uploading Image")
       }, 
       () => {
       
         uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
           console.log('File available at', downloadURL);
            // setUrl(downloadURL)
            const yotch = downloadURL

            firestore.collection('articles').add({
              title: title,
              description: body,
              createdAt: serverTimestamp(),
              link: yotch,
          })
              
             setTitle("");
             setBody("");  

        

         
           

         });
       }
     );
     var templateParams = {
      name: 'James',
      notes: 'Check this out!'
  };

     emailjs.send('#####', '####', '####', '####' ).then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
   }, function(error) {
      console.log('FAILED...', error);
   });;
    }

  
 

  return (
    <div ref={form}>
        <center>
            <h1 style={{fontSize:'45px'}}>Create An Article</h1><br/>

            <input
            required
            style={{width:'300px',height:'40px',borderRadius:'5px 5px 0 0 ',margin:'15px',border:'none',padding:'5px',borderBottom:'1px solid black'}}
            type="text"
            value={title}
            id="title"
            placeholder="Title"
            name='title'
            onChange={(e)=>setTitle(e.target.value)}
            
            /><br/>
            <textarea
            required
             style={{width:'300px',height:'40px',borderRadius:'5px 5px 0 0 ',margin:'15px',border:'none',padding:'5px',borderBottom:'1px solid black'}}
             type="text"
             value={body}
             placeholder="body"
             onChange={(e)=>setBody(e.target.value)}
            
            /><br/>
             <div className="file-field input-field">
                <div className="btn  blue  " >

                    <input  style={{width:'300px',height:'40px',borderRadius:'5px 5px 0 0 ',margin:'15px',border:'none',padding:'5px',borderBottom:'1px solid black'}} type="file" accept="image/*" onChange={(e)=>setImage(e.target.files[0])} />

                </div>
                <div className="file-path-wrapper">

                </div>
             </div>
             <button className="btn blue" style={{marginLeft:'20px',padding:'15px', background:'#0f2137',borderRadius:'5px',border:'none',color:'white'}} onClick={()=>SubmitDetails()} > Post</button>
             <Link href="/Dashboard">
             <button  className="btn green" style={{marginLeft:'20px',padding:'15px', background:'#4da64d',borderRadius:'5px',border:'none',color:'white'}} > Back</button> 
             </Link>
            
            <br/><br/>
            <h1 style={{fontSize:'15px'}}>⚠️ Wait a few seconds to upload until message pops up.</h1>

             <style jsx>
                 {`
                 
                 .rootdiv{
                     margin:30px auto;
                     max-width:600px;
                     padding:20px;
                     text-align:center;
                 }
                 `}
             </style>

        </center>
    </div>
  )
}

export default QQ