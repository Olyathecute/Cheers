import React from 'react'
import {
  FooterWrapper,
  FooterSection,
  FooterBlock,
  FooterLink,
  FooterItem,
  FooterItemLi,
  FooterLinks,
  FooterGrid,
  // GridBigBox,
  // GridSmallBox,
  BigBox,
  SmallBox
} from './FooterStyles'
import { FaInstagramSquare, FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa'
import { data, schedule } from '../../data/NavbarData'

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterSection>
        <FooterBlock>
          {/* <FooterGrid> */}
          <BigBox>
            {data.map((item, index) => (
              <FooterItemLi key={index}>
                <FooterLinks to={item.to}>{item.text}</FooterLinks>
              </FooterItemLi>
            ))}
          </BigBox>
          <SmallBox>
            {schedule.map((item, index) => (
              <FooterItem block key={index}>
                {item.text}
              </FooterItem>
            ))}
          </SmallBox>

          <SmallBox display>
            <FooterItem>
              <FooterLink icon href="https://instagram.com" target={'_blank'}>
                <FaInstagramSquare size={45} />
              </FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink icon href="https://facebook.com" target={'_blank'}>
                <FaFacebookSquare size={45} />
              </FooterLink>
            </FooterItem>
            <FooterItem>
              <FooterLink icon href="https://twitter.com" target={'_blank'}>
                <FaTwitterSquare size={45} />
              </FooterLink>
            </FooterItem>
          </SmallBox>
          {/* </FooterGrid> */}
        </FooterBlock>
      </FooterSection>

      <FooterSection>
        Made by&nbsp;
        <FooterLink href="https://github.com/Olyathecute" target={'_blank'}>
          Olyathecute
        </FooterLink>
        &nbsp;2022
      </FooterSection>
    </FooterWrapper>
  )
}
