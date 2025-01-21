import React, { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

// helpers
import { logPageView } from "../../helpers/analytics";

// animations
import SlideInBottom from "../../animations/SlideInBottom";

// icons
import { ChevronBackCircle } from '@styled-icons/ionicons-solid/ChevronBackCircle';
import { AWSSVG, AWSSQSSVG } from '../../resources/styles/icons';

// components
import { StyledNavButton, StyledNavLink } from '../Button/Button';
import Table from '../Table/Table';

// images
import SQSCommunicationPatterns from "../../resources/images/blog/AWSSQS/sqs_communication_patterns.jpeg";
import SQSQueueExample from "../../resources/images/blog/AWSSQS/sqs_queue_example.jpeg";
import SQSWithASG from "../../resources/images/blog/AWSSQS/sqs_with_asg.jpeg";
import SQSDecoupleExample from "../../resources/images/blog/AWSSQS/sqs_decouple_example.jpeg";
import SQSFIFOExample from "../../resources/images/blog/AWSSQS/sqs_fifo_example.jpeg";



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

const AWSSQS = () => {

  // analytics
  useEffect(() => {
    if (window.location.hostname !== "localhost") {
      logPageView('blog/aws-sqs');
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
          <Title>Amazon Simple Queue Service (SQS)</Title>
          <IconWrapper>
            <Icon><AWSSVG /></Icon>
            <Icon><AWSSQSSVG /></Icon>
          </IconWrapper>
        </Flex>
        <Spacer />
        <Text>
          In this post I'll be tackling Amazon's Simple Queue Service (SQS).
          <StyledAnchor href="#sqs-introduction"><StyledListItem>SQS Introduction</StyledListItem></StyledAnchor>
          <StyledAnchor href="#what-is-a-queue?"><StyledListItem>What's a Queue?</StyledListItem></StyledAnchor>
          <StyledAnchor href="#sqs-security"><StyledListItem>Security</StyledListItem></StyledAnchor>
          <StyledAnchor href="#standard-queue"><StyledListItem>Standard Queue</StyledListItem></StyledAnchor>
          <StyledAnchor href="#fifo-queue"><StyledListItem>FIFO Queue</StyledListItem></StyledAnchor>
          <Spacer />
          <SubTitle id="sqs-introduction">Amazon Simple Queue Service</SubTitle>
          Amazon Simple Queue Service (Amazon SQS) is a fully managed message queuing service provided by Amazon Web Services (AWS). It enables the decoupling and scaling of microservices, 
          distributed systems, and serverless applications. When we start deploying multiple applications, they will inevitably need to communicate with one another. There are two patterns of communication.
          <StyledListItem>Synchronous communications (application to application).</StyledListItem>
          <StyledListItem>Asynchronous/Event based communications (application to queue to application).</StyledListItem>
          <Spacer />
          <StyledImage src={SQSCommunicationPatterns} />
          <Spacer />
          <SubTitle id="what-is-a-queue?">What's a Queue?</SubTitle>
          An SQS queue acts as a buffer between producers (anything that sends messages to a queue) and consumers (anything that polls messages from a queue).
          <StyledImage src={SQSQueueExample} />
          <Spacer />
          <SubTitleSmall>Producers</SubTitleSmall>
          Producers sends messages to the queue via the SendMessage API. Once the message is sent it is persists in the queue until the consumer deletes it or it hits the retention limit.
          <Spacer />
          <SubTitleSmall>Consumers</SubTitleSmall>
          Consumers are instances that could be EC2 or AWS Lambda or any server. This instance polls for SQS messages that can receive up to 10 messages at a time. Once the message has been processed (whatever custom code runs on the 
          server) the consumer will then delete the message using the DeleteMessage API.
          <Spacer />
          <SubTitleSmall>Message Visibility Timeout</SubTitleSmall>
          After a message is polled by a consumer; it becomes invisible to other consumers. By default, the 'message visibility timeout' is 30 seconds which means the message has 30 seconds to be processed. If the message is not processed 
          within the visibility timeout, it will be processed twice. If the message is in the middle of being processed by a consumer but hasn't finished before the timeout, it's possible for the consumer to call the ChangeMessageVisibility 
          API to get more time. It's possible to change the timeout but keep in mind that if it's too high (hours) the consumer can crash and re-processing will take time. Alternatively if it's too low (seconds), the chances of duplicate messages 
          will be higher.
          <SubTitleSmall>Long Polling</SubTitleSmall>
          When a consumer requests messages from the queue, it can optionally 'wait' for messages to arrive if there are none in the queue - this is called Long Polling. Long Polling decreases the number of API calls made to SQS while increasing 
          the efficiency and latency of an application. The wait time can be anywhere between 1-20 seconds.
          <Spacer />
          <SubTitle id="sqs-security">Security</SubTitle>
          <Spacer />
          <StyledListItem><BoldText>Encryption:</BoldText></StyledListItem>
          <StyledListItemIndent>Supports encryption at rest using AWS Key Management Service (KMS).</StyledListItemIndent>
          <StyledListItemIndent>Enables secure communication over HTTPS.</StyledListItemIndent>
          <StyledListItemIndent>Client-side encryption if the client wants to perform encryption/decryption itself.</StyledListItemIndent>
          <Spacer />
          <StyledListItem><BoldText>Access Controls:</BoldText></StyledListItem>
          <StyledListItemIndent>Provides fine-grained access control using AWS Identity and Access Management (IAM).</StyledListItemIndent>
          <Spacer />
          <StyledListItem><BoldText>SQS Policies:</BoldText></StyledListItem>
          <StyledListItemIndent>Useful for cross-account access to SQS queues.</StyledListItemIndent>
          <StyledListItemIndent>Useful for allowing other services (SNS, S3...) to write to an SQS queue.</StyledListItemIndent>
          <Spacer />
          <SubTitle id="standard-queue">Standard Queue</SubTitle>
          This is the default option which supports nearly unlimited number of API calls per second. The important things to note for this queue are:
          <Spacer />
          <SubTitleSmall>Attributes</SubTitleSmall>
          <StyledListItem>Default retention of messages: A message can stay in a queue for 4 days by default and a maximum of 14 days.</StyledListItem>
          <StyledListItem>Can have duplicate messages (at least once delivery).</StyledListItem>
          <StyledListItem>Can have out of order messages (best effort ordering).</StyledListItem>
          <StyledListItem>Low latency: Under 10ms on publishing and receiving a message.</StyledListItem>
          <StyledListItem>Limitation of 256kb per message sent.</StyledListItem>
          <Spacer />
          <SubTitleSmall>SQS with Auto Scaling Groups (ASG)</SubTitleSmall>
          Consumers will be running on instances inside an auto scaling group which will be polling messages from the queue. There is a metric we can use to scale up the instances if there is a spike in messages. This metric (ApproximateNumber
          OfMessages) can be tied to a cloudwatch alarm, which when is breached can trigger the auto scaling group to ramp up capacity.
          <Spacer />
          <StyledImage src={SQSWithASG} />
          <Spacer />
          <SubTitleSmall>SQS To Decouple Between Application Tiers</SubTitleSmall>
          Here is an example of having a separate instance process a message. This is a common architecture pattern to prevent any bottleneck to the front-end application. In this example the front-end application can send a message to a 
          queue and the second tier can poll the message and insert it into an S3 bucket.
          <Spacer />
          <StyledImage src={SQSDecoupleExample} />
          <Spacer />
          <SubTitle id="fifo-queue">FIFO Queue</SubTitle>
          FIFO - First In First Out. This means that it prioritises sending messages in the order of which the queue receives those messages.
          <StyledImage src={SQSFIFOExample} />
          <Spacer />
          This type of queue is limited to 300 msg/s without batching, 3000 msg/s with batching. It does however remove duplicate messages from being sent.
        </Text>
      </Container>
    </Wrapper>
  );
}

export default AWSSQS;