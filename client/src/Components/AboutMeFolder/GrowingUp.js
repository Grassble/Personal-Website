import React from "react";

function GrowingUp() {

    return (
        <div id="AboutMeWrapper">
            <div id="GrowingWrapper">
                <h1>Hometown:</h1>
                <h2>Jackson, Mississippi</h2>
                <img className="GrowingUpImage" src="https://files.tripstodiscover.com/files/2019/05/Jackson-capitol.jpg" alt="Jackson Image" />
            </div>
            <div id="CollegeTown">
                <h1>College:</h1>
                <h2>Oxford, Mississippi</h2>
                <img className="GrowingUpImage" src="https://www.al.com/resizer/2TDHkwe14ipGTL6S-uPdSgBAbIw=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/YXWEHZUEFBDBRETVTLOGVYWT5I.jpg" alt="Oxford Image" />
            </div>
            <div id="CurrentTown">
                <h1>Currently Living:</h1>
                <h2>Memphis, Tennessee</h2>
                <img className="GrowingUpImage" src="https://wearememphis.com/wp-content/uploads/2019/05/Generic_Memphis_Skyline_Bridge.jpg" alt="Memphis Image"/>
            </div>
        </div>
    )
}

export default GrowingUp