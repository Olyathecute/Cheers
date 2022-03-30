import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Button from '../Button/Button'
import {
  FooterWrapper,
  FooterSection,
  FooterBlock,
  FooterLink,
  FooterItem,
  FooterItemLi,
  FooterLinks,
  BigBox,
  SmallBox,
  FooterButton
} from './FooterStyles'
import { FaInstagramSquare, FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa'
import { data, schedule } from '../../data/NavbarData'

export default function Footer() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <FooterWrapper>
      <FooterSection>
        <FooterBlock>
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

          <SmallBox flex>
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
        </FooterBlock>
      </FooterSection>

      <FooterButton>
        <Button footer={true} />
      </FooterButton>

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
