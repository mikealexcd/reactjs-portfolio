import React from 'react';
import Page from './Page'
import ShowCasePage from './ShowCasePage'

export default function Ecommerce() {
    return (
      <div>
      <Page sectionid="Staples" title="E-Commerce" />
      <ShowCasePage title="Staples" name="Staples" previous="top" description="One of the first things that I worked on when I started at AnthroDesk was increasing our sales on the Staples marketplace. Originally we only had about 8 SKUs available at the marketplace and our sales would average between 5-8 items per day. Now, we have over 80 items for sale and we receive about 20-25 orders per day, marking a dramatic increase in our presence and revenue coming from the Staples marketplace. Some of the items that I added became the top result for its search term, such as when you search for a 'vertical mouse' or a 'monitor mount'.">
      <p>My main focus when I added some of our products to this marketplace was to keep a very high quality listing. For example, before the submission I retook some of the photographies that were shown to make the product more appealing and to allow our customers to get as much information as possible that would allow them to make a purchase decision.</p><p>A few examples of these products can be found in the following link: <a href="https://www.staples.ca/search?query=anthrodesk" target="_blank">AnthroDesk products on Staples</a></p>
      </ShowCasePage>
    </div>
    );
  }