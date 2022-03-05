import Card from '../ui/Card';
import classes from './Profile.module.scss';
import { UilMapMarker,UilLink,UilTwitter,UilBuilding } from '@iconscout/react-unicons'


const Profile = (props) => {
  let joinDate = new Date(props.userData['created_at']);
  joinDate = `${joinDate.getDate()} ${joinDate.toLocaleString('en-us', { month: 'short' })} ${joinDate.getFullYear()}`;
  
  const location = props.userData['location'];
  const twitter= props.userData['twitter_username'];
  const blog = props.userData['blog'];
  const company = props.userData['company'];

  
  return (
    <Card className={classes.card}>
      <div className={classes.profileHeader}>
        <div className={classes.imgContainer}>
          <img src={props.userData['avatar_url']} alt="avatar"/>
        </div>
        <div className={classes.profileInfo}>
          <p className={classes.name}>{props.userData.name}</p>
          <p className={classes.username}>@{props.userData.login}</p>
          <p className={classes.joinDate}>Joined {joinDate}</p>
        </div>
      </div>
      <div className={classes.profileBio}>
        <p>{props.userData.bio ||'This profile has no bio'}</p>
      </div>
      <div className={classes.profileStats}>
        <p className={classes.statsItem}>Repos <span>{props.userData['public_repos']}</span></p>
        <p className={classes.statsItem}>Followers <span>{props.userData['followers']}</span></p>
        <p className={classes.statsItem}>Following <span>{props.userData['following']}</span></p>
      </div>
      <ul className={classes.profileSocialLinks}>
        <li className={!location ? classes['not-available'] : ''}>
          <UilMapMarker className={classes.uil}/>{location || 'Not available'}
        </li>
        <li className={!twitter ? classes['not-available'] : ''}>
          <UilTwitter className={classes.uil}/>{twitter || 'Not available'}
        </li>
        <li className={!blog ? classes['not-available'] : ''}>
          <UilLink className={classes.uil}/>{blog || 'Not available'}
        </li>
        <li className={!company ? classes['not-available'] : ''}>
          <UilBuilding className={classes.uil}/>{company || 'Not available'}
        </li>
      </ul>
    </Card>
  )
}

export default Profile