# Contribution Guidelines to lua-style-arrays

First off, thanks for taking the time to contribute to the project!

The following document is a set of guidelines for contributing to lua-style-arrays and its packages. These are mostly guidelines and not rules. If you think something should be tweaked, submit a pull request and we'll have a look at it.

*Table of Contents*

* [Code of Conduct](#code-of-conduct)
* [Before Contributing...](#before-contributing)
* [How can I contribute?](#how-can-i-contribute)
    * [Reporting bugs](#reporting-bugs)
        * [How do I submit a (good) bug report?](#how-do-i-submit-a-good-bug-report)
    * [Suggesting enhancements](#suggesting-enhancments)
        * [How do I submit a (good) suggestion?](#how-do-i-submit-a-good-suggestion)
    * [Your first code contribution](#your-first-code-contribution)
        * [Pull Requests](#pull-requests)

# Code of Conduct
The Code of Conduct can be found [here](https://github.com/LewisTehMinerz/lua-style-arrays/blob/master/CODE_OF_CONDUCT.md). Please follow it, we don't want anyone getting hurt!

# Before Contributing...
### This is an open source project.
lua-style-arrays is an open source project. When you initally consider contributing to lua-style-arrays, you need to keep in mind that your pull request may make it up into the full release. We don't want any security issues, so the first thing we ask is that you check over your code before you submit it for review.

# How can I contribute?
#### Reporting Bugs
This section guides you through submitting a bug report for lua-style-arrays. Following these guidelines helps maintainers and the community understand your report, reproduce the unintentional behavior, and find related reports.

Before creating any bug reports, please check previous issues to prevent duplicate reports. Duplicate reports makes it harder for our project maintainers to find new bugs.

> If you find a **Closed** issue and it's similar to your issue, create a new issue and link the closed issue somewhere in the body of your new issue.

#### How do I submit a (good) bug report?
Bugs are tracked as issues on GitHub. After you've determined the issue, made sure it isn't a duplicate, and are able to create reproduction steps, you are ready to submit your issue.

Explain the problem and include additional details to help maintainers reproduce the problem:
* Use a clear and descriptive title for the issue to identify the problem.
* Describe the exact steps which reproduce the problem in as many details as possible. When listing steps, don't just say what you did. Explain how you did it. For example, if you connected to your lua-style-arrays instance through a tool like [wscat](https://npmjs.com/package/wscat), what *exactly* did you type to trigger the issue?
* Describe the behavior you observed after following the steps and point out the exact issue.
* Explain which behavior you expected to see instead and why.
* Include screenshots and animated GIFs which show you following the described steps and demonstrate the problem.
* If you're reporting that lua-style-arrays crashed, include the stack trace that was printed out in the console or log file.
* If the problem wasn't triggered by a specific action, describe what you were doing before the problem happened and share more information using the guidelines below.

Provide more context by answering these questions:
* Did the problem start happening recently (e.g. after you updated lua-style-arrays) or was this always a problem?
* If the problem started happening recently, can you reproduce the problem in an older version of lua-style-arrays? What's the most recent version in which the problem doesn't happen? You can download older versions of lua-style-arrays from the [releases page](https://github.com/LewisTehMinerz/lua-style-arrays/releases).
* Can you reliably reproduce the issue? If not, provide details about how often the problem happens and under which conditions it normally happens.

Include details about your configuration and environment:
* Which version of lua-style-arrays are you running? You can get the exact version when you start lua-style-arrays.
* What's the name and version of the OS you're using?
* Are you running lua-style-arrays in a virtual machine? If so, which VM software are you using and which operating systems and versions are used for the host and the guest?

### Suggesting enhancements
This section guides you through submitting an suggestion for lua-style-arrays, from minor improvements to completely new features. Following these guidelines helps maintainers and the community understand your suggestion and find related suggestions.

Before creating any suggestions, please check previous issues to prevent duplicate suggestions. Duplicate suggestions makes it harder for our project maintainers to find new suggestions.

### How do I submit a (good) suggestion?
Suggestions are tracked as issues on GitHub. After you've thought of an suggestion, made sure it isn't a duplicate, and are able to create documentation on what it should do, you are ready to submit your issue.

Explain your suggestion and include additional details to help maintainers to understand your suggestion:
* Use a clear and descriptive title for the issue to identify the suggestion.
* Provide a step-by-step description of the suggested enhancement in as many details as possible.
* Provide specific examples to demonstrate the steps. Include copy/pasteable snippets which you use in the examples as code blocks.
* Describe the current behavior and explain which behavior you expected to see instead and why (if you are making a suggestion to an already existing feature).
* Include screenshots and animated GIFs which help you demonstrate the steps or point out the part of lua-style-arrays which the suggestion is related to.
* Explain why this enhancement would be useful to be included in lua-style-arrays.
* If possible, list some other database software that has this feature.
* Specify which version of lua-style-arrays you're using.
* Specify the name and version of the OS you're using.

### Your first code contribution
Unsure where to begin contributing to lua-style-arrays? You can start by looking through `beginner` and `help-wanted` issues:
* `beginner` issues - issues that should only require a few lines of code, and a maximum of an hour to test.
* `help-wanted` issues - issues that are a bit more involved than `beginner` issues.

When changing documentation, include `[ci skip]` or `[skip ci]` in your commit message so that you don't trigger a build.

#### Pull Requests
* Fill in the required template.
* Do not include issue numbers in the PR title.
* Include screenshots and animated GIFs in your pull request whenever possible.
* Avoid platform-dependent code to maintain cross-compatibility between different operating systems.


This concludes the contribution guidelines!

*These contribution guidelines are based off of the [Atom contribution guidelines](https://github.com/atom/atom/blob/master/CONTRIBUTING.md).*
