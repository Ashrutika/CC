import React from 'react';
import CityHead from './CityHead';
import AboutState from './AboutState';
import AboutCity from './AboutCity';
import CulturePhotos from './CulturePhotos';
import StatePhotos from './StatePhotos';

class Pune extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const header=[
            {
            cityname:"Pune",
            statename:"Maharashtra",
            india:"India"
            }
        ]
  
        const about=[{
            img:'pune.jpg',
            info:"Pune is a sprawling city in the western Indian state of Maharashtra. It was once the base of the Peshwas (prime ministers) of the Maratha Empire, which lasted from 1674 to 1818. It's known for the grand Aga Khan Palace, built in 1892 and now a memorial to Mahatma Gandhi.",
            
        }
    ]  
        
        const images=[{
           pic:'pune1.jpg'
        },
        {
            pic:'pune2.jpg'
        },
        {
            pic:'pune3.jpg'
        },
        {
            pic:'pune4.jpg'
        },
        {
            pic:'pune5.png'
        },
        {
            pic:'pune6.jpg'
        }
    ]

    const places=[{
        name:'Agakhan Palace',
        img1:'agakhan.jpg',
        info:'',
        link:'/Agakhan'
    },
    {
        name:'Shaniwar Wada',
        img1:'shaniwar.jpg',
        info:''
    },
    {
        name:'Okayama Garden',
        img1:'okayama.jpg',
        info:''
    },
    {
        name:'Lal Mahal',
        img1:'lalmahal.jpg',
        info:''
    },
    {
        name:'Khadakwasla Dam',
        img1:'khadakwasla.jpg',
        info:''
    },
    {
        name:'Pawna Lake',
        img1:'pawna.jpg',
        info:''
    }

]

const fort=[
    {
      name:'Sinhgad',
      img1:'sinhgad.jpg',
      info:''
    },
    
    {
      name:'Lohgad',
      img1:'lohgad.jpg',
      info:''
    },
    {
        name:'Rajmachi',
        img1:'rajmachi.jpg',
        info:''
      },
      {
        name:'Torna',
        img1:'torna.jpg',
        info:''
      },
      {
        name:'Visapur fort',
        img1:'visapur.jpg',
        info:''
      },
      {
        name:'Korigad',
        img1:'korigad.jpg',
        info:''
      },
     
    
]

    const hillstation=[{
        name:'Lonavla',
        img1:'lonavla.jpg',
        info:''
    },
    {
        name:'Mahabaleshwar',
        img1:'mahabaleshwar.jpg',
        info:''
      },
      {
        name:'Matheran',
        img1:'matheran.jpg',
        info:''
      }
]

const cities=[
    {
        name:'Delhi',
        img1:'delhi.jpeg',
        info:''
    },
    {
        name:'Mumbai',
        img1:'mumbai.jpeg',
        info:''
    },
    {
        name:'Kerala',
        img1:'keral.jpg',
        info:''
    },
]


        const head=header.map(head => <CityHead head={head}/>);
        const aboutcity=about.map(about => <AboutCity about={about}/>);
        const image=images.map(photos => <CulturePhotos photos={photos}/>);
        const popular_places=places.map(list => <StatePhotos list={list}/>)
        const treks=fort.map(list => <StatePhotos list={list}/>)
        const hills=hillstation.map(list => <StatePhotos list={list}/>)
        const city=cities.map(list => <StatePhotos list={list}/>)
       
        return(
            <div>
                {head}
                {aboutcity}
                <div className="photos">
                {image}
                </div>
                <div className="popular">
              <div id="place">Places to visit in pune</div>
              {popular_places} 
              </div>
              <button id="place-btn">More</button>
              <div className="forts">
              <div id="place">Treks near pune</div>
              {treks} 
              </div>
              <button id="trek-btn">More</button>
              <div className="hills">
              <div id="place">Hill stations near pune</div>
              {hills} 
              </div>
              <button id="hill-btn">More</button>
              <div className="city">
              <div id="place">Also visit....</div>
              {city} 
              </div> 
            </div>

        );
    }
}

export default Pune;