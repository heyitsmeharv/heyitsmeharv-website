import ReactGA from 'react-ga';
import React, { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

// animations
import SlideInBottom from "../../animations/SlideInBottom";

// icons
import { ChevronBackCircle } from '@styled-icons/ionicons-solid/ChevronBackCircle';
import { AWSSVG, AWSRDSSVG } from '../../resources/styles/icons';

// components
import { StyledNavButton, StyledNavLink } from '../Button/Button';

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

const AWSDatabases = () => {

  // analytics
  useEffect(() => {
    if (window.location.hostname !== "localhost") {
      ReactGA.pageview('/blog/aws-databases');
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
          <Title>AWS Databases (RDS, Aurora, Elasticache)</Title>
          <IconWrapper>
            <Icon><AWSSVG /></Icon>
            <Icon><AWSRDSSVG /></Icon>
          </IconWrapper>
        </Flex>
        <Spacer />
        <Text>
          <SubTitle id="rds">Amazon Relational Database Service (RDS)</SubTitle>
          This service allows you to create a database in the cloud. You can choose from the following:
          <StyledListItem>Microsoft SQL Server</StyledListItem>
          <StyledListItem>MySQL</StyledListItem>
          <StyledListItem>Postgres</StyledListItem>
          <StyledListItem>MariaDB</StyledListItem>
          <StyledListItem>Oracle</StyledListItem>
          <Spacer />
          This service is managed by AWS which means you won't be able to SSH into the instance but you do benefit from a list of services such as:
          <StyledListItem>Automated provisioning, OS patching</StyledListItem>
          <StyledListItem>Continuous backups and point in time restore</StyledListItem>
          <StyledListItem>Monitoring dashboards</StyledListItem>
          <StyledListItem>Read replicas for improved read performance</StyledListItem>
          <StyledListItem>Multi AZ setup for disaster recovery</StyledListItem>
          <StyledListItem>Maintenance windows for upgrades</StyledListItem>
          <StyledListItem>Scaling capability</StyledListItem>
          <StyledListItem>Storage backed by EBS</StyledListItem>
          <Spacer />
          <SubTitleSmall>Auto Scaling Storage</SubTitleSmall>
          This feature helps increase the storage on an RDS instance when it's running out of free space and it will do it automatically. You do have to set the 'Maximum Storage Threshold'. This feature can help with 
          unpredictable workloads and supports all RDS database instances.
          <Spacer />
          <Spacer />
          <SubTitle id="aurora">Amazon Aurora</SubTitle>
          <SubTitle id="elasticache">Elasticache</SubTitle>
        </Text>
      </Container>
    </Wrapper>
  );
}

export default AWSDatabases;