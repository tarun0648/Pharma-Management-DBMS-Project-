import React from 'react'
import { FooterContainer, FooterWrap, FooterLinkWrapper, FooterLinkItems, FooterLinkContainer, FooterLinkTitle, FooterLink, SocialMediaWrap, WebsiteRights } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Creators</FooterLinkTitle>
                <FooterLink to= {{ pathname:'https://www.linkedin.com'}} target="_blank">Tarun S</FooterLink>
                <FooterLink to= {{ pathname:'https://www.linkedin.com'}} target="_blank">Adithya Kumar H</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to= {{ pathname:'https://discord.com'}} target="_blank">Contact</FooterLink>
                <FooterLink to= {{ pathname:'https://discord.com'}} target="_blank">Support</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>

          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Covid-19 data</FooterLinkTitle>
                <FooterLink to= {{ pathname:''}} target="_blank">In India</FooterLink>
                <FooterLink to= {{ pathname:''}} target="_blank">In world</FooterLink>
                <FooterLink to= {{ pathname:''}} target="_blank">Vaccination drive</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>
          <SocialMediaWrap>
            <WebsiteRights> </WebsiteRights>
          </SocialMediaWrap>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
