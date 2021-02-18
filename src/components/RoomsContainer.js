import React from 'react';
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";
function  RoomContainer({context}) {
    const {loading,sortedRooms,rooms} = context;
    if(loading){
        return <Loading></Loading>
    }
    return(
        <div>
            <RoomsFilter rooms = {rooms}></RoomsFilter>
            <RoomsList rooms={sortedRooms}></RoomsList>
        </div>
    );
}
export default withRoomConsumer(RoomContainer)
/*
export default function RoomsContainer() {
    return (
        <RoomConsumer>
            {
                (value) =>{
                    const {loading,sortedRooms,rooms} = value;
                    if(loading){
                        return <Loading></Loading>
                    }
                    return(
                        <div>
                            helloo from roomcs container
                            <RoomsFilter rooms = {rooms}></RoomsFilter>
                            <RoomsList rooms={sortedRooms}></RoomsList>
                        </div>
                    );
                }
            }
             
        </RoomConsumer>
       
    )
}
*/