import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import {
  Container,
  Paper,
  Typography,
  Grid,
  Input,
  Button,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio
} from '@material-ui/core'

import makeStyles from './styles.js'
import { addPost } from '../../actions/post'

const PostForm = () => {
  const classes = makeStyles()
  const [selectedFiles, setSelectedFiles] = useState(undefined)
  const [imagePreviews, setImagePreviews] = useState([])

  const [postText, setPostText] = useState('')
  const [image, setImage] = useState({ preview: '', data: '' })

  const selectFiles = event => {
    let images = []

    for (let i = 0; i < event.target.files.length; i++) {
      images.push(URL.createObjectURL(event.target.files[i]))
    }

    setSelectedFiles(event.target.files)
    setImagePreviews(images)
  }
  const [error, setError] = useState(false)
  const dispatch = useDispatch()

  const handleSubmit = async e => {
    e.preventDefault()
    let formData = new FormData()

    formData.append('postText', postText)
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('images', selectedFiles[i])
    }

    try {
      const result = await dispatch(addPost(formData))
      alert('New post added ')
    } catch (error) {
      console.log('Add post error', error)
      setError(true)
    }
  }

  return (
    <Container className={classes.postFormContainer}>
      <Paper>
        <Typography className={classes.heading} variant="h4">
          Add Post
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid className={classes.input}>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={selectFiles}
            />
            {imagePreviews &&
              <img src={imagePreviews[0]} width="100" height="100" />}

            <Input
              type="textarea"
              name="postText"
              placeholder="Text here"
              autoFocus
              className={classes.input}
              onChange={e => setPostText(e.target.value)}
            />
          </Grid>
          <Grid className={classes.footer1}>
            <Button className={classes.btnSubmit} type="submit">
              Upload
            </Button>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default PostForm
