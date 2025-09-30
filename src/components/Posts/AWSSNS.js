import React, { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

// helpers
import { Analytics } from "../../helpers/analytics";

// animations
import SlideInBottom from "../../animations/SlideInBottom";

// icons
import { ChevronBackCircle } from '@styled-icons/ionicons-solid/ChevronBackCircle';
import { AWSSVG, AWSSNSSVG } from '../../resources/styles/icons';

// components
import { StyledNavButton, StyledNavLink } from '../Button/Button';
import Table from '../Table/Table';

// images
import SNSPubSub from "../../resources/images/blog/AWSSNS/sns_pub_sub.jpeg";
import SNSSubscribers from "../../resources/images/blog/AWSSNS/sns_subscribers.jpeg";
import SNSSQSFanOut from "../../resources/images/blog/AWSSNS/sns_sqs_fan_out.jpeg";
import SNSMessageFiltering from "../../resources/images/blog/AWSSNS/sns_message_filtering.jpeg";

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

const AWSSNS = () => {

  useEffect(() => {
    Analytics.event('blog_opened', { slug: 'aws-sns' });
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
          <Title>Amazon Simple Notification Service (SNS)</Title>
          <IconWrapper>
            <Icon><AWSSVG /></Icon>
            <Icon><AWSSNSSVG /></Icon>
          </IconWrapper>
        </Flex>
        <Spacer />
        <Text>
          In this post I'll be tackling Amazon's Simple Notification Service (SNS).
          <StyledAnchor href="#sns-introduction"><StyledListItem>SNS Introduction</StyledListItem></StyledAnchor>
          <StyledAnchor href="#how-to-publish"><StyledListItem>How To Publish</StyledListItem></StyledAnchor>
          <StyledAnchor href="#security"><StyledListItem>Security</StyledListItem></StyledAnchor>
          <StyledAnchor href="#fan-out"><StyledListItem>SNS and SQS: Fan Out</StyledListItem></StyledAnchor>
          <StyledAnchor href="#message-filtering"><StyledListItem>Message Filtering</StyledListItem></StyledAnchor>
          <Spacer />
          <SubTitle id="sns-introduction">Amazon Simple Notification Service</SubTitle>
          Amazon Simple Notification Service (Amazon SNS) is a fully managed messaging service provided by Amazon Web Services (AWS) designed to send messages to a large number of subscribers or other services. What if you wanted to send
          one message to many endpoints? Instead of having a direct integration with each endpoint/service, you can publish that message to a topic which then delivers the message to all subscribers.
          <Spacer />
          <StyledImage src={SNSPubSub} />
          <Spacer />
          The event producer only sends messages to one SNS topic and the event receivers (subscriptions) which is as many as we want will listen to the SNS topic notification and everything subscribed will get a message.
          <Spacer />
          <SubTitle id="how-to-publish">How To Publish</SubTitle>
          <Spacer />
          <StyledListItem><BoldText>Publishing a Message</BoldText>: An application component (publisher) sends a message to an SNS topic.</StyledListItem>
          <StyledListItem><BoldText>Message Propagation</BoldText>: The SNS topic propagates the message to all subscribed endpoints, such as HTTP endpoints, email addresses, or SQS queues.</StyledListItem>
          <StyledListItem><BoldText>Message Delivery</BoldText>: Each subscriber endpoint receives and processes the message according to its protocol.</StyledListItem>
          <Spacer />
          <StyledImage src={SNSSubscribers} />
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
          <StyledListItem><BoldText>SNS Policies:</BoldText></StyledListItem>
          <StyledListItemIndent>Useful for cross-account access to SNS topics.</StyledListItemIndent>
          <StyledListItemIndent>Useful for allowing other services (S3...) to write to an SNS Topic.</StyledListItemIndent>
          <Spacer />
          <SubTitle id="fan-out">SNS and SQS: Fan Out</SubTitle>
          The idea of this method is to push once to an SNS topic which could have as many SQS queues subscribed as you want. This is a fully decoupled approach which helps prevent data loss. The SQS queue will need it's access
          policy to allow for SNS to write to it. This also works for cross region delivery so you can have SQS queues from other regions.
          <StyledImage src={SNSSQSFanOut} />
          <Spacer />
          <SubTitle id="message-filtering">Message Filtering</SubTitle>
          It's possible to setup message filtering to control the flow of message. Message filtering is defined via JSON policy, if a subscription doesn't have a filter policy it will automatically receive all messages.
          <StyledImage src={SNSMessageFiltering} />
        </Text>
      </Container>
    </Wrapper>
  );
}

export default AWSSNS;