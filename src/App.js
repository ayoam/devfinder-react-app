import './App.scss';
import React, { useEffect, useState } from 'react'
import SearchBar from './components/searchBar/SearchBar';
import Layout from './components/layout/Layout';
import Profile from './components/profile/Profile';

function App() {
  const [user,SetUser] = useState(null);
  const [isLoading,SetIsLoading] = useState(false);
  const [hasError,SetHasError] = useState(false);

  useEffect(()=>{
    fetchUserData("github");
  },[])


  const fetchUserData= async(username) => {
    SetIsLoading(true);
    try{
      const response = await fetch(`https://api.github.com/users/${username}`);
      if(!response.ok){
        throw new Error();
      }
      const data  = await response.json();
      SetUser(data);
      SetHasError(false);
    }
    catch(err){
      SetHasError(true);
      console.log(err.message);
    }
    SetIsLoading(false);
  }

  const searchBtnHandler = (username) =>{
    fetchUserData(username);
  }

  return (
    <Layout>
      <SearchBar onGetSearchValue={searchBtnHandler} userFound={!hasError} onClearError={()=>SetHasError(false)}/>
      {isLoading && <p style={{textAlign:'center'}}>Loading...</p>}
      {user && <Profile userData={user}/>}
    </Layout>
  );
}

export default App;
