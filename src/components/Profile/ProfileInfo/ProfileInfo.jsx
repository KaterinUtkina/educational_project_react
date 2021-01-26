import React from "react";
import stl from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    return (
        <div className={stl.profile_description}>
            <div className={stl.profile_avatar}>
                <img src={props.profile.avatar} alt="profile avatar"/>
            </div>
            <div className={stl.profile_avatar_description}>
                <ProfileStatus status={"HELLOOO"}/>
                <p>+description</p>
            </div>
        </div>
    );
}

export default ProfileInfo;