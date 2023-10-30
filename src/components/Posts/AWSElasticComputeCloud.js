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
import InstanceNamingConvention from "../../resources/images/blog/AWSElasticComputeCloud/instance-type-name.jpg";

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
          What does this EC2 instance consist of? Well it's just a server, albeit sitting in one of Amazon's many data centers that we can rent. When we are renting this service, we're asked to choose
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
          <Spacer />
          <SubTitleSmall>Memory Optimized</SubTitleSmall>
          <Spacer />
          <Spacer />
          <SubTitleSmall>Accelerated Computing</SubTitleSmall>
          Accelerated computing instances use hardware accelerators, or co-processors, to perform some functions, such as floating point number calculations, graphics processing, or data pattern matching,
          more efficiently than is possible in software running on CPUs. These instances enable more parallelism for higher throughput on compute-intensive workloads.
          If you require high processing capability, you'll benefit from using accelerated computing instances, which provide access to hardware-based compute accelerators
          such as Graphics Processing Units (GPUs), Field Programmable Gate Arrays (FPGAs), or AWS Inferentia.
          <Spacer />
          <Spacer />
          <SubTitleSmall>Storage Optimized</SubTitleSmall>
          Storage optimized instances are designed for workloads that require high, sequential read and write access to very large data sets on local storage. They are optimized to deliver tens of thousands of low-latency,
          random I/O operations per second (IOPS) to applications.
          <Spacer />
          <Spacer />
          <SubTitleSmall>Instance Features</SubTitleSmall>

          <Spacer />
          <Spacer />
          <SubTitleSmall>Measuring Instance Performance</SubTitleSmall>
          
          <Spacer />
          <Spacer />
        </Text>
      </Container>
    </Wrapper>
  );
}

export default AWSElasticComputeCloud;