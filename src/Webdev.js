import React from 'react';
import Page from './Page';
import ShowCasePage from './ShowCasePage';
import WebsiteExamples from './web-examples/WebsiteExamples';


export default function WebDev() {
    return (
      <div>
      <Page sectionid="Websites" title="Web Development" />
      <ShowCasePage title="Websites" name="Website Deployment" description="These are some of the websites that I've made in the past. The majority are made using Magento, but I also have some experience deploying them in Wordpress using AWS services.">
      <WebsiteExamples />
      </ShowCasePage>
    </div>
      );
    }