import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';
import '../../App.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import BackgroundImage from '../../assets/images/bg.jpg'

const HomePage=()=>{
   const[posts,setPosts]=useState([]);
   const[pageNumber,setPageNumber]=useState(0);
   useEffect(() =>{
       const fetchApiPosts=async()=>{
        const res =await axios("https://jsonplaceholder.typicode.com/photos?page={pageNumber}&_limit=2"
        );
        setPosts(res.data);
       };

       fetchApiPosts()
   },[]);
   const fetchData=()=>{
    setPageNumber(pageNumber+1);
    const fetchApiPosts=async()=>{
        const res =await axios("https://jsonplaceholder.typicode.com/photos?page={pageNumber}&_limit=2"
        );
        setPosts(posts.concat(res.data));
       };

       fetchApiPosts()

   }

   return(
    <header style={ HeaderStyle }>
    <div className='Home'>
        <h1>Welcome to the Contents</h1>
        <div className="text-center">
            
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
        <ol>
            {posts.map((post)=>{
              return(
                
               <li>
                {" "}
               
                <p className="til1">{post.title}</p><br/>
                
                <center><img src={post.url} alt="img"></img></center>
               <center><img className="check" src={post.thumbnailUrl} alt="img2"></img></center>
                
                </li>
              );
            }
            )}
        </ol>
        <InfiniteScroll
  dataLength={posts.length} //This is important field to render the next data
  next={fetchData}
  hasMore={true}
  loader={<h4>Loading...</h4>}
  //</div>endMessage={
  //  <p style={{ textAlign: 'center' }}>
   //   <b>Yay! You have seen it all</b>
   // </p>
  //}
  // below props only if you need pull down functionality
  //refreshFunction={this.refresh}
  //pullDownToRefresh
  //pullDownToRefreshThreshold={50}
  //pullDownToRefreshContent={
  //  <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
 // }
 // releaseToRefreshContent={
   // <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
 // }
>
  {/*items*/}
 </InfiniteScroll>
    </div>
    </header>
   );
};

export default HomePage;

/*
export default function HomePage() {
    return (
        <div className="text-center">
            
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
}
*/

const HeaderStyle = {
    width: "100%",
    height: "100%",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}