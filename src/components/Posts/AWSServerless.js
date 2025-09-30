import React, { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

// helpers
import { Analytics } from "../../helpers/analytics";

// animations
import SlideInBottom from "../../animations/SlideInBottom";

// icons
import { ChevronBackCircle } from '@styled-icons/ionicons-solid/ChevronBackCircle';
import { AWSSVG, AWSLambdaSVG, AWSAPIGatewaySVG, AWSStepFunctionsSVG } from '../../resources/styles/icons';

// components
import { StyledNavButton, StyledNavLink } from '../Button/Button';
import Table from '../Table/Table';

// images
import LambdaConcurrency from "../../resources/images/blog/AWSServerless/aws_serverless_lambda_concurrency.jpeg"
import LambdaThrottle from "../../resources/images/blog/AWSServerless/aws_serverless_lambda_throttle.jpeg"
import LambdaSnapShot from "../../resources/images/blog/AWSServerless/aws_serverless_lambda_snapshot.jpeg"
import APIGatewayExample from "../../resources/images/blog/AWSServerless/aws_serverless_api_gateway_example.jpeg"
import StepFunctionExample from "../../resources/images/blog/AWSServerless/aws_serverless_step_function_example.jpeg"


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

const CodeBlockIndent = styled.pre`
  font-family: 'Calibri';
  font-size: 2rem;
  background: #292929;
  color: ${({ theme }) => theme.buttonText};
  word-wrap: break-word;
  padding: 1rem 2rem 1rem;
  border-radius: 2rem;
  overflow-x: auto;
  line-height: 3.5rem;
  margin-left: 10%;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
`;

const SubTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin: 2% auto;
`;

const SubTitleSmall = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 2% auto;
`;

const HeadingSmall = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  font-style: italic;
  margin: 2% auto;
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

const AWSServerless = () => {

  useEffect(() => {
    Analytics.event('blog_opened', { slug: 'aws-serverless' });
  }, []);

  const columns = ['Execution', 'Deployment'];
  const data = [
    { Execution: 'Memory Allocation 128 MB - 10GB (1 MB Increments)', Deployment: 'Lambda function deployment size (compressed .zip): 50 MB' },
    { Execution: 'Maximum execution time: 900 seconds (15 minutes)', Deployment: 'Size of uncompressed deployment (code + dependencies): 250 MB' },
    { Execution: 'Environment variables (4 KB)', Deployment: 'Can use the /tmp directory to load other files at startup' },
    { Execution: 'Disk capacity in the function container (512 MB to 10 GB)', Deployment: 'Environment variables (4 KB)' },
    { Execution: 'Concurrency exectutions: 1000 (can be increased)' },
  ];

  const columns2 = ['Cold Start', 'Provisioned Concurrency'];
  const data2 = [
    { 'Cold Start': 'New instance: Code is loaded and code is outside the handler run (init)', 'Provisioned Concurrency': 'Concurrency is allocated before the function in invoked (in advance)' },
    { 'Cold Start': 'If the init is large (code, dependencies, SDK) it can take some time', 'Provisioned Concurrency': 'Cold start never happens and all invocations have low latency' },
    { 'Cold Start': 'First request served by new instances has higher latency than the rest', 'Provisioned Concurrency': 'Application Auto Scaling can manage concurrency (schedule or target utilisation' },
  ];

  const columns3 = ['Feature', 'Lambda@Edge', 'CloudFront Functions'];
  const data3 = [
    { Feature: 'Runtime', 'Lambda@Edge': 'Supports multiple runtimes (Python, Node.js, etc.)', 'CloudFront Functions': 'JavaScript' },
    { Feature: 'Number of Requests', 'Lambda@Edge': 'Thousands of requests per second.', 'CloudFront Functions': 'Millions of requests per second.' },
    { Feature: 'CloudFront Triggers', 'Lambda@Edge': 'Viewer requests/response and Origin requests/response', 'CloudFront Functions': 'Viewer requests/response.' },
    { Feature: 'Max Execution Time', 'Lambda@Edge': '5 - 10 seconds', 'CloudFront Functions': '< 1 ms.' },
    { Feature: 'Max Memory', 'Lambda@Edge': '128 MB up to 10 GB.', 'CloudFront Functions': '2.' },
    { Feature: 'Total Package Size', 'Lambda@Edge': '1 MB - 50 MB.', 'CloudFront Functions': '10 KB' },
    { Feature: 'Network Access, File System Access', 'Lambda@Edge': 'Yes.', 'CloudFront Functions': 'No.' },
    { Feature: 'Access to the Request Body', 'Lambda@Edge': 'Yes.', 'CloudFront Functions': 'No.' },
    { Feature: 'Performance', 'Lambda@Edge': 'Can handle heavier tasks, like image processing.', 'CloudFront Functions': 'Ideal for fast, simple tasks like header edits.' }
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
          <Title>Amazon Serverless</Title>
          <IconWrapper>
            <Icon><AWSSVG /></Icon>
            <Icon><AWSLambdaSVG /></Icon>
            <Icon><AWSAPIGatewaySVG /></Icon>
            <Icon><AWSStepFunctionsSVG /></Icon>
          </IconWrapper>
        </Flex>
        <Spacer />
        <Text>
          In this post we'll be diving into Amazon's serverless solutions including AWS Lambda, AWS API Gateway and AWS Step Functions.
          <StyledAnchor href="#what-is-serverless"><StyledListItem>What Is Serverless?</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-lambda"><StyledListItem>Lambda</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-api-gateway"><StyledListItem>API Gateway</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-step-functions"><StyledListItem>Step Functions</StyledListItem></StyledAnchor>
          <Spacer />
          <SubTitle id="what-is-serverless">What Is Serverless?</SubTitle>
          Before we explore any AWS services that are classed as serverless, let's first outline what constitutes as 'Serverless'. Serverless was
          a term that was pioneered by AWS Lambda but now includes anything that's managed: databases, messaging, storage, etc. <BoldText>Serverless
            doesn't mean there are no servers</BoldText>, it means you don't have to manage, provision, or see them. Serverless is a new paradigm in which
          developers don't have to manage servers anymore.
          <SubTitle id="aws-lambda">Lambda</SubTitle>
          AWS Lambda, a serverless compute service, executes your code in response to events, handling compute resources for you. It is a virtual function which is
          limited by time that runs on demand and scales automatically. You pay per request and compute time of the lambda function. Lambda is integrated with many programming
          languages including:
          <StyledListItem>Node.js (JavaScript)</StyledListItem>
          <StyledListItem>Python</StyledListItem>
          <StyledListItem>Java</StyledListItem>
          <StyledListItem>C# (.NET Core)/Powershell</StyledListItem>
          <StyledListItem>Ruby</StyledListItem>
          <StyledListItem>Custom Runtime API (Rust or GoLang)</StyledListItem>
          <Spacer />
          <SubTitleSmall>Limitations</SubTitleSmall>
          <Table data={data} columns={columns} />
          <Spacer />
          <SubTitleSmall>Lambda Concurrency and Throttling</SubTitleSmall>
          Concurrency limit is up to 1000 concurrent executions
          <StyledImage src={LambdaConcurrency} />
          It's possible to set a reserve concurrency at the function level that guarantees a specific number of concurrent executions for the Lambda function.
          It ensures that the function always has the capacity to handle a certain number of requests, regardless of the overall load on your AWS account.
          Each invocation over the concurrency limit will trigger a "Throttle".
          <StyledListItem>Synchronous invocation returns a throttleError - 429</StyledListItem>
          <StyledListItem>Asynchronous invocation results in a retry and then sent to a DLQ</StyledListItem>
          <Spacer />
          <StyledImage src={LambdaThrottle} />
          If the function doesn't have enough concurrency available to process all events, additional events are throttled. For throttling errors (429) and
          system errors (500-series), Lambda returns the event to the queue and attempts to run the function again for up to 6 hours. The retry interval increases
          exponentially from 1 second to a maximum of 5 minutes.
          <SubTitleSmall>Cold Starts and Provisioned Concurrency</SubTitleSmall>
          <Table data={data2} columns={columns2} />
          <SubTitleSmall>Lambda SnapStart</SubTitleSmall>
          SnapStart is a feature designed to significantly reduce the cold start latency for Lambda functions. SnapStart works by pre-initializing the function's
          execution environment and caching a snapshot of it, which can be reused when scaling the function to handle new requests. This feature is compatable with
          Java, Python and .NET languages and increases performance up to 10x at no extra cost.
          <StyledImage src={LambdaSnapShot} />
          <SubTitleSmall>Lambda@Edge and CloudFront Functions</SubTitleSmall>
          Lambda@Edge is an extension of AWS Lambda that allows you to run serverless code at AWS's globally distributed edge locations. It is designed for more complex
          and flexible use cases, offering deep integration with Amazon CloudFront.
          <HeadingSmall>How Lambda@Edge Works:</HeadingSmall>
          <StyledListItem>You associate a Lambda function with a specific CloudFront event (e.g., viewer request, origin response).</StyledListItem>
          <StyledListItem>When a CloudFront request matches the event, the Lambda function is executed at the nearest edge location.</StyledListItem>
          <StyledListItem>The function can modify, redirect, or respond to the request before sending it back to the viewer or origin.</StyledListItem>
          <Spacer />
          <SubTitleSmall>CloudFront Functions</SubTitleSmall>
          CloudFront Functions is a lightweight, serverless edge compute service optimized for high-performance, low-latency tasks. It is more restricted than
          Lambda@Edge but is designed for ultra-low latency use cases.
          <SubTitleSmall>Lambda@Edge vs CloudFront Functions</SubTitleSmall>
          <Table data={data3} columns={columns3} />
          <SubTitleSmall>Use Cases:</SubTitleSmall>
          <StyledListItem>Choose Lambda@Edge:</StyledListItem>
          <StyledListItemIndent>If you need complex logic (e.g., dynamic content, authentication).</StyledListItemIndent>
          <StyledListItemIndent>When you require advanced runtimes and libraries.</StyledListItemIndent>
          <StyledListItemIndent>For full access to request and response data in all CloudFront phases.</StyledListItemIndent>
          <Spacer />
          <StyledListItem>Choose CloudFront Functions:</StyledListItem>
          <StyledListItemIndent>If you need ultra-low latency for lightweight tasks (e.g., simple redirects or header manipulations).</StyledListItemIndent>
          <StyledListItemIndent>For cost-sensitive, high-traffic scenarios.</StyledListItemIndent>
          <StyledListItemIndent>When you don’t require advanced runtimes or deeper context access.</StyledListItemIndent>
          <Spacer />
          <SubTitle id="aws-api-gateway">API Gateway</SubTitle>
          API Gateway enables developers to create, publish, secure, monitor, and manage APIs at scale. It acts as an interface between your backend services
          (e.g., AWS Lambda functions, EC2 instances, DynamoDB tables) and client applications, providing a single entry point for applications to access data,
          business logic, or functionality from your backend services.
          <HeadingSmall>Integration Types:</HeadingSmall>
          <StyledListItem>Lambda Function: Trigger Lambda for serverless processing.</StyledListItem>
          <StyledListItem>HTTP Endpoint: Forward requests to external HTTP/HTTPS endpoints.</StyledListItem>
          <StyledListItem>AWS Service: Directly integrate with AWS services like S3, DynamoDB, or Step Functions.</StyledListItem>
          <HeadingSmall>API Types:</HeadingSmall>
          <StyledListItem>REST APIs: Designed for web and mobile applications with full support for HTTP requests (GET, POST, DELETE, etc.).</StyledListItem>
          <StyledListItem>HTTP Endpoint: Forward requests to external HTTP/HTTPS endpoints.</StyledListItem>
          <StyledListItem>WebSocket APIs: Enables real-time communication using the WebSocket protocol.</StyledListItem>
          <HeadingSmall>Endpoints:</HeadingSmall>
          <StyledListItem>Edge-Optimized: Uses Amazon CloudFront to reduce latency for global users.</StyledListItem>
          <StyledListItem>Regional: Designed for use in a specific region to reduce inter-region latency.</StyledListItem>
          <StyledListItem>Private: Access APIs only within a VPC.</StyledListItem>
          <Spacer />
          <SubTitleSmall>API Gateway Serverless API example</SubTitleSmall>
          <StyledImage src={APIGatewayExample} />
          <Spacer />
          <SubTitle id="aws-step-functions">Step Functions</SubTitle>
          AWS Step Functions is a serverless orchestration service that allows you to coordinate and manage multiple AWS services and components into
          workflow-based applications. It helps developers build scalable, resilient, and predictable applications by breaking tasks into smaller,
          manageable steps and defining their execution order.
          <StyledImage src={StepFunctionExample} />
        </Text>
      </Container>
    </Wrapper>
  );
}

export default AWSServerless;