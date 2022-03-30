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
  FooterMenuLink,
  BigBox,
  SmallBox,
  FooterButton
} from './FooterStyles'
import { dataMedia, dataNavbar, dataSchedule } from '../../data'

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
            {dataNavbar.map((item, index) => (
              <FooterItemLi key={index}>
                <FooterMenuLink to={item.to}>{item.text}</FooterMenuLink>
              </FooterItemLi>
            ))}
          </BigBox>
          <SmallBox>
            {dataSchedule.map((item, index) => (
              <FooterItem block key={index}>
                {item.text}
              </FooterItem>
            ))}
          </SmallBox>

          <SmallBox flex>
            {dataMedia.map((item, index) => {
              return (
                <FooterItem key={index}>
                  <FooterLink icon href={item.link} target={'_blank'}>
                    {item.icon}
                  </FooterLink>
                </FooterItem>
              )
            })}
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
