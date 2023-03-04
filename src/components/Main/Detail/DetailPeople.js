import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetailPeople.scss';

const DetailPeople = () => {
  const params = useParams();

  const [people, setPeople] = useState(null);
  const [error, setError] = useState(null);

  const poster = process.env.REACT_APP_IMG_URL;
  const strict = useRef(true);

  useEffect(() => {
    if (strict.current) {
      strict.current = false;
      try {
        async function getDetailPeople() {
          const response = await axios.get(
            `https://api.themoviedb.org/3/person/${params.peopleId}?api_key=fd8d6c89de4982d8d30b319843006081&language=en-US`
          );
          setPeople(response.data);
        }

        getDetailPeople();
      } catch (error) {
        setError(error.message);
      }
    }
  }, [params.peopleId]);

  if (error) {
    return <p>Error : {error.message}</p>;
  }

  return (
    <div className="detail_people">
      <div className="detail_people_card">
        {people && (
          <>
            <div className="people_image">
              <img src={`${poster}${people.profile_path}`} alt="poster" />
            </div>
            <div className="people_content">
              <h1>{people.name}</h1>
              <p>Biography</p>
              <p>{people.biography}</p>
              {/* <div className="query_overlays" /> */}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DetailPeople;
