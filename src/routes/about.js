import React, {Component} from 'react'
import styled from 'react-emotion'
import {injectGlobal} from 'emotion'
import App from '../components/App'
import PageNavigator from '../components/PageNavigator'
import {Padding} from '../core/helper'

injectGlobal`
  b {
    font-weight: bold;
    color: black;
  }
`

const DescriptionLabel = styled('div')`
  font-family: sans-serif;
  font-size: 18px;
  color: #777;
  margin-bottom: 20px;
  line-height: 27px;
`

const ExternalLinkContainer = styled('div')`
  display: flex;
  margin-top: 20px;

  ${this} > ${ExternalLink}:nth-child(1) {
    margin-right: 10px;
  }

  ${this} > ${ExternalLink}:nth-child(2) {
    margin-left: 10px;
  }
`

const ExternalLink = styled('a')`
  display: block;
  flex: 1;
  background: #eee;
  border-radius: 7px;
  text-align: center;
  font-size: 18px;
  padding: 20px 0;
  cursor: pointer;
  font-family: sans-serif;
  transition: 0.2s;
  text-decoration: none;
  color: black;

  &:hover {
    background: #ddd;
  }
`

class About extends Component {

  render() {
    return (
      <div>
        <PageNavigator
          heading="About"
          description="About this application and developer" />
        <Padding>
          <DescriptionLabel>
            <b>What is sixjar (this app)?</b> Sixjar is the personal budget management software that use sixjars system. I create this application because I spend out money so waste and I want to get my money back.
          </DescriptionLabel>
          <DescriptionLabel>
            <b>What is sixjars system?</b> Sixjars is money management system that share your income into six jars or in other word six accounts which is Financial Freedom Jar, Long Term Savings for Spending Jar, Education Jar, Necessities Jar and Play Jar.
          </DescriptionLabel>
          <DescriptionLabel>
            <b>What about me?</b> {`Hi! My name is Chun Rapeepat full-stack web developer from Thailand, Nice to meet you here. I'm interested in all kind of Web Technology and also in Startup, Machine Learning and Mathematics too. I started programming experience when I was 14 years old and I loved it since then. Finally, I hope you like it! thx :)`}
          </DescriptionLabel>
          <br/>
          <ExternalLinkContainer>
            <ExternalLink target="_blank" href="https://github.com/chunza2542/sixjar/issues/new">Report Bugs</ExternalLink>
            <ExternalLink target="_blank" href="https://thechun.xyz/">Personal Website</ExternalLink>
          </ExternalLinkContainer>
          <ExternalLinkContainer>
            <ExternalLink target="_blank" href="https://github.com/chunza2542">Github</ExternalLink>
            <ExternalLink target="_blank" href="https://www.facebook.com/chun42">Facebook</ExternalLink>
          </ExternalLinkContainer>
        </Padding>
      </div>
    )
  }
}

export default App(About)
