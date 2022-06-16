import { Profile } from 'components/Profile/Profile';
import user from 'user.json';
// import PropTypes from 'prop-types';

export const App = () => {
  return (
    <div>
      <Profile key={user.username} avatar={user.avatar} username={user.username} tag={user.tag} location={user.location}
        followers={user.stats.followers} views={user.stats.views} likes={user.stats.likes}/>
    </div>
  );
};

