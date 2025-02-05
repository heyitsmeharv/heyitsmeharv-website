import React, { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

// helpers
import { logPageView } from "../../helpers/analytics";

// animations
import SlideInBottom from "../../animations/SlideInBottom";

// icons
import { ChevronBackCircle } from '@styled-icons/ionicons-solid/ChevronBackCircle';
import {
  AWSSVG,
  AWSKMSSVG,
  AWSSSMSVG,
  AWSSecretsManagerSVG,
  AWSCertificateManagerSVG,
  AWSSheildSVG,
  AWSFirewallSVG,
  AWSWAFSVG,
  AWSInspectorSVG,
  AWSMacieSVG
} from '../../resources/styles/icons';

// components
import { StyledNavButton, StyledNavLink } from '../Button/Button';
import Table from '../Table/Table';

// images
import TLSSSLExample from "../../resources/images/blog/AWSSecurityEncryption/aws_security_encryption_ssl_tls.jpeg";
import ServerSideEncryption from "../../resources/images/blog/AWSSecurityEncryption/aws_security_encryption_server_rest.jpeg";
import ClientSideEncryption from "../../resources/images/blog/AWSSecurityEncryption/aws_security_encryption_client.jpeg";

// codeblocks
// import { cloudwatchlogsInsights, cloudwatchlogsAlarmStatus } from "../../helpers/codeblocks.js";

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

const AWSSecurityEncryption = () => {

  // analytics
  useEffect(() => {
    if (window.location.hostname !== "localhost") {
      logPageView();
    }
  }, []);

  const columns = ['Feature', 'Description'];
  const data = [
    { Feature: 'Metrics', Description: 'Tracks CPU, memory, network utilization, and custom metrics from your applications.' },
    { Feature: 'Logs', Description: 'Centralizes log collection and analysis with search and filtering capabilities.' },
    { Feature: 'Alarms', Description: 'Notifies users or triggers actions based on metric thresholds.' },
    { Feature: 'Dashboards', Description: 'Custom visualizations for real-time monitoring.' },
    { Feature: 'Custom Anomaly Detection', Description: 'Automatically identifies metric patterns and deviations.' },
    { Feature: 'Synthetic Monitoring', Description: 'Tests application endpoints proactively with canary scripts.' }
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
        <FlexTop>
          <Title>Amazon Security & Encryption</Title>
          <IconWrapper>
            <Icon><AWSSVG /></Icon>
            <Icon><AWSKMSSVG /></Icon>
            <Icon><AWSSSMSVG /></Icon>
            <Icon><AWSSecretsManagerSVG /></Icon>
            <Icon><AWSCertificateManagerSVG /></Icon>
            <Icon><AWSSheildSVG /></Icon>
            <Icon><AWSFirewallSVG /></Icon>
            <Icon><AWSWAFSVG /></Icon>
            <Icon><AWSInspectorSVG /></Icon>
            <Icon><AWSMacieSVG /></Icon>
          </IconWrapper>
        </FlexTop>
        <Spacer />
        <Text>
          In this post we'll be diving into Amazon's security and encryption solutions.
          <StyledAnchor href="#aws-encryption-overview"><StyledListItem>Encryption Overview</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-kms"><StyledListItem>KMS (Key Managed Service)</StyledListItem></StyledAnchor>
          <Spacer />
          <SubTitle id="aws-encryption-overview">Encryption Overview</SubTitle>
          Encryption is necessary to protect sensitive information being sent or received over a network from being hijacked or leaked. The information (data)
          is encrypted before sending and decrypting after receiving.
          <HeadingSmall>Encryption in Flight (TLS/SSL)</HeadingSmall>
          <Spacer />
          <StyledImage src={TLSSSLExample} />
          <Spacer />
          <HeadingSmall>Server-side encryption at rest</HeadingSmall>
          <Spacer />
          <StyledImage src={ServerSideEncryption} />
          <Spacer />
          <HeadingSmall>Client-side encryption</HeadingSmall>
          <Spacer />
          <StyledImage src={ClientSideEncryption} />
          <Spacer />
          <SubTitle id="aws-kms">KMS (Key Managed Service)</SubTitle>
          AWS Key Management Service (AWS KMS) is a managed service that enables you to create, manage, and control cryptographic keys across AWS services and applications.
          It helps with securing data using encryption and provides centralized key management with fine-grained access control.
          <Spacer />
        </Text>
      </Container>
    </Wrapper >
  );
}

export default AWSSecurityEncryption;