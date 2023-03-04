import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPeople } from '../../../utils/api';

import './People.scss';

const People = () => {
  const [people, setPeople] = useState(null);
  const [error, setError] = useState(null);

  const poster = process.env.REACT_APP_IMG_URL;
  const strict = useRef(true);

  useEffect(() => {
    if (strict.current) {
      strict.current = false;
      try {
        getPeople().then((result) => setPeople(result));
      } catch (error) {
        setError(error);
      }
    }
  }, []);

  if (error) {
    return <p>Error : {error.message}</p>;
  }

  return (
    <>
      <h3 className="popular_people">Popular People</h3>
      <div className="people_profile">
        {people &&
          people.map((item) => (
            <div className="people">
              <Link to={`/people/${item.id}`}>
                <img src={`${poster}${item.profile_path}`} alt="Profile" />
                <div className="people_name">
                  <p>{item.name}</p>
                  <p>{item.known_for.original_title}</p>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default People;
