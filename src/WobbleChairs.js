import React from 'react';
import WobblePhotos from './wobble/WobblePhotos';
import ShowCasePage from './ShowCasePage';

export default function WobbleChairs() {
    return (
        <div>
          <ShowCasePage title="photos" name="Wobble Chairs" description="In this photoshoot, we used a white background to make the photo editing process easier. To prevent the product photos from showing slight movements in the different colours, all of them were edited from the original red chair.  Since the chairs are supposed to be moved around (hence wobble chairs), I made a couple of transparent copies simulating movement.">
            <WobblePhotos />
          </ShowCasePage>
        </div>
    )
}