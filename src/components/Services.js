import React from "react";
import Title from "./Title";
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa";
 class Services extends React.Component{
     state ={
         services:[
             {
                 icon:<FaCocktail></FaCocktail>,
                 title:"free cocktails",
                 info:"loeeerdsfs fsjdfskj kfjsdfsl sfjsdlfsjlk fdgdlkgjdlk"
             },
             {
                icon:<FaHiking></FaHiking>,
                title:"Endless Hiking",
                info:"loeeerdsfs fsjdfskj kfjsdfsl sfjsdlfsjlk fdgdlkgjdlk"
            },
            {
                icon:<FaShuttleVan></FaShuttleVan>,
                title:"free shuttle",
                info:"loeeerdsfs fsjdfskj kfjsdfsl sfjsdlfsjlk fdgdlkgjdlk"
            },
            {
                icon:<FaBeer></FaBeer>,
                title:"Strongest Beer",
                info:"loeeerdsfs fsjdfskj kfjsdfsl sfjsdlfsjlk fdgdlkgjdlk"
            },
         ]
     }
     render(){
         return(
             <section className="services">
                 <Title title ='services'></Title>
                 <div className="services-center">
                    {this.state.services.map((item,index) =>{
                        return <article key ={index} className ="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                        </article>
                    })}
                 </div>
             </section>
         );
     }
 }

 export default Services;