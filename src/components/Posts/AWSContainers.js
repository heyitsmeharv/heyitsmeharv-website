import React, { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

// helpers
import { logPageView } from "../../helpers/analytics";

// animations
import SlideInBottom from "../../animations/SlideInBottom";

// icons
import { ChevronBackCircle } from '@styled-icons/ionicons-solid/ChevronBackCircle';
import { AWSSVG, AWSECSSVG, AWSEKSSVG, AWSFargateSVG } from '../../resources/styles/icons';

// components
import { StyledNavButton, StyledNavLink } from '../Button/Button';
import Table from '../../components/Table/Table';

// images
import Docker from "../../resources/images/blog/AWSContainers/containers_docker.jpeg";
import EC2LaunchType from "../../resources/images/blog/AWSContainers/containers_ecs_ec2_launch_type.jpeg";
import FargateLaunchType from "../../resources/images/blog/AWSContainers/containers_ecs_fargate_launch_type.jpeg";
import ECSIAMRoles from "../../resources/images/blog/AWSContainers/containers_ecs_iam_roles.jpeg";
import ECSLoadBalancers from "../../resources/images/blog/AWSContainers/containers_ecs_load_balancers.jpeg";
import ECSEFS from "../../resources/images/blog/AWSContainers/containers_ecs_efs.jpeg";
import ECSScaling from "../../resources/images/blog/AWSContainers/containers_ecs_scaling.jpeg";
import ECR from "../../resources/images/blog/AWSContainers/containers_ecr.jpeg";
import EKS from "../../resources/images/blog/AWSContainers/containers_eks.jpeg";


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

const AWSContainers = () => {

  // analytics
  useEffect(() => {
    if (window.location.hostname !== "localhost") {
      logPageView("blog/aws-containers");
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
          <Title>AWS Containers (ECS, EKS, Fargate)</Title>
          <IconWrapper>
            <Icon><AWSSVG /></Icon>
            <Icon><AWSECSSVG /></Icon>
            <Icon><AWSEKSSVG /></Icon>
            <Icon><AWSFargateSVG /></Icon>
          </IconWrapper>
        </Flex>
        <Spacer />
        <Text>
          In this post we'll be diving into Containers in Amazon which includes Amazon ECS (Elastic Container Service), EKS (Elastic Kubernetes Service) and Fargate.
          <StyledAnchor href="#what-is-docker?"><StyledListItem>What is Docker?</StyledListItem></StyledAnchor>
          <StyledAnchor href="#ecs"><StyledListItem>Amazon ECS (Elastic Container Service)</StyledListItem></StyledAnchor>
          <StyledAnchor href="#iam-roles-for-ecs"><StyledListItem>IAM Roles for ECS</StyledListItem></StyledAnchor>
          <StyledAnchor href="#load-balancers-integration"><StyledListItem>ECS Load Balancers Integration</StyledListItem></StyledAnchor>
          <StyledAnchor href="#ecs-data-volumes"><StyledListItem>ECS - Data Volumes (EFS)</StyledListItem></StyledAnchor>
          <StyledAnchor href="#auto-scaling"><StyledListItem>ECS Service Auto Scaling</StyledListItem></StyledAnchor>
          <StyledAnchor href="#ecr"><StyledListItem>Amazon ECR (Elastic Container Registry)</StyledListItem></StyledAnchor>
          <StyledAnchor href="#eks"><StyledListItem>Amazon EKS (Elastic Kubernetes Service)</StyledListItem></StyledAnchor>
          <Spacer />
          <SubTitle id="s3-introduction">What is Docker?</SubTitle>
          Docker is an open-source platform designed to automate the deployment, scaling, and management of applications within lightweight, portable containers. Containers package an application with all its dependencies
          (libraries, binaries, etc.), ensuring that it runs consistently across different environments. Apps are packed in containers that can be run on any OS.
          <StyledImage src={Docker} />
          <SubTitleSmall>Images</SubTitleSmall>
          A Docker image is a read-only template used to create containers. It contains the application code, libraries, and other dependencies needed to run the application. Images are built from a set of instructions
          defined in a Dockerfile.
          <Spacer />
          <SubTitleSmall>Dockerfile</SubTitleSmall>
          A Dockerfile is a text file that contains a series of commands that Docker uses to build an image. It specifies the base image to use, the application code, environment variables, and other configurations.
          <Spacer />
          <SubTitleSmall>Docker Hub</SubTitleSmall>
          Docker Hub is a cloud-based registry service that allows you to find and share container images with others. You can pull images from Docker Hub or push your custom images for others to use.
          <Spacer />
          <SubTitleSmall>Docker Engine</SubTitleSmall>
          Docker Engine is the runtime that runs and manages containers on a host machine. It can be thought of as the core of Docker, responsible for creating, running, and managing containers.
          <Spacer />
          <SubTitleSmall>Volumes</SubTitleSmall>
          Volumes are used to persist data generated by and used by Docker containers. They allow data to be stored outside the container, so it can be shared between containers or remain available even if a container is deleted.
          <Spacer />
          <SubTitleSmall>Networking</SubTitleSmall>
          Docker provides various networking options to connect containers to each other and to the outside world. This includes bridge networks, overlay networks, and host networks, among others.
          <Spacer />
          <SubTitle id="ecs">Amazon ECS</SubTitle>
          Amazon ECS (Elastic Container Service) is a fully managed container orchestration service. It allows you to run and manage Docker containers on a cluster of Amazon EC2 instances
          or using AWS Fargate, a serverless compute engine. ECS is designed to simplify the deployment, management, and scaling of containerized applications.
          <Spacer />
          <SubTitleSmall>Cluster</SubTitleSmall>
          A cluster is a logical grouping of EC2 instances or Fargate tasks where your containers are deployed and managed. ECS can manage the cluster for you, including provisioning and scaling the underlying infrastructure.
          <Spacer />
          <SubTitleSmall>Task Definition</SubTitleSmall>
          A task definition is a blueprint for your application. It defines the Docker containers that should be run as part of a task, specifying details such as the Docker image, CPU and memory requirements, networking information, and environment variables.
          <Spacer />
          <SubTitleSmall>Task</SubTitleSmall>
          A task is an instance of a task definition. When you run a task, ECS launches the containers defined in the task definition on your cluster.
          <Spacer />
          <SubTitleSmall>Service</SubTitleSmall>
          A service in ECS is used to ensure that a specified number of tasks are running continuously. Services can automatically scale tasks based on demand and replace failed tasks to maintain the desired number of running instances.
          <Spacer />
          <SubTitleSmall>Launch Type</SubTitleSmall>
          <StyledListItem><BoldTextSmall>EC2 Launch Type</BoldTextSmall>: In this mode, you manage the EC2 instances that make up your cluster. ECS schedules and runs containers on these instances.</StyledListItem>
          <StyledListItem><BoldTextSmall>Fargate Launch Type</BoldTextSmall>: Fargate is a serverless compute engine that allows you to run containers without managing the underlying infrastructure. You simply define your task and Fargate
            handles the rest, including provisioning and scaling the compute resources.</StyledListItem>
          <Spacer />
          <SubTitleSmall>EC2 Launch Type</SubTitleSmall>
          For an EC2 launch type you must provision and maintain the infrastructure (EC2 instances). Each EC2 instance must run the ECS agent to register in the ECS cluster.
          <StyledImage src={EC2LaunchType} />
          <Spacer />
          <SubTitleSmall>Fargate Launch Type</SubTitleSmall>
          Unlike the EC2 launch type you do not provision the infrastructure (no EC2 instances to manage). The ECS tasks are ran for you based on the CPU / RAM you need.
          <StyledImage src={FargateLaunchType} />
          <Spacer />
          <SubTitle id="iam-roles-for-ecs">IAM Roles for ECS</SubTitle>
          <StyledListItem><BoldText>EC2 Instance Profile (EC2 Launch Type only):</BoldText></StyledListItem>
          <StyledListItemIndent>Used by the ECS Agent.</StyledListItemIndent>
          <StyledListItemIndent>Makes API calls to ECS Service.</StyledListItemIndent>
          <StyledListItemIndent>Send container logs to CloudWatch Logs.</StyledListItemIndent>
          <StyledListItemIndent>Pull Docker image from ECR.</StyledListItemIndent>
          <StyledListItemIndent>Reference sensitive data in Secrets Manager or SSM Parameter Store.</StyledListItemIndent>
          <StyledListItem><BoldText>ECS Task Role:</BoldText></StyledListItem>
          <StyledListItemIndent>Allows each task to have a specific role.</StyledListItemIndent>
          <StyledListItemIndent>Use different roles for the different ECS Services you run.</StyledListItemIndent>
          <StyledListItemIndent>Task role is defined in the task definition.</StyledListItemIndent>
          <StyledImage src={ECSIAMRoles} />
          <SubTitle id="load-balancers-integration">ECS Load Balancers Integration</SubTitle>
          This can be for both launch types. Using a load balancer you can expose each task as a HTTP/S endpoint by putting a load balancer in-front of them.
          <StyledListItem><BoldTextSmall>Application Load Balancer</BoldTextSmall> Supported and works for most use cases.</StyledListItem>
          <StyledListItem><BoldTextSmall>Efficient Data Retrieval</BoldTextSmall> Recommended for high throughput / hight performance use cases, or to pair it with AWS Private Link.</StyledListItem>
          <StyledImage src={ECSLoadBalancers} />
          <SubTitle id="ecs-data-volumes">ECS - Data Volumes (EFS)</SubTitle>
          What happens if you want to persist data on the container? For this you will need to mount an EFS (Elastic File System) onto the ECS tasks to share data. Tasks running in any AZ will share the same data in the EFS file system.
          <StyledImage src={ECSEFS} />
          <SubTitle id="auto-scaling">ECS Service Auto Scaling</SubTitle>
          You can automatically increase / decrease the desired number of ECS tasks. ECS Auto Scaling uses <BoldText>AWS Application Auto Scaling</BoldText>.
          <StyledListItem>ECS Service Average CPU Utilization</StyledListItem>
          <StyledListItem>ECS Service Average Memory Utilization - scales on RAM</StyledListItem>
          <StyledListItem>ALB Request Count Per Target - metric from the ALB</StyledListItem>
          You can also setup different types of auto scaling:
          <StyledListItem><BoldText>Target Tracking:</BoldText> Scale based on target value for a specific CloudWatch metric.</StyledListItem>
          <StyledListItem><BoldText>Step Scaling:</BoldText> Scale based on a specified CloudWatch alarm.</StyledListItem>
          <StyledListItem><BoldText>Scheduled Scaling:</BoldText> Scale based on a specified date / time (predictable changes).</StyledListItem>
          <StyledImage src={ECSScaling} />
          <SubTitle id="ecr">Amazon ECR (Elastic Container Registry)</SubTitle>
          Amazon ECR is used to store and manage Docker images. You can choose to store private or public images. On top of being a repository for images, ECR supports image vulnerability scanning, versioning,
          image tags and image lifecycle.
          <StyledImage src={ECR} />
          <SubTitle id="eks">Amazon EKS (Elastic Kubernetes Service)</SubTitle>
          Amazon Elastic Kubernetes Service (Amazon EKS) is a fully managed service that allows you to run Kubernetes on AWS without needing to install, operate, and maintain your own Kubernetes control plane or nodes.
          Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications, and Amazon EKS simplifies this process by handling much of the operational complexity.
          <SubTitleSmall>Managed Control Plane</SubTitleSmall>
          Amazon EKS provides a highly available and secure Kubernetes control plane, which includes the API server, etcd (the key-value store), and other components of the control plane. AWS manages these components, including scaling, patching, and upgrades.
          <Spacer />
          <SubTitleSmall>Worker Nodes</SubTitleSmall>
          <StyledListItem>The worker nodes are the EC2 instances (or Fargate nodes) that run your Kubernetes pods (the smallest deployable units in Kubernetes). While you manage the worker nodes, EKS can help simplify their setup and scaling.</StyledListItem>
          <StyledListItem>EKS also integrates with AWS Fargate, allowing you to run Kubernetes pods without managing the underlying EC2 instances.</StyledListItem>
          <Spacer />
          <SubTitleSmall>Cluster Autoscaling</SubTitleSmall>
          EKS supports Kubernetes Cluster Autoscaler, which automatically adjusts the number of nodes in your cluster based on the resource requirements of your workloads.
          <StyledImage src={EKS} />
          <SubTitleSmall>Node Types</SubTitleSmall>
          <StyledListItem><BoldText>Managed Node Groups:</BoldText></StyledListItem>
          <StyledListItemIndent>Creates and manages Nodes (EC2 instances) for you.</StyledListItemIndent>
          <StyledListItemIndent>Nodes are part of an ASG managed by EKS.</StyledListItemIndent>
          <StyledListItemIndent>Supports On-Demand or Spot Instances.</StyledListItemIndent>
          <StyledListItem><BoldText>Self Managed Nodes:</BoldText></StyledListItem>
          <StyledListItemIndent>Nodes created by you and registered to the EKS cluster and managed by an ASG.</StyledListItemIndent>
          <StyledListItemIndent>You can use prebuild AMI (EKS Optimized AMI).</StyledListItemIndent>
          <StyledListItemIndent>Supports On-Demand or Spot Instances.</StyledListItemIndent>
          <StyledListItem><BoldText>AWS Fargate:</BoldText></StyledListItem>
          <StyledListItemIndent>No maintenance required; no nodes managed.</StyledListItemIndent>
        </Text>
      </Container>
    </Wrapper>
  );
}

export default AWSContainers;