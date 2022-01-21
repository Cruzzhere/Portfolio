import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+918660145885'>+91-8660145885</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:stopmenot.2126@gmail.com'>stopmenot.2126@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Never stop Learning</Slogan>
        </CompanyContainer>
        <SocialIcons href='https://github.com/Cruzzhere' target="_blank">
        <AiFillGithub size= "4rem"/>
      </SocialIcons>
      <SocialIcons href='https://linkedin.com' target="_blank">
        <AiFillLinkedin size= "4rem"/>
      </SocialIcons>
      <SocialIcons href='https://instagram.com' target="_blank">
        <AiFillInstagram size= "4rem"/>
      </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
