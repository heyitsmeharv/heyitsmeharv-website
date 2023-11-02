import ReactGA from 'react-ga';
import React, { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

// animations
import SlideInBottom from "../../animations/SlideInBottom";

// icons
import { ChevronBackCircle } from '@styled-icons/ionicons-solid/ChevronBackCircle';
import { AWSSVG, AWSEC2SVG } from '../../resources/styles/icons';

// components
import { StyledNavButton, StyledNavLink } from '../Button/Button';

// images
import InstanceNamingConvention from "../../resources/images/blog/AWSElasticComputeCloud/instance-type-name.jpeg";
import SecurityGroup from "../../resources/images/blog/AWSElasticComputeCloud/security_group.jpeg";
import SecurityGroup2 from "../../resources/images/blog/AWSElasticComputeCloud/security_group_2.jpeg";
import SecurityGroup3 from "../../resources/images/blog/AWSElasticComputeCloud/security_group_3.jpeg";

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

const Text = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
`;

const BoldText = styled.b`
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  font-weight: bold;
`;

const StyledCodeSpan = styled.code`
  background-color: #f1f1f1;
  color: crimson;
  padding: 0 5px;
  margin: 0 5px;
`;

const StyledListItem = styled.li`
  color: ${({ theme }) => theme.text};
  margin-left: 5%;
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

const AWSElasticComputeCloud = () => {

  // analytics
  useEffect(() => {
    ReactGA.pageview('/blog/aws-elastic-compute-cloud');
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
          <Title>AWS Elastic Compute Cloud (EC2)</Title>
          <IconWrapper>
            <Icon><AWSSVG /></Icon>
            <Icon><AWSEC2SVG /></Icon>
          </IconWrapper>
        </Flex>
        <Spacer />
        <Text>
          <SubTitle>What is an EC2?</SubTitle>
          In this blog post we'll be going through the Elastic Compute Cloud service, also known as EC2 which can be defined as an infrastructure as a Service (IaaS). In short EC2 is a virtual service in the
          AWS cloud. Why would you need this? Well, any time you need to compute a task this service will be handy.
          <Spacer />
          <Spacer />
          <SubTitle>Configuration</SubTitle>
          What does this EC2 instance consist of? Well it's just a server, albeit sitting in one of Amazon's many data centers that we can purchase. When we are "purchasing" this service, we're asked to choose
          how we would like it to be configured. This can vary from the list below:
          <StyledListItem><BoldText>Operating System (OS)</BoldText>: Windows, Mac OS, Linux</StyledListItem>
          <StyledListItem><BoldText>CPU</BoldText>: How much compute power and cores.</StyledListItem>
          <StyledListItem><BoldText>RAM</BoldText>: How much random access memory.</StyledListItem>
          <StyledListItem><BoldText>Storage</BoldText>: Network and/or hardware.</StyledListItem>
          <StyledListItem><BoldText>Network</BoldText>: Type of connectivity.</StyledListItem>
          <StyledListItem><BoldText>Firewall Rules</BoldText>: Security groups.</StyledListItem>
          <Spacer />
          <SubTitle>EC2 User Data</SubTitle>
          Another thing to note is that you can bootstrap the EC2 server using a EC2 User data script. What this means is that you can launch commands when the EC2 server starts. It can be seen as a one time
          use for prepping your server for your needs such as installing any custom software you may want.
          <Spacer />
          <Spacer />
          <SubTitle>EC2 Instance Types</SubTitle>
          Now let's go through the instance types. I won't be listing all of the possible types you can choose from, but I'll be going through the main categories and what each category is suited for. If you want to
          see all the possible choices, this ain't it. If you would like to see all of the categories and types then you can go see <StyledAnchor href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html" target="_blank">amazon's documentation.</StyledAnchor>
          <Spacer />
          <Spacer />
          <SubTitleSmall>Naming Convention</SubTitleSmall>
          Before I go through each category, it might be beneficial first show you amazon's instance naming convention. The picture below denotes how the instance type is called, specifying
          the <BoldText>instance</BoldText>, <BoldText>generation</BoldText>, <BoldText>processor</BoldText> and <BoldText>size</BoldText>.
          <Spacer />
          <StyledImage src={InstanceNamingConvention} />
          <Spacer />
          <Spacer />
          <SubTitleSmall>Which Instance Type is Right?</SubTitleSmall>
          This depends on the scenario you're facing. Each instance has it's strengths and weaknesses and generally speaking they all are suited for a particular tasks. As I stated above I'm not going to be going through all
          of the possible instance types but I'll be covering the basics.
          <Spacer />
          <Spacer />
          <SubTitleSmall>General Purpose</SubTitleSmall>
          General purpose instances provide a balance of compute, memory, and networking resources, and can be used for a wide range of workloads.
          <Spacer />
          <Spacer />
          <SubTitleSmall>Compute Optimized</SubTitleSmall>
          Compute optimized instances are ideal for compute-bound applications that benefit from high-performance processors.
          <Spacer />
          Use cases:
          <StyledListItem>Batch processing workloads.</StyledListItem>
          <StyledListItem>Media transcoding.</StyledListItem>
          <StyledListItem>High performance web servers.</StyledListItem>
          <StyledListItem>High performance computing (HPC).</StyledListItem>
          <StyledListItem>Science modeling & machine learning.</StyledListItem>
          <StyledListItem>Dedicated gaming servers.</StyledListItem>
          <Spacer />
          <SubTitleSmall>Memory Optimized</SubTitleSmall>
          Memory optimized instances are designed to deliver fast performance for workloads that process large data sets in memory.
          <Spacer />
          Use cases:
          <StyledListItem>High performance, relational/non-relational databases.</StyledListItem>
          <StyledListItem>Distributed web scale cache stores.</StyledListItem>
          <StyledListItem>In memory databases optimized for business intelligence (BI).</StyledListItem>
          <StyledListItem>Applications performing real-time processing of big unstructured data.</StyledListItem>
          <Spacer />
          <SubTitleSmall>Storage Optimized</SubTitleSmall>
          Storage optimized instances are designed for workloads that require high, sequential read and write access to very large data sets on local storage. They are optimized to deliver tens of thousands of low-latency,
          random I/O operations per second (IOPS) to applications.
          <Spacer />
          Use cases:
          <StyledListItem>High frequency online transaction processing (OLTP) systems.</StyledListItem>
          <StyledListItem>Relational databases.</StyledListItem>
          <StyledListItem>NoSQL databases.</StyledListItem>
          <StyledListItem>Cache for in-memory databases (for example, Redis).</StyledListItem>
          <StyledListItem>Data warehousing applications.</StyledListItem>
          <StyledListItem>Distributed file systems.</StyledListItem>
          <Spacer />
          <SubTitle>Security Groups</SubTitle>
          Security groups are used for controlling traffic in and out of an EC2 server, it's essentially how we handle the security aspect i.e. what the instance is allowed to talk to. It's worth mentioning that security
          groups only contain <BoldText>allow rules</BoldText>. These rules can reference an IP address or by other security groups.
          <StyledImage src={SecurityGroup} />
          As you can see here the security group is acting as a "firewall" making sure that the traffic going in and out is what you expect.
          They don't just regulate the traffic coming in and out but also port ranges and IP ranges (IPv4, IPv6).
          <StyledImage src={SecurityGroup2} />
          <SubTitleSmall>Good to Know</SubTitleSmall>
          <StyledListItem>Security groups can be attached to multiple instances.</StyledListItem>
          <StyledListItem>Locked down to a region/VPC combination.</StyledListItem>
          <StyledListItem>Lives outside the EC2.</StyledListItem>
          <StyledListItem>If your application is not accessible due to time out, then it's most likely a security group issue.</StyledListItem>
          <StyledListItem>The source IP address 0.0.0.0/0 refers to everything.</StyledListItem>
          <StyledListItem>All inbound traffic is blocked by default.</StyledListItem>
          <StyledListItem>All outbound traffic is allowed by default.</StyledListItem>
          <Spacer />
          <SubTitleSmall>Referencing Other Security Groups</SubTitleSmall>
          This is a simple diagram depicting how referencing multiple EC2 instances and how attaching different security groups would work.
          <StyledImage src={SecurityGroup3} />
          <Spacer />
          <SubTitle>Ports</SubTitle>
          I think it would be beneficial to list the classic ports and what they mean now that we have explained the traffic flow. Not all connections are the same, you can connect to an EC2 instance through different types of transportation.
          <StyledListItem>22 = SSH (Secure Shell) - Log into a linux instance.</StyledListItem>
          <StyledListItem>21 = FTP (File Transfer Protocol) - Upload files into a file share.</StyledListItem>
          <StyledListItem>22 = SFTP (Secure File Transfer Protocol) - Upload files using SSH.</StyledListItem>
          <StyledListItem>80 = HTTP (Web Traffic) - Access unsecure websites.</StyledListItem>
          <StyledListItem>443 = HTTPS (Web Traffic) - Access secure websites.</StyledListItem>
          <StyledListItem>3389 = RDP (Remote Desktop Protocol) - Log into a windows instance.</StyledListItem>
          <Spacer />
          <SubTitle>EC2 Purchasing Options</SubTitle>
          Earlier in the post I mentioned "purchasing", well when you purchase a EC2 server you have different options to choose from. These options are suited for particular scenarios which you should consider based
          on your business/individual needs. Let's explore these options and why you might want to choose them.
          <SubTitleSmall>On-Demand Instance</SubTitleSmall>
          With On-Demand Instances, you pay for compute capacity by the second with no long-term commitments. You have full control over the instance's lifecycle—you decide when to launch, stop, hibernate, start, reboot, or terminate it.
          <StyledListItem>Pay for what you use.</StyledListItem>
          <StyledListItem>Has the highest cost but no upfront payment.</StyledListItem>
          <StyledListItem>No long term commitment.</StyledListItem>
          <StyledListItem>Recommended for short-term and un-interrupted workloads, where you can predict how the application will behave.</StyledListItem>
          <Spacer />
          <SubTitleSmall>Reserved Instance</SubTitleSmall>
          Reserved Instances provide you with significant savings on your Amazon EC2 costs compared to On-Demand Instance pricing. Reserved Instances are not physical instances, but rather a billing discount applied to the use of On-Demand Instances in your account.
          These On-Demand Instances must match certain attributes, such as instance type and Region, in order to benefit from the billing discount.
          <StyledListItem>Heavily discounted compared to On-Demand instances.</StyledListItem>
          <StyledListItem>Reservation period - 1 year (+discount) or 3 years (+++discount).</StyledListItem>
          <StyledListItem>Payment options - No upfront (+), Partial upfront (++) or All upfront (+++).</StyledListItem>
          <StyledListItem>You can buy and sell in the reserved instance marketplace.</StyledListItem>
          <StyledListItem>Recommended for steady-state usage applications (databases).</StyledListItem>
          <Spacer />
          <SubTitleSmall>Spot Instance</SubTitleSmall>
          A Spot Instance is an instance that uses spare EC2 capacity that is available for less than the On-Demand price. Because Spot Instances enable you to request unused EC2 instances at steep discounts,
          you can lower your Amazon EC2 costs significantly. The hourly price for a Spot Instance is called a Spot price. The Spot price of each instance type in each Availability Zone is set by Amazon EC2, and
          is adjusted gradually based on the long-term supply of and demand for Spot Instances. Your Spot Instance runs whenever capacity is available.
          <StyledListItem>The MOST cost-efficient instance in AWS.</StyledListItem>
          <StyledListItem>You could lose the server at any point if your max price is less than the current spot price.</StyledListItem>
          <StyledListItem>Useful for workloads that are resilient to failure.</StyledListItem>
          <StyledListItem>Well-suited for data analysis, batch jobs, background processing, and optional tasks.</StyledListItem>
          <StyledListItem>Not suitable for critical jobs or databases.</StyledListItem>
          <Spacer />
          <SubTitleSmall>Dedicated Hosts</SubTitleSmall>
          Dedicated Hosts support different configurations (physical cores, sockets, and VCPUs) that allow you to run instances of different families and sizes.
          When you allocate a Dedicated Host in your account, you can choose a configuration that supports either a single instance type, or multiple instance types within the same instance family. 
          The number of instances that you can run on a host depends on the configuration you choose.
          <StyledListItem>The MOST expensive option.</StyledListItem>
          <StyledListItem>Useful for software that has complicated licensing models.</StyledListItem>
          <StyledListItem>For companies that have strong regulatory or compliance needs.</StyledListItem>
          <StyledListItem>Purchase options - On-Demand or Reserved.</StyledListItem>
        </Text>
      </Container>
    </Wrapper>
  );
}

export default AWSElasticComputeCloud;