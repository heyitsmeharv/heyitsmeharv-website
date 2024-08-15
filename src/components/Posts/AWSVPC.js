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
          <StyledAnchor href="#vpc-in-aws"><StyledListItem>Classless Inter-Domain Routing - CIDR</StyledListItem></StyledAnchor>
          <StyledAnchor href="#subnets"><StyledListItem>Subnets</StyledListItem></StyledAnchor>
          <StyledAnchor href="#vpc-igw"><StyledListItem>Internet Gateway (IGW)</StyledListItem></StyledAnchor>
          <StyledAnchor href="#vpc-bastion-hosts"><StyledListItem>Bastion Hosts</StyledListItem></StyledAnchor>


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
          <SubTitle id="subnets">VPC in AWS</SubTitle>
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
          <StyledListItem>Allows resources (e.g. EC2 instances) in a VPC to connect to the internet.</StyledListItem>
          <StyledListItem>Must be created separately from the VPC.</StyledListItem>
          <StyledListItem>Only one VPC can be attached to one IGW and vice versa.</StyledListItem>
          <StyledListItem>Internet Gateways on their own do not allow internet access - Route tables must be used.</StyledListItem>
          <Spacer />
          <StyledImage src={VPCInternetGateway} />
          <Spacer />
          <SubTitle id="vpc-bastion-hosts">Bastion Hosts</SubTitle>
          <StyledListItem>We can use a Bastion Host to SSH into our private EC2 instances.</StyledListItem>
          <StyledListItem>The Bastion is in the public subnet which is then connected to all other private subnets.</StyledListItem>
          <StyledListItem>Bastion Host security group must allow inbound from the internet on port 22 from restricted CIDR.</StyledListItem>
          <StyledListItem>Security Group of the EC2 instances must allow the Security Group of the Bastion Host, or the private IP of the Bastion host.</StyledListItem>
          <Spacer />
          <StyledImage src={VPCBastionHost} />
          <Spacer />
        </Text>
      </Container>
    </Wrapper>
  );
}

export default AWSVPC;