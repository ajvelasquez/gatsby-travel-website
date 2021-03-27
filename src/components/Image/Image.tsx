import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import * as styles from "./Image.module.css"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: {
            nin: [
              "background"
              "background2"
              "gatsby-icon"
              "gatsby-astronaut"
            ]
          }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              gatsbyImageData(
                width: 600
                height: 600
              )
            }
          }
        }
      }
    }
  `)

  return (
    <div className={styles.imgContainer}>
      <h1>View our Destinations</h1>
      <div className={styles.imgGrid}>
        {data.allFile.edges.map((image: any, key: any) => (
          <GatsbyImage
            key={key}
            className={styles.imgItem}
            alt={image.node.base.split(".")[0]}
            image={image.node.childImageSharp.gatsbyImageData}
          />
        ))}
      </div>
    </div>
  )
}

export default Image
