import React from 'react';
import Page from './Page';
import ShowCasePage from './ShowCasePage';
import WebsiteExamples from './web-examples/WebsiteExamples';


export default function WebDev() {
    return (
      <div>
      <Page sectionid="Websites" title="Web Development" className="webdev-bg text-white" />
      <ShowCasePage title="Websites" name="Website Deployment" description="These are some examples of the websites that I've worked on professionally. The e-commerce sites were made using Magento, and the blogs were deployed with Wordpress. Sites related to CBD are still in construction as the companies themselves are still being figured out (overall branding, products, packaging prices, availability). All of these sites were deployed on AWS, through different services such as EC2, S3, SES, Route 53, etc.">
      <WebsiteExamples />
      </ShowCasePage>
    </div>
      );
    }