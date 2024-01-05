import React, { useEffect, useState } from 'react';
import db from '../Firebase';
import { collection, getDocs } from 'firebase/firestore';
import Card from './Card';
import './stylesheets/Media.css';

const Media = (props) => {
  const [originals, setOriginals] = useState([]);
  const [trending, setTrending] = useState([]);
  const [newDisney, setNewDisney] = useState([]);
  const [recommends, setRecommends] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const collectionRef = collection(db, 'Movies');
      try {
        const querySnapshot = await getDocs(collectionRef);
        const originalsArray = [];
        const trendingArray=[];
        const recommendsArray=[];
        const newDisneyArray=[];
        querySnapshot.forEach((doc) => {
          switch (doc.data().type) {
            case 'original':
              originalsArray.push({ id: doc.id, ...doc.data() });
            break;

            case 'trending':
            trendingArray.push({ id: doc.id, ...doc.data() });
            break;

            case 'recommend':
            recommendsArray.push({ id: doc.id, ...doc.data() });
            break;

            case 'new':
            newDisneyArray.push({ id: doc.id, ...doc.data() });
            break;

            // Add other cases for different types
            default:
              break;
          }
        });
        setOriginals(originalsArray);
        setRecommends(recommendsArray);
        setNewDisney(newDisneyArray);
        setTrending(trendingArray);

      } catch (error) {
        console.error('Error getting documents:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='cardImageSec'>
      <h3>Recommends</h3>
      <div className="mediaTiles">
        {recommends.map((recommend) => (
          <Card key={recommend.id}
          img={recommend.cardImg} 
          title={recommend.title}
           />
        ))}
      </div>

      <h3>Trending</h3>
      <div className="mediaTiles">
        {trending.map((trends) => (
          <Card key={trends.id}
          img={trends.cardImg} 
           title={trends.title} />
        ))}
      </div>

      <h3>Latest</h3>
      <div className="mediaTiles">
        {newDisney.map((latest) => (
          <Card key={latest.id}
          img={latest.cardImg}
           title={latest.title} />
        ))}
      </div>

      <h3>Originals</h3>
      <div className="mediaTiles">
        {originals.map((original) => (
          <Card key={original.id} 
          img={original.cardImg}
          title={original.title} />
        ))}
      </div>
    </div>
  );
};

export default Media;
