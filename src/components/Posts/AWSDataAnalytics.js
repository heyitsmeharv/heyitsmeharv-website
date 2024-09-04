import ReactGA from 'react-ga';
import React, { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

// animations
import SlideInBottom from "../../animations/SlideInBottom";

// icons
import { ChevronBackCircle } from '@styled-icons/ionicons-solid/ChevronBackCircle';
import {
  AWSSVG,
  AWSAthenaSVG,
  AWSRedshiftSVG,
  AWSOpenSearchSVG,
  AWSEMRSVG,
  AWSQuickSightSVG,
  AWSGlueSVG,
  AWSLakeFormationSVG
} from '../../resources/styles/icons';

// components
import { StyledNavButton, StyledNavLink } from '../Button/Button';
import Table from '../../components/Table/Table';

// images
import KinesisDataStreams from "../../resources/images/blog/AWSKinesis/kinesis_data_streams.jpeg"


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

const AWSDataAnalytics = () => {

  // analytics
  useEffect(() => {
    if (window.location.hostname !== "localhost") {
      ReactGA.pageview('/blog/aws-data-analytics');
    }
  }, []);

  const columns = ['Feature', 'Provisioned Mode', 'On-Demand Mode'];
  const data = [
    { 'Feature': 'Capacity Management', 'Provisioned Mode': 'Manual (based on shard count)', 'On-Demand Mode': 'Automatic (scales in response to traffic)' },
    { 'Feature': 'Throughput', 'Provisioned Mode': 'Depends on the number of shards', 'On-Demand Mode': 'Up to 200 MB/s write and 400 MB/s read automatically' },
    { 'Feature': 'Scalability', 'Provisioned Mode': 'Requires manual intervention', 'On-Demand Mode': 'Fully automatic, no manual intervention required' },
    { 'Feature': 'Cost', 'Provisioned Mode': 'Based on the number of shards', 'On-Demand Mode': 'Based on the data throughput (pay for what you use)' },
    { 'Feature': 'Best For', 'Provisioned Mode': 'Predictable traffic, cost control', 'On-Demand Mode': 'Unpredictable, variable traffic, ease of use' },
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
          <Title>Amazon Data and Analytics</Title>
          <IconWrapper>
            <Icon><AWSSVG /></Icon>
            <Icon><AWSAthenaSVG /></Icon>
            <Icon><AWSRedshiftSVG /></Icon>
            <Icon><AWSOpenSearchSVG /></Icon>
            <Icon><AWSEMRSVG /></Icon>
            <Icon><AWSQuickSightSVG /></Icon>
            <Icon><AWSGlueSVG /></Icon>
            <Icon><AWSLakeFormationSVG /></Icon>
          </IconWrapper>
        </Flex>
        <Spacer />
        <Text>
          In this post we'll be diving into Amazon Kinesis.
          <StyledAnchor href="#kinesis-overview"><StyledListItem>Kinesis Overview</StyledListItem></StyledAnchor>
          <StyledAnchor href="#kinesis-data-streams"><StyledListItem>Kinesis Data Streams</StyledListItem></StyledAnchor>
          <StyledAnchor href="#kinesis-data-firehose"><StyledListItem>Kinesis Data Firehose</StyledListItem></StyledAnchor>
          <StyledAnchor href="#kinesis-data-analytics"><StyledListItem>Kinesis Data Analytics</StyledListItem></StyledAnchor>
          <StyledAnchor href="#data-ordering-for-kinesis-vs-sqs-fifo"><StyledListItem>Data Ordering for Kinesis vs SQS FIFO</StyledListItem></StyledAnchor>
          <StyledAnchor href="#kinesis-vs-sqs-vs-sns"><StyledListItem>Kinesis vs SQS vs SNS</StyledListItem></StyledAnchor>
          <Spacer />
          <SubTitle id="kinesis-overview">Kinesis Overview</SubTitle>
          Amazon Kinesis is designed to handle real-time data streaming and processing. It allows you to collect, process, and analyze large streams of data in real-time, making it ideal for use cases that require
          immediate insights or actions based on incoming data. Here's an overview of the main components and features of Amazon Kinesis:
          <Spacer />
          <SubTitleSmall>Kinesis Data Streams</SubTitleSmall>

        </Text>
      </Container>
    </Wrapper>
  );
}

export default AWSDataAnalytics;
