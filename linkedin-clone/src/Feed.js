import React, { useEffect, useState } from 'react';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import InputOption from './InputOption';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { db } from './firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


function Feed() {
  const user= useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        const newPosts = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
  
        setPosts(newPosts.reverse());
      });
  }, []);
  

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      desc: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput("");
  };
    
  return (
    <div className='feed'>
      <div className="feed_inputContainer">
        <div className='feed_input'>
          <CreateIcon />
          <form>
            <input value={input} type='text' onChange={e => setInput(e.target.value)} />
            <button onClick={sendPost} type='submit'>Send</button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#7C0CBCD" />
          <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7FC15E" />
        </div>
      </div>
      {/* posts */}
      
      {posts.slice(0).reverse().map(({ id, data: { name, desc, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          desc={desc}
          message={message}
          photoUrl={photoUrl}
        />
      ))}

     
      
      
    </div>
  );
}

export default Feed;

