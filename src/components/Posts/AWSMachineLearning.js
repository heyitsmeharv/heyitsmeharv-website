import React, { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";



// animations
import SlideInBottom from "../../animations/SlideInBottom";

// icons
import { ChevronBackCircle } from '@styled-icons/ionicons-solid/ChevronBackCircle';
import {
  AWSSVG,
  AWSRegoknitionSVG,
  AWSPollySVG,
  AWSLexSVG,
  AWSComprehendSVG,
  AWSSageMakerSVG
} from '../../resources/styles/icons';

// components
import { StyledNavButton, StyledNavLink } from '../Button/Button';
import Table from '../Table/Table';

// images
import Rekognition from "../../resources/images/blog/AWSMachineLearning/aws_machine_learning_rekognition.jpeg"
import LexConnectExample from "../../resources/images/blog/AWSMachineLearning/aws_machine_learning_lex_connect.jpeg"
import SageMakerExample from "../../resources/images/blog/AWSMachineLearning/aws_machine_learning_sagemaker.jpeg"
import ForcastExample from "../../resources/images/blog/AWSMachineLearning/aws_machine_learning_forecast.jpeg"
import KendraExample from "../../resources/images/blog/AWSMachineLearning/aws_machine_learning_kendra.jpeg"
import PersonalizeExample from "../../resources/images/blog/AWSMachineLearning/aws_machine_learning_personalize.jpeg"


// codeblocks
import { SSMLExample } from "../../helpers/codeblocks.js";

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

const AWSMachineLearning = () => {
  const columns = ['Capability', 'Description'];
  const data = [
    { Capability: 'Language Detection', Description: 'Identifies the dominant language in text (e.g., English, French, Spanish).' },
    { Capability: 'Sentiment Analysis', Description: 'Determines if text sentiment is positive, negative, neutral, or mixed.' },
    { Capability: 'Entity Recognition', Description: 'Detects entities like names, dates, and organizations in text.' },
    { Capability: 'Keyphrase Extraction', Description: 'Extracts phrases that represent key ideas in the text.' },
    { Capability: 'Custom Classification', Description: 'Allows you to create models for categorizing text based on your business needs.' },
    { Capability: 'PII Detection', Description: 'Identifies sensitive data like Social Security Numbers or email addresses.' }
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
          <Title>Amazon Machine Learning</Title>
          <IconWrapper>
            <Icon><AWSSVG /></Icon>
            <Icon><AWSRegoknitionSVG /></Icon>
            <Icon><AWSPollySVG /></Icon>
            <Icon><AWSLexSVG /></Icon>
            <Icon><AWSComprehendSVG /></Icon>
            <Icon><AWSSageMakerSVG /></Icon>
          </IconWrapper>
        </FlexTop>
        <Spacer />
        <Text>
          In this post we'll be diving into Amazon's machine learning solutions.
          <StyledAnchor href="#aws-rekognition"><StyledListItem>Rekognition</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-transcribe"><StyledListItem>Transcribe</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-polly"><StyledListItem>Polly</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-translate"><StyledListItem>Translate</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-lex-and-connect"><StyledListItem>Lex & Connect</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-comprehend"><StyledListItem>Comprehend</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-sagemaker"><StyledListItem>SageMaker</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-forecast"><StyledListItem>Forecast</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-kendra"><StyledListItem>Kendra</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-personalize"><StyledListItem>Personalize</StyledListItem></StyledAnchor>
          <StyledAnchor href="#aws-text-extract"><StyledListItem>Text Extract</StyledListItem></StyledAnchor>
          <StyledAnchor href="#machine-learning-summary"><StyledListItem>Machine Learning Summary</StyledListItem></StyledAnchor>
          <Spacer />
          <SubTitle id="aws-rekognition">Rekognition</SubTitle>
          Amazon Rekognition is a cloud-based image and video analysis service that makes it easy to add advanced computer vision capabilities
          to your applications. Amazon Rekognition includes a simple, easy-to-use API that can quickly analyze any image or video file that’s stored in Amazon S3.
          <HeadingSmall>How Does It Work?</HeadingSmall>
          <StyledListItem>Image/Video Input: Upload images or videos directly or via S3 integration.</StyledListItem>
          <StyledListItem>API Calls: Use Rekognition’s RESTful APIs to analyze the media (e.g., DetectLabels, RecognizeCelebrities, DetectFaces).</StyledListItem>
          <StyledListItem>Analysis: Rekognition processes the media and returns JSON-formatted responses containing detected features.</StyledListItem>
          <StyledListItem>Custom Training (Custom Labels): For unique requirements, train a model using your dataset to recognize specific objects.</StyledListItem>
          <HeadingSmall>How Can Rekogniton Be Used?</HeadingSmall>
          Rekognition gives the user the capability of finding <BoldText>objects</BoldText>, <BoldText>people</BoldText>, <BoldText>text</BoldText>, <BoldText>scenes</BoldText>, <BoldText>images</BoldText> and
          <BoldText> videos</BoldText>. Facial analysis and facial searches can be used for user verification.
          <HeadingSmall>Content Moderation</HeadingSmall>
          Rekognition has the ability to detect content that is innapropriate, unwanted or offensive (images and videos). Users have the ability to set a <BoldText>Minimum Confidence Threshold</BoldText> for
          items that will be flagged. Flagged content that is sensitive can be put up for a manual review using Amazon Augmented AI (A2I).
          <StyledImage width="200px" ml="30%" src={Rekognition} />
          <SubTitle id="aws-transcribe">Transcribe</SubTitle>
          AWS Transcribe is a service that provides automatic speech-to-text (ASR) capabilities. It allows you to convert audio and video recordings into text, making it easy to process and analyze spoken content.
          <HeadingSmall>How Does It Work?</HeadingSmall>
          <StyledListItem>Audio Input: Upload pre-recorded audio/video files to an S3 bucket or stream audio in real-time using the API.</StyledListItem>
          <StyledListItem>Transcription Job: Initiate a transcription job using the AWS Management Console, CLI, or SDKs.</StyledListItem>
          <StyledListItem>Speech-to-Text Processing: AWS Transcribe uses machine learning models to process audio and generate a transcript.</StyledListItem>
          <StyledListItem>Output: The transcription is returned in JSON format, including features like timestamps, speaker labels, and confidence scores.</StyledListItem>
          <Spacer />
          <SubTitle id="aws-polly">Polly</SubTitle>
          Amazon Polly is a cloud-based text-to-speech (TTS) service that converts text into natural-sounding speech. Using advanced deep learning models, Polly supports multiple languages and a wide variety
          of lifelike voices, allowing developers to add speech synthesis capabilities to their applications.
          <HeadingSmall>Lexicons & SSML (Speech Synthesis Markup Language)</HeadingSmall>
          It's possible to customise the pronunciation of words with lexicons for example with acronyms like 'AWS' can be converted to 'Amazon Web Services'. SSML enables more customisation where you can adjust
          speech rate, volume, or pitch. Add pauses, emphasize words, or control phonetic pronunciations.
          <Spacer />
          <CodeBlock>
            {SSMLExample}
          </CodeBlock>
          <Spacer />
          <SubTitle id="aws-translate">Translate</SubTitle>
          AWS Translate is a service that provides language translation for text. It uses advanced neural machine translation models to deliver fast, high-quality, and cost-effective translations in real time
          or batch mode. With support for dozens of languages, AWS Translate makes it easy for developers to localize content and enable cross-lingual communication.
          <HeadingSmall>How Does It Work?</HeadingSmall>
          <StyledListItem>Input Text: Provide text input via the AWS Management Console, CLI, SDK, or API.</StyledListItem>
          <StyledListItem>Source and Target Languages: Specify the source language (or allow automatic detection) and the desired target language.</StyledListItem>
          <StyledListItem>Translation: AWS Translate uses neural models to process the input text and generate a translation.</StyledListItem>
          <StyledListItem>Output: The translated text is returned, preserving the format of the original content.</StyledListItem>
          <Spacer />
          <SubTitle id="aws-lex-and-connect">Lex & Connect</SubTitle>
          Amazon Lex is a fully managed service for building conversational interfaces using voice and text. With Lex, developers can create chatbots and virtual assistants for applications, using natural
          language understanding (NLU) and automatic speech recognition (ASR) to enable intuitive interactions.
          <Spacer />
          Lex is often used with Amazon Connect which is a cloud-based contact center service that enables businesses to provide scalable and cost-effective customer service solutions. It allows organizations
          to set up virtual call centers quickly, integrate with other AWS services, and deliver personalized, automated, and data-driven customer experiences.
          <StyledImage mt="10px" src={LexConnectExample} />
          <SubTitle id="aws-comprehend">Comprehend</SubTitle>
          Amazon Comprehend is a natural language processing (NLP) service powered by machine learning that helps you extract insights and patterns from unstructured text. It enables organizations to perform
          sentiment analysis, entity recognition, language detection, keyphrase extraction, and more without requiring machine learning expertise.
          <HeadingSmall>Comprehend Capabilities</HeadingSmall>
          <Table data={data} columns={columns} />
          <Spacer />
          <HeadingSmall>How Does It Work?</HeadingSmall>
          <StyledListItem>Input Text: Provide text through the AWS Management Console, CLI, or SDK.</StyledListItem>
          <StyledListItem>Select NLP Task: Choose tasks like sentiment analysis, entity detection, or custom classification.</StyledListItem>
          <StyledListItem>Processing: Amazon Comprehend uses pre-trained or custom ML models to analyze the text.</StyledListItem>
          <StyledListItem>Output: Results are returned in JSON format, detailing the extracted insights.</StyledListItem>
          <Spacer />
          <SubTitle id="aws-sagemaker">SageMaker</SubTitle>
          Amazon SageMaker is a fully managed machine learning (ML) service that provides developers and data scientists with the tools to build, train, and deploy machine learning models at scale.
          SageMaker simplifies the entire ML workflow, from data preparation to model deployment, enabling faster experimentation and reducing the complexity of building ML solutions.
          <StyledImage mt="10px" src={SageMakerExample} />
          <SubTitle id="aws-forecast">Forecast</SubTitle>
          Amazon Forecast is a fully managed service that uses machine learning (ML) to generate highly accurate forecasts for time-series data. It enables businesses to predict future outcomes
          such as product demand, inventory levels, workforce planning, and more, using historical data and additional related variables. The service is designed to be easy to use, even for users without ML expertise.
          <StyledImage mt="20px" src={ForcastExample} />
          <SubTitle id="aws-kendra">Kendra</SubTitle>
          Amazon Kendra is an intelligent search service powered by machine learning (ML) that allows organizations to index and search vast amounts of unstructured and structured data. It provides highly relevant search
          results to user queries using natural language processing (NLP) and deep learning algorithms. Kendra helps organizations improve productivity and information discovery by enabling users to find the right
          answers quickly from multiple data sources, even when the data is fragmented across platforms.
          <StyledImage mt="20px" src={KendraExample} />
          <SubTitle id="aws-personalize">Personalize</SubTitle>
          Amazon Personalize is a machine learning (ML)-powered recommendation service designed to create personalized user experiences by delivering tailored product, content, and service recommendations.
          Amazon Personalize helps businesses increase engagement, drive sales, and improve user satisfaction by leveraging ML to analyze user behavior and predict preferences.
          <StyledImage mt="20px" src={PersonalizeExample} />
          <SubTitle id="aws-text-extract">Text Extract</SubTitle>
          Amazon Textract is a fully managed machine learning service designed to extract text, handwriting, and structured data (such as tables and forms) from scanned documents, images, and PDFs.
          It goes beyond traditional Optical Character Recognition (OCR) by not only identifying text but also understanding the context and structure of the document. Textract enables businesses to
          automate the extraction of meaningful data from documents, reducing manual effort and improving operational efficiency.
          <HeadingSmall>How Does It Work?</HeadingSmall>
          <StyledListItem>Input Documents: Upload images, PDFs, or scanned documents to Amazon Textract via the console or API.</StyledListItem>
          <StyledListItem>Analysis: Textract analyzes the document to identify text, forms, and tables.</StyledListItem>
          <StyledListItem>Output: The extracted data is returned in structured JSON format, ready for downstream processing.</StyledListItem>
          <StyledListItem>Integration: Use the output with other services or applications for further processing, such as indexing, analysis, or automation.</StyledListItem>
          <Spacer />
          <SubTitle id="machine-learning-summary">Machine Learning Summary</SubTitle>
          <StyledListItem>Rekognition: Face detection, labeling, celebrity recognition.</StyledListItem>
          <StyledListItem>Transcribe: Audio to text.</StyledListItem>
          <StyledListItem>Polly: Text to audio.</StyledListItem>
          <StyledListItem>Translate: Translations.</StyledListItem>
          <StyledListItem>Lex: Conversational chatbots.</StyledListItem>
          <StyledListItem>Connect: Cloud contact center.</StyledListItem>
          <StyledListItem>Comprehend: Natural language processing.</StyledListItem>
          <StyledListItem>SageMaker: Machine learning for developers and data scientists.</StyledListItem>
          <StyledListItem>Forecast: Build highly accurate forecasts.</StyledListItem>
          <StyledListItem>Kendra: ML-powered search engine.</StyledListItem>
          <StyledListItem>Personalize: Real-time personalisation recommendations.</StyledListItem>
        </Text>
      </Container>
    </Wrapper>
  );
}

export default AWSMachineLearning;