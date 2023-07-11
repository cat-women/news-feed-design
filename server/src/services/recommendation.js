const natural = require('natural')
const Vector = require('vector-object')
const TfIdf = natural.TfIdf

const createVectorsFromDocs = posts => {
  const tfidf = new TfIdf()

  // tokenization
  posts.forEach(post => {
    tfidf.addDocument(post.postText.toLowerCase())
  })

  const documentVectors = []

  for (let i = 0; i < posts.length; i += 1) {
    const processedDocument = posts[i]
    const obj = {}

    const items = tfidf.listTerms(i)
    for (let j = 0; j < items.length; j += 1) {
      const item = items[j]
      obj[item.term] = item.tfidf
    }

    const documentVector = {
      id: processedDocument._id,
      vector: new Vector(obj)
    }

    documentVectors.push(documentVector)
  }
  return documentVectors
}

const calcSimilarities = (userPosts, posts) => {
  const userVectors = createVectorsFromDocs(userPosts)
  const docVectors = createVectorsFromDocs(posts)
  const data = []
  const calculated = []

  for (let i = 0; i < userVectors.length; i++) {
    const idi = userVectors[i].id
    const vi = userVectors[i].vector

    for (let j = 0; j < docVectors.length; j++) {
      const idj = docVectors[j].id
      const vj = docVectors[j].vector

      // if user has liked post dont calculate similarity
      if (userPosts.some(post => post._id.equals(idj))) continue

      const similarity = vi.getCosineSimilarity(vj)

      if (similarity == 1) console.log(vi, vj, idj)

      data.push({ id: idj, score: similarity })
    }
  }

  data.sort((a, b) => b.score - a.score)

  return removeDuplicates(data)
}


const getRecommendedPost = (trainData, posts) => {
  const recommendedPosts = []
  trainData.forEach(trainData => {
    let trainId = trainData.id

    posts.forEach(post => {
      let postId = post._id
      if (trainId.equals(postId)) recommendedPosts.push(post)
    })
  })
  return recommendedPosts
}

const removeDuplicates = trainData => {
  const uniqueData = trainData.reduce((accumulator, current) => {
    const existingIndex = accumulator.findIndex(item =>
      item.id.equals(current.id)
    )

    if (existingIndex === -1) {
      // If the item does not exist in accumulator, add it directly
      accumulator.push(current)
    } else {
      // If the item already exists in accumulator, compare scores and update if higher
      if (current.score > accumulator[existingIndex].score) {
        accumulator[existingIndex] = current
      }
    }

    return accumulator
  }, [])

  return uniqueData
}

module.exports = { calcSimilarities, getRecommendedPost }
