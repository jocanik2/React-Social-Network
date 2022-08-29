import Location from "./Location";
import "./SocialCard.css";
import Like from "./Like";
const SocialCard = ({ userData }) => {

    return (
        <div className="card">
            <div className="card__title">
                {userData.name.first} {userData.name.last}

            </div>

            <div className="card__body">
                <Location location={userData.location} />
                <div className="card__image">

                    <img src={userData.picture.medium}></img>

                </div>
                <Like></Like>

            </div>


        </div>


    );


};

export default SocialCard;