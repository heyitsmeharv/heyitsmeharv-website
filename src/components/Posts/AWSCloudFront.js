import React, { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

// helpers
import { logPageView } from "../../helpers/analytics";

// animations
import SlideInBottom from "../../animations/SlideInBottom";

// icons
import { ChevronBackCircle } from '@styled-icons/ionicons-solid/ChevronBackCircle';
import { AWSSVG, AWSCloudfrontSVG } from '../../resources/styles/icons';

// components
import { StyledNavButton, StyledNavLink } from '../Button/Button';
import Table from '../Table/Table';

// images
import CloudFrontHighLevelOverview from "../../resources/images/blog/AWSCloudFront/cloudfront_high_level_overview.jpeg";
import CloudFrontS3Origin from "../../resources/images/blog/AWSCloudFront/cloudfront_s3_origin.jpeg";
import CloudFrontALBOrigin from "../../resources/images/blog/AWSCloudFront/cloudfront_alb_origin.jpeg";
import CloudFrontCacheInvalidation from "../../resources/images/blog/AWSCloudFront/cloudfront_cache_invalidation.jpeg";
import CloudFrontGlobalAccelerator from "../../resources/images/blog/AWSCloudFront/cloudfront_global_accelerator.jpeg";

const Wrapper = styled.div`
  padding: 1rem 25%;
  line-height: 6.5rem;
  
  @media only screen and (max-width: 1000px) {
    line-height: 5rem;
    padding: 0;
  }

  @media only screen and (min-width: 1001px) and (max-width: 1800px) {
    line-height: 6.5rem;
    padding: 1rem 20%;
  }
`;

const Container = styled.div`
  padding: 4rem;
  background: ${({ theme }) => theme.background};
  animation: ${SlideInBottom} 0.5s forwards;
`;

const OverflowContainer = styled.div`
  overflow: auto;
`;

const Flex = styled.div`
  display: flex;
  align-items: baseline;
`;

const FlexCenter = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const FlexTop = styled.div`
  display: flex;
  align-items: start;

  @media only screen and (max-width: 2300px) {
    flex-direction: column;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  margin-left: auto;
`;

const CodeBlock = styled.pre`
  font-family: 'Calibri';
  font-size: 2rem;
  background: #292929;
  color: ${({ theme }) => theme.buttonText};
  word-wrap: break-word;
  padding: 1rem 2rem 1rem;
  border-radius: 2rem;
  overflow-x: auto;
  line-height: 3.5rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
`;

const SubTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  font-style: italic;
`;

const SubTitleSmall = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

const HeadingSmall = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  font-style: italic;
`;

const Text = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
`;

const BoldText = styled.b`
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  font-weight: bold;
`;

const BoldTextSmall = styled.b`
  color: ${({ theme }) => theme.text};
  font-size: 1.8rem;
  font-weight: bold;
`;

const StyledCodeSpan = styled.code`
  background-color: #f1f1f1;
  color: crimson;
  padding: 0 5px;
  margin: 0 5px;
`;

const UnStyledListItem = styled.li`
  list-style-type: none;
  color: ${({ theme }) => theme.text};
  margin-left: 5%;
`;

const StyledListItem = styled.li`
  color: ${({ theme }) => theme.text};
  margin-left: 5%;
`;

const StyledListItemIndent = styled.li`
  color: ${({ theme }) => theme.text};
  margin-left: 10%;
`;

const StyledListItemIndentExtra = styled.li`
  color: ${({ theme }) => theme.text};
  margin-left: 15%;
`;

const StyledAnchor = styled.a`
  color: ${({ theme }) => theme.text};
`;

const StyledAnchorText = styled.span`
  color: ${({ theme }) => theme.text};
  font-style: italic;
  font-weight: bold;
`;

const StyledBackIcon = styled(ChevronBackCircle)`
  color: ${({ theme }) => theme.secondary};
  width: 4rem;
`;

const StyledImage = styled.img`
  width: ${props => props.width ? props.width : '100%'};
  height: ${props => props.height ? props.height : '100%'};
  margin-right: ${props => props.mr ? props.mr : '0px'};
  margin-left: ${props => props.ml ? props.ml : '0px'};
  margin-top: ${props => props.mt ? props.mt : '0px'};
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  margin-left: auto;
  margin-right: 25px;

  @media only screen and (max-width: 1000px) {
    width: 36px;
    height: 36px;
  }
`;

const Spacer = styled.br`
  display: block;
  margin: 10px 0;
`;

const AWSCloudFront = () => {

  // analytics
  useEffect(() => {
    if (window.location.hostname !== "localhost") {
      logPageView("blog/aws-cloudfront");
    }
  }, []);

  return (
    <Wrapper>
      <StyledNavButton>
        <StyledNavLink
          exact to={`/blog`}>
          <StyledBackIcon />
        </StyledNavLink>
      </StyledNavButton>
      <Container>
        <Flex>
          <Title>AWS CloudFront</Title>
          <IconWrapper>
            <Icon><AWSSVG /></Icon>
            <Icon><AWSCloudfrontSVG /></Icon>
          </IconWrapper>
        </Flex>
        <Spacer />
        <Text>
          In this post we'll be diving into Amazon CloudFront.
          <StyledAnchor href="#cloudfront-overview"><StyledListItem>CloudFront Overview</StyledListItem></StyledAnchor>
          <StyledAnchor href="#s3-as-origin"><StyledListItem>S3 as an Origin</StyledListItem></StyledAnchor>
          <StyledAnchor href="#alb-as-origin"><StyledListItem>ALB as an Origin</StyledListItem></StyledAnchor>
          <StyledAnchor href="#geo-restriction"><StyledListItem>Geo Restriction</StyledListItem></StyledAnchor>
          <StyledAnchor href="#price-classes"><StyledListItem>Price Classes</StyledListItem></StyledAnchor>
          <StyledAnchor href="#cache-invalidation"><StyledListItem>Cache Invalidation</StyledListItem></StyledAnchor>
          <StyledAnchor href="#global-accelerator"><StyledListItem>Global Accelerator</StyledListItem></StyledAnchor>
          <Spacer />
          <SubTitle id="cloudfront-overview">AWS CloudFront</SubTitle>
          Amazon CloudFront is a content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds.
          CloudFront integrates with other AWS services to give developers and businesses an easy way to distribute content to end users with minimal delay.
          <Spacer />
          <HeadingSmall>Key features:</HeadingSmall>
          <StyledListItem><BoldTextSmall>Global Network of Edge Locations</BoldTextSmall>: CloudFront uses a network of globally distributed edge locations and regional edge caches to cache copies of your content close to your users.</StyledListItem>
          <StyledListItem><BoldTextSmall>High Performance</BoldTextSmall>: Provides low latency and high data transfer speeds by serving content from edge locations near your users.</StyledListItem>
          <StyledListItem><BoldTextSmall>Security</BoldTextSmall>: Offers several features to protect your data and applications, such as AWS Shield for DDoS protection, SSL/TLS encryption, and integration with AWS Web Application Firewall (WAF).</StyledListItem>
          <StyledListItem><BoldTextSmall>Integration with AWS Services</BoldTextSmall>: Seamlessly integrates with Amazon S3, Amazon EC2, Elastic Load Balancing, and AWS Lambda for custom code execution at edge locations.</StyledListItem>
          <StyledListItem><BoldTextSmall>Real-Time Metrics and Logging</BoldTextSmall>: Provides real-time monitoring and logging of your content delivery network's performance and security metrics through CloudWatch and AWS CloudTrail.</StyledListItem>
          <StyledListItem><BoldTextSmall>Customizable Content Delivery</BoldTextSmall>: Supports multiple ways to customize content delivery, including geographic restrictions, content versioning, and custom headers.</StyledListItem>
          <Spacer />
          <HeadingSmall>How it works:</HeadingSmall>
          <StyledListItem><BoldTextSmall>Content Request</BoldTextSmall>: Content Request: When a user requests content, the request is routed to the nearest CloudFront edge location based on latency.</StyledListItem>
          <StyledListItem><BoldTextSmall>Cache Check</BoldTextSmall>: CloudFront checks if the content is already cached at the edge location.</StyledListItem>
          <StyledListItem><BoldTextSmall>Content Delivery</BoldTextSmall>: If the content is cached, it is delivered directly to the user. If not, CloudFront retrieves the content from the origin server (e.g., S3, EC2) and caches it at the edge location for future requests.</StyledListItem>
          <StyledListItem><BoldTextSmall>Continuous Monitoring</BoldTextSmall>: CloudFront continuously monitors and manages the edge locations to ensure optimal performance and availability.</StyledListItem>
          <Spacer />
          <HeadingSmall>High level Overview</HeadingSmall>
          <StyledImage src={CloudFrontHighLevelOverview} />
          <Spacer />
          <SubTitle id="s3-as-origin">S3 as an Origin</SubTitle>
          Here is an example detailing how Cloudfront uses an S3 bucket at an origin. The S3 bucket will use a Origin Access Control (OAC) along with a bucket policy to permit distributions through the S3 bucket.
          <StyledImage src={CloudFrontS3Origin} />
          <SubTitle id="alb-as-origin">ALB as an Origin</SubTitle>
          It's possible for CloudFront to access any HTTP backend like an EC2 instance or a load balancer. There is no private VPC connectivity within CloudFront so security groups must be setup to allow traffic between edge locations
          and the instance you want to connect to.
          <StyledImage src={CloudFrontALBOrigin} />
          <Spacer />
          <SubTitle id="geo-restriction">Geo-Restriction</SubTitle>
          AWS CloudFront Geo-Restriction, also known as geo-blocking, allows you to control the distribution of your content based on the geographic location of your viewers. This feature enables you to restrict access to your content to specific countries or regions, enhancing content security,
          ensuring compliance with regional regulations, and managing content distribution rights.
          <Spacer />
          <HeadingSmall>Key features:</HeadingSmall>
          <StyledListItem><BoldTextSmall>Whitelist or Blacklist Countries</BoldTextSmall>: You can specify a list of countries where your content is allowed (whitelist) or specify countries where access is denied (blacklist).</StyledListItem>
          <StyledListItem><BoldTextSmall>Custom Error Pages</BoldTextSmall>: You can configure custom error pages to be displayed when a user from a restricted location tries to access your content.</StyledListItem>
          <StyledListItem><BoldTextSmall>Edge Locations</BoldTextSmall>: CloudFront uses its global network of edge locations to determine the geographic location of the request and enforce geo-restrictions accordingly.</StyledListItem>
          <Spacer />
          <HeadingSmall>How it works:</HeadingSmall>
          <StyledListItem><BoldTextSmall>Request from Viewer</BoldTextSmall>: A viewer requests content from your CloudFront distribution.</StyledListItem>
          <StyledListItem><BoldTextSmall>Geo-Location Determination</BoldTextSmall>: CloudFront determines the geographic location of the request using the viewer's IP address.</StyledListItem>
          <StyledListItem><BoldTextSmall>Geo-Restriction Check</BoldTextSmall>: CloudFront checks the geo-restriction settings for your distribution to see if the viewer's location is allowed to access the content.</StyledListItem>
          <StyledListItem><BoldTextSmall>Content Delivery or Denial</BoldTextSmall>: CloudFront continuously monitors and manages the edge locations to ensure optimal performance and availability.</StyledListItem>
          <StyledListItemIndent>If the viewer's location is allowed, CloudFront serves the requested content from the nearest edge location.</StyledListItemIndent>
          <StyledListItemIndent>If the viewer's location is restricted, CloudFront returns an HTTP 403 (Forbidden) status code, optionally displaying a custom error page if configured.</StyledListItemIndent>
          <Spacer />
          <SubTitle id="price-classes">Pricing</SubTitle>
          There are three price classes for CloudFront. Essentially the lower number of edge locations you use, the less it will cost to distribute your content. These classes are:
          <StyledListItem><BoldTextSmall>Price Class All</BoldTextSmall>: All regions - best performance.</StyledListItem>
          <StyledListItem><BoldTextSmall>Price Class 200</BoldTextSmall>: Most regions, but excludes the most expensive regions.</StyledListItem>
          <StyledListItem><BoldTextSmall>Price Class 100</BoldTextSmall>: Only the least expensive regions.</StyledListItem>
          <Spacer />
          <SubTitle id="cache-invalidation">Cache Invalidation</SubTitle>
          AWS CloudFront cache invalidation is a feature that allows you to remove objects from CloudFront edge caches before they expire. This is useful when you need to ensure that viewers receive the most up-to-date content, such as
          after updating a website, modifying static assets, or fixing errors in distributed content. You can invalidate all files with a '*'.
          <Spacer />
          <StyledImage src={CloudFrontCacheInvalidation} />
          <Spacer />
          <SubTitle id="global-accelerator">Global Accelerator</SubTitle>
          AWS Global Accelerator is a networking service that improves the availability and performance of your applications with global users. It uses the AWS global network to optimize the path to your application, providing two static IP addresses that act as a fixed entry point to your
          application endpoints (e.g., EC2 instances, Load Balancers, or Elastic IPs) in multiple AWS Regions. This helps reduce latency, improve availability, and provide seamless failover.
          <Spacer />
          <StyledImage src={CloudFrontGlobalAccelerator} />
          <Spacer />
          <HeadingSmall>Key features:</HeadingSmall>
          <StyledListItem><BoldTextSmall>Global Network</BoldTextSmall>: Uses the AWS global network, which is optimized for performance and reliability, to route user traffic.</StyledListItem>
          <StyledListItem><BoldTextSmall>Static IP Addresses</BoldTextSmall>: Provides two static IP addresses that act as a fixed entry point for your application, simplifying DNS management and improving resilience.</StyledListItem>
          <StyledListItem><BoldTextSmall>Traffic Distribution</BoldTextSmall>: Routes user traffic to the nearest healthy endpoint based on performance, geography, or user-defined policies.</StyledListItem>
          <StyledListItem><BoldTextSmall>Health Checks</BoldTextSmall>: Continuously monitors the health of your application endpoints and routes traffic only to healthy endpoints.</StyledListItem>
          <StyledListItem><BoldTextSmall>DDoS Protection</BoldTextSmall>: Integrated with AWS Shield, providing protection against DDoS attacks.</StyledListItem>
          <StyledListItem><BoldTextSmall>Custom Routing</BoldTextSmall>: Allows you to configure traffic routing policies, such as weighted routing, to distribute traffic according to your need.</StyledListItem>
          <Spacer />
          <HeadingSmall>How it works:</HeadingSmall>
          <StyledListItem><BoldTextSmall>Static IP Allocation</BoldTextSmall>: When you create an accelerator, Global Accelerator assigns two static IP addresses (or you can bring your own IPs) that serve as the entry points for your application traffic.</StyledListItem>
          <StyledListItem><BoldTextSmall>Endpoint Grouping</BoldTextSmall>: You define endpoint groups, which are collections of endpoints (e.g., EC2 instances, load balancers) in different AWS regions.</StyledListItem>
          <StyledListItem><BoldTextSmall>Traffic Routing</BoldTextSmall>: Global Accelerator uses the AWS global network to route incoming traffic to the optimal endpoint based on health, geography, and performance.</StyledListItem>
          <StyledListItem><BoldTextSmall>Health Monitoring</BoldTextSmall>: Continuously monitors the health of endpoints and automatically re-routes traffic to healthy endpoints as needed.</StyledListItem>
        </Text>
      </Container>
    </Wrapper>
  );
}

export default AWSCloudFront;