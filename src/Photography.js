import React from 'react';
import WobbleChairs from './WobbleChairs';
import SmallObjects from './SmallObjects';
import Page from './Page';


export default function Photography() {
    return (
      <div>
      <Page sectionid="photos" title="Photography" className="photo-bg text-white shadow" />
      <WobbleChairs />
      {/* <SmallObjects /> */}
    </div>
      );
    }