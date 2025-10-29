import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

// helpers
import { Analytics } from "../../helpers/analytics";

// animations
import SlideInBottom from "../../animations/SlideInBottom";

// icons
import { ChevronBackCircle } from '@styled-icons/ionicons-solid/ChevronBackCircle';
import { BashSVG } from '../../resources/styles/icons';

// components
import { StyledNavButton, StyledNavLink, CopyButton } from '../Button/Button';
import Table from '../Table/Table';

// codeblocks
import {
  bashEnvironment,
  powershell,
  bashVersion,
  bashOutput,
  bashFeed,
  bashFeed2,
  bashFeedAlt,
  bashMixingMatching,
  bashRedirectErr,
  bashRedirectErr2,
  bashFileDescriptors,
  bashAppend,
  bashPipe,
  bashFirstScript,
  bashFirstScript2,
  bashFirstScript3,
  bashFirstScript4,
  pythonScript,
  bashProjectSetup,
  bashProjectSetup2,
  bashProjectSetup3,
  bashProjectSetup4,
  bashUserInput,
  bashCommandSubstitution,
  bashPassingArguments,
  bashPassingArguments2,
  bashPassingArguments3,
  bashSystemInfo,
  bashSystemInfo2,
  bashSystemInfo3,
  bashIf,
  bashIf2,
  bashIfElse,
  bashCombiningConditions,
  bashCaseStatement,
  bashForLoop,
  bashForLoop2,
  bashWhileLoop,
  bashWhileLoop2,
  bashUntilLoop,
  bashLoopExample,
  bashExplicitlyFail,
  bashFunctions,
  bashFailGracefully,
  bashSafeLogger,
  bashTinyLoggingHelper,
  bashTinyLoggingHelper2,
  bashReusableTemplate,
  bashTrap,
  bashDebugMode,
  bashDebugMode2,
  bashDebugMode3,
  bashTrapDebug,
  bashWildcardsText,
  bashHandlingExpectedFailures,
  bashHandlingExpectedFailures2,
  bashLoggingDebugOutput,
  bashLoggingDebugOutput2,
  bashNullGlob,
  bashWildcards,
  bashGrep,
  bashGrep2,
  bashSed,
  bashSed2,
  bashSed3,
  bashAwk,
  bashAwk2,
  bashAwk3,
  bashGrepSedAwk,
  bashGrepSedAwk2,
  bashCleaningCSVData,
  bashCleaningCSVData2,
  bashCleaningCSVData3,
  bashCleaningCSVDataText,
  bashPing,
  bashPing2,
  bashPing3,
  bashCurl,
  bashCurl2,
  bashCurl3,
  bashCurl4,
  bashCurl5,
  bashCurl6,
  bashCurl7,
  bashSCP,
  bashSCP2,
  bashNC,
  bashNC2,
  bashDig,
  bashDig2,
  bashDig3,
  bashMonitoring
} from "../../helpers/codeblocks";

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

const FlexColumn = styled.div`
  display: flex;
  justify-content: space-evenly;

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

const ItalicText = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  font-style: italic;
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
  width: 100%;
`;

const StyledListItem = styled.li`
  color: ${({ theme }) => theme.text};
  margin-left: 5%;
  width: 100%;
`;

const StyledListItemIndent = styled.li`
  color: ${({ theme }) => theme.text};
  margin-left: 10%;
  width: 100%;
`;

const StyledListItemIndentExtra = styled.li`
  color: ${({ theme }) => theme.text};
  margin-left: 15%;
  width: 100%;
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

const BashScripting = () => {

  useEffect(() => {
    Analytics.event('blog_opened', { slug: 'getting-started-with-bash-scripting' });
  }, []);

  const [isCopied, setIsCopied] = useState([
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
    { value: false },
  ]);

  const handleCopy = (code, key) => {
    const isCopiedDefault = [
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
      { value: false },
    ];
    navigator.clipboard.writeText(code);

    const newIsCopied = [...isCopied];
    newIsCopied[key].value = true;
    setIsCopied(newIsCopied);

    setTimeout(() => setIsCopied(isCopiedDefault), 1500);
  };

  const columns = ['Command', 'Description', 'Example'];
  const data = [
    { Command: 'pwd', Description: 'Prints the current directory', Example: 'pwd' },
    { Command: 'echo', Description: 'Print text to the terminal', Example: 'echo "Please enter a number: "' },
    { Command: 'ls', Description: 'Lists files and directories', Example: 'ls -l' },
    // { Command: 'df', Description: 'Display the amount of disk space available', Example: 'ls -l' },
    { Command: 'cd', Description: 'Changes directory', Example: 'cd /etc' },
    { Command: 'mkdir', Description: 'Creates a new directory', Example: 'mkdir projects' },
    { Command: 'touch', Description: 'Creates a new file', Example: 'touch script.sh' },
    { Command: 'mv', Description: 'Moves or renames files', Example: 'mv old.txt new.txt' },
    { Command: 'cp', Description: 'Copies files', Example: 'cp file.txt backup.txt' },
    { Command: 'rm', Description: 'Deletes files', Example: 'rm file.txt' },
    // { Command: 'cat', Description: 'Concatenate and print the contents of a file', Example: 'rm file.txt' },
    // { Command: 'grep', Description: 'Search for a pattern in a file.', Example: 'rm file.txt' },
    // { Command: 'chmod', Description: 'Change the permissions of a file or directory.', Example: 'rm file.txt' },
    // { Command: 'sudo', Description: 'Run a command with administrative privileges.', Example: 'rm file.txt' },
    // { Command: 'history', Description: 'Show a list of previously executed commands.', Example: 'rm file.txt' },
    // { Command: 'ps', Description: 'Display information about running processes.', Example: 'rm file.txt' },
  ];

  const columns2 = ['Flag', 'What it checks', 'Example'];
  const data2 = [
    { Flag: '-f', 'What it checks': 'File exists', Example: '[ -f file.txt ]' },
    { Flag: '-d', 'What it checks': 'Directory exists', Example: '[ -d myfolder ]' },
    { Flag: '-e', 'What it checks': 'File or directory exists', Example: '[ -e path ]' },
    { Flag: '-r', 'What it checks': 'Readable', Example: '[ -r file.txt ]' },
    { Flag: '-w', 'What it checks': 'Writable', Example: '[ -w file.txt ]' },
    { Flag: '-x', 'What it checks': 'Executable', Example: '[ -x script.sh ]' },
  ];

  const columns3 = ['Operator', 'Meaning', 'Example'];
  const data3 = [
    { Operator: '-eq', Meaning: 'Equal', Example: '[ $a -eq $b ]' },
    { Operator: '-ne', Meaning: 'Not equal', Example: '[ $a -ne $b ]' },
    { Operator: '-gt', Meaning: 'Greater than', Example: '[ $a -gt $b ]' },
    { Operator: '-lt', Meaning: 'Less than', Example: '[ $a -lt $b ]' },
    { Operator: '-ge', Meaning: 'Greater or equal', Example: '[ $a -ge $b ]' },
    { Operator: '-le', Meaning: 'Less or equal', Example: '[ $a -le $b ]' },
  ];


  const columns4 = ['Operator', 'Meaning', 'Example'];
  const data4 = [
    { Operator: '&&', Meaning: 'AND', Example: '[ $a -gt 5 ] && [ $b -lt 10 ]' },
    { Operator: '!', Meaning: 'NOT', Example: '[ ! -f file.txt ]' },
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
          <Title>Getting Started with Bash Scripting</Title>
          <IconWrapper>
            <Icon><BashSVG /></Icon>
          </IconWrapper>
        </Flex>
        <Spacer />
        <Text>
          When you first start working in the command line, it can feel like stepping into a different world - one where you're talking directly to your computer instead of clicking buttons. It's intimidating at first,
          but once you realise how much power sits behind a few keystrokes, it's addictive. In this post, we're going to start from the very beginning. We'll cover what Bash actually is, how to get set up, and then we'll
          move into writing our first few scripts. By the end, you'll be automating small tasks and understanding how your system works under the hood. Feel free to skip to any section:
          <Spacer />
          <FlexColumn>
            <div>
              <StyledAnchor href="#what-is-bash"><StyledListItem>What is Bash?</StyledListItem></StyledAnchor>
              <StyledAnchor href="#bash-vs-command-line"><StyledListItem>Bash vs. the Command Line - What's the Difference?</StyledListItem></StyledAnchor>
              <StyledAnchor href="#getting-comfortable-in-the-terminal"><StyledListItem>Getting Comfortable in the Terminal</StyledListItem></StyledAnchor>
              <StyledAnchor href="#setting-up-your-environment"><StyledListItem>Setting up Your Environment</StyledListItem></StyledAnchor>
              <StyledAnchor href="#writing-your-first-script"><StyledListItem>Writing Your First Script</StyledListItem></StyledAnchor>
              <StyledAnchor href="#redirecting-and-chaining-commands"><StyledListItem>Redirecting and Chaining Commands</StyledListItem></StyledAnchor>
              <StyledAnchor href="#setting-up-a-project-folder"><StyledListItem>A Quick Automation: Setting Up a Project Folder</StyledListItem></StyledAnchor>
              <StyledAnchor href="#logic-conditions-loops"><StyledListItem>Logic, Conditions, and Loops</StyledListItem></StyledAnchor>
            </div>
            <div>
              <StyledAnchor href="#using-variables-and-user-input"><StyledListItem>Using Variables and User Input</StyledListItem></StyledAnchor>
              <StyledAnchor href="#command-substitution"><StyledListItem>Command Substitution</StyledListItem></StyledAnchor>
              <StyledAnchor href="#passing-arguments"><StyledListItem>Passing Arguments</StyledListItem></StyledAnchor>
              <StyledAnchor href="#building-something-useful"><StyledListItem>Building Something Useful: A System Info Script</StyledListItem></StyledAnchor>
              <StyledAnchor href="#functions-exit-codes-error-handling"><StyledListItem>Functions, Exit Codes, and Error Handling</StyledListItem></StyledAnchor>
              <StyledAnchor href="#how-to-debug-and-troubleshoot-bash-scripts"><StyledListItem>How to Debug and Troubleshoot Bash Scripts</StyledListItem></StyledAnchor>
              <StyledAnchor href="#data-manipulation-and-text-transformation"><StyledListItem>Data Manipulation and Text Transformation</StyledListItem></StyledAnchor>
              <StyledAnchor href="#networking-with-bash"><StyledListItem>Networking with Bash</StyledListItem></StyledAnchor>
            </div>
          </FlexColumn>
          <Spacer />
          <SubTitle id="what-is-bash">What is Bash?</SubTitle>
          Bash stands for Bourne Again Shell. It's the most common command-line interpreter for Linux and macOS (and available for Windows through WSL or Git Bash). When you open your terminal, you're actually talking to
          Bash - giving it commands and seeing responses. It's what runs when you type things like ls, cd, or cat. But Bash isn't just an interface for commands - it's also a full scripting language.
          That means you can write scripts to automate almost anything you can do manually in the terminal.
          <SubTitle id="bash-vs-command-line">Bash vs. the Command Line - What's the Difference?</SubTitle>
          Before we go any further, it's worth clearing up a common mix-up: <BoldText>Bash isn't the same thing as the command line</BoldText>. The <ItalicText>command line (or terminal)</ItalicText> is simply the window
          or interface where you type commands - it's the tool that lets you interact with your system through text rather than a graphical interface. The <ItalicText>shell</ItalicText>, on the other hand, is the
          <BoldText>program that actually interprets those commands</BoldText>. Bash is just one type of shell - others include <BoldText>Zsh</BoldText>, and <BoldText>PowerShell</BoldText> (on Windows).
          They all serve the same purpose: read what you type, execute it, and print the result. So when you're working in Bash, you're still using the command line - you've just chosen Bash as the <ItalicText>language</ItalicText> your terminal understands.
          <SubTitle id="setting-up-your-environment">Setting up Your Environment?</SubTitle>
          If you're on Linux or macOS, you already have Bash installed. For Windows users, you can enable the Windows Subsystem for Linux (WSL) or use Git Bash for a lightweight option.
          <Spacer />
          To confirm Bash is available, open your terminal and run:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashEnvironment, 0)}>
              {isCopied[0].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashEnvironment}
          </CodeBlock>
          If you're using PowerShell, this command probably won't print anything - and that's normal. PowerShell isn't Bash, so it doesn't use the $SHELL environment variable. Instead, try this in PowerShell to check your current shell:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(powershell, 1)}>
              {isCopied[1].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {powershell}
          </CodeBlock>
          If you see entries like <BoldText>PSEdition</BoldText> or <BoldText>PSVersion</BoldText>, you're in PowerShell.
          <SubTitleSmall>A Quick Note on Windows Terminals</SubTitleSmall>
          If you're on Windows, it's worth knowing that there are three different command-line environments, and they don't all speak the same language.
          <StyledListItem><BoldText>Command Prompt (cmd.exe)</BoldText> - This is the classic Windows terminal. It understands only old-style Windows commands (dir, copy, del, etc.). It can't run Bash or PowerShell commands.</StyledListItem>
          <StyledListItem><BoldText>PowerShell</BoldText> - This is Microsoft's more modern shell. It uses its own scripting language (completely different from Bash) and can do much more with objects and automation on Windows systems.</StyledListItem>
          <StyledListItem><BoldText>Bash</BoldText> - This is the Linux-style shell that understands Unix commands (ls, grep, cd, etc.). You can use it on Windows through WSL (Windows Subsystem for Linux) or Git Bash.</StyledListItem>
          So if you open cmd.exe and type bash or pwsh, it might not recognise those commands - because cmd isn't aware of the other shells.
          <Spacer />
          To work in Bash properly, open Git Bash or Ubuntu (WSL) instead. That gives you a full Linux-like environment where all the examples in this tutorial will work exactly as shown.
          <Spacer />
          Once you're inside Bash, run:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashVersion, 2)}>
              {isCopied[2].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashVersion}
          </CodeBlock>
          That's it. No heavy setup required. You're ready to go.
          <Spacer />
          <SubTitle id="getting-comfortable-in-the-terminal">Getting Comfortable in the Terminal</SubTitle>
          Before jumping into scripting, let's make sure we're fluent in the basic building blocks of the command line. These are the verbs of Bash - the small, single-purpose commands that, when combined, become incredibly powerful.
          <Spacer />
          <Table columns={columns} data={data} />
          <Spacer />
          These might feel trivial at first, but understanding them deeply is key - every script you'll ever write will build on these fundamentals.
          <Spacer />
          <SubTitle id="writing-your-first-script">Writing Your First Script</SubTitle>
          Let's go classic for a moment. Create a file called hello.sh:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashFirstScript, 6)}>
              {isCopied[6].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashFirstScript}
          </CodeBlock>
          Give it permission to run:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashFirstScript2, 7)}>
              {isCopied[7].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashFirstScript2}
          </CodeBlock>
          Then execute it:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashFirstScript3, 8)}>
              {isCopied[8].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashFirstScript3}
          </CodeBlock>
          Output:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashFirstScript4, 9)}>
              {isCopied[9].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashFirstScript4}
          </CodeBlock>
          It's a small win, but it's the moment most developers realise - "wait, I can make my computer do things for me."
          <SubTitleSmall>A Quick Note on Shebang</SubTitleSmall>
          That first line - #!/bin/bash - is called the shebang (sometimes written as "hashbang"). It tells your system which interpreter should be used to run the script. When you execute a script directly
          (like ./hello.sh), the operating system looks at that line and says: "Ah, this file should be run using Bash, which lives at /bin/bash." If you were writing a Python script, it might look like this instead:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(pythonScript, 10)}>
              {isCopied[10].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {pythonScript}
          </CodeBlock>
          Without the shebang, the system doesn't automatically know which program should interpret your code - meaning your script might fail or behave differently depending on the environment. It's a small line,
          but it's the reason Bash scripts "just work" when shared across systems.
          <SubTitle id="redirecting-and-chaining-commands">Redirecting and Chaining Commands</SubTitle>
          One of the most useful things Bash can do is connect commands together. This is where redirection and pipes come in.
          <Spacer />
          Bash can take the output of one command and feed it into another. That's what the | symbol (the pipe) is for.
          Bash actually has a three-way system for how it handles data:
          <StyledListItem><BoldText>stdin</BoldText> standard input (what the command reads)</StyledListItem>
          <StyledListItem><BoldText>stdout</BoldText> standard output (what it prints)</StyledListItem>
          <StyledListItem><BoldText>stderr</BoldText> standard error (where it reports problems)</StyledListItem>
          Every time you run a command, Bash quietly connects these three data streams in the background.
          <Spacer />
          <SubTitleSmall>Sending Output Somewhere Else - {`>`} and {`>>`}</SubTitleSmall>
          Let's say you want to save the output of a command to a file instead of printing it to the screen. You can do that like this:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashOutput, 3)}>
              {isCopied[3].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashOutput}
          </CodeBlock>
          That line tells Bash: "take the normal output of ls and write it into a file instead of the screen." If the file already exists, it gets replaced.
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashAppend, 4)}>
              {isCopied[4].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashAppend}
          </CodeBlock>
          <SubTitleSmall>Feeding Input into a Command - {`<`}</SubTitleSmall>
          This one works in the opposite direction. It takes the contents of a file and feeds it into a command as if you were typing it manually. That command reads everything from names.txt, sorts it alphabetically, and prints the result to the screen.
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashFeed, 67)}>
              {isCopied[67].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashFeed}
          </CodeBlock>
          So at first glance it seems redundant - but here's where it becomes useful:
          <Spacer />
          Sometimes you need to pass input to commands that don't normally take filenames directly. Let's say you have a text file with a list of users and you want to run a command for each one. You could do this:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashFeed2, 68)}>
              {isCopied[68].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashFeed2}
          </CodeBlock>
          That {`<`} users.txt at the end means, "feed the contents of this file into the loop as standard input." It's elegant and clean - the loop reads line by line until it runs out of data. Without {`<`}, you'd have to pipe or cat it, which works but looks messier:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashFeedAlt, 69)}>
              {isCopied[69].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashFeedAlt}
          </CodeBlock>
          Both achieve the same result, but the version with {`<`} avoids creating an unnecessary pipe process (which we will visit soon). It's a small detail, but a sign of well-written Bash.
          <Spacer />
          <SubTitleSmall>Redirecting Errors - {`2>`}</SubTitleSmall>
          We will be covering exit codes and error handling in more detail but we'll briefly cover it here as it's relevant.
          <Spacer />
          By default, Bash sends normal output (stdout) and error messages (stderr) to the same place: your terminal. Sometimes, though, you want to separate them.
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashRedirectErr, 70)}>
              {isCopied[70].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashRedirectErr}
          </CodeBlock>
          This tells Bash:
          <StyledListItem>Write all the successful output into results.txt</StyledListItem>
          <StyledListItem>Send all error messages (like 'permission denied') into errors.txt</StyledListItem>
          The 2 refers to the file descriptor for stderr. You can also redirect both streams into one file:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashRedirectErr2, 71)}>
              {isCopied[71].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashRedirectErr2}
          </CodeBlock>
          That 2{`>`}&1 means, "send stderr to wherever stdout is currently going." It's the kind of syntax that looks like gibberish at first, then suddenly makes sense the first time you debug a failing script.
          <Spacer />
          <SubTitleSmall>The Pipe - |</SubTitleSmall>
          You can also pipe commands together. This lets you take the output of one command and feed it directly into another:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashPipe, 5)}>
              {isCopied[5].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashPipe}
          </CodeBlock>
          Here, the ls command lists everything, but instead of printing it to the screen, it hands the list straight to grep, which filters it for lines containing "log." The result is printed out as if it came from one command. You can keep chaining pipes indefinitely.
          <Spacer />
          <SubTitleSmall>Mixing and Matching</SubTitleSmall>
          Once you understand that {`<`}, {`>`}, and | are just ways to control where data flows, you can combine them in creative ways.
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashMixingMatching, 72)}>
              {isCopied[72].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashMixingMatching}
          </CodeBlock>
          This reads from input.txt, sorts the lines, removes duplicates, and saves the result to cleaned.txt. No intermediate files, no temporary steps - just a single pipeline that flows cleanly from left to right.
          <Spacer />
          <SubTitleSmall>File Descriptors</SubTitleSmall>
          Behind the scenes, Bash treats all input and output as file descriptors. You've already met three of them:
          <StyledListItem>0 = standard input</StyledListItem>
          <StyledListItem>1 = standard output</StyledListItem>
          <StyledListItem>2 = standard error</StyledListItem>
          You can open and close these manually if you ever need to redirect input or output dynamically. For example:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashFileDescriptors, 74)}>
              {isCopied[74].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashFileDescriptors}
          </CodeBlock>
          That opens a new "output stream" to log.txt, writes a line to it, and then closes it. It's an advanced technique, but once you start writing more complex scripts - like logging functions or multi-stream tools - it gives you total control over what goes where.
          <Spacer />
          <SubTitle id="setting-up-a-project-folder">A Quick Automation: Setting Up a Project Folder</SubTitle>
          Let's create our first piece of automation - a small script that sets up a basic project directory structure. We'll call it setup_project.sh, and it'll generate this structure:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashProjectSetup, 11)}>
              {isCopied[11].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashProjectSetup}
          </CodeBlock>
          Here's the script:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashProjectSetup2, 12)}>
              {isCopied[12].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashProjectSetup2}
          </CodeBlock>
          Make it executable:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashProjectSetup3, 13)}>
              {isCopied[13].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashProjectSetup3}
          </CodeBlock>
          Then run it:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashProjectSetup4, 14)}>
              {isCopied[14].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashProjectSetup4}
          </CodeBlock>
          And just like that, Bash created your project skeleton in seconds. You'll start to see how even small bits of automation can save time - and prevent the "new project setup" fatigue.
          <SubTitle id="using-variables-and-user-input">Using Variables and User Input</SubTitle>
          Bash supports variables like any other language. They're simple - no types, no declarations - just a name and a value.
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashUserInput, 15)}>
              {isCopied[15].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashUserInput}
          </CodeBlock>
          Notice how you can mix hard-coded values and user input in the same script. This opens the door to building small utilities that can interact with users or gather system data.


          <SubTitle id="command-substitution">Command Substitution</SubTitle>
          Another handy trick - storing the result of a command in a variable.
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashCommandSubstitution, 16)}>
              {isCopied[16].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashCommandSubstitution}
          </CodeBlock>
          You can use this technique to dynamically pull system information or chain results between commands. It's one of those small things that suddenly makes scripts feel alive.


          <SubTitle id="passing-arguments">Passing Arguments</SubTitle>
          You can also pass arguments directly to your script:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashPassingArguments, 17)}>
              {isCopied[17].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashPassingArguments}
          </CodeBlock>
          Try it:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashPassingArguments2, 18)}>
              {isCopied[18].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashPassingArguments2}
          </CodeBlock>
          Output:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashPassingArguments3, 19)}>
              {isCopied[19].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashPassingArguments3}
          </CodeBlock>
          This becomes essential when you start writing reusable automation scripts - like a backup tool that accepts different file paths as input.



          <SubTitle id="building-something-useful">Building Something Useful: A System Info Script</SubTitle>
          Let's tie everything together with something you might actually use. We'll create a script that prints out a quick system health summary - your hostname, user, uptime, memory, and disk usage.
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashSystemInfo, 20)}>
              {isCopied[20].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashSystemInfo}
          </CodeBlock>
          Run it:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashSystemInfo2, 21)}>
              {isCopied[21].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashSystemInfo2}
          </CodeBlock>
          Output:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashSystemInfo3, 22)}>
              {isCopied[22].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashSystemInfo3}
          </CodeBlock>
          It's not exactly mind blowing, but it's a start - let's keep building.



          <SubTitle id="logic-conditions-loops">Logic, Conditions, and Loops</SubTitle>
          Once you're comfortable running a few commands, the next step is to make your scripts respond. You'll add logic, make decisions, and repeat actions automatically.
          <Spacer />
          We'll cover:
          <StyledListItem>Conditional statements (if, elif, else)</StyledListItem>
          <StyledListItem>Logical operators (&&, ||, !)</StyledListItem>
          <StyledListItem>File testing (-f, -d, etc.)</StyledListItem>
          <StyledListItem>For, While, and Until loops</StyledListItem>
          <SubTitleSmall>Making Decisions with if</SubTitleSmall>
          At some point, your script will need to make a choice. For example: "Does this file exist?", or "Did the user provide an argument?". That's where the if statement comes in. Here's the structure:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashIf, 23)}>
              {isCopied[23].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashIf}
          </CodeBlock>
          Let's start simple:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashIf2, 24)}>
              {isCopied[24].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashIf2}
          </CodeBlock>
          The square brackets are a test ([ ... ]). -f checks whether the given path is a regular file. Replace it with -d for directories or -r for readability. You can combine conditions with && (and), || (or), or negate them with !.
          <Spacer />
          Soon you'll find yourself using these checks to protect against bad input or missing files.
          <Spacer />
          There are other useful tests too:
          <Spacer />
          <Table columns={columns2} data={data2} />
          <Spacer />
          <SubTitleSmall>Adding More Logic: elif and else</SubTitleSmall>
          You can extend your condition with multiple branches:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashIfElse, 25)}>
              {isCopied[25].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashIfElse}
          </CodeBlock>
          Here the comparisons (-gt, -lt, -eq) are Bash's way of saying greater-than, less-than, and equal. The structure reads almost like English once you get used to the spacing.
          <Spacer />
          <Table columns={columns3} data={data3} />
          <Spacer />
          <SubTitleSmall>Combining Conditions</SubTitleSmall>
          You can combine tests using logical operators:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashCombiningConditions, 26)}>
              {isCopied[26].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashCombiningConditions}
          </CodeBlock>
          <Spacer />
          <Table columns={columns4} data={data4} />
          <Spacer />
          <SubTitleSmall>The Case Statement (Cleaner Branching)</SubTitleSmall>
          If you ever find yourself writing long chains of if and elif, a case statement can make things cleaner.
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashCaseStatement, 27)}>
              {isCopied[27].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashCaseStatement}
          </CodeBlock>
          It's basically Bash's version of a switch statement - neat and readable.
          <SubTitleSmall>for Loop</SubTitleSmall>
          Used when you know how many times you want to repeat something - like iterating over files.
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashForLoop, 28)}>
              {isCopied[28].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashForLoop}
          </CodeBlock>
          You can also loop through numbers:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashForLoop2, 29)}>
              {isCopied[29].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashForLoop2}
          </CodeBlock>
          <SubTitleSmall>while Loop</SubTitleSmall>
          Runs as long as a condition is true:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashWhileLoop, 30)}>
              {isCopied[30].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashWhileLoop}
          </CodeBlock>
          You'll often use while loops to read files or process input dynamically:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashWhileLoop2, 31)}>
              {isCopied[31].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashWhileLoop2}
          </CodeBlock>
          <SubTitleSmall>until Loop</SubTitleSmall>
          The inverse of while: runs until a condition becomes true.
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashUntilLoop, 32)}>
              {isCopied[32].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashUntilLoop}
          </CodeBlock>
          <SubTitleSmall>Putting It All Together - A Mini Project</SubTitleSmall>
          Let's build something slightly more practical: a file cleanup script. This will loop through a directory and remove files older than a certain number of days.
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashLoopExample, 33)}>
              {isCopied[33].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashLoopExample}
          </CodeBlock>
          When you run it, the script asks which directory to clean, defaults to its own folder if you just press Enter, and removes files older than the number of days you give it.
          <Spacer />
          The magic line here is the one with find. It walks through every file under the chosen directory, checks when it was last modified, and if it's older than your cutoff, deletes it -
          printing each filename as it goes. It's a single, dense command that does the work of a whole GUI cleanup tool, and it runs in a fraction of a second.
          <SubTitle id="functions-exit-codes-error-handling">Functions, Exit Codes, and Error Handling</SubTitle>
          Functions are Bash's way of helping you stay organised. Instead of writing the same five lines again and again, you can wrap them up in a block, give it a name, and call it when you need it.
          <Spacer />
          Inside a function, the arguments you pass are stored in numbered variables: $1, $2, $3, and so on. They're positional - the first thing you pass is $1, the second is $2, etc.
          Bash doesn't enforce types or names; it's your job to remember what each one represents.
          <Spacer />
          Inside a function, you'll often see the keyword local. It's there to stop your temporary variables from leaking out and messing with the rest of the script. Bash doesn't isolate function scopes by default,
          so local is basically your guardrail.
          <Spacer />
          Every function also returns an exit status, just like any other Bash command.
          A return code of 0 means success, and any non-zero number signals some kind of failure. You can explicitly set this with return, but here's the trick; Bash functions can also output data.
          If you use echo inside a function, you can capture that output and use it elsewhere.
          <Spacer />
          That distinction keeps your scripts clean - echo sends information back, while return silently signals whether things went well.
          <Spacer />
          All examples use the same robust, path-safe patterns from earlier. If you're on Windows, run these in WSL or Git Bash.
          <Spacer />
          Here's a tiny example:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashFunctions, 36)}>
              {isCopied[36].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashFunctions}
          </CodeBlock>
          <Spacer />
          Here, sum prints its result to standard output, which we capture using command substitution $(...). validate_positive doesn't print anything - it simply exits with 0 or 1. The pattern is simple but powerful,
          and once you start using it consistently, your functions will behave predictably.
          <Spacer />
          <SubTitleSmall>Making Scripts Fail Gracefully</SubTitleSmall>
          By default, Bash is incredibly forgiving - maybe too forgiving. A command fails, and Bash just keeps going. That's fine for interactive use, but in automation it can lead to messy, half-finished jobs.
          <Spacer />
          You can change that behaviour with one line at the top of your script:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashFailGracefully, 37)}>
              {isCopied[37].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashFailGracefully}
          </CodeBlock>
          <Spacer />
          It's not as scary as it looks.
          <StyledListItem><BoldText>-e</BoldText> means "exit immediately if any command fails."</StyledListItem>
          <StyledListItem><BoldText>-u</BoldText> means "treat undefined variables as errors."</StyledListItem>
          <StyledListItem><BoldText>-o pipefail</BoldText> means "if you chain commands with a pipe, the whole pipeline fails if any part of it fails."</StyledListItem>
          Together they turn Bash from a laid-back surfer into a careful engineer who refuses to move on when something breaks. If you want to allow a failure intentionally, you can still do it explicitly:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashExplicitlyFail, 38)}>
              {isCopied[38].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashExplicitlyFail}
          </CodeBlock>
          <Spacer />
          That one-liner says, run this command; if it fails, don't crash - just log a note.
          <Spacer />
          <SubTitleSmall>Cleaning Up After Yourself</SubTitleSmall>
          Every long-running script should leave things the way it found them. Temporary files, network mounts, locks - they all need cleaning up even if the script crashes halfway through. Bash gives you a built-in
          tool for that called trap.
          <Spacer />
          Think of it as a safety net. You define a function that does the cleanup, and then tell Bash, "whenever the script exits, no matter why, run this."
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashTrap, 39)}>
              {isCopied[39].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashTrap}
          </CodeBlock>
          <Spacer />
          Now, whether you press Ctrl + C or the script finishes normally, the temporary file disappears.
          <Spacer />
          <SubTitleSmall>Logging What Happens</SubTitleSmall>
          A script that runs silently is fine when it works, but when something goes wrong, you'll wish it had told you what it was doing. Adding timestamps and log levels turns guesswork into understanding.
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashTinyLoggingHelper, 40)}>
              {isCopied[40].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashTinyLoggingHelper}
          </CodeBlock>
          <Spacer />
          You can even pipe these messages to a file so you have a written record of every run:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashTinyLoggingHelper2, 41)}>
              {isCopied[41].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashTinyLoggingHelper2}
          </CodeBlock>
          <Spacer />
          Now every message gets printed and saved - one of those small details that makes debugging a week later much less painful.
          <Spacer />
          <SubTitleSmall>Building a Reliable Script Skeleton</SubTitleSmall>
          Once you've written a few scripts, you'll notice the same scaffolding appears again and again: a couple of set statements, a directory resolver, maybe a cleanup trap and a logger. Here's a template you can
          drop at the top of any serious Bash project:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashReusableTemplate, 42)}>
              {isCopied[42].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashReusableTemplate}
          </CodeBlock>
          <Spacer />
          It's minimal but battle-tested. Every new script can start here and grow outward, confident that the basics - safety, logging, and cleanup - are already handled.
          <Spacer />
          <SubTitleSmall>Safe Log Archiver</SubTitleSmall>
          Let's finish with something real: a script that tidies up old log files. This one validates inputs, archives files older than a certain age, compresses them, logs every step, and works no matter where you run
          it from.
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashSafeLogger, 46)}>
              {isCopied[46].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashSafeLogger}
          </CodeBlock>
          <Spacer />
          When you look inside the code, you'll notice a few clever bits. The mapfile command quietly reads the list of files returned by find into an array - it's clean and safe, even with filenames that contain spaces. Then there's
          tar -C "/" - that option tells tar to treat every path as absolute, so when you extract the archive later, everything goes back exactly where it came from.
          <Spacer />
          And see that small commented-out loop at the end? If you uncomment it, the script deletes the original files after archiving, effectively turning it into a move operation instead of a copy. I usually leave it off until I've
          verified that the archive looks good; it's the difference between a cautious script and a reckless one.
          <Spacer />
          When you run it, you'll watch each step logged as it happens - the directory being scanned, the files being packed, and finally a neat .tar.gz sitting in an archives/ folder right next to your script. The whole thing works
          quietly and predictably, and if something goes wrong, you'll know exactly why.
          <Spacer />
          That's what this part of the series is really about: taking all the moving pieces of Bash and turning them into something reliable. Functions give you structure, exit codes give you control, and error handling keeps your work honest.
          Together, they turn your scripts from quick hacks into tools you can actually depend on.
          <SubTitle id="how-to-debug-and-troubleshoot-bash-scripts">How to Debug and Troubleshoot Bash Scripts</SubTitle>
          Now we'll look into how to debug Bash scripts in real time, trace their execution, and use wildcards to work with complex sets of files. Once you understand how Bash expands patterns and how to watch its inner workings, writing reliable
          automation becomes much easier.
          <Spacer />
          <SubTitleSmall>Seeing Inside the Script</SubTitleSmall>
          When you're debugging, the first and easiest tool is <ItalicText>echo</ItalicText>. It sounds almost too simple, but printing a variable's value at the right moment often reveals everything you need to know. We've been using it throughout
          our examples but of course, it can get messy fast as you can see - you don't want to litter your code with echoes everywhere.
          <Spacer />
          That's where Bash's build-in tracing comes in.
          <Spacer />
          <SubTitleSmall>Running in Debug Mode</SubTitleSmall>
          You can ask Bash to show you every command it executes, line by line. The simplest way is to run your script like this:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashDebugMode, 47)}>
              {isCopied[47].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashDebugMode}
          </CodeBlock>
          The -x flag prints each command as it's executed, with variables already expanded. It looks a little noisy, but it's brilliant for spotting logic errors, especially when conditions or loops aren't behaving.
          <Spacer />
          If you only want to trace part of a script, you can toggle it on and off inside the code itself:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashDebugMode2, 48)}>
              {isCopied[48].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashDebugMode2}
          </CodeBlock>
          <Spacer />
          That's great when you want to focus on one section without flooding your terminal with output.
          <Spacer />
          You can even customise the trace prefix with a special variable called var. This adds context to each debug line, which is a huge help in longer scripts.
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashDebugMode3, 49)}>
              {isCopied[49].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashDebugMode3}
          </CodeBlock>
          Now, every line Bash prints during debugging shows the filename, line number, and function name - almost like stepping through code in an IDE.
          <Spacer />
          <SubTitleSmall>Using trap DEBUG</SubTitleSmall>
          If you want to go one level deeper, you can use the trap command with the DEBUG signal. This fires before every single command Bash runs, and it's handy when you need to log or audit behaviour.
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashTrapDebug, 50)}>
              {isCopied[50].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashTrapDebug}
          </CodeBlock>
          When this is active, every command is printed right before it executes. It's like having a live narrator describing your script's every move. You wouldn't leave this on in production,
          but it's a lifesaver when you're trying to understand why something works locally but not in a cron job.
          <Spacer />
          <SubTitleSmall>Understanding Wildcards and Expansion</SubTitleSmall>
          Wildcards, or "globs", are another core part of Bash that can quietly trip you up until you understand how they expand. They let you match patterns in filenames without listing them all manually.
          <Spacer />
          The most common ones are:
          <StyledListItem><BoldText>*</BoldText> matches any number of characters (including none)</StyledListItem>
          <StyledListItem><BoldText>?</BoldText> matches a single character</StyledListItem>
          <StyledListItem><BoldText>[abc]</BoldText> matches one character from the set inside the brackets</StyledListItem>
          <StyledListItem><BoldText>[!abc]</BoldText> matches anything not in that set</StyledListItem>
          If you run ls *.log, Bash expands *.log into a list of files before the command even starts. It's not ls doing the filtering - Bash is. That's why these are called "globs" (short for global patterns).
          <Spacer />
          Here's a small demo that shows how wildcards behave:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashTrapDebug, 51)}>
              {isCopied[51].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashTrapDebug}
          </CodeBlock>
          You'll see <BoldText>fileA.log</BoldText> <BoldText>fileB.log</BoldText> printed - those filenames were expanded automatically by Bash.
          <Spacer />
          You can combine patterns, too:
          {bashWildcardsText} lists both <ItalicText>.jpg</ItalicText> and <ItalicText>.png</ItalicText> files in the same go.
          <Spacer />
          <SubTitleSmall>Escaping Wildcards</SubTitleSmall>
          Sometimes, though, you don't want Bash to expand a pattern - you just want to pass it literally (for example, to a grep or find command that expects the pattern). In those cases, you escape the characters
          so Bash leaves them alone.
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashWildcards, 52)}>
              {isCopied[52].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashWildcards}
          </CodeBlock>
          Now the shell prints *.log exactly as written, without expanding it.
          <Spacer />
          <SubTitleSmall>Diagnosing Common Problems</SubTitleSmall>
          When something goes wrong in Bash, it's almost always one of three things:
          <StyledListItem><BoldText>A variable is unset or empty</BoldText></StyledListItem>
          <StyledListItem><BoldText>A command is running in the wrong directory.</BoldText></StyledListItem>
          <StyledListItem><BoldText>A pattern isn't matching what you think it should.</BoldText></StyledListItem>
          You can protect against these with a few good habits. Always double-quote your variables ("$dir" instead of $dir), print them out when debugging, and use pwd at the start of critical operations to verify
          where you are.
          <Spacer />
          If a loop doesn't run, check whether the glob you're looping over actually expands to anything. Bash will silently skip a loop if the pattern doesn't match any files.
          <Spacer />
          <SubTitleSmall>Logging Debug Output</SubTitleSmall>
          If you've been following along from Part 3, you already have a simple logging function. You can easily adapt it to record debug-level messages too. For example:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashLoggingDebugOutput, 53)}>
              {isCopied[53].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashLoggingDebugOutput}
          </CodeBlock>
          You can even redirect debugging output from set -x into a file by using the BASH_XTRACEFD variable:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashLoggingDebugOutput2, 54)}>
              {isCopied[54].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashLoggingDebugOutput2}
          </CodeBlock>
          Now, all your trace output goes neatly into debug.log instead of cluttering the screen.
          <Spacer />
          <SubTitleSmall>Where Wildcards and Debugging Meet</SubTitleSmall>
          Wildcards and debugging might seem unrelated, but they actually intersect in interesting ways. Many strange bugs come from unexpected globbing - Bash expanding a pattern into hundreds of files, or worse, no files at all.
          <Spacer />
          A simple trick is to enable the nullglob option temporarily:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashNullGlob, 55)}>
              {isCopied[55].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashNullGlob}
          </CodeBlock>
          That tells Bash: if a pattern doesn't match anything, expand it to nothing instead of leaving it literal. It prevents accidental operations like rm *.log when there are no .log files around.
          <Spacer />
          Pair that with set -x, and you'll see exactly what Bash expands each pattern to. Once you see that output, you'll never look at a wildcard the same way again.
          <SubTitle id="data-manipulation-and-text-transformation">Data Manipulation and Text Transformation</SubTitle>
          This part is all about data manipulation - reading, transforming, and filtering text using Bash's most powerful tools: grep, sed, and awk.
          These three commands are the beating heart of Unix philosophy: small, sharp tools that each do one thing well. Together, they can reshape logs, extract patterns, and perform complex text transformations that would take pages of code in other languages.
          <Spacer />
          If you've ever looked at a giant log file or CSV and thought, "there's no way I'm sorting through this manually," Bash has your back. You'll start by finding things (grep), then modifying them (sed), and finally shaping the results into something meaningful (awk).
          <Spacer />
          <SubTitleSmall>Finding Needles in Haystacks with grep</SubTitleSmall>
          The name grep stands for "Global Regular Expression Print" - which sounds technical, but it simply means search for text and print matching lines.
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashGrep, 56)}>
              {isCopied[56].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashGrep}
          </CodeBlock>
          That scans through your system log and prints every line containing the word error. You can make it case-insensitive with -i, show line numbers with -n, or search recursively through directories with -r.
          <Spacer />
          A few quick examples:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashGrep2, 57)}>
              {isCopied[57].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashGrep2}
          </CodeBlock>
          The -v flag is worth remembering - it's "invert match," meaning show me everything that does NOT match. If you've ever filtered a spreadsheet, grep feels like that - but lightning fast and infinitely scriptable.
          <Spacer />
          <SubTitleSmall>Editing on the Fly with sed</SubTitleSmall>
          If grep is how you find text, sed is how you change it. It stands for "stream editor" and that's exactly what it does - it reads text line by line, applies your edits, and prints the result.
          <Spacer />
          Here's the simplest form:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashSed, 58)}>
              {isCopied[58].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashSed}
          </CodeBlock>
          That command looks cryptic until you know the structure: s means "substitute", old is the pattern to match, and new is what to replace it with.
          <Spacer />
          By default, sed prints the modified text to the terminal. To overwrite the file directly, add the -i flag:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashSed2, 59)}>
              {isCopied[59].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashSed2}
          </CodeBlock>
          The g at the end means "global" - replace all occurrences on each line, not just the first. If you've ever used find-and-replace in a text editor, this is the command-line version, except it works on thousands of files at once.
          <Spacer />
          You can also delete lines, insert new ones, or modify only those matching certain patterns:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashSed3, 59)}>
              {isCopied[59].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashSed3}
          </CodeBlock>
          When you start chaining these together, sed becomes a kind of text Swiss Army knife - small, sharp, and surprisingly expressive.
          <Spacer />
          <SubTitleSmall>Slicing and Dicing with awk</SubTitleSmall>
          Now comes awk, the most misunderstood tool in Bash. While grep and sed deal with lines, awk deals with fields - chunks of data separated by spaces, commas, or other delimiters. It was made for analysing structured text long before spreadsheets existed.
          <Spacer />
          Let's look at a basic example:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashAwk, 60)}>
              {isCopied[60].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashAwk}
          </CodeBlock>
          That prints the first and third column from every line in data.txt. $1 means "the first field," $2 is the second, and so on. By default, awk splits fields by spaces or tabs, but you can change that using -F (for "field separator"):
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashAwk2, 61)}>
              {isCopied[61].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashAwk2}
          </CodeBlock>
          That one-liner prints the first two columns from a CSV file. You can also use simple logic inside awk:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashAwk3, 61)}>
              {isCopied[61].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashAwk3}
          </CodeBlock>
          This prints only the rows where the third column is greater than 80. That's the magic of awk: you can filter and format data in a single pass, without ever touching a spreadsheet or a Python script.
          <Spacer />
          <SubTitleSmall>Combining the Trio</SubTitleSmall>
          These tools shine brightest when you chain them together - each one doing one job in a pipeline. Here's a real-world example: imagine you're cleaning up a log file and want to count how many errors occurred today.
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashGrepSedAwk, 62)}>
              {isCopied[62].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashGrepSedAwk}
          </CodeBlock>
          This:
          <StyledListItem><BoldText>Finds all lines containing today's date.</BoldText></StyledListItem>
          <StyledListItem><BoldText>Filters them down to those with "ERROR".</BoldText></StyledListItem>
          <StyledListItem><BoldText>Counts the number of matches.</BoldText></StyledListItem>
          In a single command, you've just turned thousands of log lines into a single number.
          <Spacer />
          Here's another:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashGrepSedAwk2, 63)}>
              {isCopied[63].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashGrepSedAwk2}
          </CodeBlock>
          That finds all running nginx processes and prints their process ID ($2) and command name ($11). If you've ever debugged a web server, this is one of those little commands that earns its place in muscle memory.
          <Spacer />
          <SubTitleSmall>Example: Cleaning CSV Data</SubTitleSmall>
          Let's look at an example scenario which includes what we've learned. Say you have a messy CSV file full of user data:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashCleaningCSVData, 64)}>
              {isCopied[64].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashCleaningCSVData}
          </CodeBlock>
          You want to:
          <StyledListItem><BoldText>Remove entries with missing emails.</BoldText></StyledListItem>
          <StyledListItem><BoldText>Fix the broken email domains.</BoldText></StyledListItem>
          <StyledListItem><BoldText>Output just the valid names and addresses.</BoldText></StyledListItem>
          Here's one way to do it with a single pipeline:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashCleaningCSVData2, 65)}>
              {isCopied[65].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashCleaningCSVData2}
          </CodeBlock>
          Let's break that down:
          <StyledListItem><BoldText>grep -E ".+@.+"</BoldText> keeps only lines with an @ symbol - our quick "email present" check</StyledListItem>
          <StyledListItem><BoldText>sed 's/@example$/@example.com/'</BoldText> fixes emails that were missing .com.</StyledListItem>
          <StyledListItem><BoldText>{bashCleaningCSVDataText}</BoldText> skips the header row (NR `{'>'}` 1) and prints each name and email in a readable format.</StyledListItem>
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashCleaningCSVData3, 66)}>
              {isCopied[66].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashCleaningCSVData3}
          </CodeBlock>
          Clean, simple, and no spreadsheets required.
          <SubTitle id="networking-with-bash">Networking with Bash</SubTitle>
          The command line isn't just a local toolbox - it's also a full-featured networking workstation. From testing connections to calling APIs, Bash gives you direct control over how your system talks to others.
          In this section, you'll learn how to use Bash to:
          <StyledListItem>Check network connectivity</StyledListItem>
          <StyledListItem>Query servers and APIs</StyledListItem>
          <StyledListItem>Transfer files</StyledListItem>
          <StyledListItem>Monitor latency and response times</StyledListItem>
          By the end, you'll have a few short scripts that can check website uptime, test DNS resolution, and even pull live data from the internet - all from the shell.
          <SubTitleSmall>Testing Connectivity with ping</SubTitleSmall>
          The simplest test of network connectivity starts with one word:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashPing, 75)}>
              {isCopied[75].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashPing}
          </CodeBlock>
          ping sends small packets (ICMP echo requests) to the destination and waits for a reply. It tells you two things: whether the host is reachable, and how long the round trip takes.
          <Spacer />
          The -c flag limits how many times it runs:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashPing2, 76)}>
              {isCopied[76].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashPing2}
          </CodeBlock>
          That sends exactly four pings, then stops - perfect for scripting. You can use this inside a script to check if a host is up:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashPing3, 77)}>
              {isCopied[77].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashPing3}
          </CodeBlock>
          That one-liner &{`>`}/dev/null hides all the normal ping output, keeping things clean. It's a nice first layer in any network health check.
          <Spacer />
          <SubTitleSmall>Downloading Data with curl</SubTitleSmall>
          curl is the Swiss army knife of network tools. It can make HTTP requests, upload files, authenticate, and even handle APIs. If you've ever worked with cloud services or REST endpoints, curl is what you'll use most often.
          <Spacer />
          Start with something simple:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashCurl, 78)}>
              {isCopied[78].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashCurl}
          </CodeBlock>
          That prints the HTML of the webpage straight to your terminal. Add -O (capital O) to save it to a file instead:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashCurl2, 79)}>
              {isCopied[79].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashCurl2}
          </CodeBlock>
          You can use it for APIs too:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashCurl3, 80)}>
              {isCopied[80].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashCurl3}
          </CodeBlock>
          That fetches a JSON response describing the user octocat. If you want to see the full request and response details (great for debugging), use:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashCurl4, 81)}>
              {isCopied[81].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashCurl4}
          </CodeBlock>
          You'll see headers, status codes, and timing info - everything you'd expect from a browser's "network" tab, but right in your terminal.
          <Spacer />
          <SubTitleSmall>Checking Website Availability</SubTitleSmall>
          You can build a quick website uptime checker using just curl and a little logic.
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashCurl5, 82)}>
              {isCopied[82].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashCurl5}
          </CodeBlock>
          This runs silently (-s), discards the output (-o /dev/null), and prints only the HTTP status code (-w "%{`http_code`}"). It's the sort of quick check you could schedule in cron to alert you if a site suddenly goes offline.
          <Spacer />
          <SubTitleSmall>Fetching and Parsing API Data</SubTitleSmall>
          The magic starts when you combine curl with grep or jq to pull out meaningful info from an API. For instance, here's how to check the current price of Bitcoin using the public Coindesk API:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashCurl6, 83)}>
              {isCopied[83].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashCurl6}
          </CodeBlock>
          It's a one-liner that downloads JSON, filters for the "rate" field, and extracts just the number. With jq installed, you can make it even cleaner:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashCurl7, 84)}>
              {isCopied[84].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashCurl7}
          </CodeBlock>
          That's the beauty of Bash - it's not just a programming language, it's a glue language. It connects external tools together to do exactly what you need.
          <SubTitleSmall>Transferring Files with scp and rsync</SubTitleSmall>
          Once you're comfortable reading and writing over the network, the next step is sending data. scp (secure copy) and rsync are the go-to commands for moving files between machines.
          <Spacer />
          scp is simple and reliable:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashSCP, 85)}>
              {isCopied[85].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashSCP}
          </CodeBlock>
          That securely copies backup.tar.gz to your remote server over SSH.
          <Spacer />
          rsync is smarter - it copies only what's changed:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashSCP2, 86)}>
              {isCopied[86].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashSCP2}
          </CodeBlock>
          The flags mean:
          <StyledListItem><BoldText>a</BoldText> - archive mode (preserves permissions and timestamps)</StyledListItem>
          <StyledListItem><BoldText>v</BoldText> - verbose</StyledListItem>
          <StyledListItem><BoldText>z</BoldText> - compress during transfer</StyledListItem>
          This is how many developers deploy static sites - it's basically a one-line deployment script.
          <SubTitleSmall>Checking Ports and Network Services</SubTitleSmall>
          Sometimes a server is online but a specific service isn't responding.
          <Spacer />
          You can check ports directly with nc (netcat):
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashNC, 87)}>
              {isCopied[87].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashNC}
          </CodeBlock>
          That tests whether port 22 (SSH) is open on example.com. You'll get a simple success or failure message - perfect for debugging connectivity issues. If you need to continuously watch
          a service, you can wrap that in a loop:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashNC2, 88)}>
              {isCopied[88].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashNC2}
          </CodeBlock>
          That pings the web server every 10 seconds and reports the result. It's crude, but surprisingly useful when you're troubleshooting.
          <SubTitleSmall>Checking DNS Resolution</SubTitleSmall>
          When something goes wrong, DNS is often the culprit. You can check DNS records using dig or nslookup.
          <Spacer />
          For example:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashDig, 89)}>
              {isCopied[89].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashDig}
          </CodeBlock>
          This returns the IP address of your domain. Or, to check the mail (MX) records:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashDig2, 90)}>
              {isCopied[90].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashDig2}
          </CodeBlock>
          If you're scripting, you can easily turn this into a simple diagnostic:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashDig3, 91)}>
              {isCopied[91].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashDig3}
          </CodeBlock>
          That line quietly checks whether DNS is working before your script tries to hit an API - a small sanity check that saves a lot of confusion later.
          <SubTitleSmall>Putting It All Together</SubTitleSmall>
          Here's a compact example that ties these tools into a useful network monitoring script:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashMonitoring, 92)}>
              {isCopied[92].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashMonitoring}
          </CodeBlock>
          <Spacer />
          Each run:
          <StyledListItem>Checks if the host responds to ping.</StyledListItem>
          <StyledListItem>Fetches its HTTP status code.</StyledListItem>
          <StyledListItem>Logs both with timestamps to network.log.</StyledListItem>
          Run it from cron every few minutes, and you've got a simple uptime monitor written entirely in Bash.
        </Text>
      </Container>
    </Wrapper>
  );
}

export default BashScripting;