import React, { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

// helpers
import { logPageView } from "../../helpers/analytics";

// animations
import SlideInBottom from "../../animations/SlideInBottom";

// icons
import { ChevronBackCircle } from '@styled-icons/ionicons-solid/ChevronBackCircle';
import { AWSSVG, AWSRoute53SVG } from '../../resources/styles/icons';

// components
import { StyledNavButton, StyledNavLink } from '../Button/Button';
import Table from '../../components/Table/Table';

// images
import DNSExample from "../../resources/images/blog/AWSRoute53/route53_dns_example.jpeg";
import DNSBreakdown from "../../resources/images/blog/AWSRoute53/route53_dns_breakdown.jpeg";
import DNSWorking from "../../resources/images/blog/AWSRoute53/route53_dns_working.jpeg";
import Route53Example from "../../resources/images/blog/AWSRoute53/route53_example.jpeg";
import Route53PublicHostedZone from "../../resources/images/blog/AWSRoute53/route53_public_hosted_zone.jpeg";
import Route53PrivateHostedZone from "../../resources/images/blog/AWSRoute53/route53_private_hosted_zone.jpeg";
import Route53AliasExample from "../../resources/images/blog/AWSRoute53/route53_alias_example.jpeg";
import Route53SimpleRouting from "../../resources/images/blog/AWSRoute53/route53_simple_routing.jpeg";
import Route53WeightedRouting from "../../resources/images/blog/AWSRoute53/route53_weighted_routing.jpeg";
import Route53IPRouting from "../../resources/images/blog/AWSRoute53/route53_ip_routing.jpeg";
import Route53MultiValueRouting from "../../resources/images/blog/AWSRoute53/route53_multi_value_routing.jpeg";
import Route53HealthCheck from "../../resources/images/blog/AWSRoute53/route53_health_check.jpeg";
import Route53MonitorEndpoint from "../../resources/images/blog/AWSRoute53/route53_monitor_endpoint.jpeg";
import Route53CalculatedHealthChecks from "../../resources/images/blog/AWSRoute53/route53_calculated_health_checks.jpeg";
import Route53HealthCheckPrivateHostedZone from "../../resources/images/blog/AWSRoute53/route53_health_check_private_hosted_zone.jpeg";
import Route53FailOverRouting from "../../resources/images/blog/AWSRoute53/route53_failover_routing.jpeg";

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
      logPageView("blog/aws-route53");
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
          <Title>AWS Route 53</Title>
          <IconWrapper>
            <Icon><AWSSVG /></Icon>
            <Icon><AWSRoute53SVG /></Icon>
          </IconWrapper>
        </Flex>
        <Spacer />
        <Text>
          Amazon Route 53 is a scalable and highly available Domain Name System (DNS). It is designed to route end-user requests to internet applications hosted on AWS infrastructure,
          as well as external resources. Overall, Amazon Route 53 is a robust solution for DNS management, domain registration, and traffic routing, ensuring high availability and performance
          for applications hosted both on AWS and elsewhere. Here are the key features and components of Route 53:
          <Spacer />
          <Spacer />
          <StyledListItem><BoldText>DNS Service</BoldText>: Route 53 translates domain names (e.g. www.example.com) into IP addresses (e.g. 192.0.2.1), allowing computers to connect to each other.</StyledListItem>
          <StyledListItem><BoldText>Domain Registration</BoldText>: Route 53 allows users to register new domain names directly through AWS. It supports various top-level domains (TLDs).</StyledListItem>
          <StyledListItem><BoldText>Traffic Routing Policies</BoldText>: Route 53 offers several routing policies to determine how traffic is directed:</StyledListItem>
          <StyledListItemIndent><BoldText>Simple Routing</BoldText>: Routes traffic to a single resource</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Weighted Routing</BoldText>: Distributes traffic across multiple resources based on assigned weights.</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Latency-based Routing</BoldText>: Routes traffic to the region with the lowest latency.</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Failover Routing</BoldText>: Configures active-passive failover setups to ensure high availability.</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Geolocation Routing</BoldText>: Directs traffic based on the geographic location of users.</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Geoproximity Routing</BoldText>: Routes traffic based on the proximity of users to resources and can bias routing towards certain locations.</StyledListItemIndent>
          <StyledListItemIndent><BoldText>IP-Based Routing</BoldText>: Routes traffic based on the IP address of the user, allowing for precise control over request handling.</StyledListItemIndent>
          <StyledListItemIndent><BoldText>Multivalue Answer Routing</BoldText>: Returns multiple values, such as IP addresses, and can be used with health checks to ensure traffic is directed to healthy resources.</StyledListItemIndent>
          <StyledListItem><BoldText>Health Checks and Monitoring</BoldText>: Route 53 can monitor the health and performance of resources and redirect traffic if a resource becomes unavailable. It uses health checks to determine resource availability and can be integrated with CloudWatch for detailed monitoring.</StyledListItem>
          <StyledListItem><BoldText>Domain Name Management</BoldText>: Route 53 allows full control over DNS records, including A, AAAA, CNAME, MX, PTR, SRV, and TXT records, among others. Users can manage these records through the AWS Management Console, AWS CLI, or API.</StyledListItem>
          <StyledListItem><BoldText>Integration with AWS Services</BoldText>: Route 53 integrates seamlessly with other AWS services like Elastic Load Balancing (ELB), Amazon S3, and CloudFront, making it easier to manage and optimize your applications.</StyledListItem>
          <StyledListItem><BoldText>Scalability and Reliability</BoldText>: As part of AWS's global infrastructure, Route 53 is designed to handle a large number of DNS queries with low latency and high reliability.</StyledListItem>
          <StyledListItem><BoldText>DNSSEC Support</BoldText>: Route 53 supports Domain Name System Security Extensions (DNSSEC), which provides an additional layer of security by ensuring that the responses to DNS queries have not been tampered with.</StyledListItem>
          <Spacer />
          <SubTitle id="what-is-dns">What is a DNS?</SubTitle>
          Before we dive into this service we should first clarify what exactly a 'DNS' is. So what is a 'DNS'? Well, let's expand from the bullet point above. A 'DNS' stands for <BoldText>Domain Name System</BoldText> which translates the
          human friendly hostnames into a machine IP address. Meaning that every URL has a IP address which acts as a location or address, so when we navigate to that URL the computer knows where to direct traffic to.
          <StyledImage src={DNSExample} />
          The domain can be broken down into individual parts as the Domain Name System uses a hierarchical naming structure all of which encompasses the URL.
          <StyledImage src={DNSBreakdown} />
          Let's break down some terminology.
          <StyledListItem><BoldText>Domain Registrar</BoldText>: Amazon Route53, GoDaddy, NameCheap. (This is where you can register your domain name).</StyledListItem>
          <StyledListItem><BoldText>DNS Records</BoldText>: A, AAAA, CNAME, NS, ...</StyledListItem>
          <StyledListItem><BoldText>Zone File</BoldText>: Contains DNS records. (This is how hostnames are matched to IP addresses).</StyledListItem>
          <StyledListItem><BoldText>Name Server</BoldText>: Resolves DNS queries. (Authoritative or Non-Authoritative).</StyledListItem>
          <StyledListItem><BoldText>Top Level Domain (TLD)</BoldText>: .com, .co.uk, .gov, .org, ...</StyledListItem>
          <StyledListItem><BoldText>Second Level Domain (SLD)</BoldText>: amazon.com, google.com, ...</StyledListItem>
          <Spacer />
          <SubTitle id="how-dns-works">How DNS Works</SubTitle>
          Now that we have some basic understanding of what a DNS is, let's look at what happens behind the scenes. Let's break it down into steps
          <StyledImage src={DNSWorking} />
          <UnStyledListItem><BoldText>1</BoldText>: The first step is to ping your internet service provider (ISP) and essentially ask if it's seen 'example.com' before.</UnStyledListItem>
          <UnStyledListItem><BoldText>2</BoldText>: Assuming that a lookup is required the Root DNS Server will be asked the same question. The server will respond with the named server (NS) so in this example it would be '.com', along with a public IP</UnStyledListItem>
          <UnStyledListItem><BoldText>3</BoldText>: The Top Level Domain (TLD) DNS Server then gets pinged with the public IP asking the same question. If again, not found that server will return the TLD with another public IP.</UnStyledListItem>
          <UnStyledListItem><BoldText>4</BoldText>: The same process happens and the Second Level Domain (SLD) DNS Server should have the record entry and will return the IP address.</UnStyledListItem>
          <UnStyledListItem><BoldText>5</BoldText>: The Local DNS Server will cache the results for a specified amount of time so when next time the question is asked, it won't have to recursively ping DNS servers to find the answer.</UnStyledListItem>
          <UnStyledListItem><BoldText>6</BoldText>: The answer is sent back to the web browser which it caches.</UnStyledListItem>
          <UnStyledListItem><BoldText>7</BoldText>: The IP address is used to access the web server.</UnStyledListItem>
          <Spacer />
          <SubTitle id="route53">Route 53</SubTitle>
          A fun fact - why did Amazon name this service 'Route 53'? Well, 53 is a reference to the traditional DNS port. Here's a diagram to depict what I've hopefully already explained above:
          <StyledImage src={Route53Example} />
          <SubTitleSmall>Records</SubTitleSmall>
          In Route 53 you will define records. These records state how the traffic will be routed to the domain. Each record contains:
          <StyledListItem><BoldText>Domain/Subdomain Name</BoldText>: e.g. example.com</StyledListItem>
          <StyledListItem><BoldText>Record Type</BoldText>: A or AAAA</StyledListItem>
          <StyledListItem><BoldText>Value</BoldText>: e.g. 12.34.56.78</StyledListItem>
          <StyledListItem><BoldText>Routing Policy</BoldText>: How Route 53 responds to queries.</StyledListItem>
          <StyledListItem><BoldText>TTL (Time To Live)</BoldText>: The amount of time the record is cached at DNS Resolvers.</StyledListItem>
          <Spacer />
          Route 53 supports a lot of record types but these are the main ones to remember:
          <StyledListItem><BoldText>A</BoldText>: Maps hostname to IPV4 address</StyledListItem>
          <StyledListItem><BoldText>AAAA</BoldText>: Maps hostname to IPV6 address</StyledListItem>
          <StyledListItem><BoldText>CNAME</BoldText>: Maps hostname to another hostname</StyledListItem>
          <StyledListItem><BoldText>NS</BoldText>: Name servers for the hosted zone which control how traffic is routed for a domain.</StyledListItem>
          <Spacer />
          <SubTitleSmall>Hosted Zones</SubTitleSmall>
          Hosted Zones are essentially a container for records that define how to route traffic to a domain and its subdomains. There are two types of Hosted Zones, <BoldText>Public Hosted Zones</BoldText> and <BoldText>Private Hosted Zones</BoldText>.
          <StyledImage src={Route53PublicHostedZone} />
          Public Hosted Zones contains records that specify how to route traffic on the internet (public domain names).
          <StyledImage src={Route53PrivateHostedZone} />
          Private Hosted Zones contains records that specify how to route traffic within one or more VPCs (private domain names).
          <Spacer />
          <Spacer />
          <SubTitleSmall>TTL (Time To Live)</SubTitleSmall>
          TTL is mandatory for each record type apart from Alias. As mentioned before TTL is the time that the DNS resolvers will cache the record for. A high TTL would be days which would result in less traffic on Route 53 but there's a higher
          chance of retrieving outdated records. A low TTL would be seconds which results in more traffic, and therefore it's more expensive, but there's a slim chance of the record being outdated.
          <Spacer />
          <Spacer />
          <SubTitleSmall>CNAME vs Alias</SubTitleSmall>
          AWS Resources whether it is a Load Balancer or an API Gateway it will have an AWS hostname exposed. An example would be '1b1-1234.us.east-2.elb.amazon.com'. CNAME allows you to point to another hostname but it's important to note that the hostname must not be a root domain. For example 
          app.mydomain.com would work but mydomain.com would not. Alias's are specific to Route 53 and works with root domains as well as non-root domains, they are always of type A/AAAA. An alias is used to point a hostname to an AWS resource (app.mydomain.com => 1b1-1234.us.east-2.elb.amazon.com).
          It's worth mentioning that Alias's are free of charge and they have native health check capabilities.
          <Spacer />
          <Spacer />
          <SubTitleSmall>Alias Records</SubTitleSmall>
          A good thing to know about Alias records is that they automatically recognise changes in the resources IP address so you won't need to edit the record in Route 53. As noted before you can't set a TTL for this record.
          <StyledImage src={Route53AliasExample} />
          <Spacer />
          <Spacer />
          <SubTitleSmall>Routing Policies - Simple Routing</SubTitleSmall>
          This policy is typically used to route traffic to a single resource, but you can specify multiple values in the same record. If there are multiple values, a random one is chosen by the client. If Alias is enabled, you should
          specify only one AWS resource. You can't associate with health checks with this policy.
          <StyledImage src={Route53SimpleRouting} />
          <Spacer />
          <Spacer />
          <SubTitleSmall>Routing Policies - Weighted Routing</SubTitleSmall>
          This policy is pretty self explanatory in that you can control the percentage i.e. weight of requests to each resource. Each record will need a weight assigned which doesn't need to sum up to 100. The DNS records will need to be
          the same name and type in order for this policy to work. If a record is assigned 0 then traffic will not be sent to that resource, if they are all set to 0 then it will be distributed equally. You can associate health checks with this policy.
          Good use cases for this would be testing new application versions and load balancing between regions.
          <StyledImage src={Route53WeightedRouting} />
          <Spacer />
          <Spacer />
          <SubTitleSmall>Routing Policies - Latency-based Routing</SubTitleSmall>
          This is another self explanatory policy where users are directed to resources that have the least latency. A user from the UK could be directed to a load balancer in the US if that is deemed to have the lowest latency. This can
          be associated with health checks and has failover capacity.
          <Spacer />
          <Spacer />
          <SubTitleSmall>Routing Policies - Failover Routing</SubTitleSmall>
          There are two instances, a primary and secondary, if the primary instance is deemed unhealthy then the secondary instance is used.
          <StyledImage src={Route53FailOverRouting} />
          <Spacer />
          <Spacer />
          <SubTitleSmall>Routing Policies - Geolocation based Routing</SubTitleSmall>
          This is different from Latency-based - as it's based on the users location. So regardless if it's a better connection elsewhere you'll be routed to a specified record for a location. There should be a default record set in case
          there's no match on the user's location. Good use cases would be website localization and restrict content distribution. This policy can be associated with health checks.
          <Spacer />
          <Spacer />
          <SubTitleSmall>Routing Policies - Geoproximity based Routing</SubTitleSmall>
          This policy is based on users proximity to the resource. Traffic is distributed based on how close users are to the resource. The resource can be assigned a bias which can be used to direct/shift more or less traffic to it.
          You can specify a latitude and longitude for non AWS resources. You must use Route 53 Traffic Flow to use this policy.
          <Spacer />
          <Spacer />
          <SubTitleSmall>Routing Policies - IP-based Routing</SubTitleSmall>
          This policy is based on the clients IP addresses. You provide a CIDR block for your clients and the corresponding endpoints/locations. You should use this policy for when you want to route end users from a particular ISP to a specific endpoint.
          <StyledImage src={Route53IPRouting} />
          <Spacer />
          <Spacer />
          <SubTitleSmall>Routing Policies - Multi Value based Routing</SubTitleSmall>
          This policy should be used when you're routing traffic to multiple resources. There are 8 records returned for each multi-value query. This policy can be associated with health checks.
          <StyledImage src={Route53MultiValueRouting} />
          <Spacer />
          <Spacer />
          <SubTitleSmall>Health Checks</SubTitleSmall>
          HTTP Health Checks are only for public resources and the reason you would want to assign health checks to to these resources is to have automated DNS failover. There are three options on what you can monitor with health checks:
          <StyledListItem>Endpoint monitoring (application, server or other AWS resources)</StyledListItem>
          <StyledListItem>Calculated health check - A health check that monitors another health check</StyledListItem>
          <StyledListItem>CloudWatch Alarms - You can monitor an alarm which could be any custom metric (helpful for private resources)</StyledListItem>
          <StyledImage src={Route53HealthCheck} />
          <Spacer />
          <Spacer />
          <SubTitleSmall>Health Checks - Monitor an Endpoint</SubTitleSmall>
          There are about 15 global health checkers that will check the endpoint health.
          <StyledListItem>You can configure the healthy/unhealthy threshold which the default is set to 3.</StyledListItem>
          <StyledListItem>The interval is 30 seconds but can be adjusted to 10 seconds but would incur a higher cost.</StyledListItem>
          <StyledListItem>The supported protocols are: HTTP, HTTPS and TCP.</StyledListItem>
          <StyledListItem>If there is 18% or more healthy responses, Route53 will consider it healthy, otherwise it's deemed unhealthy.</StyledListItem>
          <StyledListItem>Health checks pass only when the endpoint responds with 200 to 300 status codes.</StyledListItem>
          <StyledListItem>If the response from the checker returns text, the first 5120 bytes will be checked for a pass or fail.</StyledListItem>
          <StyledImage src={Route53MonitorEndpoint} />
          <Spacer />
          <Spacer />
          <SubTitleSmall>Health Checks - Calculated Health Checks</SubTitleSmall>
          With calculated health checks you can combine the results up to 256 child health checks into a single health check. You can specify how many child health checks need to pass to make the parent pass its health check. This uses
          logic gates such as OR, AND, or NOT.
          <StyledImage src={Route53CalculatedHealthChecks} />
          <Spacer />
          <Spacer />
          <SubTitleSmall>Health Checks - Private Hosted Zones</SubTitleSmall>
          Because the Route53 health checkers live outside of the VPC they can't access private resources. To get around this you can associate a health checker to a CloudWatch alarm which can monitor a metric of private resources.
          <StyledImage src={Route53HealthCheckPrivateHostedZone} />
        </Text>
      </Container>
    </Wrapper>
  );
}

export default AWSRoute53;