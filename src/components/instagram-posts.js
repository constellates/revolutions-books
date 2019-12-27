import React from "react"
import Img from "gatsby-image"

function chunk(array, size = 1) {
  const length = array == null ? 0 : array.length
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size))

  while (index < length) {
    result[resIndex++] = array.slice(index, (index += size))
  }
  return result
}

const InstagramPosts = ({ nodes }) => {
  let edges = nodes.edges.filter(node => node && node.node && node.node.localFile);
  edges = edges.slice(0, 9);
  const groups = chunk(edges, 3);
  return groups.map((group, index) => (
    <div className="tile is-ancestor" key={index}>
      {group.map((node, subIndex) => (
        <div className="tile is-parent" key={`${index}-${subIndex}`}>
          <div className="tile is-child">
            <a href={`https://www.instagram.com/p/${node.node.id}/`}>
              <Img fluid={node.node.localFile.childImageSharp.fluid} />
            </a>
          </div>
        </div>
      ))}
    </div>
    )
  )
}

export default InstagramPosts