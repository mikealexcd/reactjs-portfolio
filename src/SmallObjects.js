import React from 'react';
import Jewelry from './small-photography/Jewelry';
import ShowCasePage from './ShowCasePage';


export default function SmallObjects() {
  return (
    <div>
    <ShowCasePage title="Jewelry" name="Jewelry Photos" description="Description" previous="photos" next="">
    <Jewelry />
    </ShowCasePage>
  </div>
    );
  }