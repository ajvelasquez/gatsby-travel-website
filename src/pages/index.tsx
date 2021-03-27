import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import HeroSection from "../components/HeroSection"
import Image from "../components/Image/Image"
import SEO from "../components/SEO"
import Layout from "./../components/Layout"

const IndexPage = () => (
  <Layout>
    <SEO />
    <HeroSection />
    <Image />
  </Layout>
)

export default IndexPage
