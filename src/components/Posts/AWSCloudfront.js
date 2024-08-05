import ReactGA from 'react-ga';
import React, { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

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
      ReactGA.pageview('/blog/aws-cloudfront');
    }
  }, []);

  const columns = ['Key', 'User', 'Resource'];
  const data = [
    { Key: 'Attachment Point', User: 'Attached to IAM identities (users, groups, roles).', Resource: 'Attached directly to AWS resources' },
    { Key: 'Scope and Usage', User: 'Define what actions an identity can perform across various resources and services.', Resource: 'Define who can perform actions on a specific resource, often enabling cross-account access.' },
    { Key: 'Cross-Account Access', User: 'Typically used within a single AWS account.', Resource: 'Can easily specify permissions for principals from other AWS accounts.' },
    { Key: 'Policy Management', User: 'Managed in IAM and can be reused across different identities.', Resource: 'Managed directly on the resource, providing granular control by the resource owner.' },
    { Key: 'Combining Policies', User: 'Can be combined with resource-based policies to fine-tune access control.', Resource: 'Can be combined with user-based policies to specify permissions more explicitly.' },
  ];

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
          <SubTitle id="s3-as-origin">ALB as an Origin</SubTitle>
          {/* <StyledImage src={CloudFrontS3Origin} /> */}
          <Spacer />
        </Text>
      </Container>
    </Wrapper>
  );
}

export default AWSCloudFront;