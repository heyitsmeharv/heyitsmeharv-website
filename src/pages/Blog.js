import ReactGA from 'react-ga';
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

// components
import Pagination from "../components/Pagination/Pagination";

// icons
import { StyledClose } from '../resources/styles/icons';
import { Search } from '@styled-icons/ionicons-solid/Search'
import { JavascriptSVG, ReactjsSVG, AWSSVG, AWSIAMSVG, AWSEC2SVG, AWSRDSSVG, AWSRoute53SVG, AWSS3SVG, AWSCloudfrontSVG, AWSSQSSVG, AWSSNSSVG, AWSECSSVG, AWSEKSSVG, AWSFargateSVG, AWSVPCSVG, AWSKinesisSVG } from '../resources/styles/icons';


const SearchBarWrapper = styled.div`
  display: flex;
  position: relative;
  padding: 1rem 4rem;
`;

const StyledSearchBar = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 45px;
  font-size: 1.5rem;
`;

const StyledSearchIcon = styled(Search)`
  position: absolute;
  align-self: center;
  color: ${({ theme }) => theme.icon};
  width: 2.5rem;
  padding: 0 8px;
`;

const StyledCloseIcon = styled(StyledClose)`
  color: ${({ theme }) => theme.icon};
`;

const StyledCloseButton = styled.button`
  position: absolute;
  right: 40px;
  height: 50px;
  width: 60px;
  outline: none;
  border: none;
  background: none;
  :hover {
    cursor: pointer;
  }
`;

const StyledPillButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledPillButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  background-color: ${props => props.colour}; 
  text-align: center;
  font-size: 1.5rem;
  margin: 10px;
  :hover {
    cursor: pointer;
    border: .5px solid ${({ theme }) => theme.text};
  }

  ${props => props.active && css`
    color: white;
    font-weight: bold;
  `}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 200px);
  background-color: #f8f9fa;
  color: #343a40;
`;

const Message = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 600px;
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1.5rem;
  background-color: ${({ theme }) => theme.primary}; 
  color: ${({ theme }) => theme.text}; 
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.secondary}; 
  }
`;


/* COOL TAG COLOURS */
// #64CBF6
// #8B191D
// #23262E

export default function Blog() {
  const [isEmpty, setIsEmpty] = useState(false);
  const [search, setSearch] = useState('');
  const [filterButtons, setFilterButtons] = useState([
    {
      name: "AWS",
      colour: "#FF9900",
      active: false,
    },
    {
      name: "JavaScript",
      colour: "#F4BF36",
      active: false,
    },
    {
      name: "React",
      colour: "#64CBF6",
      active: false,
    },
  ]);
  const [blogPosts, setBlogPosts] = useState([
    {
      title: 'The Start',
      readingTime: 'less than 1 minute',
      type: 'Retrospective',
      date: '05/04/2023',
      tags: [{ name: 'Misc', background: '#23262E' }],
      intro: `For a long time I've wanted to write a blog about technologies I'm interested in.
            The purpose of this blog is just to document my personal journey learning cool tech,
            if only to cement my own understanding and potentially help people with similar interests...`,
      navigate: 'the-start',
      published: true
    },
    {
      title: 'JavaScript Arrays',
      readingTime: 'approx 10 minutes',
      type: 'Theory',
      date: '12/04/2023',
      tags: [{ name: 'JavaScript', background: '#F4BF36', icon: <JavascriptSVG /> }],
      intro: `Do you ever find yourself forgetting what helper methods would be best to manipulate your data? 
        In this post, I would like to go through the different helper functions and the use cases for manipulating your data.
        But before we get into that... 
      `,
      navigate: 'javascript-arrays',
      published: true
    },
    {
      title: 'JavaScript Objects',
      readingTime: 'approx 5 minutes',
      type: 'Theory',
      date: '04/05/2023',
      tags: [{ name: 'JavaScript', background: '#F4BF36', icon: <JavascriptSVG /> }],
      intro: `After writing a blog post about arrays, which you can find here. Naturally it feels like the next post needs to be about JavaScript Objects. 
      Similar to my last post, I'll be keeping a similar format; that being explaining what objects are and how we can use them. Simple enough? Let's get it...`,
      navigate: 'javascript-objects',
      published: true
    },
    {
      title: 'AWS IAM',
      readingTime: 'approx 6 minutes',
      type: 'Theory',
      date: '26/10/2023',
      tags: [{ name: 'AWS', background: '#FF9900', icon: <AWSSVG /> }, { name: 'IAM', background: '#FF9900', icon: <AWSIAMSVG /> }],
      intro: `This is the first of my AWS series blog posts where I'll be going through the Identity and Access Management Service, also known as IAM. I'm hoping 
      this will serve at least somewhat of a refresher or a quick reference guide for those familiar with the IAM service; if not getting to grips with the basics 
      if you're not familiar...`,
      navigate: 'aws-identity-access-management',
      published: true
    },
    {
      title: 'AWS EC2',
      readingTime: 'approx 25 minutes',
      type: 'Theory',
      date: '02/11/2023',
      tags: [{ name: 'AWS', background: '#FF9900', icon: <AWSSVG /> }, { name: 'IAM', background: '#FF9900', icon: <AWSEC2SVG /> }],
      intro: `In this blog post we'll be going through the Elastic Compute Cloud service, also known as EC2 which can be defined as an infrastructure as a Service (IaaS). 
      In short EC2 is a virtual service in the AWS cloud. Why would you need this? Well, any time you need to compute a task this service will be handy....`,
      navigate: 'aws-elastic-compute-cloud',
      published: true
    },
    {
      title: 'AWS Databases',
      readingTime: 'approx 15 minutes',
      type: 'Theory',
      date: '20/12/2023',
      tags: [{ name: 'AWS', background: '#FF9900', icon: <AWSSVG /> }, { name: 'RDS', background: '#FF9900', icon: <AWSRDSSVG /> }],
      intro: `This service allows you to create a database in the cloud. You can choose from the following: Microsoft SQL Server, MySQL, Postgres, MariaDB, Oracle,
      This service is managed by AWS which means you won't be able to SSH into the instance but you do benefit from a list of services such as...`,
      navigate: 'aws-databases',
      published: true
    },
    {
      title: 'AWS Route53',
      readingTime: 'approx 16 minutes',
      type: 'Theory',
      date: '24/05/2024',
      tags: [{ name: 'AWS', background: '#FF9900', icon: <AWSSVG /> }, { name: 'Route53', background: '#FF9900', icon: <AWSRoute53SVG /> }],
      intro: `Amazon Route 53 is a scalable and highly available Domain Name System (DNS). It is designed to route end-user requests to internet applications hosted on AWS infrastructure,
      as well as external resources. Overall, Amazon Route 53 is a robust solution for DNS management...`,
      navigate: 'aws-route53',
      published: true
    },
    {
      title: 'AWS S3',
      readingTime: 'approx 20 mins',
      type: 'Theory',
      date: '28/05/2024',
      tags: [{ name: 'AWS', background: '#FF9900', icon: <AWSSVG /> }, { name: 'S3', background: '#FF9900', icon: <AWSS3SVG /> }],
      intro: `Amazon Simple Storage Service (Amazon S3) is a highly scalable, durable, and secure object storage service. Amazon S3 is widely used across industries for its reliability,
      scalability, and security, making it a foundational service for storing and managing data in the cloud....`,
      navigate: 'aws-s3',
      published: true
    },
    {
      title: 'AWS CloudFront',
      readingTime: 'approx 7 mins',
      type: 'Theory',
      date: '24/07/2024',
      tags: [{ name: 'AWS', background: '#FF9900', icon: <AWSSVG /> }, { name: 'CloudFront', background: '#FF9900', icon: <AWSCloudfrontSVG /> }],
      intro: `Amazon CloudFront is a content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds. 
      CloudFront integrates with other AWS services to give developers and businesses an easy way to distribute content to end users with minimal delay...`,
      navigate: 'aws-cloudfront',
      published: true
    },
    {
      title: 'AWS SQS',
      readingTime: 'approx 5 mins',
      type: 'Theory',
      date: '05/08/2024',
      tags: [{ name: 'AWS', background: '#FF9900', icon: <AWSSVG /> }, { name: 'Simple Queue Service', background: '#FF9900', icon: <AWSSQSSVG /> }],
      intro: `Amazon Simple Queue Service (Amazon SQS) is a fully managed message queuing service provided by Amazon Web Services (AWS). It enables the decoupling and scaling of microservices, 
      distributed systems, and serverless applications. When we start deploying multiple applications, they will inevitably need to communicate with one another...`,
      navigate: 'aws-sqs',
      published: true
    },
    {
      title: 'AWS SNS',
      readingTime: 'approx 4 mins',
      type: 'Theory',
      date: '06/08/2024',
      tags: [{ name: 'AWS', background: '#FF9900', icon: <AWSSVG /> }, { name: 'Simple Notification Service', background: '#FF9900', icon: <AWSSNSSVG /> }],
      intro: `Amazon Simple Notification Service (Amazon SNS) is a fully managed messaging service provided by Amazon Web Services (AWS) designed to send messages to a large number of subscribers or other services. 
      What if you wanted to send one message to many endpoints? Instead of having a direct integration with each endpoint/service...`,
      navigate: 'aws-sns',
      published: true
    },
    {
      title: 'AWS Kinesis',
      readingTime: 'approx ~ mins',
      type: 'Theory',
      date: '28/08/2024',
      tags: [{ name: 'AWS', background: '#FF9900', icon: <AWSSVG /> }, { name: 'Kinesis', background: '#FF9900', icon: <AWSKinesisSVG /> }],
      intro: `...`,
      navigate: 'aws-kinesis',
      published: true
    },
    {
      title: 'AWS Containers',
      readingTime: 'approx 10 mins',
      type: 'Theory',
      date: '06/08/2024',
      tags: [{ name: 'AWS', background: '#FF9900', icon: <AWSSVG /> }, { name: 'Elastic Container Service', background: '#FF9900', icon: <AWSECSSVG /> }, { name: 'Elastic Kubernetes Service', background: '#FF9900', icon: <AWSEKSSVG /> }, { name: 'Fargate', background: '#FF9900', icon: <AWSFargateSVG /> }],
      intro: `Docker is an open-source platform designed to automate the deployment, scaling, and management of applications within lightweight, portable containers. Containers package an application with all its dependencies 
      (libraries, binaries, etc.), ensuring that it runs consistently across different environments. Apps are packed in containers that can be run on any OS...`,
      navigate: 'aws-containers',
      published: true
    },
    {
      title: 'AWS VPC',
      readingTime: 'approx 30 mins',
      type: 'Theory',
      date: '11/08/2024',
      tags: [{ name: 'AWS', background: '#FF9900', icon: <AWSSVG /> }, { name: 'Virtual Private Cloud', background: '#FF9900', icon: <AWSVPCSVG /> }],
      intro: `A Virtual Private Cloud (VPC) is a logically isolated section of the AWS cloud where you can launch AWS resources, such as EC2 instances, within a virtual network that you define. A VPC allows you to 
      customize your network environment, including selecting your own IP address range, creating subnets, configuring route tables, and setting up gateways...`,
      navigate: 'aws-vpc',
      published: true
    },
    {
      title: 'React.js Text Based Adventure Game',
      readingTime: 'N/A',
      type: 'Practical',
      date: '07/05/2023',
      tags: [{ name: 'React', background: '#64CBF6', icon: <ReactjsSVG /> }, { name: 'JavaScript', background: '#F4BF36', icon: <JavascriptSVG /> }],
      intro: `I've been contemplating on whether or not to do a separate blog post to explain what the React.js framework is but I want to move away from my last posts and get stuck in with building something!
      If you're completely new to React I would recommend having a gander at their documentation...`,
      navigate: 'react-text-based-adventure',
      published: false
    }
  ]);

  const defaultArr = [
    {
      title: 'The Start',
      readingTime: 'less than 1 minute',
      type: 'Retrospective',
      date: '05/04/2023',
      tags: [{ name: 'Misc', background: '#23262E' }],
      intro: `For a long time I've wanted to write a blog about technologies I'm interested in.
            The purpose of this blog is just to document my personal journey learning cool tech,
            if only to cement my own understanding and potentially help people with similar interests...`,
      navigate: 'the-start',
      published: true
    },
    {
      title: 'JavaScript Arrays',
      readingTime: 'approx 10 minutes',
      type: 'Theory',
      date: '12/04/2023',
      tags: [{ name: 'JavaScript', background: '#F4BF36', icon: <JavascriptSVG /> }],
      intro: `Do you ever find yourself forgetting what helper methods would be best to manipulate your data? 
      In this post, I would like to go through the different helper functions and the use cases for manipulating your data.
      But before we get into that...
    `,
      navigate: 'javascript-arrays',
      published: true
    },
    {
      title: 'JavaScript Objects',
      readingTime: 'approx 5 minutes',
      type: 'Theory',
      date: '04/05/2023',
      tags: [{ name: 'JavaScript', background: '#F4BF36', icon: <JavascriptSVG /> }],
      intro: `After writing a blog post about arrays, which you can find here. Naturally it feels like the next post needs to be about JavaScript Objects. 
      Similar to my last post, I'll be keeping a similar format; that being explaining what objects are and how we can use them. Simple enough? Let's get it...`,
      navigate: 'javascript-objects',
      published: true
    },
    {
      title: 'AWS IAM',
      readingTime: 'approx 6 minutes',
      type: 'Theory',
      date: '26/10/2023',
      tags: [{ name: 'AWS', background: '#FF9900', icon: <AWSSVG /> }, { name: 'IAM', background: '#FF9900', icon: <AWSIAMSVG /> }],
      intro: `This is the first of my AWS series blog posts where I'll be going through the Identity and Access Management Service, also known as IAM. I'm hoping 
      this will serve at least somewhat of a refresher or a quick reference guide for those familiar with the IAM service; if not getting to grips with the basics 
      if you're not familiar...`,
      navigate: 'aws-identity-access-management',
      published: true
    },
    {
      title: 'AWS EC2',
      readingTime: 'approx 25 minutes',
      type: 'Theory',
      date: '02/11/2023',
      tags: [{ name: 'AWS', background: '#FF9900', icon: <AWSSVG /> }, { name: 'IAM', background: '#FF9900', icon: <AWSEC2SVG /> }],
      intro: `In this blog post we'll be going through the Elastic Compute Cloud service, also known as EC2 which can be defined as an infrastructure as a Service (IaaS). 
      In short EC2 is a virtual service in the AWS cloud. Why would you need this? Well, any time you need to compute a task this service will be handy....`,
      navigate: 'aws-elastic-compute-cloud',
      published: true
    },
    {
      title: 'AWS Databases',
      readingTime: 'approx 15 minutes',
      type: 'Theory',
      date: '20/12/2023',
      tags: [{ name: 'AWS', background: '#FF9900', icon: <AWSSVG /> }, { name: 'RDS', background: '#FF9900', icon: <AWSRDSSVG /> }],
      intro: `This service allows you to create a database in the cloud. You can choose from the following: Microsoft SQL Server, MySQL, Postgres, MariaDB, Oracle,
      This service is managed by AWS which means you won't be able to SSH into the instance but you do benefit from a list of services such as...`,
      navigate: 'aws-databases',
      published: true
    },
    {
      title: 'AWS Route53',
      readingTime: 'approx 16 minutes',
      type: 'Theory',
      date: '24/05/2024',
      tags: [{ name: 'AWS', background: '#FF9900', icon: <AWSSVG /> }, { name: 'Route53', background: '#FF9900', icon: <AWSRoute53SVG /> }],
      intro: `Amazon Route 53 is a scalable and highly available Domain Name System (DNS). It is designed to route end-user requests to internet applications hosted on AWS infrastructure,
      as well as external resources. Overall, Amazon Route 53 is a robust solution for DNS management...`,
      navigate: 'aws-route53',
      published: true
    },
    {
      title: 'AWS S3',
      readingTime: 'approx 20 mins',
      type: 'Theory',
      date: '28/05/2024',
      tags: [{ name: 'AWS', background: '#FF9900', icon: <AWSSVG /> }, { name: 'S3', background: '#FF9900', icon: <AWSS3SVG /> }],
      intro: `Amazon Simple Storage Service (Amazon S3) is a highly scalable, durable, and secure object storage service. Amazon S3 is widely used across industries for its reliability,
      scalability, and security, making it a foundational service for storing and managing data in the cloud....`,
      navigate: 'aws-s3',
      published: true
    },
    {
      title: 'AWS CloudFront',
      readingTime: 'approx 7 mins',
      type: 'Theory',
      date: '24/07/2024',
      tags: [{ name: 'AWS', background: '#FF9900', icon: <AWSSVG /> }, { name: 'CloudFront', background: '#FF9900', icon: <AWSCloudfrontSVG /> }],
      intro: `Amazon CloudFront is a content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds. 
      CloudFront integrates with other AWS services to give developers and businesses an easy way to distribute content to end users with minimal delay...`,
      navigate: 'aws-cloudfront',
      published: true
    },
    {
      title: 'AWS SQS',
      readingTime: 'approx 5 mins',
      type: 'Theory',
      date: '05/08/2024',
      tags: [{ name: 'AWS', background: '#FF9900', icon: <AWSSVG /> }, { name: 'Simple Queue Service', background: '#FF9900', icon: <AWSSQSSVG /> }],
      intro: `Amazon Simple Queue Service (Amazon SQS) is a fully managed message queuing service provided by Amazon Web Services (AWS). It enables the decoupling and scaling of microservices, 
      distributed systems, and serverless applications. When we start deploying multiple applications, they will inevitably need to communicate with one another...`,
      navigate: 'aws-sqs',
      published: true
    },
    {
      title: 'AWS SNS',
      readingTime: 'approx 4 mins',
      type: 'Theory',
      date: '06/08/2024',
      tags: [{ name: 'AWS', background: '#FF9900', icon: <AWSSVG /> }, { name: 'Simple Notification Service', background: '#FF9900', icon: <AWSSNSSVG /> }],
      intro: `Amazon Simple Notification Service (Amazon SNS) is a fully managed messaging service provided by Amazon Web Services (AWS) designed to send messages to a large number of subscribers or other services. 
      What if you wanted to send one message to many endpoints? Instead of having a direct integration with each endpoint/service...`,
      navigate: 'aws-sns',
      published: true
    },
    {
      title: 'AWS Kinesis',
      readingTime: 'approx ~ mins',
      type: 'Theory',
      date: '28/08/2024',
      tags: [{ name: 'AWS', background: '#FF9900', icon: <AWSSVG /> }, { name: 'Kinesis', background: '#FF9900', icon: <AWSKinesisSVG /> }],
      intro: `...`,
      navigate: 'aws-kinesis',
      published: true
    },
    {
      title: 'AWS Containers',
      readingTime: 'approx 10 mins',
      type: 'Theory',
      date: '06/08/2024',
      tags: [{ name: 'AWS', background: '#FF9900', icon: <AWSSVG /> }, { name: 'Elastic Container Service', background: '#FF9900', icon: <AWSECSSVG /> }, { name: 'Elastic Kubernetes Service', background: '#FF9900', icon: <AWSEKSSVG /> }, { name: 'Fargate', background: '#FF9900', icon: <AWSFargateSVG /> }],
      intro: `Docker is an open-source platform designed to automate the deployment, scaling, and management of applications within lightweight, portable containers. Containers package an application with all its dependencies 
      (libraries, binaries, etc.), ensuring that it runs consistently across different environments. Apps are packed in containers that can be run on any OS...`,
      navigate: 'aws-containers',
      published: true
    },
    {
      title: 'AWS VPC',
      readingTime: 'approx 30 mins',
      type: 'Theory',
      date: '11/08/2024',
      tags: [{ name: 'AWS', background: '#FF9900', icon: <AWSSVG /> }, { name: 'Virtual Private Cloud', background: '#FF9900', icon: <AWSVPCSVG /> }],
      intro: `A Virtual Private Cloud (VPC) is a logically isolated section of the AWS cloud where you can launch AWS resources, such as EC2 instances, within a virtual network that you define. A VPC allows you to 
      customize your network environment, including selecting your own IP address range, creating subnets, configuring route tables, and setting up gateways...`,
      navigate: 'aws-vpc',
      published: true
    },
    {
      title: 'React.js Text Based Adventure Game',
      readingTime: 'N/A',
      type: 'Practical',
      date: '07/05/2023',
      tags: [{ name: 'React', background: '#64CBF6', icon: <ReactjsSVG /> }, { name: 'JavaScript', background: '#F4BF36', icon: <JavascriptSVG /> }],
      intro: `I've been contemplating on whether or not to do a separate blog post to explain what the React.js framework is but I want to move away from my last posts and get stuck in with building something!
      If you're completely new to React I would recommend having a gander at their documentation...`,
      navigate: 'react-text-based-adventure',
      published: false
    }
  ];

  useEffect(() => {
    if (search !== '') {
      setBlogPosts(blogPosts.filter(x => x.title.toLowerCase().includes(search.toLowerCase()) || x.type.toLowerCase().includes(search.toLowerCase())));
      if (blogPosts.length === 0) {
        setIsEmpty(true)
      }
    } else {
      setIsEmpty(false)
      setBlogPosts(defaultArr.reverse());
    }
  }, [search]);

  // analytics
  useEffect(() => {
    if (window.location.hostname !== "localhost") {
      ReactGA.pageview('/blog');
    }
  }, []);

  const handlePillButtonClick = button => {
    const newFilterButtons = [...filterButtons];
    const index = newFilterButtons.indexOf(button);
    newFilterButtons[index].active = !newFilterButtons[index].active;
    setFilterButtons(newFilterButtons);

    const arr = [];

    const filterActive = filterButtons.some(x => x.active === true);

    if (filterActive) {
      filterButtons.forEach(x => {
        blogPosts.forEach(y => {
          y.tags.forEach(tag => {
            if (tag.name === x.name && x.active === true) {
              console.log(y);
              if (!arr.includes(y)) {
                arr.push(y);
              }
              console.log(arr);
            } else if (tag.name === x.name && x.active === false) {
              const index = arr.indexOf(x => x === y);
              if (index !== -1) {
                arr.splice(index, 1);
              }
            }
          });
        });
      });
      setBlogPosts(arr.reverse());
    } else {
      setBlogPosts(defaultArr.reverse());
    }
  };

  return (
    <>
      <SearchBarWrapper>
        <StyledSearchIcon />
        <StyledSearchBar placeholder="Search" type="text" onChange={e => setSearch(e.target.value)} value={search} />
        <StyledCloseButton onClick={() => setSearch('')}> <StyledCloseIcon /></StyledCloseButton>
      </SearchBarWrapper>
      <StyledPillButtonWrapper>
        {filterButtons.map((button, key) => {
          return (
            <StyledPillButton
              key={key}
              colour={button.colour}
              active={button.active}
              onClick={() => handlePillButtonClick(button)}
            >
              {button.name}
            </StyledPillButton>
          );
        })}
      </StyledPillButtonWrapper>
      {!isEmpty ?
        <Pagination itemsPerPage={6} items={blogPosts} />
        : <Container>
          <Message>0 Results Found</Message>
          <Description>Sorry, but there's no match for your search.</Description>
          <Button onClick={() => setSearch('')}>Clear</Button>
        </Container>
      }
    </>
  );
}