import React, { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

// helpers
import { logPageView } from "../../helpers/analytics";

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
import AMI from "../../resources/images/blog/AWSElasticComputeCloud/ami_example.jpeg";
import IPv4 from "../../resources/images/blog/AWSElasticComputeCloud/IPv4.jpeg";
import Cluster from "../../resources/images/blog/AWSElasticComputeCloud/cluster_example.jpeg";
import Spread from "../../resources/images/blog/AWSElasticComputeCloud/spread_example.jpeg";
import Partition from "../../resources/images/blog/AWSElasticComputeCloud/partition_example.jpeg";
import ElasticNetworkInterface from "../../resources/images/blog/AWSElasticComputeCloud/elastic_network_interface_example.jpeg";
import Snapshot from "../../resources/images/blog/AWSElasticComputeCloud/snapshot_example.jpeg";
import Hibernate from "../../resources/images/blog/AWSElasticComputeCloud/hibernate_example.jpeg";
import Encryption from "../../resources/images/blog/AWSElasticComputeCloud/encryption_example.jpeg";
import ElasticFileSystem from "../../resources/images/blog/AWSElasticComputeCloud/elastic_file_system_example.jpeg";
import HealthCheck from "../../resources/images/blog/AWSElasticComputeCloud/health_check_example.jpeg";
import LoadBalancerSecurityGroup from "../../resources/images/blog/AWSElasticComputeCloud/load_balancer_sg_example.jpeg";
import ApplicationLoadBalancerHTTP from "../../resources/images/blog/AWSElasticComputeCloud/application_load_balancer_http_example.jpeg";
import ApplicationLoadBalancerQuery from "../../resources/images/blog/AWSElasticComputeCloud/application_load_balancer_query_param_example.jpeg";
import NetworkLoadBalancer from "../../resources/images/blog/AWSElasticComputeCloud/network_load_balancer_example.jpeg";
import GatewayLoadBalancer from "../../resources/images/blog/AWSElasticComputeCloud/gateway_load_balancer_example.jpeg";
import CrossloadBalancing from "../../resources/images/blog/AWSElasticComputeCloud/cross_load_balancing_example.jpeg";
import SSLTLS from "../../resources/images/blog/AWSElasticComputeCloud/ssl_tls_example.jpeg";
import ServerNameIndicationExample from "../../resources/images/blog/AWSElasticComputeCloud/sni_example.jpeg";
import AutoScalingGroup from "../../resources/images/blog/AWSElasticComputeCloud/auto_scaling_group_example.jpeg";
import AutoScalingGroupLaunchTemplate from "../../resources/images/blog/AWSElasticComputeCloud/auto_scaling_group_launch_template_example.jpeg";


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

const AWSElasticComputeCloud = () => {

  // analytics
  useEffect(() => {
    if (window.location.hostname !== "localhost") {
      logPageView("blog/aws-elastic-compute-cloud");
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
          <Title>Amazon Elastic Compute Cloud (EC2)</Title>
          <IconWrapper>
            <Icon><AWSSVG /></Icon>
            <Icon><AWSEC2SVG /></Icon>
          </IconWrapper>
        </Flex>
        <Spacer />
        <Text>
          I'll be touching on these core subjects which covers the majority of EC2's capability:
          <StyledAnchor href="#what-is-ec2"><StyledListItem>EC2 Overview</StyledListItem></StyledAnchor>
          <StyledAnchor href="#sg"><StyledListItem>Security and traffic flow using security groups (SG)</StyledListItem></StyledAnchor>
          <StyledAnchor href="#rent"><StyledListItem>Options for renting virtual machines</StyledListItem></StyledAnchor>
          <StyledAnchor href="#ami"><StyledListItem>Amazon Machine Images (AMI)</StyledListItem></StyledAnchor>
          <StyledAnchor href="#ip"><StyledListItem>Public and Private IP Addresses</StyledListItem></StyledAnchor>
          <StyledAnchor href="#placement-group"><StyledListItem>Placement Groups</StyledListItem></StyledAnchor>
          <StyledAnchor href="#eni"><StyledListItem>Networking (ENI)</StyledListItem></StyledAnchor>
          <StyledAnchor href="#ebs"><StyledListItem>Storing data on virtual drives with (EBS)</StyledListItem></StyledAnchor>
          <StyledAnchor href="#efs"><StyledListItem>Create and configure shared file systems (EFS)</StyledListItem></StyledAnchor>
          <StyledAnchor href="#elb"><StyledListItem>Distributing load across machines (ELB)</StyledListItem></StyledAnchor>
          <StyledAnchor href="#asg"><StyledListItem>Scaling the services using an auto-scaling group (ASG)</StyledListItem></StyledAnchor>
          <Spacer />
          <SubTitle id="what-is-ec2">What is an EC2?</SubTitle>
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
          <StyledListItem><BoldText>Storage</BoldText>: Network (EBS & EFS) and/or hardware.</StyledListItem>
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
          <SubTitle id="sg">Security Groups</SubTitle>
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
          <SubTitleSmall>Ports</SubTitleSmall>
          Now that we have explained the traffic flow it might be useful to go through some common port numbers and what they mean.
          Not all connections are the same, you can connect to an EC2 instance through different types of transportation.
          <StyledListItem>22 = SSH (Secure Shell) - Log into a linux instance.</StyledListItem>
          <StyledListItem>21 = FTP (File Transfer Protocol) - Upload files into a file share.</StyledListItem>
          <StyledListItem>22 = SFTP (Secure File Transfer Protocol) - Upload files using SSH.</StyledListItem>
          <StyledListItem>80 = HTTP (Web Traffic) - Access unsecure websites.</StyledListItem>
          <StyledListItem>443 = HTTPS (Web Traffic) - Access secure websites.</StyledListItem>
          <StyledListItem>3389 = RDP (Remote Desktop Protocol) - Log into a windows instance.</StyledListItem>
          <Spacer />
          <SubTitle id="rent">EC2 Purchasing Options</SubTitle>
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
          <Spacer />
          <SubTitle id="ami">Amazon Machine Image (AMI)</SubTitle>
          AMI's are a customization of an EC2 instance. Much like user data scripts, AMI's are used to pre-package any software you want on your EC2 instance. This could be from operating systems to monitoring software etc. This is
          advantageous as it can result in faster boot times. You can also purchase Public AMI's from the marketplace if you don't want/need to create and maintain your own.
          <StyledImage src={AMI} />
          <Spacer />
          <SubTitle id="ip">Public vs Private IP</SubTitle>
          Amazon EC2 and Amazon VPC support both the IPv4 and IPv6 addressing protocols. In this blog post we'll be sticking to IPv4 addresses which look like this - 127.0.0.1 (four numbers separated by three dots).
          Each number could range from 0 to 255 so this could look like anything from '[0-255].[0-255].[0-255].[0-255]'. IPv4 allows for 3.7 billion different addresses in the public space and it's almost running out!
          <Spacer />
          Lets go through how IPv4 addresses work in a public and private scenario.
          <StyledImage src={IPv4} />
          For public servers, be it EC2 or not, it will have an IPv4 address and using this address these servers can communicate to one another. For private networks, they will have a private IP range and all the computers
          within that private network can communicate to each other using the private IP. In order to access other servers the private network would need to go through an Internet Gateway which has a public IP address assigned.
          <Spacer />
          <Spacer />
          <SubTitleSmall>Public IP Addresses</SubTitleSmall>
          <StyledListItem>Server can be identified via the internet.</StyledListItem>
          <StyledListItem>Must be unique across the whole web (servers cannot share a public IP address).</StyledListItem>
          <StyledListItem>IP addresses can be geo-located (you can find out where that server lives).</StyledListItem>
          <Spacer />
          <SubTitleSmall>Private IP Addresses</SubTitleSmall>
          <StyledListItem>Server can only be identified on a private network.</StyledListItem>
          <StyledListItem>Must be unique across the private network.</StyledListItem>
          <StyledListItem>Only a specified range of IPs can be used as a private IP.</StyledListItem>
          <StyledListItem>Servers in a private network communicate out using a internet gateway (proxy).</StyledListItem>
          <Spacer />
          <SubTitle id="placement-group">Placement Groups</SubTitle>
          We've talked about what an EC2 instance is, how to configure it, what your options are on purchase and how they communicate. Let's talk about placement strategy! When deploying an EC2 instance you can specify a group
          to put them in. These strategies consist of:
          <StyledListItem><BoldText>Cluster</BoldText> - cluster instances are a low-latency group in a single availability zone.</StyledListItem>
          <StyledImage src={Cluster} />
          Cluster groups can be great for big data jobs and for applications which need low latency and high network throughput. However, if the rack fails, all instances fail at the same time.
          <StyledListItem><BoldText>Spread</BoldText> - spreads instances across underlying hardware (max 7 instances per group and per availability zone) for critical applications.</StyledListItem>
          <StyledImage src={Spread} />
          Spread groups can span across availability zone (AZ). That means there's a reduced risk of simultaneous failure. Instances are isolated from each other as there on separate hardware.
          <StyledListItem><BoldText>Partition</BoldText> - spreads instances across many different partitions (which rely on different sets of racks) within an AZ. Can scale to hundreds of EC2s per group.</StyledListItem>
          <StyledImage src={Partition} />
          You can have up to seven partitions per availability zone (AZ) which can span across multiple AZs in the same region. You can have up to hundreds of instances that can access the same partition information as metadata.
          <Spacer />
          <Spacer />
          <SubTitle id="eni">Elastic Network Interfaces (ENI)</SubTitle>
          Let's talk about Elastic Network Interfaces which are a logical component that represents a virtual network card. This is what give EC2 instances access to the network. It's worth noting that they are also used outside
          of EC2 instances.
          <StyledImage src={ElasticNetworkInterface} />
          You can create ENI's independently and attach them on the fly on EC2 instances, however they are bound to the availability zone (AZ) that the ENI has been created in. The ENI can have the following attributes:
          <StyledListItem>Primary private IPv4, one or more secondary IPv4.</StyledListItem>
          <StyledListItem>One Elastic IP (IPv4) per private IPv4.</StyledListItem>
          <StyledListItem>One Public IPv4.</StyledListItem>
          <StyledListItem>One or more security groups.</StyledListItem>
          <StyledListItem>A MAC address.</StyledListItem>
          <Spacer />
          <SubTitle id="ebs">Elastic Block Store (EBS)</SubTitle>
          An EBS volume is a network drive that you can attach to an EC2 instance whilst they run. It allows the instance to persist data, even after their termination. It is essentially a "network USB stick". EBS volumes can be
          be removed and attached to EC2 instances, they're not limited to the first instance they're associated with. Much like a ENI the EBS is also bound to an AZ, however we can use the snapshot feature which will allow you to
          get around this limitation.
          <Spacer />
          <Spacer />
          <SubTitleSmall>Snapshots</SubTitleSmall>
          Snapshots are a backup of an EBS volume at a point in time which you aren't required to detach the volume to snapshot it.
          <StyledImage src={Snapshot} />
          For snapshotting there are different features which are suited for particular use-cases. Let's go through them:
          <StyledListItem><BoldText>Archive</BoldText> - Moving a snapshot to the archive tier is 75% cheaper and takes within 24 to 72 hours for restoring the archive.</StyledListItem>
          <StyledListItem><BoldText>Recycle Bin</BoldText> - Setup rules to retain deleted snapshots so you can recover them after an accidental deletion. The retention could be from 1 day to 1 year.</StyledListItem>
          <StyledListItem><BoldText>Fast Snapshot Restore</BoldText> - Force full initialisation of the snapshot to have no latency on the first use. This is the most costly feature.</StyledListItem>
          <Spacer />
          <SubTitleSmall>Hibernate</SubTitleSmall>
          EC2 hibernate is a feature which allows the preservation of instance memory. What does this actually mean? Well when we terminate an instance, any Elastic Block Store volumes (EBS) attached at the root will be destroyed.
          When we stop an instance the EBS volume is kept intact for when it starts up again. So you might be asking, what is the point of the hibernation feature? Well, whenever an EC2 instance starts it has a couple of tasks to
          complete before it's ready, that includes the operating system boot time and any user data scripts which can take time! This is where hibernation comes in as it preserves the in-memory (RAM) state so the boot up time is much
          faster. The only catch is that the EBS volume <BoldText>needs to be encrypted</BoldText> and <BoldText>big enough to store the memory</BoldText>.
          <StyledImage src={Hibernate} />
          <Spacer />
          <Spacer />
          <SubTitleSmall>Instance Store</SubTitleSmall>
          It's worth mentioning that there is an alternative to "network drives" if you're needing better I/O performance. EC2 Instance Store is a high-performance hardware disk (physically attached to the hardware), this has better performance
          but there is a risk of data loss if the hardware fails. If you were to need this you'd want to backup the storage regularly to prevent risk of data loss.
          <Spacer />
          <Spacer />
          <SubTitleSmall>Volume Types</SubTitleSmall>
          There are six types of EBS volumes to choose from, each suited for a particular task/scenario.
          <StyledListItem><BoldText>gp2 / gp3 (SSD)</BoldText>: General purpose SSD volume that balances price and performance for a wide variety of workloads.</StyledListItem>
          <StyledListItem><BoldText>io1 / io2 (SSD)</BoldText>: Highest-performance SSD volume for mission-critical low-latency or high throughput workloads.</StyledListItem>
          <StyledListItem><BoldText>st1 (HDD)</BoldText>: Low cost HDD volume designed for frequently accessed, throughput-intensive workloads.</StyledListItem>
          <StyledListItem><BoldText>sc1 (HDD)</BoldText>: Lowest cost HDD volume designed for less frequently accessed workloads.</StyledListItem>
          <Spacer />
          <SubTitleSmall>Multi-Attach (io1 / io2)</SubTitleSmall>
          The multi-attach feature is only for the io1/io2 family. This feature allows the same EBS volume to be attached to multiple EC2 instances in the same AZ. It can be attached up to 16 instances at a time. Use cases for this feature
          would be to achieve higher application availability.
          <Spacer />
          <Spacer />
          <SubTitleSmall>Encryption</SubTitleSmall>
          You have the option to encrypt any EBS volumes using KMS (AES-256) keys. Any snapshots of encrypted volumes are encrypted. Here's an example for when an EBS volume already exists (unencrypted) and you want to encrypt it.
          <StyledImage src={Encryption} />
          <Spacer />
          <Spacer />
          <SubTitle id="efs">Elastic File System (EFS)</SubTitle>
          An Elastic File System is a network file system which is highly available, scalable and it can be mounted on many EC2 instances in different AZs if needed. The use cases for using this feature would be for content management,
          web serving, and/or data sharing. This feature is only compatible with linux based AMIs.
          <StyledImage src={ElasticFileSystem} />
          <Spacer />
          <Spacer />
          <SubTitle id="elb">Elastic Load Balancers (ELB)</SubTitle>
          What is load balancing? Well Load balancers are servers that forward traffic to multiple different servers. Their purpose is essentially to control the flow of user traffic to an instance, if you have hundreds of users trying to
          access a server, the load balancer is there to make sure that load is spread across multiple servers to handle the traffic.
          <Spacer />
          <Spacer />
          <SubTitleSmall>Why would we want to use a load balancer?</SubTitleSmall>
          There are actually a lot of advantages to using a load balancer as it does do a lot of heavy lifting for us when it comes to scaling our EC2 usage. As I've already mentioned it helps spread the load accross multiple instances but it can
          also do the following:
          <StyledListItem>Acts as a single point of access (DNS) to your application.</StyledListItem>
          <StyledListItem>Carries out health checks to the instances.</StyledListItem>
          <StyledListItem>Provides SSL (HTTPS) to your websites.</StyledListItem>
          <StyledListItem>Enforces stickiness with cookies.</StyledListItem>
          <StyledListItem>Separates public and private traffic.</StyledListItem>
          <Spacer />
          <SubTitleSmall>Health Checks</SubTitleSmall>
          Health checks are an important feature of load balancing. Before the load balancer can forward traffic through to the EC2 instance, it needs to know if the instance itself is healthy and stable. It can know this by sending regular pings to the server
          on a desired port and route. If the request sent gets a response (200), it knows that the instance is healthy and ready to recieve traffic, otherwise it's marked as unhealthy and traffic will not be forwarded. Health checks are supported for the
          <BoldText>TCP</BoldText>, <BoldText>HTTP</BoldText> and <BoldText>HTTPS</BoldText> protocols.
          <StyledImage src={HealthCheck} />
          <Spacer />
          <Spacer />
          <SubTitleSmall>Target Groups</SubTitleSmall>
          You can point a load balancer to multiple different target groups. A target group could be an EC2 instance, ECS task, Lambda function and IP addresses (private). It's possible for an network load balancer to sit infront of an application load balancer
          so you're able to have the fixed IP addresses and the rule handling around HTTP traffic.
          <Spacer />
          <Spacer />
          <SubTitleSmall>Load Balancers and Security Groups</SubTitleSmall>
          Let's map out the flow showing how users would connect to a load balancer to then be forwarded onto the instance. There are two things to note, one being that the load balancer will have it's own security group in which it could allow users to connect on
          ports 80 (HTTP) and 443 (HTTPS). Secondly, the EC2 instance will have a separate security group which can reference the one created for the load balancer which means that it will only accept traffic which has originated from the load balancer.
          <StyledImage src={LoadBalancerSecurityGroup} />
          <SubTitleSmall>Types of Load Balancers</SubTitleSmall>
          There are three kinds of managed load balancers which allow different types of traffic:
          <StyledListItem><BoldText>Application Load Balancer</BoldText> - HTTP, HTTPS, WebSocket</StyledListItem>
          <StyledListItem><BoldText>Network Load Balancer</BoldText> - TCP, TLS, UDP</StyledListItem>
          <StyledListItem><BoldText>Gateway Load Balancer</BoldText> - IP</StyledListItem>
          <Spacer />
          <SubTitleSmall>Application Load Balancer</SubTitleSmall>
          Appliation load balancers (ALB) are suited for micro services & container based applications (Docker and Amazon ECS). ALB's have the capability to route to different target groups based on pathing. This routing can be based on:
          <StyledListItem>Path URL (example.com/users or example.com/posts).</StyledListItem>
          <StyledListItem>Hostname in URL (one.example.com or two.example.com).</StyledListItem>
          <StyledListItem>Query String Headers (example.com/users?id=123).</StyledListItem>
          <Spacer />
          <StyledImage src={ApplicationLoadBalancerHTTP} />
          <StyledImage src={ApplicationLoadBalancerQuery} />
          <SubTitleSmall>Good to Know</SubTitleSmall>
          <StyledListItem>Fixed hostname (xxx.region.elb.amazonaws.com).</StyledListItem>
          <StyledListItem>The application servers don't see the IP of the client directly.</StyledListItem>
          <StyledListItem>The IP of the client is inserted in the header X-Forwarded-For.</StyledListItem>
          <StyledListItem>The port of the client is inserted in the header X-Forwarded-Port.</StyledListItem>
          <StyledListItem>The protocol of the client is inserted in the header X-Forwarded-Proto.</StyledListItem>
          <Spacer />
          <SubTitleSmall>Network Load Balancer</SubTitleSmall>
          Network load balancers allows TCP and UDP traffic. This load balancer is for high performance and is capable of handling million requests per second. NLB's only have one static IP per AZ but you're able to assign elastic IP.
          <StyledImage src={NetworkLoadBalancer} />
          <Spacer />
          <Spacer />
          <SubTitleSmall>Gateway Load Balancer</SubTitleSmall>
          Gateway load balancers are great for when you want to screen your traffic for any potentially harmful software. Before the traffic can reach it's destination the gateway load balancer can filter traffic through instances which
          could act as a firewall or inspection system. The traffic operates on port 6081 with the GENEVE protocol.
          <StyledImage src={GatewayLoadBalancer} />
          <Spacer />
          <Spacer />
          <SubTitleSmall>Sticky Sessions</SubTitleSmall>
          Sticky sessions exist to make sure that users are always directed to the same instance behind the load balancer. Sticky sessions are compatable with Application and Network load balancers. Sticky sessions work by attaching a cookie
          to the user's session. You can configure the cookie to control the expiry date. It's worth mentioning that enabling sticky sessions could lead to an imbalance to the load across the instances.
          <Spacer />
          There are two types of cookies to choose from:
          <StyledListItem>Application-based cookies</StyledListItem>
          <StyledListItemIndent>Application Cookie</StyledListItemIndent>
          <StyledListItemIndentExtra>Generated by the load balancer</StyledListItemIndentExtra>
          <StyledListItemIndentExtra>Called 'AWSALBAPP'</StyledListItemIndentExtra>
          <StyledListItemIndent>Custom Cookie</StyledListItemIndent>
          <StyledListItemIndentExtra>Generated by the target</StyledListItemIndentExtra>
          <StyledListItemIndentExtra>Cookie name must be specified for each individual target group</StyledListItemIndentExtra>
          <StyledListItemIndentExtra>Don't use any reserved words used by the load balancer 'AWSALB', 'AWSALBAPP', 'AWSALBTG'</StyledListItemIndentExtra>
          <StyledListItem>Duration-based cookies</StyledListItem>
          <StyledListItemIndentExtra>Generated by the load balancer</StyledListItemIndentExtra>
          <StyledListItemIndentExtra>Called 'AWSALB'</StyledListItemIndentExtra>
          <Spacer />
          <SubTitleSmall>Cross-Zone Load Balancing</SubTitleSmall>
          It's possible to distribute traffic across multiple AZ's. The difference being between load balancers is that the Application load balancer is enabled by default and is free but for the Network load balancer you are charged and it's
          disabled by default.
          <Spacer />
          <Spacer />
          <StyledImage src={CrossloadBalancing} />
          <Spacer />
          <Spacer />
          <SubTitleSmall>SSL & TLS</SubTitleSmall>
          An SSL certificate allows traffic between users and load balancers to be encrypted in transit. SSL refers to <BoldText>Secrure Socket Layer</BoldText> and TLS refers to <BoldText>Transport Layer Security</BoldText> which is a newer version of SSL.
          You can purchase a SSL/TLS certificate from any certificate authority such as ACM (Amazon Certificate Manager) or namecheap and GoDaddy. Once you have purchased a certificate you will have to renew after the expiration date.
          <StyledImage src={SSLTLS} />
          <Spacer />
          <Spacer />
          <SubTitleSmall>Server Name Indication</SubTitleSmall>
          What would happen if a user needs to reach a specific website which is hosted on a server with multiple other sites? Well, SNI solves this problem of loading multiple SSL/TLS certificates onto one server. This is only compatible for Application load balancers
          and Network load balancers and it requires the user to indicate the hostname in the inital SSL/TLS handshake. The server will return the desired certificate or return the default set.
          <StyledImage src={ServerNameIndicationExample} />
          <Spacer />
          <Spacer />
          <SubTitle id="asg">Auto Scaling Groups (ASG)</SubTitle>
          Auto Scaling Groups are for automating the scaling and management of EC2 instances. The size of an Auto Scaling Group depends on the number of instances that you set as the desired capacity. You can adjust its size to meet demand,
          either manually or by using automatic scaling. An Auto Scaling Group starts by launching enough instances to meet its desired capacity. It maintains this number of instances by performing periodic health checks on the instances in
          the group. The Auto Scaling Group continues to maintain a fixed number of instances even if an instance becomes unhealthy. If an instance becomes unhealthy, the group terminates the unhealthy instance and launches another instance
          to replace it.
          <Spacer />
          <Spacer />
          <StyledImage src={AutoScalingGroup} />
          <SubTitleSmall>Key features</SubTitleSmall>
          Here's a list of things you can essentially achieve with ASG's:
          <StyledListItem>Scale out (add EC2 instances) to match an increased load.</StyledListItem>
          <StyledListItem>Scale in (remove EC2 instances) to match a decreased load.</StyledListItem>
          <StyledListItem>Set a minimum and maximum number of EC2 instances running.</StyledListItem>
          <StyledListItem>Automatically register new instances to a load balancer.</StyledListItem>
          <StyledListItem>Re-create an EC2 instance in case a previous one is terminated.</StyledListItem>
          <Spacer />
          <SubTitleSmall>Auto Scaling Group Attributes</SubTitleSmall>
          <FlexCenter>
            <StyledImage mr="25px" width="400px" height="400px" src={AutoScalingGroupLaunchTemplate} />
            <Text>
              You might be wondering how you can set up an Auto Scaling Group for your collection of EC2 instance. You can do this by creating a <BoldText>Launch Template</BoldText>. This will specify information such as the
              AMI ID, instance type, key pair, security groups, and block device mapping for your instances.
            </Text>
          </FlexCenter>
          <Spacer />
          <SubTitleSmall>CloudWatch Alarms & Scaling</SubTitleSmall>
          I've not talked about CloudWatch yet but I think this is a fundamental feature of ASG's that I'd like to talk about. That being you can scale ASG's based on CloudWatch Alarms. An alarm could be as simple as monitoring
          a metric such as the average CPU. With that example we could create a scaling policy based on the alarm i.e. if the average CPU limit for the overall ASG instances hits above 75%, we can ask the ASG to deploy more instances (scale out).
        </Text>
      </Container>
    </Wrapper>
  );
}

export default AWSElasticComputeCloud;