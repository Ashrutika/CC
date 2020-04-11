import React from 'react';
import PlaceHead from './PlaceHead';
import AboutPlace from './AboutPlace';
import StatePhotos from './StatePhotos';
import CulturePhotos from './CulturePhotos';

class Agakhan extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const header=[
            {   
                backimage:'agakhan.jpg',
                name:'Agakhan Palace',
                city:'Pune',
                state:'Maharashtra'
            }
        ]

        const aboutplace=[{
            days:'All days of the week ',
            time:' 9:00 AM to 6:00 PM ',
            entry:' Rs. 25/- per person',
            info:'Aga Khan Palace also known as Kasturba Gandhi Memorial or Kasturba Samadhi is located at Pune city of Indian state Maharashtra. Aga Khan Palace of Pune is a part of the Indian freedom struggle.',
            builtby:'Imam Sultan Muhammad Shah Agakhan III',
            air:' Lohegaon Air force Base airport of Pune just 3 km away from Aga Khan Palace and Gandhi National Memorial.',
            rail:'Pune Railway Station just 3 km away from Aga Khan Palace and Gandhi National Memorial.',
            bus:'Pune Darshan tourist bus is available with Guide. You can also visit this palace by your own vehicle and also hire cab or auto from any area of Pune city.'
        }]

        const images=[{
            pic:'agakhan1.jpg'
        },
        {
            pic:'agakhan2.jpg'
        },
        {
            pic:'agakhan3.jpg'
        },
        {
            pic:'agakhan4.png'
        },
        {
            pic:'agakhan5.jpg'
        },
        {
            pic:'agakhan6.jpg'
        },
        {
            pic:'agakhan7.jpg'
        },
        {
            pic:'agakhan8.jpg'
        },
        {
            pic:'agakhan9.jpg'
        },
        {
            pic:'agakhan10.jpeg'
        },
    ]

        const hotels=[{
            name:"Aroma's Hydrabad biryani house",
            img1:'aroma.jpg',
            info:'Timing : 11:00AM to 11:00PM  Address : Internal Road,Sakore Nagar,Viman Nagar,Pune-411014'
        },
        {
            name:'Zafraana Exotica',
            img1:'zafraana.jpg',
            info:'Timing : 12:30PM to 3:30PM  7:00PM to 11:30PM (All days) Address : Panchshil tech park,Near golg club course tower c,shastrinagar ,yerawada,pune-411006'
        },
        {
            name:'Tikka Town',
            img1:'tikka.jpg',
            info:'Timing : 10:00AM to 11:00PM  Address : Nitesh mall 1 flor mundwa road koregaon park , ragvilas society ,koregaon park ,pune-411001'
        },
        {
            name:'Pizza Hut',
            img1:'pizza.jpg',
            info:'Timing : 11:00AM to 11:00PM  Address : Shop No 12,Hermes Waves Mall,Prathamesh Society,Kalyani Nagar,Pune-411006'
        },
        {
            name:'UpSouth',
            img1:'upsouth.jpg',
            info:'Timing : 6:00AM to 11:00PM   Address : Shop No 1 G Floor,Konark Industrial Estate Next to Rosary School,Sakore Nagar,Viman Nagar,Pune-411014 '
        },
        {
            name:'Irani Cafe',
            img1:'iranicafe.jpg',
            info:'Timing : 6:00AM to 10:30PM  Address : North Avenue Road Near Nagarwalla School Opposite Pushpak Society ,Nilanjali Society,Kalyani Nagar,Pune-411006'
        },
    ]

    const shopping=[{
        name:'Pheonix Marketcity',
        img1:'pheonix.jpg',
        info:''
    },
    {
        name:"D'mart",
        img1:'dmart.jpg',
        info:''
    },
    {
        name:'Inorbit',
        img1:'inorbit.jpg',
        info:''
    },
]

const moreplaces=[{
    name:'Osho Garden',
    img1:'osho.jpg',
    info:''
},
{
    name:'Shaniwar Wada',
    img1:'shaniwar.jpg',
    info:''
},
{
    name:'Parvati Hill',
    img1:'parvati.jpg',
    info:''
}
]
        const head=header.map(head => <PlaceHead head={head}/>);
        const about=aboutplace.map(about => <AboutPlace about={about}/>)
        const image=images.map(photos => <CulturePhotos photos={photos}/>)
        const hotel=hotels.map(list => <StatePhotos list={list}/>)
        const malls=shopping.map(list => <StatePhotos list={list}/>)
        const moreplace=moreplaces.map(list => <StatePhotos list={list}/>)
        return(
            <div>
            {head}
            {about}
            <div className="place-img">
                {image}
                </div>
            <div className="hotels">
            <div id="hotels-place">Near by Hotels ,Restaurants and coffee shops </div>
              {hotel}
              </div>
              <button id="hotel-btn">More</button>
              <div className="malls">
            <div id="shop">Shopping Malls</div>
              {malls}
              </div>
              <button id="shop-btn">More</button>
              <div className="more">
            <div id="also">Also visit</div>
              {moreplace}
              </div>
              <button id="moreplace-btn">More</button>
            </div>
        );

    }
}

export default Agakhan;