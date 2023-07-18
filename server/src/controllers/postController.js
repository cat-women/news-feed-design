const Post = require('../models/post.js')
const User = require('../models/user.js')

const { deleteImage } = require('../middleware/imageHandler')
const {
  calcSimilarities,
  getRecommendedPost
} = require('../services/recommendation')
const { ObjectId } = require('mongodb')

class PostController {
  createPost = async (req, res, next) => {
    const { userId, postText } = req.body

    try {
      await Post.create({
        userId,
        postText,
        postImage: req.images
      })

      res.status(200).json({ msg: 'new post created' })
    } catch (error) {
      console.log(error)
      next()
    }
  }
  getPostById = async (req, res, next) => {
    try {
      const post = await Post.findById(req.params.id)
      if (!post) res.status(404).json({ msg: 'Post not found' })

      res.status(200).json(post)
    } catch (error) {}
  }

  getAllPost = async (req, res, next) => {
    let userId = new ObjectId('64afd500fcb014b79efd3751')

    /**
     * 1. get all post 
     * 2. get all post that user has liked 
     * 3. calculate similarity between like post and remaining post 
     * 4. recommend movies 
     */
    const userPosts = [
      {
        _id: new ObjectId('64ac27854c16f5f3c626a310'),
        postText:
          'the mardi himal trek is one of the hidden gems when it comes to trekking in the annapurna region. where most people would do the trek to annapurna base camp, you have the opportunity to go around the corner of the map and get off the beaten track. the mardi himal trekking adventure takes you to the base camp of mardi himal, right in the laps of mardi himal and machhapuchhre, dubbed fish tail mountain'
      },
      {
        _id: new ObjectId('64ac2aba4c16f5f3c626a324'),
        postText:
          'Police arrest five individuals involved in illegal online gambling and cryptocurrency trading'
      }
    ]
    const posts = await Post.aggregate([
      {
        $lookup: {
          from: 'comments',
          let: { postId: '$_id' },
          pipeline: [
            {
              $match: {
                $expr: { $eq: ['$postId', '$$postId'] }
              }
            },
            {
              $lookup: {
                from: 'users',
                localField: 'userId',
                foreignField: '_id',
                as: 'commenter'
              }
            },
            {
              $unwind: '$commenter'
            },
            {
              $project: {
                commentText: 1,
                commenter: '$commenter.username',
                commenterId: '$commenter._id'
              }
            }
          ],
          as: 'comments'
        }
      },
      {
        $lookup: {
          from: 'upvotes',
          localField: '_id',
          foreignField: 'postId',
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ['$userId', userId]
                }
              }
            }
          ],
          as: 'upvotes'
        }
      },
      {
        $lookup: {
          from: 'users',
          localField: 'userId',
          foreignField: '_id',
          as: 'author'
        }
      },
      {
        $unwind: {
          path: '$author'
        }
      },
      {
        $addFields: {
          likedByUser: {
            $cond: {
              if: { $gt: [{ $size: '$upvotes' }, 0] },
              then: true,
              else: false
            }
          },
          author: `$author.username`
        }
      },
      {
        $project: {
          upvotes: 0
        }
      }
    ]).exec()

    const formatedData = posts.map(({ _id, postText }) => ({ _id, postText }))

    const trainData = calcSimilarities(userPosts, formatedData)

    const results = getRecommendedPost(trainData, posts)
    res.status(200).json(results)
  }

  deletePost = async (req, res, next) => {
    try {
      const post = await Post.findById(req.params.id)
      if (!post) res.status(404).json({ msg: 'Post not found' })

      deleteImage(post.postImage)

      await post.remove()

      res.status(200).json({ msg: 'Post deleted' })
    } catch (error) {
      console.log(error)
      next()
    }
  }
}

module.exports = PostController
