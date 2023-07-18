import { makeStyles } from '@material-ui/core/styles'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: 'red'
        }
      }
    },
    MuiButton: {
      color: 'green'
    }
  }
})

const useStyles = makeStyles(() => ({
  container: {
    margin: '20px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column'
  },
  userName: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginLeft: '30px',
    alignText: 'start'
  },
  userImage: {
    width: '40%',
    margin: '30px',
    alignItem: 'center'
  },
  content: {
    marginLeft: '30px',
    marginRight: '30px',
    paddingTop: '100px '
  },
  iconsContainer: {
    display: 'flex',
    marginTop: '51px',
    justifyContent: 'center'
  },

  poster: {
    display: 'flex',
    marginTop: '10px',
    marginLeft: '30px',
    justifyContent: 'start'
  },
  likeIcon: {
    fontSize: '1.5rem',
    marginRight: '30px'
  },
  dislikeIcon: {
    fontSize: '1.5rem',
    marginRight: '30px'
  },
  chatIcon: {
    marginLeft: '30px'
  },
  commentField: {
    margin: '30px',
    display: 'flex',
    width: '70%',
    alignText: 'center'
  },
  viewMoreBtn: {
    marginLeft: '30px'
  },
  comment: {
    margin: '15px'
  },
  commenter: {
    display: 'flex',
    margin: '3px'
  },
  commentIconsContainer: {
    display: 'flex'
  },
  postFormContainer:{
    width : '600px',
    marginTop :'100px'
  }
}))

export default useStyles
