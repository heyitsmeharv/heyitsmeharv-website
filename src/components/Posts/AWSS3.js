import ReactGA from 'react-ga';
import React, { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

// animations
import SlideInBottom from "../../animations/SlideInBottom";

// icons
import { ChevronBackCircle } from '@styled-icons/ionicons-solid/ChevronBackCircle';
import { AWSSVG, AWSS3SVG } from '../../resources/styles/icons';

// components
import { StyledNavButton, StyledNavLink } from '../Button/Button';
import Table from '../../components/Table/Table';

// images
import S3Objects from "../../resources/images/blog/AWSS3/s3_objects.jpeg";


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

const Spacer = styled.br``

const AWSRoute53 = () => {

  // analytics
  useEffect(() => {
    if (window.location.hostname !== "localhost") {
      ReactGA.pageview('/blog/aws-s3');
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
          <Title>AWS S3</Title>
          <IconWrapper>
            <Icon><AWSSVG /></Icon>
            <Icon><AWSS3SVG /></Icon>
          </IconWrapper>
        </Flex>
        <Spacer />
        <Text>
          In this post we'll be diving into Amazon S3 which was amazon's first ever service! I'll be breaking this post down into sections, much like the previous posts:
          <StyledAnchor href="#s3-introduction"><StyledListItem>S3 Introduction</StyledListItem></StyledAnchor>
          <StyledAnchor href="#buckets-objects"><StyledListItem>Buckets and Objects</StyledListItem></StyledAnchor>
          <StyledAnchor href="#bucket-policies"><StyledListItem>Policies</StyledListItem></StyledAnchor>

          <Spacer />
          <SubTitle id="s3-introduction">Amazon S3</SubTitle>
          Amazon Simple Storage Service (Amazon S3) is a highly scalable, durable, and secure object storage service. Amazon S3 is widely used across industries for its reliability,
          scalability, and security, making it a foundational service for storing and managing data in the cloud.
          <Spacer />
          <Spacer />
          <SubTitleSmall>Use Cases</SubTitleSmall>
          Here are some use cases for using this service:
          <StyledListItem>Backup and storage.</StyledListItem>
          <StyledListItem>Disaster Recovery.</StyledListItem>
          <StyledListItem>Archive.</StyledListItem>
          <StyledListItem>Hybrid Cloud storage.</StyledListItem>
          <StyledListItem>Application hosting.</StyledListItem>
          <StyledListItem>Media hosting.</StyledListItem>
          <StyledListItem>Data lakes and big data analytics.</StyledListItem>
          <StyledListItem>Software delivery.</StyledListItem>
          <StyledListItem>Static website.</StyledListItem>
          <Spacer />
          <SubTitle id="buckets-objects">Buckets and Objects</SubTitle>
          <Spacer />
          <SubTitleSmall>Buckets</SubTitleSmall>
          In Amazon S3, a <BoldText>bucket</BoldText> is a container for storing objects (files and their metadata). Buckets are created within a specific AWS region and must have unique names globally. 
          The naming convention must adhere to certain rules, such as being between 3 and 63 characters, and not containing uppercase characters or underscores, not an IP, must start with a lowercase letter or number,
          must not start with the prefix xn-- or end with the suffix -s3alias.
          <Spacer />
          <Spacer />
          <SubTitleSmall>Objects</SubTitleSmall>
          Buckets can store an unlimited number of objects, each of which can be up to 5 terabytes in size. If you're uploading more than 5GB of data, you must use "multi-part upload" Objects are identified within a 
          bucket using a unique key (object name). There is no concept of directories in S3, just long names with slashes ('/') separating them.
          <StyledImage src={S3Objects} />
          <HeadingSmall>Object Tags</HeadingSmall>
          Object tags are key-value pairs associated with an S3 object, used to organize, manage, and control access to objects. Tags are particularly useful for categorizing and managing objects based on different criteria, 
          such as department, project, or data sensitivity. An S3 object can have up to 10 tags. 
          <Spacer />
          <Spacer />
          <HeadingSmall>Key features of Object Tags:</HeadingSmall>
          <StyledListItem><BoldTextSmall>Tagging on Upload</BoldTextSmall>: Tags can be applied to objects when they are uploaded or added later.</StyledListItem>
          <StyledListItem><BoldTextSmall>Filtering and Organizing</BoldTextSmall>: Tags can be used to filter objects within a bucket, making it easier to manage large datasets.</StyledListItem>
          <StyledListItem><BoldTextSmall>Lifecycle Policies</BoldTextSmall>: Tags can be used with lifecycle policies to define rules for transitioning objects between storage classes or for deleting them.</StyledListItem>
          <StyledListItem><BoldTextSmall>Billing and Cost Management</BoldTextSmall>: Tags help in tracking storage costs by categorizing objects according to usage or departments.</StyledListItem>
          <Spacer />
          <HeadingSmall>Example Use Cases for Object Tags:</HeadingSmall>
          <StyledListItem><BoldTextSmall>Cost Allocation</BoldTextSmall>: Tagging objects by department to track storage costs.</StyledListItem>
          <StyledListItem><BoldTextSmall>Data Management</BoldTextSmall>: Applying tags to implement lifecycle policies that archive or delete objects based on their tags.</StyledListItem>
          <StyledListItem><BoldTextSmall>Access Control</BoldTextSmall>: Using tags to control access to objects via IAM policies.</StyledListItem>
          <Spacer />
          <HeadingSmall>Object Metadata</HeadingSmall>
          Object metadata consists of a set of name-value pairs that describe an object, providing additional information about the object such as content type, size, and user-defined metadata.
          <Spacer />
          <Spacer />
          <HeadingSmall>Key features of Metadata:</HeadingSmall>
          <StyledListItem><BoldTextSmall>System-Defined</BoldTextSmall>: Essential for object management and retrieval. For example, Content-Type helps browsers understand how to handle the object.</StyledListItem>
          <StyledListItem><BoldTextSmall>User-Defined</BoldTextSmall>: Useful for storing additional context or information about the object, such as application-specific data.</StyledListItem>
          <Spacer />
          <HeadingSmall>Example Use Cases for Metadata:</HeadingSmall>
          <StyledListItem><BoldTextSmall>Content Handling</BoldTextSmall>: Setting Content-Type to ensure objects are rendered correctly by browsers.</StyledListItem>
          <StyledListItem><BoldTextSmall>Application-Specific Information</BoldTextSmall>: Storing metadata that applications can use to manage or process objects.</StyledListItem>
          <StyledListItem><BoldTextSmall>Search and Organization</BoldTextSmall>: Using metadata to store searchable attributes about objects.</StyledListItem>
          <Spacer />
          <SubTitle id="bucket-policies">Policies</SubTitle>
          Bucket policies in Amazon S3 are JSON-based access policy statements that define permissions for the bucket and its objects. These policies provide a way to control access to the bucket and its contents at a granular level. 
          You can refer to my previous post that goes into detail on 👉 <StyledAnchorText><StyledNavLink exact to={`/blog/aws-identity-access-management`}>IAM policies</StyledNavLink></StyledAnchorText>.
          <Spacer />
          <Spacer />
          <HeadingSmall>User-Based</HeadingSmall>
          User-based policies, also known as identity-based policies, are attached to IAM (Identity and Access Management) identities such as users, groups, or roles. These policies define what actions an identity can perform on which resources.
          <StyledListItem>IAM Policies - which API call should be allowed for a specific user from IAM.</StyledListItem>
          <Spacer />
          <HeadingSmall>Resource-Based Policies</HeadingSmall>
          Resource-based policies are directly attached to AWS resources. These policies specify who (which IAM users, roles, or AWS accounts) can access the resource and what actions they can perform.
          <StyledListItem>Bucket Policies - bucket wide rules from the S3 console - allows cross account.</StyledListItem>
          <StyledListItem>Object Access Control List (ACL) - finer grain (can be disabled).</StyledListItem>
          <StyledListItem>Bucket Access Control List (ACL) - less common (can be disabled).</StyledListItem>
          <Spacer />
          <Table columns={columns} data={data} />
          <Spacer />
          Note that the IAM principal can access an S3 object if the IAM permissions <BoldText>ALLOW</BoldText> it or the resource policy <BoldText>ALLOWS</BoldText> it and there's no explicit <BoldText>DENY</BoldText>.
        </Text>
      </Container>
    </Wrapper>
  );
}

export default AWSRoute53;