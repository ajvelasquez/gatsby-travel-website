import * as React from "react"
import { Button } from "../ButtonElements"
import * as styles from "./HeroSection.module.css"

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <h1>Travel more</h1>
      <p>Plan Your next trip today</p>
      <div className={styles.heroBtns}>
        <Button fontBig big primary>Get Started</Button>
      </div>
    </div>
  )
}

export default HeroSection
