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
import VPCOctects from "../../resources/images/blog/AWSVPC/vpc_octets_memo.jpeg"
import VPCDefault from "../../resources/images/blog/AWSVPC/vpc_default.jpeg"
import VPCSubnets from "../../resources/images/blog/AWSVPC/vpc_subnets.jpeg"
import VPCInternetGateway from "../../resources/images/blog/AWSVPC/vpc_internet_gateway.jpeg"
import VPCBastionHost from "../../resources/images/blog/AWSVPC/vpc_bastion_host.jpeg"
import VPCNATGateWay from "../../resources/images/blog/AWSVPC/vpc_nat_gateway.jpeg"
import VPCNATGateWayHA from "../../resources/images/blog/AWSVPC/vpc_nat_gateway_ha.jpeg"
import VPCSGNACLS from "../../resources/images/blog/AWSVPC/vpc_sg_nacls.jpeg"
import VPCNACL from "../../resources/images/blog/AWSVPC/vpc_nacl.jpeg"
import VPCEphemeralPorts from "../../resources/images/blog/AWSVPC/vpc_ephemeral_ports.jpeg"
import VPCNACLEphemeralPorts from "../../resources/images/blog/AWSVPC/vpc_nacl_ephemeral_ports.jpeg"
import VPCPeering from "../../resources/images/blog/AWSVPC/vpc_peering.jpeg"
import VPCEndpoint from "../../resources/images/blog/AWSVPC/vpc_endpoint.jpeg"
import VPCEndpointPrivateLink from "../../resources/images/blog/AWSVPC/vpc_endpoint_private_link.jpeg"
import VPCGatewayEndpoint from "../../resources/images/blog/AWSVPC/vpc_gateway_endpoints.jpeg"
import VPCInterfaceEndpoint from "../../resources/images/blog/AWSVPC/vpc_interface_endpoints.jpeg"


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

  const columns = ['', 'NAT Gateway', 'NAT Instance'];
  const data = [
    { '': 'Availability', 'NAT Gateway': 'Highly available within AZ (create in another AZ)', 'NAT Instance': 'Use a script to manage failover between instances' },
    { '': 'Bandwidth', 'NAT Gateway': 'Up to 100GBps', 'NAT Instance': 'Depends on EC2 instance type' },
    { '': 'Maintenance', 'NAT Gateway': 'Managed by AWS', 'NAT Instance': 'Managed by you' },
    { '': 'Cost', 'NAT Gateway': 'Per hour & amount of data transferred', 'NAT Instance': 'Per hour, EC2 instance type and size + network costs' },
    { '': 'Public IPv4', 'NAT Gateway': '️✔️', 'NAT Instance': '️✔️' },
    { '': 'Private IPv4', 'NAT Gateway': '️✔️', 'NAT Instance': '️✔️' },
    { '': 'Security Groups', 'NAT Gateway': '❌', 'NAT Instance': '️✔️' },
    { '': 'Use as Bastion Host', 'NAT Gateway': '❌', 'NAT Instance': '️✔️' },
  ];

  const columns2 = ['Security Group', 'NACL'];
  const data2 = [
    { 'Security Group': 'Operates at the instance level', 'NACL': 'Operates at the subnet level' },
    { 'Security Group': 'Supports allow rules only', 'NACL': 'Supports allow rules and deny rules' },
    { 'Security Group': 'Stateful: return traffic is automatically allowed, regardless of any rules', 'NACL': 'Stateless: return traffic must be explicitly allowed by rules (ephemeral ports)' },
    { 'Security Group': 'All rules are evaluated before deciding whether to allow traffic', 'NACL': 'Rules are evaluated in order (lowest to highest) when deciding whether to allow traffic, first match wins' },
    { 'Security Group': 'Applies to an EC2 instance when specified by someone', 'NACL': `Automatically applies to all EC2 instances in the subnet that it's associated with` },
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
          <StyledAnchor href="#vpc-in-aws"><StyledListItem>VPC in AWS</StyledListItem></StyledAnchor>
          <StyledAnchor href="#subnets"><StyledListItem>Subnets</StyledListItem></StyledAnchor>
          <StyledAnchor href="#vpc-igw"><StyledListItem>Internet Gateway (IGW)</StyledListItem></StyledAnchor>
          <StyledAnchor href="#vpc-bastion-hosts"><StyledListItem>Bastion Hosts</StyledListItem></StyledAnchor>
          <StyledAnchor href="#nat-gateway"><StyledListItem>NAT Gateway</StyledListItem></StyledAnchor>
          <StyledAnchor href="#sg-nacls"><StyledListItem>Security Groups & NACLs</StyledListItem></StyledAnchor>
          <StyledAnchor href="#vpc-peering"><StyledListItem>VPC Peering</StyledListItem></StyledAnchor>

          <Spacer />
          <SubTitle id="vpc-introduction">Amazon Virtual Private Cloud (VPC)</SubTitle>
          A Virtual Private Cloud (VPC) is a logically isolated section of the AWS cloud where you can launch AWS resources, such as EC2 instances, within a virtual network that you define. A VPC allows
          you to customize your network environment, including selecting your own IP address range, creating subnets, configuring route tables, and setting up gateways.
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
          <SubTitleSmall>Understanding CIDR - Subnet Mask</SubTitleSmall>
          <StyledImage src={VPCOctects} />
          192.168.0.0 / 32 => allows for 1 IP => 192.168.0.0
          <Spacer />
          192.168.0.0 / 31 => allows for 2 IP 192.168.0.0 => 192.168.0.1
          <Spacer />
          192.168.0.0 / 30 => allows for 4 IP 192.168.0.0 => 192.168.0.3
          <Spacer />
          192.168.0.0 / 29 => allows for 8 IP 192.168.0.0 => 192.168.0.7
          <Spacer />
          192.168.0.0 / 28 => allows for 16 IP 192.168.0.0 => 192.168.0.15
          <Spacer />
          192.168.0.0 / 27 => allows for 32 IP 192.168.0.0 => 192.168.0.31
          <Spacer />
          192.168.0.0 / 26 => allows for 64 IP 192.168.0.0 => 192.168.0.63
          <Spacer />
          192.168.0.0 / 25 => allows for 128 IP 192.168.0.0 => 192.168.0.127
          <Spacer />
          192.168.0.0 / 24 => allows for 256 IP 192.168.0.0 => 192.168.0.255
          <Spacer />
          192.168.0.0 / 16 => allows for 65,536 IP 192.168.0.0 => 192.168.255.255
          <Spacer />
          192.168.0.0 / 0 => allows for ALL IPs 0.0.0.0 => 255.255.255.255
          <Spacer />
          <SubTitle id="vpc-in-aws">VPC in AWS</SubTitle>
          <StyledListItem>You can have multiple VPCs in an AWS region (max 5 per region).</StyledListItem>
          <StyledListItem>Max CIDR per VPC is 5, for each CIDR:</StyledListItem>
          <StyledListItemIndent>Min size is /28 (16 IP addresses)</StyledListItemIndent>
          <StyledListItemIndent>Max size is /16 (65536 IP addresses)</StyledListItemIndent>
          <StyledListItem>Because VPC is private, only the private IPv4 ranges are allowed:</StyledListItem>
          <StyledListItemIndent>10.0.0.0 - 10.255.255.255 (10.0.0.0/8)</StyledListItemIndent>
          <StyledListItemIndent>172.16.0.0 - 172.31.255.255 (172.16.0.0/12)</StyledListItemIndent>
          <StyledListItemIndent>192.168.0.0 - 192.168.255.255 (192.168.0.0/16)</StyledListItemIndent>
          <Spacer />
          <StyledImage src={VPCDefault} />
          <Spacer />
          <SubTitle id="subnets">Subnets</SubTitle>
          You can divide your VPC into subnets, which are subsets of your VPC's IP address range. Subnets can be public (accessible from the internet) or private (isolated from the internet).
          <StyledListItem>AWS Reserves 5 IP addresses (first 4 and the last 1) in each subnet.</StyledListItem>
          <StyledListItemIndent>10.0.0.0 - Network Address</StyledListItemIndent>
          <StyledListItemIndent>10.0.0.1 - reserved by AWS for the VPC router</StyledListItemIndent>
          <StyledListItemIndent>10.0.0.2 - reserved by AWS for mapping to Amazon provided DNS</StyledListItemIndent>
          <StyledListItemIndent>10.0.0.3 - reserved by AWS for future use</StyledListItemIndent>
          <StyledListItemIndent>10.0.0.255 - Network Broadcast Address. AWS does not support broadcast in a VPC, therefore the address is reserved.</StyledListItemIndent>
          <Spacer />
          Make sure you take into account the reserved IP addresses when selecting the CIDR ranges. For example if you need 29 IP addresses for EC2 instances:
          <StyledListItem>You can't choose a subnet of size /27 (32 IP addresses, 32 - 5 = 27)</StyledListItem>
          <StyledListItem>You need to choose a subnet of size /26 (64 IP addresses, 64 - 5 = 59)</StyledListItem>
          <Spacer />
          <StyledImage src={VPCSubnets} />
          <Spacer />
          <SubTitle id="vpc-igw">Internet Gateway (IGW)</SubTitle>
          For your VPC to have internet access, you can attach an Internet Gateway, which enables communication between instances in your VPC and the internet.
          <StyledListItem>Allows resources (e.g. EC2 instances) in a VPC to connect to the internet.</StyledListItem>
          <StyledListItem>Must be created separately from the VPC.</StyledListItem>
          <StyledListItem>Only one VPC can be attached to one IGW and vice versa.</StyledListItem>
          <StyledListItem>Internet Gateways on their own do not allow internet access - Route tables must be used.</StyledListItem>
          <Spacer />
          <StyledImage src={VPCInternetGateway} />
          <Spacer />
          <SubTitle id="vpc-bastion-hosts">Bastion Hosts</SubTitle>
          A bastion host is a specialized server used to provide controlled, secure access to a private network from an external network, typically the internet. It acts as a gateway
          between the public and private network, often used in environments like AWS where private instances in a Virtual Private Cloud (VPC) need to be accessed securely from outside the network.
          <StyledListItem>We can use a Bastion Host to SSH into our private EC2 instances.</StyledListItem>
          <StyledListItem>The Bastion is in the public subnet which is then connected to all other private subnets.</StyledListItem>
          <StyledListItem>Bastion Host security group must allow inbound from the internet on port 22 from restricted CIDR.</StyledListItem>
          <StyledListItem>Security Group of the EC2 instances must allow the Security Group of the Bastion Host, or the private IP of the Bastion host.</StyledListItem>
          <Spacer />
          <StyledImage src={VPCBastionHost} />
          <Spacer />
          <SubTitle id="nat-gateway">NAT Gateway</SubTitle>
          This allows instances in a private subnet to access the internet without exposing the instances themselves to incoming internet traffic.
          <StyledListItem>Pay per hour for usage and bandwidth.</StyledListItem>
          <StyledListItem>NAT Gateways are created in a specific availability zone and uses an Elastic IP.</StyledListItem>
          <StyledListItem>Can't be used by an EC2 instance in the same subnet (only from other subnets).</StyledListItem>
          <StyledListItem>Requires a IGW (Private Subnet => NATGW => IGW).</StyledListItem>
          <StyledListItem>No Security Groups to manage.</StyledListItem>
          <Spacer />
          <StyledImage src={VPCNATGateWay} />
          <Spacer />
          <SubTitleSmall>NAT Gateway with High Availability</SubTitleSmall>
          To increase fault tolerance you can create multiple NAT Gateways across multiple AZs.
          <Spacer />
          <StyledImage src={VPCNATGateWayHA} />
          <Spacer />
          <SubTitleSmall>NAT Gateway vs NAT Instance</SubTitleSmall>
          <Table columns={columns} data={data} />
          <Spacer />
          <SubTitle id="sg-nacls">Security Groups & NACLs</SubTitle>
          A Network Access Control List (NACL) in AWS is a security layer that acts as a virtual firewall for controlling inbound and outbound traffic at the subnet level within a Virtual Private Cloud (VPC). NACLs provide an
          additional layer of security by allowing or denying specific traffic to and from subnets in a VPC.
          <Spacer />
          <SubTitleSmall>Subnet-Level Control</SubTitleSmall>
          NACLs operate at the subnet level, meaning they control traffic entering and leaving each subnet in your VPC. Every subnet in a VPC must be associated with a NACL.
          If you don't explicitly associate a subnet with a NACL, it automatically associates with the VPC's default NACL.
          <Spacer />
          <SubTitleSmall>Stateless</SubTitleSmall>
          NACLs are stateless, meaning they evaluate each request independently, without remembering any previous requests. This means that if you allow inbound traffic,
          you must also explicitly allow the corresponding outbound traffic if needed, and vice versa.
          <Spacer />
          <SubTitleSmall>Rules and Priorities</SubTitleSmall>
          NACLs consist of numbered rules that are evaluated in order, starting from the lowest number. Each rule specifies whether to allow or deny traffic based on:
          <StyledListItem>Protocol (e.g., TCP, UDP, ICMP)</StyledListItem>
          <StyledListItem>Source and destination IP address</StyledListItem>
          <StyledListItem>Port range</StyledListItem>
          <StyledListItem>Traffic direction (inbound or outbound)</StyledListItem>
          <Spacer />
          <SubTitleSmall>Default NACL</SubTitleSmall>
          The default NACL allows all inbound and outbound traffic. If you create a custom NACL, it initially denies all traffic until you explicitly add rules to allow specific traffic.
          <Spacer />
          <SubTitleSmall>Deny by Default</SubTitleSmall>
          When no rule matches the traffic, the default action is to deny that traffic. This makes NACLs a restrictive layer of security, only allowing explicitly permitted traffic.
          <Spacer />
          <SubTitleSmall>Multiple Rules</SubTitleSmall>
          You can define multiple rules within a NACL, and they are evaluated in the order of the rule number. The first rule that matches the traffic takes precedence, so careful planning of rule order is important.
          <Spacer />
          <StyledImage src={VPCNACL} />
          <Spacer />
          <SubTitleSmall>Differences Between NACLs and Security Groups:</SubTitleSmall>
          <StyledListItem><BoldTextSmall>Scope:</BoldTextSmall> NACLs are applied at the subnet level, affecting all instances within the subnet, whereas security groups are applied at the instance level.</StyledListItem>
          <StyledListItem><BoldTextSmall>Statefulness:</BoldTextSmall> NACLs are stateless, requiring separate rules for inbound and outbound traffic. Security groups are stateful, meaning that if you allow traffic in one direction, the response traffic is automatically allowed.</StyledListItem>
          <StyledListItem><BoldTextSmall>Rule Evaluation:</BoldTextSmall> NACLs evaluate rules in order, from lowest to highest numbered rule, and stop at the first match. Security groups evaluate all rules without a specific order.</StyledListItem>
          <Spacer />
          <Table columns={columns2} data={data2} />
          <Spacer />
          <StyledImage src={VPCSGNACLS} />
          <Spacer />
          <SubTitleSmall>Ephemeral Ports</SubTitleSmall>
          Ephemeral ports are temporary, short-lived ports automatically assigned by a host's operating system for client-side communication with a server. These ports are used when a client initiates a connection to a server, typically in the context of TCP/IP or UDP protocols. Once the connection
          is closed, the ephemeral port is returned to the pool of available ports and can be reused for future connections.
          <StyledListItem>Clients connect on a defined port, and expect a response on an ephemeral port.</StyledListItem>
          <StyledListItem>Different Operating Systems use different port ranges, examples:</StyledListItem>
          <StyledListItemIndent>IANA & Windows 10 -> 49152 - 65535</StyledListItemIndent>
          <StyledListItemIndent>Linux -> 32768 - 60999</StyledListItemIndent>
          <StyledImage src={VPCEphemeralPorts} />
          Here is an overview of how Ephemeral ports work with NACLs
          <StyledImage src={VPCNACLEphemeralPorts} />
          <SubTitle id="vpc-peering">VPC Peering</SubTitle>
          VPC Peering in AWS is a networking connection that allows you to route traffic between two Virtual Private Clouds (VPCs) using private IP addresses, as if they were part of the same network. VPC peering is often used to enable communication between VPCs within the same AWS account or across
          different AWS accounts, without using public internet or a VPN.
          <Spacer />
          <SubTitleSmall>Cross-Account and Cross-Region Peering</SubTitleSmall>
          You can establish a VPC Peering connection between VPCs in different AWS accounts, enabling secure cross-account communication. Additionally, AWS supports cross-region peering, allowing VPCs in different regions to connect to each other.
          <Spacer />
          <SubTitleSmall>One-to-One Connection</SubTitleSmall>
          VPC Peering is a one-to-one connection between two VPCs. Each VPC Peering connection is limited to two VPCs, but you can create multiple peering connections if you need to connect more than two VPCs.
          <Spacer />
          <SubTitleSmall>No Transitive Peering</SubTitleSmall>
          VPC Peering connections are non-transitive, meaning that if VPC A is peered with VPC B, and VPC B is peered with VPC C, VPC A cannot automatically communicate with VPC C. Each peering connection must be explicitly established.
          <Spacer />
          <SubTitleSmall>No Overlapping CIDR Blocks</SubTitleSmall>
          The IP address ranges (CIDR blocks) of the VPCs involved in the peering connection must not overlap. Overlapping IP ranges would cause routing conflicts and are not allowed in VPC peering.
          <Spacer />
          <SubTitleSmall>Security Controls</SubTitleSmall>
          Even with a VPC Peering connection, you can still use security groups and network access control lists (NACLs) to control the flow of traffic between the VPCs, ensuring that only authorized communication occurs.
          <Spacer />
          <StyledImage src={VPCPeering} />
          <Spacer />
          <SubTitle id="vpc-endpoint">VPC Endpoint</SubTitle>
          A VPC Endpoint in AWS is a feature that enables you to privately connect your VPC to supported AWS services and VPC endpoint services (hosted by other AWS accounts) without requiring an internet gateway, NAT device, VPN connection, or AWS Direct Connect. VPC Endpoints allow you to establish
          secure connections to these services within the AWS network, ensuring that traffic between your VPC and these services does not leave the AWS network.
          <Spacer />
          <StyledImage src={VPCEndpoint} />
          <Spacer />
          <StyledImage src={VPCEndpointPrivateLink} />
          <Spacer />
          <SubTitleSmall>Types of Endpoints</SubTitleSmall>
          <StyledListItem><BoldTextSmall>Interface Endpoints</BoldTextSmall></StyledListItem>
          <StyledListItemIndent>Interface Endpoints use AWS PrivateLink and create an Elastic Network Interface (ENI) with a private IP address in your subnet. This ENI serves as an entry point for traffic destined for a specific service.</StyledListItemIndent>
          <StyledListItemIndent>Interface Endpoints are used to connect to services like Amazon S3, AWS Systems Manager, DynamoDB, and many others.</StyledListItemIndent>
          <StyledListItemIndent>They provide private connectivity to these services while using the standard AWS VPC security mechanisms such as security groups and NACLs.</StyledListItemIndent>
          <StyledListItemIndent>£ per hour + £ per GB of data processed.</StyledListItemIndent>
          <Spacer />
          <StyledImage src={VPCInterfaceEndpoint} />
          <Spacer />
          <StyledListItem><BoldTextSmall>Gateway Endpoints</BoldTextSmall></StyledListItem>
          <StyledListItemIndent>Gateway Endpoints are used specifically for S3 and DynamoDB. They add an entry in your route table, which directs traffic destined for these services through the endpoint without requiring an ENI.</StyledListItemIndent>
          <StyledListItemIndent>Gateway Endpoints are highly available, automatically scaling as needed without requiring additional configuration or maintenance.</StyledListItemIndent>
          <StyledListItemIndent>Free.</StyledListItemIndent>
          <Spacer />
          <StyledImage src={VPCGatewayEndpoint} />
          <Spacer />
        </Text>
      </Container>
    </Wrapper>
  );
}

export default AWSVPC;
