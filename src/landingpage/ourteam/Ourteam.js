import { useState } from "react";
import team from './team'
export default function Ourteam() {
    const [team_] = useState(team);

    return (
        <>
      <div className="title1">
        <h2>Our Team</h2>
      </div>
        <div class="ourteam">
        {team_?.map((item, idx) => {
                    return (
            <div class="profile-card">
            <div class="img1">
                <img src={item.image}/>
            </div>
            <div class="caption">
                <h3>{item.name}</h3>
                <p>{item.job}</p>
                <div class="social-links">
                    <a href={item.facebook}><i class="fab fa-facebook"></i></a>
                    <a href={item.instagram}><i class="fab fa-instagram"></i></a>
                    <a href={item.twitter}><i class="fab fa-twitter"></i></a>
                </div>
            </div>
            </div>

                    )
                })}
        </div>
        </>
        
    )

}