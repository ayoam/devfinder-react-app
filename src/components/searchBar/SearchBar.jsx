import React,{ useRef } from 'react'
import Card from '../ui/Card' 
import classes from './SearchBar.module.scss'
import { UilSearch ,UilTimes} from '@iconscout/react-unicons'
import Button from '../ui/Button'


const SearchBar = (props) => {
  const searchInputRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if(searchInputRef.current.value.trim()!==''){
      props.onGetSearchValue(searchInputRef.current.value);
    }
  }

  const clearBtnClickHandler = () => {
    searchInputRef.current.value='';
    props.onClearError();
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <Card className={classes.wrapper}>
        <UilSearch size='40' className={classes.UilSearch}/>
        <div className={classes.inputContainer}>
          <input type="text" className={classes.searchInput} ref={searchInputRef} placeholder="Search Github username..."/>
          {!props.userFound && <p className={classes.NoResult}>No results</p>}
        </div>
        <UilTimes size='30' className={classes.UilTimes} onClick={clearBtnClickHandler}/>
        <Button text="Search"/>
      </Card>
    </form>
    
  )
}

export default SearchBar