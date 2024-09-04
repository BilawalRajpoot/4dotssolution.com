import { SocialData } from '@/data/social-data';
import React from 'react';

function Map() {
  return (
    <div className="google-map">
      <iframe
        id="gmap_canvas"
        src={`https://maps.google.com/maps?q=${encodeURIComponent(SocialData.address.location)}&t=&z=11&ie=UTF8&iwloc=&output=embed`}
        title="Google Map"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
