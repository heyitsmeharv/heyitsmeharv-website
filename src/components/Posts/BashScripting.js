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
  bashLoopExample
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
  align-items: center;
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
  font-weight: italic;
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
    { Command: 'cd', Description: 'Changes directory', Example: 'cd /etc' },
    { Command: 'mkdir', Description: 'Creates a new directory', Example: 'mkdir projects' },
    { Command: 'touch', Description: 'Creates a new file', Example: 'touch script.sh' },
    { Command: 'mv', Description: 'Moves or renames files', Example: 'mv old.txt new.txt' },
    { Command: 'cp', Description: 'Copies files', Example: 'cp file.txt backup.txt' },
    { Command: 'rm', Description: 'Deletes files', Example: 'rm file.txt' },
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
              <StyledAnchor href="#setting-up-your-environment"><StyledListItem>Setting up Your Environment</StyledListItem></StyledAnchor>
              <StyledAnchor href="#getting-comfortable-in-the-terminal"><StyledListItem>Getting Comfortable in the Terminal</StyledListItem></StyledAnchor>
              <StyledAnchor href="#redirecting-and-chaining-commands"><StyledListItem>Redirecting and Chaining Commands</StyledListItem></StyledAnchor>
              <StyledAnchor href="#writing-your-first-script"><StyledListItem>Writing Your First Script</StyledListItem></StyledAnchor>
              <StyledAnchor href="#setting-up-a-project-folder"><StyledListItem>A Quick Automation: Setting Up a Project Folder</StyledListItem></StyledAnchor>
              <StyledAnchor href="#using-variables-and-user-input"><StyledListItem>Using Variables and User Input</StyledListItem></StyledAnchor>
              <StyledAnchor href="#command-substitution"><StyledListItem>Command Substitution</StyledListItem></StyledAnchor>
              <StyledAnchor href="#passing-arguments"><StyledListItem>Passing Arguments</StyledListItem></StyledAnchor>
              <StyledAnchor href="#building-something-useful"><StyledListItem>Building Something Useful: A System Info Script</StyledListItem></StyledAnchor>
            </div>
            <div>
              <StyledAnchor href="#logic-conditions-loops"><StyledListItem>Logic, Conditions, and Loops</StyledListItem></StyledAnchor>

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
          <SubTitle id="redirecting-and-chaining-commands">Redirecting and Chaining Commands</SubTitle>
          One of the most useful things Bash can do is connect commands together. This is where redirection and pipes come in.
          Let's say you want to save the output of a command to a file instead of printing it to the screen. You can do that like this:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashOutput, 3)}>
              {isCopied[3].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashOutput}
          </CodeBlock>
          This writes the output of ls into a file called files.txt. To append instead of overwrite, use {`>>`} :
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashAppend, 4)}>
              {isCopied[4].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashAppend}
          </CodeBlock>
          You can also pipe commands together. This lets you take the output of one command and feed it directly into another:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(bashPipe, 5)}>
              {isCopied[5].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {bashPipe}
          </CodeBlock>
          That command lists everything in /etc and filters only the lines containing "conf". This is where Bash starts to feel less like typing commands and more like composing small data pipelines.
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
          It's a small win, but it's the moment most developers realise — “wait, I can make my computer do things for me.”
          <SubTitleSmall>A Quick Note on Shebang</SubTitleSmall>
          That first line — #!/bin/bash — is called the shebang (sometimes written as “hashbang”). It tells your system which interpreter should be used to run the script. When you execute a script directly
          (like ./hello.sh), the operating system looks at that line and says: "Ah, this file should be run using Bash, which lives at /bin/bash." If you were writing a Python script, it might look like this instead:
          <CodeBlock>
            <CopyButton onClick={() => handleCopy(pythonScript, 10)}>
              {isCopied[10].value === true ? 'Copied!' : 'Copy'}
            </CopyButton>
            {pythonScript}
          </CodeBlock>
          Without the shebang, the system doesn't automatically know which program should interpret your code — meaning your script might fail or behave differently depending on the environment. It's a small line,
          but it's the reason Bash scripts "just work" when shared across systems.
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
          <Spacer />
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
          This is where your scripts begin to think - they'll make decisions, handle user input intelligently, and perform repetitive tasks automatically.
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
          In Bash, [ ... ] is used for tests. The -f flag checks if a file exists. There are other useful tests too:
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
          We used -gt (greater than). Bash has its own comparison operators:
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
        </Text>
      </Container>
    </Wrapper>
  );
}

export default BashScripting;