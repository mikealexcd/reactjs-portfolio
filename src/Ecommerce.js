import React from 'react';
import Page from './Page'
import ShowCasePage from './ShowCasePage'

export default function Ecommerce() {
    return (
      <div>
      <Page sectionid="Staples" title="E-Commerce" background="ecommerce-bg"/>
      <ShowCasePage title="Staples" name="Staples" previous="top" next="AnthroDesk" description="One of the first things that I worked on when I started at AnthroDesk was increasing our sales on the Staples marketplace. Originally we only had about 8 SKUs available at the marketplace and our sales would average between 5-8 items per day. Now, we have over 80 items for sale and we receive about 20-25 orders per day, marking a dramatic increase in our presence and revenue coming from the Staples marketplace. Some of the items that I added became the top result for its search term, such as when you search for a 'vertical mouse' or a 'monitor mount'.">
      <p>My main focus when I added some of our products to this marketplace was to keep a very high quality listing. For example, before the submission I retook some of the photographies that were shown to make the product more appealing and to allow our customers to get as much information as possible that would allow them to make a purchase decision.</p><p>A few examples of these products can be found in the following link: <a href="https://www.staples.ca/search?query=anthrodesk" target="_blank">AnthroDesk products on Staples</a></p>
      </ShowCasePage>
      <ShowCasePage title="AnthroDesk" name="AnthroDesk Website" previous="Staples" description="When I joined the company, we were running a basic (not very good-looking) website running on Magento 1. Besides starting a new version of the website on Magento 2 (more info on that on the web development section), part of my tasks involved creating listings (with their respective photos, descriptions and seo considerations) that would help the new website stand out">
      <p>Part of the challenge of migrating websites was the sheer amount of content that had to be created. In the modern days of AnthroDesk, all of our products now have their own short description for main features, a longer description showing specifications, as well as a Support tab where important information and Ikea-esque downloads can be found.</p><p>Furthermore, this is when I first implemented my idea of using visual swatches where customers could choose their favourite frame/top combination, which would serve as a sort of custom product configurator with visual feedback</p>
      </ShowCasePage>
    </div>
    );
  }