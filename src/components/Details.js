import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import db from '../Firebase';
import { doc, getDoc } from "firebase/firestore";
import Header from './Header'
import './stylesheets/Details.css'

const Details = (props) => {
  const { id } = useParams();
  const [detailData, setDetailsData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const documentRef = doc(db, 'Movies', id);

      try {
        const docSnapshot = await getDoc(documentRef);

        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          setDetailsData(data);
          console.log('Data:', data);
        } else {
          console.log('Document does not exist');
        }
      } catch (error) {
        console.error('Error getting document:', error);
      }
    };

    fetchData();
  }, [id]); // Include 'id' in the dependency array to re-run the effect when 'id' changes


  const style={
    container:{
      width:'40px',
      height:'40px',
      borderRadius:'20px',
      borderStyle:'solid',
      borderColor:'white',
      backgroundColor:'transparent'
    }
    
  }
  return (
    <div>
        <Header />
      <div className="detailContainer">
        
        <img className="BackgroundImg" src={detailData.backgroundImg} alt="/"/>
        <img className="titleImage" src={detailData.titleImg} alt={detailData.title}/>

        

          <div className="movieContext">
            <div className="buttons">
                <button className="trailer"><i class="fa-solid fa-play"></i> PLAY</button>
                <button className="moviebtn"><i class="fa-solid fa-play"></i> TRAILER</button>
                <button className='roundbtn' style={style.container}><i class="fa-solid fa-plus"></i></button>
                <button className='roundbtn' style={style.container}><i class="fa-solid fa-share"></i></button>
            </div>
            <p>{detailData.subTitle}</p>
            <p>{detailData.description}</p>
          </div>

      </div>
    </div>
    
  );

  
};

export default Details;
