import * as React from "react"
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"
import {
  FooterContainer,
  SocialIcon,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements"

const Footer = () => (
  <FooterContainer>
    <SocialMedia>
      <SocialMediaWrap>
        <SocialLogo to="/">
          <SocialIcon />
          EXPLOR &copy;
        </SocialLogo>
        <WebsiteRights>EXPLOR {new Date().getFullYear()}</WebsiteRights>
        <SocialIcons>
          <SocialIconLink href="/" target="_blank" aria-label="Facebook">
            <FaFacebook />
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="Instagram">
            <FaInstagram />
          </SocialIconLink>
          <SocialIconLink
            href="//youtube.com"
            target="_blank"
            aria-label="YouTube"
            rel="noopener noreferer"
          >
            <FaYoutube />
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="Twitter">
            <FaTwitter />
          </SocialIconLink>
          <SocialIconLink href="/" target="_blank" aria-label="LinkdIn">
            <FaLinkedin />
          </SocialIconLink>
        </SocialIcons>
      </SocialMediaWrap>
    </SocialMedia>
  </FooterContainer>
)

export default Footer
