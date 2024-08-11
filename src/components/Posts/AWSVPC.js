import ReactGA from 'react-ga';
import React, { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

// animations
import SlideInBottom from "../../animations/SlideInBottom";

// icons
import { ChevronBackCircle } from '@styled-icons/ionicons-solid/ChevronBackCircle';
import { AWSSVG, AWSVPCSVG } from '../../resources/styles/icons';

// components
import { StyledNavButton, StyledNavLink } from '../Button/Button';
import Table from '../../components/Table/Table';

// images
import S3Objects from "../../resources/images/blog/AWSS3/s3_objects.jpeg";
import S3Versions from "../../resources/images/blog/AWSS3/s3_versions.jpeg";
import S3LifecycleRule from "../../resources/images/blog/AWSS3/s3_lifecycle_rule.jpeg";
import S3RequesterPaysBucket from "../../resources/images/blog/AWSS3/s3_requester_pays_bucket.jpeg";
import S3EventDestination from "../../resources/images/blog/AWSS3/s3_event_destination.jpeg";
import S3MultiPartUpload from "../../resources/images/blog/AWSS3/s3_multi_part_upload.jpeg";
import S3TransferAcceleration from "../../resources/images/blog/AWSS3/s3_transfer_acceleration.jpeg";
import S3StorageLens from "../../resources/images/blog/AWSS3/s3_storage_lens.jpeg";


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

const AWSVPC = () => {

  // analytics
  useEffect(() => {
    if (window.location.hostname !== "localhost") {
      ReactGA.pageview('/blog/aws-vpc');
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
          <Title>Amazon Virtual Private Cloud (VPC)</Title>
          <IconWrapper>
            <Icon><AWSSVG /></Icon>
            <Icon><AWSVPCSVG /></Icon>
          </IconWrapper>
        </Flex>
        <Spacer />
        <Text>
          In this post we'll be diving into Amazon Virtual Private Cloud (VPC).
          <StyledAnchor href="#vpc-introduction"><StyledListItem>Amazon Virtual Private Network</StyledListItem></StyledAnchor>
          <StyledAnchor href="#cidr"><StyledListItem>Classless Inter-Domain Routing - CIDR</StyledListItem></StyledAnchor>

          <Spacer />
          <SubTitle id="vpc-introduction">Amazon Virtual Private Cloud (VPC)</SubTitle>
          Amazon Virtual Private Cloud (Amazon VPC) is a service that allows you to create and manage a virtual network in the AWS cloud. This virtual network closely resembles a traditional network that you might operate 
          in your own data center but with the scalable infrastructure of AWS.
          <Spacer />
          <SubTitle id="cidr">Classless Inter-Domain Routing - CIDR</SubTitle>
          CIDR, or Classless Inter-Domain Routing, is a method used for allocating IP addresses and routing internet traffic 
          <StyledListItem><BoldTextSmall>IP Addressing</BoldTextSmall></StyledListItem>
          <StyledListItemIndent>IP addresses are numerical labels assigned to devices connected to a network, like computers, servers, or mobile devices. They come in two versions: IPv4 and IPv6. CIDR works with both, but it's most commonly associated with IPv4.</StyledListItemIndent>
          <Spacer />
          <StyledListItem><BoldTextSmall>CIDR Notation</BoldTextSmall></StyledListItem>
          <StyledListItemIndent>CIDR notation is a way to specify IP addresses and their associated routing prefix. It consists of an IP address, followed by a slash (/), and then a number that represents the number of significant bits in the network portion of the address.</StyledListItemIndent>
          <StyledListItemIndent>For example: 192.168.1.0/24</StyledListItemIndent>
          <StyledListItemIndentExtra>192.168.1.0 is the IP address.</StyledListItemIndentExtra>
          <StyledListItemIndentExtra>/24 indicates that the first 24 bits of the IP address are the network part, leaving the remaining bits for host addresses.</StyledListItemIndentExtra>
          <Spacer />
          <StyledListItem><BoldTextSmall>Subnetting</BoldTextSmall></StyledListItem>
          <StyledListItemIndent>CIDR allows for the creation of subnets by varying the length of the network prefix. It allows part of the underlying IP to get additional next values from the base IP.</StyledListItemIndent>
          <StyledListItemIndent>It's possible to split IP addresses from /0 to /32</StyledListItemIndent>
          <StyledListItemIndentExtra>/0 - 0.0.0.0</StyledListItemIndentExtra>
          <StyledListItemIndentExtra>/8 - 255.0.0.0</StyledListItemIndentExtra>
          <StyledListItemIndentExtra>/16 - 255.255.0.0</StyledListItemIndentExtra>
          <StyledListItemIndentExtra>/24 - 255.255.255.0</StyledListItemIndentExtra>
          <StyledListItemIndentExtra>/32 - 255.255.255.255</StyledListItemIndentExtra>
          <StyledListItemIndent>For example</StyledListItemIndent>
          <StyledListItemIndentExtra>CIDR block 192.168.1.0/24 provides 256 IP addresses (from 192.168.1.0 to 192.168.1.255).</StyledListItemIndentExtra>
          <StyledListItemIndentExtra>If you use 192.168.1.0/25, it splits the range into two smaller blocks, each with 128 IP addresses (192.168.1.0 to 192.168.1.127 and 192.168.1.128 to 192.168.1.255).</StyledListItemIndentExtra>
          <Spacer />
          <StyledListItem><BoldTextSmall>Efficient IP Address Allocation</BoldTextSmall></StyledListItem>
          <StyledListItemIndent>CIDR helps reduce the waste of IP addresses by allowing network administrators to allocate IP blocks more precisely according to need, rather than being forced to use large, predefined blocks.</StyledListItemIndent>
          <StyledListItemIndent>For example, instead of giving a company an entire Class B network (with 65,536 addresses) when they might only need 2,000 addresses, CIDR allows them to get exactly the number they need, such as a /21 block with 2,048 addresses.</StyledListItemIndent>
          <Spacer />
          <StyledListItem><BoldTextSmall>Routing</BoldTextSmall></StyledListItem>
          <StyledListItemIndent>CIDR also simplifies routing by allowing multiple IP addresses or networks to be aggregated into a single routing entry, a process known as "route aggregation" or "supernetting."</StyledListItemIndent>
          <StyledListItemIndent>For instance, multiple networks like 192.168.0.0/24 and 192.168.1.0/24 can be combined into a single 192.168.0.0/23 route, reducing the size of routing tables.</StyledListItemIndent>
          <Spacer />



          {/* <Spacer />
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
          <SubTitleSmall>User-Based</SubTitleSmall>
          User-based policies, also known as identity-based policies, are attached to IAM (Identity and Access Management) identities such as users, groups, or roles. These policies define what actions an identity can perform on which resources.
          <StyledListItem>IAM Policies - which API call should be allowed for a specific user from IAM.</StyledListItem>
          <Spacer />
          <SubTitleSmall>Resource-Based Policies</SubTitleSmall>
          Resource-based policies are directly attached to AWS resources. These policies specify who (which IAM users, roles, or AWS accounts) can access the resource and what actions they can perform.
          <StyledListItem>Bucket Policies - bucket wide rules from the S3 console - allows cross account.</StyledListItem>
          <StyledListItem>Object Access Control List (ACL) - finer grain (can be disabled).</StyledListItem>
          <StyledListItem>Bucket Access Control List (ACL) - less common (can be disabled).</StyledListItem>
          <Spacer />
          <Table columns={columns} data={data} />
          <Spacer />
          Note that the IAM principal can access an S3 object if the IAM permissions <BoldText>ALLOW</BoldText> it or the resource policy <BoldText>ALLOWS</BoldText> it and there's no explicit <BoldText>DENY</BoldText>.
          <Spacer />
          <Spacer />
          <SubTitle id="bucket-versioning">Versioning</SubTitle>
          Versioning is a feature that happens on the bucket level and allows you to maintain multiple versions of an object in a bucket, providing a mechanism to recover from both unintended user actions and application failures. When versioning is enabled for an S3 bucket,
          each object within the bucket can have multiple versions. Each version is assigned a unique version ID. The latest version of an object does not have a version ID (null version) if the bucket was not versioned at the time of the object's creation.
          <StyledImage src={S3Versions} />
          <Spacer />
          <SubTitleSmall>Here's what happens for each operation on a bucket:</SubTitleSmall>
          <StyledListItem><BoldTextSmall>Upload</BoldTextSmall>: Each time you upload an object to a versioning-enabled bucket, S3 assigns a new version ID to the object.</StyledListItem>
          <StyledListItem><BoldTextSmall>Delete</BoldTextSmall>: When you delete an object, S3 inserts a delete marker (a placeholder object with a unique version ID) instead of permanently removing the object. The object remains in the bucket with older versions intact.</StyledListItem>
          <StyledListItem><BoldTextSmall>Restore</BoldTextSmall>: To restore a previous version, you can either delete the delete marker or copy the specific version back into place.</StyledListItem>
          <Spacer />
          <SubTitleSmall>Benefits of Versioning:</SubTitleSmall>
          <StyledListItem><BoldTextSmall>Data Protection</BoldTextSmall>: Protects against accidental overwrites and deletions. If an object is deleted or overwritten, previous versions can be restored.</StyledListItem>
          <StyledListItem><BoldTextSmall>Backup and Recovery</BoldTextSmall>: Facilitates easy recovery from unintended deletions and application failures.</StyledListItem>
          <StyledListItem><BoldTextSmall>Audit and Compliance</BoldTextSmall>: Keeps a complete history of object modifications, which can be crucial for auditing and compliance.</StyledListItem>
          <Spacer />
          <SubTitle id="bucket-replication">Replication</SubTitle>
          Replication enables automatic, asynchronous copying of objects across S3 buckets in different AWS Regions (Cross-Region Replication) or within the same region (Same-Region Replication). You define replication rules to specify which objects and object versions should be replicated and to where.
          The configuration includes specifying the source bucket, destination bucket, and replication rules. You can configure multiple rules for different objects within the same bucket.
          <Spacer />
          <Spacer />
          <StyledListItem><BoldText>Cross-Region Replication (CRR):</BoldText></StyledListItem>
          <StyledListItemIndent>Replicates objects to a bucket in a different AWS Region.</StyledListItemIndent>
          <StyledListItemIndent>Enhances data availability and disaster recovery capabilities.</StyledListItemIndent>
          <StyledListItemIndent>Helps meet compliance requirements by keeping a copy of data in a different geographical location.</StyledListItemIndent>
          <StyledListItem><BoldText>Same-Region Replication (SRR):</BoldText></StyledListItem>
          <StyledListItemIndent>Replicates objects to a bucket within the same AWS Region.</StyledListItemIndent>
          <StyledListItemIndent>Useful for maintaining copies of data for compliance or data redundancy within the same region.</StyledListItemIndent>
          <Spacer />
          <SubTitleSmall>Benefits of Replication:</SubTitleSmall>
          <StyledListItem><BoldTextSmall>Disaster Recovery</BoldTextSmall>: Ensures data is available in multiple locations, providing a fallback option if the primary region is unavailable.</StyledListItem>
          <StyledListItem><BoldTextSmall>Data Compliance</BoldTextSmall>: Helps meet compliance and regulatory requirements by storing data copies in specific locations.</StyledListItem>
          <StyledListItem><BoldTextSmall>Low-Latency Access</BoldTextSmall>: Provides low-latency access to data by storing copies closer to the end-users in different regions.</StyledListItem>
          <StyledListItem><BoldTextSmall>Data Durability and Redundancy</BoldTextSmall>: Enhances data durability and redundancy by storing multiple copies across regions or within the same region.</StyledListItem>
          <Spacer />
          <SubTitleSmall>Managing Replication:</SubTitleSmall>
          <StyledListItem><BoldTextSmall>Replication Time Control (RTC)</BoldTextSmall>: Provides a predictable replication time backed by an SLA, ensuring that 99.99% of objects are replicated within 15 minutes.</StyledListItem>
          <StyledListItem><BoldTextSmall>Object Versioning</BoldTextSmall>: Both source and destination buckets should have versioning enabled to support replication.</StyledListItem>
          <StyledListItem><BoldTextSmall>Permissions</BoldTextSmall>: The source bucket's AWS Identity and Access Management (IAM) role must have the necessary permissions to read from the source bucket and write to the destination bucket.</StyledListItem>
          <Spacer />
          <SubTitle id="storage-classes">Storage Classes</SubTitle>
          Amazon S3 offers several storage classes, each designed to address different use cases in terms of cost, access frequency, and durability requirements. Here's an overview of the available S3 storage classes:
          <Spacer />
          <Spacer />
          <StyledListItem><BoldText>Standard - General Purpose</BoldText></StyledListItem>
          <StyledListItemIndent><BoldText>Use Case</BoldText>: General-purpose storage for frequently accessed data.</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Durability</BoldText>: 99.999999999% (11 nines) durability.</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Availability</BoldText>: 99.99% availability over a given year.</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Features</BoldText>: Low latency and high throughput, suitable for a wide range of use cases including big data analytics, mobile and gaming applications, and content distribution.</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Retrieval Fee</BoldText>: None.</StyledListItemIndent>
          <Spacer />
          <StyledListItem><BoldText>Intelligent Tiering</BoldText></StyledListItem>
          <StyledListItemIndent><BoldText>Use Case</BoldText>: Data with unknown or changing access patterns.</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Durability</BoldText>: 99.999999999% (11 nines) durability.</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Availability</BoldText>: 99.9% availability over a given year.</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Features</BoldText>: Automatically moves objects between two access tiers (frequent and infrequent access) when access patterns change. Optimizes costs without performance impact or operational overhead.</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Retrieval Fee</BoldText>: None.</StyledListItemIndent>
          <Spacer />
          <StyledListItem><BoldText>Standard-Infrequent Access (IA)</BoldText></StyledListItem>
          <StyledListItemIndent><BoldText>Use Case</BoldText>: Data that is accessed less frequently but requires rapid access when needed.</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Durability</BoldText>: 99.999999999% (11 nines) durability.</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Availability</BoldText>: 99.9% availability over a given year.</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Features</BoldText>: Lower storage cost compared to S3 Standard but with a retrieval fee. Ideal for backups, disaster recovery, and long-term storage of less frequently accessed data.</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Retrieval Fee</BoldText>: Per GB retrieved.</StyledListItemIndent>
          <Spacer />
          <StyledListItem><BoldText>One Zone-Infrequent Access</BoldText></StyledListItem>
          <StyledListItemIndent><BoldText>Use Case</BoldText>: Infrequently accessed data that does not require multiple availability zone resilience.</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Durability</BoldText>: 99.999999999% (11 nines) durability.</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Availability</BoldText>: 99.5% availability over a given year.</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Features</BoldText>: Lower cost option compared to Standard-IA. Suitable for data that can be easily recreated or for non-critical data stored in a specific availability zone.</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Retrieval Fee</BoldText>: Per GB retrieved.</StyledListItemIndent>
          <Spacer />
          <StyledListItem><BoldText>Glacier Instant Retrieval</BoldText></StyledListItem>
          <StyledListItemIndent><BoldText>Use Case</BoldText>: Archival storage for rarely accessed data with immediate access needs.</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Durability</BoldText>: 99.999999999% (11 nines) durability.</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Availability</BoldText>: 99.9% availability over a given year.</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Features</BoldText>: Low-cost storage with milliseconds access time. Ideal for medical images, news media assets, and user-generated content that is rarely accessed but needs to be available quickly when requested. <BoldText>Minimum storage duration of 90 days.</BoldText></StyledListItemIndent>
          <StyledListItemIndent><BoldText>Retrieval Fee</BoldText>: Per GB retrieved.</StyledListItemIndent>
          <Spacer />
          <StyledListItem><BoldText>Glacier Flexible Retrieval</BoldText></StyledListItem>
          <StyledListItemIndent><BoldText>Use Case</BoldText>: Long-term archival storage with occasional, flexible retrieval needs.</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Durability</BoldText>: 99.999999999% (11 nines) durability.</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Availability</BoldText>: 99.99% - Suitable for archival storage where data is rarely accessed.</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Features</BoldText>: Low-cost storage with three retrieval options (<BoldText>Minimum storage duration of 90 days.</BoldText>):</StyledListItemIndent>
          <StyledListItemIndentExtra><BoldText>Expedited</BoldText>: 1-5 minutes retrieval time.</StyledListItemIndentExtra>
          <StyledListItemIndentExtra><BoldText>Standard</BoldText>: 3-5 hours retrieval time.</StyledListItemIndentExtra>
          <StyledListItemIndentExtra><BoldText>Bulk</BoldText>:  5-12 hours retrieval time. Ideal for backup and disaster recovery use cases.</StyledListItemIndentExtra>
          <StyledListItemIndent><BoldText>Retrieval Fee</BoldText>: Per GB retrieved.</StyledListItemIndent>
          <Spacer />
          <StyledListItem><BoldText>Glacier Deep Archive</BoldText></StyledListItem>
          <StyledListItemIndent><BoldText>Use Case</BoldText>: Long-term archival storage with infrequent access and long retrieval times.</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Durability</BoldText>: 99.999999999% (11 nines) durability.</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Availability</BoldText>: 99.99% - Suitable for data that is rarely accessed and for which retrieval time of 12 hours is acceptable.</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Features</BoldText>: Lowest storage cost among all S3 classes. Retrieval options include (<BoldText>Minimum storage duration of 180 days.</BoldText>):</StyledListItemIndent>
          <StyledListItemIndentExtra><BoldText>Standard</BoldText>: 12 hours retrieval time.</StyledListItemIndentExtra>
          <StyledListItemIndentExtra><BoldText>Bulk</BoldText>: 48 hours retrieval time. Ideal for data that needs to be preserved for 7-10 years or more.</StyledListItemIndentExtra>
          <StyledListItemIndent><BoldText>Retrieval Fee</BoldText>: Per GB retrieved.</StyledListItemIndent>
          <Spacer />
          <SubTitleSmall>Choosing the Right Storage Class</SubTitleSmall>
          When choosing an S3 storage class, consider the following factors:
          <StyledListItem><BoldTextSmall>Access Frequency</BoldTextSmall>: How often you need to access the data.</StyledListItem>
          <StyledListItem><BoldTextSmall>Retrieval Time</BoldTextSmall>: The acceptable time frame for retrieving data.</StyledListItem>
          <StyledListItem><BoldTextSmall>Durability and Availability Requirements</BoldTextSmall>: The level of redundancy and availability you need.</StyledListItem>
          <StyledListItem><BoldTextSmall>Cost</BoldTextSmall>: The cost trade-offs between storage, retrieval, and transfer.</StyledListItem>
          <Spacer />
          <SubTitle id="lifecycle-rules">Lifecycle Rules</SubTitle>
          Lifecycle rules allow you to manage your objects so that they are stored cost-effectively throughout their lifecycle. Lifecycle rules enable you to define actions that AWS S3 applies to groups of objects,
          including transitioning objects between storage classes and deleting objects after a specified period. A lifecycle configuration is a set of rules that define actions S3 applies to objects during their lifetime.
          Each rule specifies an action to perform on a set of objects defined by a prefix (object name prefix) or tag filters.
          <StyledImage src={S3LifecycleRule} />
          <Spacer />
          Lifecycle actions can include transitioning objects to different storage classes, expiring objects, and aborting incomplete multipart uploads.
          <Spacer />
          <Spacer />
          <StyledListItem><BoldText>Transition Actions</BoldText>: Move objects to a different storage class based on the age of the object. For example:</StyledListItem>
          <StyledListItemIndent>Transition objects to the S3 Standard-IA storage class 30 days after creation.</StyledListItemIndent>
          <StyledListItemIndent>Move objects to S3 Glacier Flexible Retrieval after 60 days.</StyledListItemIndent>
          <StyledListItemIndent>Transition objects to S3 Glacier Deep Archive for long-term storage after 180 days.</StyledListItemIndent>
          <StyledListItem><BoldText>Expiration Actions</BoldText>: Permanently delete objects after a specified period. For example:</StyledListItem>
          <StyledListItemIndent>Expire objects 365 days after creation.</StyledListItemIndent>
          <StyledListItem><BoldText>Abort Incomplete Multipart Uploads</BoldText>: Configure a rule to abort incomplete multipart uploads after a specified number of days. This helps to avoid incurring storage costs for incomplete multipart uploads.</StyledListItem>
          <Spacer />
          Rules can be created for a certain prefix (example: s3://mybucket/mp3/*) and created for certain object tags (example: Department: Finance).
          <Spacer />
          <Spacer />
          <SubTitle id="requester-pays">Requester Pays</SubTitle>
          In general, bucket owners pay for all of the storage and data transfer costs associated with their bucket. With Requester Pays buckets, the requester instead of the bucket owner pays the cost of the request and the data download from the bucket.
          This feature is helpful when you want to share large datasets with other accounts. The requester must be authenticated in AWS for this feature to work.
          <StyledImage src={S3RequesterPaysBucket} />
          <Spacer />
          <Spacer />
          <SubTitle id="event-notifications">Event Notifications</SubTitle>
          Event Notifications allow you to automatically trigger actions in response to changes in your S3 buckets. These notifications can be configured to send messages to Amazon Simple Notification Service (SNS),
          Amazon Simple Queue Service (SQS), or invoke AWS Lambda functions when specific events occur in your S3 bucket. Event notifications typically deliver events in seconds but can sometimes take a minute or longer. S3 supports various
          types of events, including:
          <StyledListItem>s3:ObjectCreated:*: Triggered when an object is created.</StyledListItem>
          <StyledListItem>s3:ObjectCreated:Put: Triggered specifically for PUT operations.</StyledListItem>
          <StyledListItem>s3:ObjectCreated:Post: Triggered for POST operations.</StyledListItem>
          <StyledListItem>s3:ObjectCreated:Copy: Triggered for COPY operations.</StyledListItem>
          <StyledListItem>s3:ObjectCreated:CompleteMultipartUpload: Triggered when a multipart upload is completed.</StyledListItem>
          <StyledListItem>s3:ObjectRemoved:*: Triggered when an object is deleted.</StyledListItem>
          <StyledListItem>s3:ObjectRemoved:Delete: Triggered specifically for DELETE operations.</StyledListItem>
          <StyledListItem>s3:ObjectRemoved:DeleteMarkerCreated: Triggered when a delete marker is created.</StyledListItem>
          <StyledListItem>s3:ObjectRestore:Post: Triggered when a restore is initiated for an object in the S3 Glacier storage class.</StyledListItem>
          <StyledListItem>s3:ObjectRestore:Completed: Triggered when the restore is completed.</StyledListItem>
          <StyledListItem>s3:Replication:*: Various events related to replication, such as s3:Replication:OperationFailedReplication, s3:Replication:OperationMissedThreshold</StyledListItem>
          <Spacer />
          <StyledImage src={S3EventDestination} />
          <Spacer />
          <SubTitleSmall>Example Use Cases</SubTitleSmall>
          <StyledListItem><BoldTextSmall>Image Processing</BoldTextSmall>: Automatically trigger a Lambda function to process images (e.g., generate thumbnails) when new images are uploaded to an S3 bucket.</StyledListItem>
          <StyledListItem><BoldTextSmall>Data Ingestion</BoldTextSmall>: Send a message to an SQS queue for further processing when new data files are uploaded.</StyledListItem>
          <StyledListItem><BoldTextSmall>Monitoring and Alerting</BoldTextSmall>: Use SNS to send notifications or alerts when specific events occur in your S3 bucket.</StyledListItem>
          <Spacer />
          <SubTitleSmall>Considerations</SubTitleSmall>
          <StyledListItem><BoldTextSmall>Permissions</BoldTextSmall>: Ensure that the S3 bucket has the appropriate permissions to invoke Lambda functions, send messages to SNS topics, or SQS queues.</StyledListItem>
          <StyledListItem><BoldTextSmall>Event Delivery Retry</BoldTextSmall>: AWS retries event notifications if the destination (Lambda, SQS, SNS) is temporarily unavailable.</StyledListItem>
          <StyledListItem><BoldTextSmall>Configuration Limits</BoldTextSmall>: Each bucket can have up to 1,000 event notifications. Consider consolidating configurations if needed.</StyledListItem>
          <Spacer />
          <SubTitle id="performance">Performance</SubTitle>
          The baseline performance of Amazon S3 includes several key aspects:
          <Spacer />
          <Spacer />
          <SubTitleSmall>Throughput and Latency</SubTitleSmall>
          <HeadingSmall>High Throughput</HeadingSmall>
          Amazon S3 is designed to provide high throughput, allowing for large-scale data transfers. The service supports thousands of requests per second, making it suitable for big data analytics, media processing,
          and backup and restore applications.
          <Spacer />
          <HeadingSmall>Low Latency</HeadingSmall>
          S3 offers low-latency access to data, with typical read and write latencies in the range of a few milliseconds. This ensures quick retrieval and storage operations, which is essential for time-sensitive applications.
          <Spacer />
          <Spacer />
          <SubTitleSmall>Request Rate and Performance Guidelines</SubTitleSmall>
          <HeadingSmall>Request Rate Limits</HeadingSmall>
          Amazon S3 can handle up to 3,500 PUT/POST/DELETE requests per second and 5,500 GET requests per second per prefix in a bucket. By using multiple prefixes, you can scale these limits further.
          <Spacer />
          <HeadingSmall>Prefix Utilization</HeadingSmall>
          There are no limits to the number of prefixes in a bucket. Distribute objects across multiple prefixes to optimize performance. This avoids request rate limits being concentrated on a single prefix.
          <Spacer />
          <HeadingSmall>Multipart Upload</HeadingSmall>
          For large files, use multipart upload to improve upload speed and reliability. It's recommended for files bigger than 100MB and it's a must use for files that are bigger than 5GB.
          <StyledImage src={S3MultiPartUpload} />
          <Spacer />
          <HeadingSmall>Transfer Acceleration</HeadingSmall>
          Increases transfer speed by transferring files to an AWS edge location which will forward the data to the S3 bucket in the target region. This feature is also compatible with multi-part upload.
          <StyledImage src={S3TransferAcceleration} />
          <Spacer />
          <SubTitleSmall>Data Transfer</SubTitleSmall>
          <Spacer />
          <HeadingSmall>Upload Performance:</HeadingSmall>
          <StyledListItem><BoldTextSmall>Single PUT</BoldTextSmall>: For small objects, use single PUT requests.</StyledListItem>
          <StyledListItem><BoldTextSmall>Multipart Upload</BoldTextSmall>: For objects larger than 100 MB, it is recommended to use multipart upload, which enables faster and more efficient uploads.</StyledListItem>
          <Spacer />
          <HeadingSmall>Download Performance:</HeadingSmall>
          <StyledListItem><BoldTextSmall>Range GET</BoldTextSmall>: Use Range GETs to retrieve partial data from objects, which can enhance download performance and save bandwidth.</StyledListItem>
          <Spacer />
          <SubTitleSmall>Consistency Model</SubTitleSmall>
          <Spacer />
          <HeadingSmall>Read-after-Write Consistency</HeadingSmall>
          Amazon S3 offers read-after-write consistency for PUTs of new objects in your S3 bucket in all regions.
          <Spacer />
          <HeadingSmall>Eventual Consistency</HeadingSmall>
          Overwrite PUTS and DELETES (PUTS that overwrite an existing object and DELETES of objects) are eventually consistent.
          <Spacer />
          <Spacer />
          <SubTitleSmall>Scalability and Concurrency</SubTitleSmall>
          Amazon S3 automatically scales to handle the load, so there are no hard limits on the number of objects you can store or the total amount of storage you can consume. This scalability supports concurrent 
          access and operations on your data, allowing multiple users and applications to interact with the storage simultaneously.
          <Spacer />
          <Spacer />
          <SubTitleSmall>Network Considerations</SubTitleSmall>
          <StyledListItem><BoldTextSmall>Transfer Acceleration</BoldTextSmall>: S3 Transfer Acceleration can speed up content transfers to and from S3 buckets over long distances by leveraging Amazon CloudFront's globally distributed edge locations.</StyledListItem>
          <StyledListItem><BoldTextSmall>Direct Connect</BoldTextSmall>: For more predictable performance and lower latency, AWS Direct Connect provides dedicated network connections from your premises to AWS.</StyledListItem>
          <Spacer />
          <SubTitleSmall>Monitoring and Optimization</SubTitleSmall>
          <StyledListItem><BoldTextSmall>S3 Storage Lens</BoldTextSmall>: Provides visibility into storage usage and activity trends, helping optimize performance and costs.</StyledListItem>
          <StyledListItem><BoldTextSmall>CloudWatch Metrics</BoldTextSmall>: Use CloudWatch to monitor S3 performance and set up alerts for unusual activity.</StyledListItem>
          <Spacer />
          <SubTitle id="s3-select">S3 Select & Glacier Select</SubTitle>
          S3 Select is a feature of Amazon S3 that allows you to retrieve a subset of data from an object using simple SQL expressions. This means you can perform SQL-like queries (server-side) directly on the data stored 
          in S3 without having to download the entire object. If you have a CSV file stored in S3 and only need records where a specific column meets a certain condition, you can use S3 Select to fetch just those records 
          instead of downloading the entire file.
          <Spacer />
          <HeadingSmall>Key features:</HeadingSmall>
          <StyledListItem><BoldTextSmall>Query Archived Data</BoldTextSmall>: Perform SQL queries on data stored in Glacier without having to restore the entire object.</StyledListItem>
          <StyledListItem><BoldTextSmall>Efficient Data Retrieval</BoldTextSmall>: Enables selective retrieval of data, which can save time and reduce retrieval costs.</StyledListItem>
          <StyledListItem><BoldTextSmall>Supports CSV and JSON Formats</BoldTextSmall>: Allows querying of data stored in these formats.</StyledListItem>
          <StyledListItem><BoldTextSmall>Improves Access to Archived Data</BoldTextSmall>: Makes it easier to access specific pieces of archived data without full retrieval.</StyledListItem>
          <Spacer />
          <SubTitle id="batch-operations">Batch Operations</SubTitle>
          Amazon S3 Batch Operations allows you to manage and perform large-scale batch operations on the objects stored in your S3 buckets. It simplifies the process of performing repetitive or 
          bulk actions across many objects, helping you automate and scale these tasks.
          <Spacer />
          <HeadingSmall>Common Operations:</HeadingSmall>
          <StyledListItem><BoldTextSmall>Copy Operations</BoldTextSmall>: Copy objects to another bucket or within the same bucket, useful for data migration or backup tasks.</StyledListItem>
          <StyledListItem><BoldTextSmall>Tagging</BoldTextSmall>: Add, remove, or replace tags on a large number of objects to manage and organize them more effectively.</StyledListItem>
          <StyledListItem><BoldTextSmall>ACL Updates</BoldTextSmall>: Change access permissions for a large set of objects to manage access control.</StyledListItem>
          <StyledListItem><BoldTextSmall>Object Restore from Glacier</BoldTextSmall>: Initiate restore operations for objects stored in S3 Glacier.</StyledListItem>
          <StyledListItem><BoldTextSmall>Metadata Updates</BoldTextSmall>: Modify metadata for a group of objects.</StyledListItem>
          <Spacer />
          <SubTitle id="storage-lens">Storage Lens</SubTitle>
          Amazon S3 Storage Lens is a feature that provides visibility into your S3 storage usage and activity trends. It delivers comprehensive insights through interactive dashboards, making it easier to understand, analyze, and optimize your S3 storage. 
          S3 Storage Lens aggregates data across your entire organization or specific accounts and regions, offering both summary and granular views of your storage.
          <Spacer />
          <HeadingSmall>Key features:</HeadingSmall>
          <StyledListItem><BoldTextSmall>Unified Metrics and Recommendations</BoldTextSmall>: S3 Storage Lens provides metrics across multiple dimensions (e.g., bucket, account, region) and actionable recommendations to optimize costs and improve data protection.</StyledListItem>
          <StyledListItem><BoldTextSmall>Interactive Dashboards</BoldTextSmall>: Pre-configured, interactive dashboards give you a comprehensive view of your storage usage and activity. You can also create custom dashboards to focus on specific metrics.</StyledListItem>
          <StyledListItem><BoldTextSmall>Data Aggregation</BoldTextSmall>: Aggregates storage usage and activity metrics across your organization, making it easier to manage and optimize large-scale storage environments.</StyledListItem>
          <StyledListItem><BoldTextSmall>Detailed Insights</BoldTextSmall>: Metrics include information on storage usage, object counts, request activity, and more, enabling you to understand patterns and make informed decisions.</StyledListItem>
          <StyledListItem><BoldTextSmall>Integration with AWS Services</BoldTextSmall>: Integrates with other AWS services such as AWS Organizations, allowing you to collect metrics and insights at the organizational level.</StyledListItem>
          <StyledListItem><BoldTextSmall>Cost Optimization</BoldTextSmall>: Provides recommendations to reduce costs, such as identifying infrequently accessed data that could be moved to a lower-cost storage class.</StyledListItem>
          <StyledListItem><BoldTextSmall>Data Protection and Management</BoldTextSmall>: Offers insights into potential data protection issues and recommendations to enhance security and compliance.</StyledListItem>
          <Spacer />
          <HeadingSmall>Common Metrics:</HeadingSmall>
          <StyledListItem><BoldTextSmall>Storage Usage</BoldTextSmall>: Total bytes stored, breakdown by storage class, and trends over time.</StyledListItem>
          <StyledListItem><BoldTextSmall>Object Counts</BoldTextSmall>: Number of objects stored, including breakdowns by storage class.</StyledListItem>
          <StyledListItem><BoldTextSmall>Request Activity</BoldTextSmall>: Number of GET, PUT, DELETE, and other requests, helping you understand access patterns.</StyledListItem>
          <StyledListItem><BoldTextSmall>Cost Efficiency</BoldTextSmall>: Identifies potential savings by highlighting infrequently accessed data and suggesting appropriate storage classes.</StyledListItem>
          <StyledListItem><BoldTextSmall>Data Protection</BoldTextSmall>: Highlights objects without versioning or with public access, providing recommendations to improve data security.</StyledListItem>
          <Spacer />
          <StyledImage src={S3StorageLens} /> */}
        </Text>
      </Container>
    </Wrapper>
  );
}

export default AWSVPC;