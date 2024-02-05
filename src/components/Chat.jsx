import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage';
import { QuerySnapshot, addDoc, collection, onSnapshot } from "firebase/firestore"
import { db } from "../config/firebase"

export default function chat({ user }) {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');
    const messagesRef = collection(db, "messages")

    const handleSubmit = async () => {
        const date = new Date();
        await addDoc(messagesRef, {
            text,
            email: user.email,
            logo: user.photoUrl,
            name: user.displayName,
            date
        })
        setText("")
        setTimeout(() => document.querySelector("#Copyright").scrollIntoView({ behavior: 'smooth' }), 0.5);
    };

    useEffect(() => {
        const unsubscribe = onSnapshot(messagesRef, (QuerySnapshot) => {
            const newMessages = QuerySnapshot.docs
                .map((doc) => doc.data())
                .sort((a, b) => a.date - b.date);
            setMessages(newMessages)
            setTimeout(() => document.querySelector("#Copyright").scrollIntoView({ behavior: 'smooth' }), 0.5);
        });
        return () => unsubscribe();
    }, []);

    return (
        <div>
            <div className="justify-content-centerenter ">
                <h2 className="text-primary">chat app</h2>
            </div>
            <div className='row mt-4'>
                <div className='col-xl4 xol-lg-4 col-sm-3 col-2'>  </div>
                <div className='col-xl4 xol-lg-4 col-sm-6 col-8 chat-message'>
                    {messages.map((message) => (
                        <ChatMessage {...message} user={user} />
                    ))}
                    <div className='d-flex mt-2'>
                        <input type="text" className='form-control' value={text} onChange={(e) => setText(e.target.value)} />
                        <button className='btn btn-secondary ms-3' onClick={handleSubmit} >Send</button>
                    </div>
                    <div id='copyright' className='mt-3'>
                        copyrights reserved
                    </div>
                </div>



            </div>
        </div>
    );
}
